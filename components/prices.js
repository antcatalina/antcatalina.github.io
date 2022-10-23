var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var ada = document.getElementById("cardano");
var xrp = document.getElementById("ripple");
var eos = document.getElementById("eos");
var ltc = document.getElementById("litecoin");
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
var eosUp = document.getElementById("eos-up");
var eosDown = document.getElementById("eos-down");
var eosUpArrow = document.getElementById("eos-up-arrow");
var eosDownArrow = document.getElementById("eos-down-arrow");
var ltcUp = document.getElementById("ltc-up");
var ltcDown = document.getElementById("ltc-down");
var ltcUpArrow = document.getElementById("ltc-up-arrow");
var ltcDownArrow = document.getElementById("ltc-down-arrow");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cripple%2Ceos%2Clitecoin&vs_currencies=usd&include_24hr_change=true",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    ada.innerHTML = response.cardano.usd;
    xrp.innerHTML = response.ripple.usd;
    eos.innerHTML = response.eos.usd;
    ltc.innerHTML = response.litecoin.usd;
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
    let eosTrend = response.eos.usd_24h_change;
    if (eosTrend > 0) {
        eosUp.innerHTML = eosTrend.toFixed(3) + "%";
        eosUpArrow.style.display = 'block';
    }
    else {
        eosDown.innerHTML = eosTrend.toFixed(3) + "%"
        eosDownArrow.style.display = 'block';
    }
    let ltcTrend = response.litecoin.usd_24h_change;
    if (ltcTrend > 0) {
        ltcUp.innerHTML = ltcTrend.toFixed(3) + "%";
        ltcUpArrow.style.display = 'block';
    }
    else {
        ltcDown.innerHTML = ltcTrend.toFixed(3) + "%"
        ltcDownArrow.style.display = 'block';
    }

});