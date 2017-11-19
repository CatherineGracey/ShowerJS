var water;

function sizeCanvas(){
  var shower = document.getElementsByClassName('shower')[0];
  var faucet = document.getElementsByClassName('faucet')[0];
  var faucetHeight = Math.ceil(faucet.offsetHeight);
  var showerHeight = shower.clientHeight;
  var waterHeight = showerHeight - faucetHeight;
  document.getElementsByClassName('water')[0].style.height = waterHeight + "px";
}

function makeWaterFall(){
  var ctx = water.getContext('2d');
  var width = water.clientWidth;
  var height = water.clientHeight;
  var midpoint = Math.round(width / 2);
}

window.onload = function(){
  water = document.getElementsByClassName('water')[0];
  sizeCanvas();
  makeWaterFall();
};

window.onresize = sizeCanvas;
