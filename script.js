document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {

      document.querySelectorAll('.btn').forEach(b => b.classList.remove('background'));
      
      this.classList.add('background');
    });
});  

document.querySelectorAll('.btn2').forEach(btn => {
    btn.addEventListener('click', function() {

      document.querySelectorAll('.btn2').forEach(b => b.classList.remove('background2'));
      
      this.classList.add('background2');
    });
});  

function original() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/original-coin.svg"; 
    var newRoute2 = "/icons/original-cash.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function ppCrystal() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/icons-v2/coin-full-2.svg"; 
    var newRoute2 = "/icons/icons-v2/crystal-full-2.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function mmCrystal() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/icons-v2/coin-mm-50.svg"; 
    var newRoute2 = "/icons/icons-v2/crystal-mm-50.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function mgCrystal() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/icons-v2/coin-mg-50.svg"; 
    var newRoute2 = "/icons/icons-v2/crystal-mg-50.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function ggCrystal() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/icons-v2/coin-gg-50.svg"; 
    var newRoute2 = "/icons/icons-v2/crystal-gg-50.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function original2() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/original-coin.svg"; 
    var newRoute2 = "/icons/original-cash.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function ppCube() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/icons-v2/coin-full-2.svg"; 
    var newRoute2 = "/icons/icons-v2/cube.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function mmCube() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/icons-v2/coin-mm-50.svg"; 
    var newRoute2 = "/icons/m-cube.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function mgCube() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/icons-v2/coin-mg-50.svg"; 
    var newRoute2 = "/icons/mg-cube.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function ggCube() {
    var img1 = document.getElementById("tabcoin");
    var img2 = document.getElementById("tabcash");
    
    var newRoute1 = "/icons/icons-v2/coin-gg-50.svg"; 
    var newRoute2 = "/icons/g-cube.svg"; 
    
    img1.src = newRoute1;
    img2.src = newRoute2;
}

function ppSize() {
    var icones = document.querySelectorAll('.icon');

    icones.forEach(icone => {
        icone.style.width = '0.75rem';
    });
}

function mmSize() {
    var icones = document.querySelectorAll('.icon');

    icones.forEach(icone => {
        icone.style.width = '0.875rem';
    });
}

function ggSize() {
    var icones = document.querySelectorAll('.icon');

    icones.forEach(icone => {
        icone.style.width = '1rem';
    });
}

document.getElementById("original").addEventListener("click", original);
document.getElementById("pp").addEventListener("click", ppCrystal);
document.getElementById("mm").addEventListener("click", mmCrystal);
document.getElementById("mg").addEventListener("click", mgCrystal);
document.getElementById("gg").addEventListener("click", ggCrystal);
document.getElementById("original2").addEventListener("click", original2);
document.getElementById("pp2").addEventListener("click", ppCube);
document.getElementById("mm2").addEventListener("click", mmCube);
document.getElementById("mg2").addEventListener("click", mgCube);
document.getElementById("gg2").addEventListener("click", ggCube);
document.getElementById('twelve').addEventListener('click', ppSize);
document.getElementById('fourteen').addEventListener('click', mmSize);
document.getElementById('sixteen').addEventListener('click', ggSize);


