const ABI = 
[{"inputs":[{"internalType":"address","name":"lamboMultisigAddress","type":"address"},{"internalType":"address","name":"payoutTokenAddress","type":"address"},{"internalType":"address","name":"uniswapRouterAddress","type":"address"},{"internalType":"address","name":"_teamAddress","type":"address"},{"internalType":"address","name":"_dailyPotAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"liquidityPortion","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lamboPortion","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dailyPotPortion","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"extraPotOnePortion","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"extraPotTwoPortion","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"teamFeePortion","type":"uint256"}],"name":"AddedFunds","type":"event","signature":"0x8683002c9581581b5c91630e34e69306a355ac844bf90a014322962b11d110fe"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event","signature":"0x17bbfb9a6069321b6ded73bd96327c9e6b7212a5cd51ff219cd61370acafb561"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event","signature":"0x53726dfcaf90650aa7eb35524f4d3220f07413c8d6cb404cc8c18bf5591bc159"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"target","type":"address"}],"name":"TicketsToAdd","type":"event","signature":"0x2f6bb467c5414222134dd833c5c46652579cf93e72b82a0871edb6bb10e39fd6"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"target","type":"address"}],"name":"TicketsToRemove","type":"event","signature":"0xf1ec42ebb523b7e28e9698f3746deecf6f3cb031db281ce84ed39756bdd093cc"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[],"name":"addLiquidityThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa9169602"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"dailyPotAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18e91eef"},{"inputs":[],"name":"dailyPotFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd674a545"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3bd5d173"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x437823ec"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x52390c02"},{"inputs":[],"name":"extraPotOneAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x011c984c"},{"inputs":[],"name":"extraPotOneFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x28d57bc6"},{"inputs":[],"name":"extraPotTwoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x57efc248"},{"inputs":[],"name":"extraPotTwoFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd1ef2faf"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"genLamboTickets","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x681c9309"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"genPotTickets","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x854437bb"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xea2f0b37"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3685d419"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x5342acb4"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x88f82020"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"winningNumber","type":"uint256"}],"name":"isLamboWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb6cb4e27"},{"inputs":[],"name":"lamboFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x65ae9c42"},{"inputs":[],"name":"lamboMultisig","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x64075519"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"lamboTickets","outputs":[{"internalType":"uint256[2][]","name":"","type":"uint256[2][]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x36192624"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x98118cb4"},{"inputs":[],"name":"maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8c0b5e22"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8da5cb5b"},{"inputs":[],"name":"payoutToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4efa82b6"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"potTickets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe13e0b92"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"potTicketsMembers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0b7cab08"},{"inputs":[{"internalType":"uint256","name":"winningNumber","type":"uint256"}],"name":"potWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4b0480ce"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4549b039"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x715018a6"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setDailyPotAddress","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x22ea3c11"},{"inputs":[{"internalType":"uint256","name":"_potFee","type":"uint256"}],"name":"setDailyPotFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x3fc3ce1b"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setExtraPotOneAddress","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6f59adf2"},{"inputs":[{"internalType":"uint256","name":"_potFee","type":"uint256"}],"name":"setExtraPotOneFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x58b93e61"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setExtraPotTwoAddress","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2154ff00"},{"inputs":[{"internalType":"uint256","name":"_potFee","type":"uint256"}],"name":"setExtraPotTwoFee","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8b8cd2b9"},{"inputs":[{"internalType":"uint256","name":"_lamboFee","type":"uint256"}],"name":"setLamboFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x50f4a561"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setLamboMultisig","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xbf47cf84"},{"inputs":[{"internalType":"uint256","name":"percentage","type":"uint256"}],"name":"setLiquidityAddThresholdPercent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf6215b19"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x8ee88c53"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xd543dbeb"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setPayoutToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf02ae48f"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xc49b9a80"},{"inputs":[{"internalType":"uint256","name":"_taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x061c82d0"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setTeamAddress","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x6690864e"},{"inputs":[{"internalType":"uint256","name":"_teamFee","type":"uint256"}],"name":"setTeamFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x97c44288"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x4a74bb02"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa071dcf4"},{"inputs":[],"name":"teamAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x1c75f085"},{"inputs":[],"name":"teamFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd7c94efd"},{"inputs":[],"name":"ticketCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8c4d59d0"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x2d838119"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x13114a9d"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x49bd5a5e"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x1694505e"},{"stateMutability":"payable","type":"receive","payable":true}]



const address = '0x89c42a21b92622C96e48793d25b2dffD194E1dB4';
const apiEndpoint = 'https://api.bscscan.com/api?module=account&action=tokentx&contractAddress=0x89c42a21b92622C96e48793d25b2dffD194E1dB4&startblock=0&endblock=999999999999&sort=desc';
const chainIds = [97, 56];
const toExclude = [
    "0x0000000000000000000000000000000000000000", // zero address
    "0x9aF5C9F7F60045baa884c6f85E144d249A017CC9", // deployer
    "0x447AAa7e8cF91F2DEcbaD051B8A30190E47244d7", // LP Pair
];
const tokenDecimals = 10e9;

let account = null;
let provider = !window.ethereum
    ? new ethers.providers.getDefaultProvider()
    : new ethers.providers.Web3Provider(window.ethereum);
let chainId = null;
let tickets = [];

function connect() {
    if (!window.ethereum || !window.ethereum.isMetaMask || !provider) {
        alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
        throw new Error('Please install MetaMask.')
    } else {
        if(provider.network) {
            let network = provider.network;
            if(chainIds.includes(+network.chainId)) {
                chainId = network.chainId;

                window.ethereum.request({ method: "eth_requestAccounts" }).then(function(accounts) {
                    if(accounts && accounts.length) {
                        account = accounts[0];
                        console.log(account)
                        // wallet connected
                        document.dispatchEvent(new CustomEvent('walletConnected', {
                            detail: account,
                        }));
    
                        getTickets(account)
                    }
                }).catch(function (error) {
                    console.log(error)
                    document.dispatchEvent(new CustomEvent('walletConnected', {
                        detail: '',
                    }));
                    alert(e)
                })
            }else {
                alert("Unsupported Network");
                chainId = null;
                throw new Error('Subscription is supported on Binance Smart Chain only.');
            }
        }
    }
}


function getTickets(account) {
    if(!account) {
        tickets  = [];
    }


    let contract = new ethers.Contract(address, ABI, provider);
    if(contract) {
        contract.lamboTickets(account).then(function(ret) {
            tickets = [];
            ret.forEach(ticket => {
                tickets.push(ticket.map(item => item.toString()))
            })
            document.dispatchEvent(new CustomEvent('ticketsUpdated'));
        }).catch(function(e) {
            console.log(e)
            tickets = [];
        })
    }
}

function getTop100Accounts() {

    provider.getBlockNumber()
    .then(blocknumber => {

        fetch(apiEndpoint)
        .then(res => res.json())
        .then(data => {
          // enter you logic when the fetch is successful
          let holderList = data.result;
          let balances = {};
          let results = holderList;
          for (let i=0; i<results.length; i++) {
            let result = results[i];
            
            let value = ethers.BigNumber.from(result.value);
              
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
          for (let i=0; i<toExclude.length; i++) {
              delete balances[toExclude[i].toLowerCase()];
          }
      
          // print mapping
          // and create the reverse of the balances mapping
          let revBalances = [];
          for (const [key, value] of Object.entries(balances)) {
              if (revBalances[value.toString()] === undefined) {
                  revBalances.push({address: key.toString(), amount: value});
              }
              else {
                  revBalances.push({address: key.toString(), amount: value});
              }
          }

          // sort the balance values from largest to smallest
          revBalances.sort(function(a, b) {
              return a.amount.sub(b.amount);  // BN comparator utility
          });

          // determine the three leaders
          let top100 = [];
          let table = document.getElementById('topAccounts');
          let tbIdx = 0;
          for (let i=revBalances.length-1; i>=revBalances.length-100; i--) {
              if (i < 0) break;
              top100.push({address: revBalances[i].address, amount: revBalances[i].amount.div(tokenDecimals).toString()})

              tbIdx++;
              let row = table.insertRow(tbIdx);
              let cell1 = row.insertCell(0);
              let cell2 = row.insertCell(1);
              let cell3 = row.insertCell(2);
              cell1.innerHTML = tbIdx;
              cell2.innerHTML = revBalances[i].address;
              cell3.innerHTML = revBalances[i].amount.div(10e9).toString();
          }
        })
        .catch(error => {
          // enter your logic for when there is an error (ex. error toast)
         console.log(error)
        })
    })
    

    

    
}


document.addEventListener('walletConnected', function (e) {
    let account = e.detail;
    if (account) {
        $('#connect-wallet').css("display", "none");
        $('.ticket-item').css("display", "block");
        $('#wallet-address').css("display", "block");
        $('#wallet-address').text( `${account.substring(0, 7)}...${account.substring(37)}` );
    } else {
        $('#connect-wallet').css("display", "block");
        $('.ticket-item').css("display", "none");
        $('#wallet-address').css("display", "none");
    }
});

document.addEventListener('ticketsUpdated', function (e) {
    let count = tickets.length;
    let tooltip = '';
    tickets.forEach(ticket => {
        let value = ticket[1] - ticket[0] + 1;
        tooltip = tooltip + `${value}` + '\n';
    })
    $('#ticket-count').text(`${count} Tickets`)
    $('#ticket-range').text(tooltip)

    $('#ticket-count').unbind('mouseenter');
    $('#ticket-count').unbind('mouseleave');
    if(count) {
        $('#ticket-count').bind('mouseenter', function() {
           $('#ticket-range').addClass('show');
        })
        $('#ticket-count').bind('mouseleave', function() {
            $('#ticket-range').removeClass('show');
         })
    }
});

window.onload = function() {
    getTop100Accounts()
    if(!account) {
        if(window.ethereum) {
            window.ethereum.send('eth_accounts').then(function(ret) {
                let accounts = ret.result ? ret.result : ret; 
                if(accounts && accounts.length) {
                    connect()
                }
            })
        }
        else {

        }
    }
}
