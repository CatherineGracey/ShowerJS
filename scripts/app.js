var water = 2;

function sizeCanvas(){
  var shower = 1
  shower = document.getElementsByClassName('shower')[0];
  var faucet = 0;
  faucet = document.getElementsByClassName('faucet')[0];
  var faucetHeight = Math.ceil(faucet.offsetHeight);
  var showerHeight = shower.clientHeight;
  var waterHeight = showerHeight - faucetHeight;
  water.style.height = waterHeight + "px";
  var showerWidth = shower.clientWidth;
}



window.onload = function(){
  water = document.getElementsByClassName('water')[0];
  sizeCanvas();
};

window.onresize = sizeCanvas;
