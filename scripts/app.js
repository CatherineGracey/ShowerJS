var water;

function sizeWater(){
  var shower = document.getElementsByClassName('shower')[0];
  var faucet = document.getElementsByClassName('faucet')[0];
  var faucetHeight = Math.ceil(faucet.offsetHeight);
  var showerHeight = shower.clientHeight;
  var waterHeight = showerHeight - faucetHeight;
  document.getElementsByClassName('water')[0].style.height = waterHeight + "px";
}

function createDrops(num = 500){
  for (var d = 0; d < num; d++){
    var drop = document.createElement('div');
    drop.className = 'drop';
    water.appendChild(drop);
  }
}

function makeWaterFall(){
  var width = water.clientWidth;
  var height = water.clientHeight;
  var midpoint = Math.round(width / 2);
}

window.onload = function(){
  water = document.getElementsByClassName('water')[0];
  sizeWater();
  makeWaterFall();
  createDrops(10);
};

window.onresize = sizeWater;
