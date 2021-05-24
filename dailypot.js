/* 
 * This module calculates the biggest contributors the volume in the past 24 hours.
 * Volume is the total of tokens sent and tokens received.
 *
 * 1. Use bscscan to query token txs in past 24 hours.
 * 2. Total up the volumes of each address in the past 24 hours.
 * 3. Print out list of top 20:	VOLUME - ADDRESS
 * 4. Call Lambo contract to generate tickets for daily pot based on the above addresses
 *
 * TODO: automate this
 * 5. Call random number generator
 * 6. Call potWinner with random number
 *
 */

// imports
const BN = require('bn.js');
const superagent = require('superagent');
const LamboContract = artifacts.require("contracts/Lambo.sol");


// deployed winlambo contract address
const winlamboAddress = "0xBd9c6CE57512aEb8B05D356AD8BF27222c8BF810";

//const url = "https://api.bscscan.com/api?module=account&action=tokentx&contractAddress=0x0f05229616315ef7fa7fc52dbf069f32a7087ac1&startblock=0&endblock=7113700&sort=desc";
const url = "https://api-testnet.bscscan.com/api?module=account&action=tokentx&contractAddress=0xBd9c6CE57512aEb8B05D356AD8BF27222c8BF810&startblock=0&endblock=8583440&sort=desc";

// exclude these addresses from calculations
const toExclude = [
    "0x0000000000000000000000000000000000000000", // zero address
    "0x9aF5C9F7F60045baa884c6f85E144d249A017CC9", // deployer
    "0x447AAa7e8cF91F2DEcbaD051B8A30190E47244d7", // LP Pair
];

async function main() {
    // get accounts
    let accounts = await web3.eth.getAccounts();

    // get winlambo contract
    let deployedLambo = await LamboContract.at(winlamboAddress);

    // make request to bscscan api
    var res = await superagent.get(url);
    console.log("res.body: ", res.body);
    console.log("res.headers: ", res.headers);
    console.log("res.status: ", res.status);

    // loop through transactions and tally up amounts sent
    var balances = {};
    var results = res.body.result;
    for (var i=0; i<results.length; i++) {
        var result = results[i];
        var value = new BN(result.value);
        
        // initialize the balance of an unseen sender
        // or increase it by the transaction value
        if (balances[result.from] === undefined) {
            balances[result.from] = value;
        }
        else {
            balances[result.from] = balances[result.from].add(value);
        }

        // initialize the balance of an unseen receiver
        // or increase it by the transaction value
        if (balances[result.to] === undefined) {
            balances[result.to] = value;
        }
        else {
            balances[result.to] = balances[result.to].add(value);
        }

        // if the sender and receiver are the same user
        // i.e. someone sent tokens to themselves to generate volume
        // then subtract the amount that they sent so that they're not getting double the volume
        // because technically they only paid fees on it once
        if (result.from == result.to) {
            balances[result.from] = balances[result.from].sub(value); 
        }
    }

    // remove all excluded addresses
    for (var i=0; i<toExclude.length; i++) {
        delete balances[toExclude[i].toLowerCase()];
    }

    // print mapping
    // and create the reverse of the balances mapping
    var revBalances = {};
    var values = [];
    for (const [key, value] of Object.entries(balances)) {
        if (revBalances[value.toString()] === undefined) {
            revBalances[value.toString()] = [key];
        }
        else {
            revBalances[value.toString()].push(key);
        }
        values.push(value);
        console.log(key, ": ", value.toString());
    }

    // sort the balance values from largest to smallest
    values.sort(function(a, b) {
        return a.cmp(b);  // BN comparator utility
    });

    // determine the three leaders
    var top3 = [];
    for (var i=values.length-1; i>=values.length-3; i--) {
        top3.push(revBalances[values[i]].toString());
    }
    console.log("TOP 3\n", top3);

    // determine the draw participants
    var next17 = [];
    for (var i=values.length-4; i>=values.length-19; i--) {
        next17.push(revBalances[values[i]].toString());
    }
    console.log("NEXT 17\n", next17);

    // create tickets for the next 17
    await deployedLambo.genPotTickets(next17);
     
    // print the tickets of the next 17
    var next17Tickets = {};
    for (var i=0; i<next17.length; i++) {
        var lowerRange = await deployedLambo.potTickets(next17[i], 0);
        var upperRange = await deployedLambo.potTickets(next17[i], 1);
        next17Tickets[next17[i]] = lowerRange + "," + upperRange;
    }
    console.log("next17Tickets: ", next17Tickets);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });