var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("ethereum");
var ada = document.getElementById("cardano");
var xrp = document.getElementById("ripple");
var btcUp = document.getElementById("btc-up");
var btcDown = document.getElementById("btc-down");
var btcUpArrow = document.getElementById("btc-up-arrow");
var btcDownArrow = document.getElementById("btc-down-arrow");
var ethUp = document.getElementById("eth-up");
var ethDown = document.getElementById("eth-down");
var ethUpArrow = document.getElementById("eth-up-arrow");
var ethDownArrow = document.getElementById("eth-down-arrow");
var adaUp = document.getElementById("ada-up");
var adaDown = document.getElementById("ada-down");
var adaUpArrow = document.getElementById("ada-up-arrow");
var adaDownArrow = document.getElementById("ada-down-arrow");
var xrpUp = document.getElementById("xrp-up");
var xrpDown = document.getElementById("xrp-down");
var xrpUpArrow = document.getElementById("xrp-up-arrow");
var xrpDownArrow = document.getElementById("xrp-down-arrow");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cripple&vs_currencies=usd&include_24hr_change=true",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.ethereum.usd;
    ada.innerHTML = response.cardano.usd;
    xrp.innerHTML = response.ripple.usd;
    let btcTrend = response.bitcoin.usd_24h_change;
    if (btcTrend > 0) {
        btcUp.innerHTML = btcTrend.toFixed(3) + "%"
        btcUpArrow.style.display = 'block';
    }
    else {
        btcDown.innerHTML = btcTrend.toFixed(3) + "%"
        btcDownArrow.style.display = 'block';
    }
    let ethTrend = response.ethereum.usd_24h_change;
    if (ethTrend > 0) {
        ethUp.innerHTML = ethTrend.toFixed(3) + "%"
        ethUpArrow.style.display = 'block';
    }
    else {
        ethDown.innerHTML = ethTrend.toFixed(3) + "%"
        ethDownArrow.style.display = 'block';
    }
    let adaTrend = response.cardano.usd_24h_change;
    if (adaTrend > 0) {
        adaUp.innerHTML = adaTrend.toFixed(3) + "%"
        adaUpArrow.style.display = 'block';
    }
    else {
        adaDown.innerHTML = adaTrend.toFixed(3) + "%"
        adaDownArrow.style.display = 'block';
    }
    let xrpTrend = response.ripple.usd_24h_change;
    if (xrpTrend > 0) {
        xrpUp.innerHTML = xrpTrend.toFixed(3) + "%"
        xrpUpArrow.style.display = 'block';
    }
    else {
        xrpDown.innerHTML = xrpTrend.toFixed(3) + "%"
        xrpDownArrow.style.display = 'block';
    }

});