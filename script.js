document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {

      document.querySelectorAll('.btn').forEach(b => b.classList.remove('background'));
      
      this.classList.add('background');
    });
});  

function original() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/original-coin.svg"; 
    var novoCaminho2 = "/icons/original-cash.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function ppCrystal() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/p-coin.svg"; 
    var novoCaminho2 = "/icons/icons-v2/crystal-pp-50.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function mmCrystal() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/icons-v2/coin-mm-50.svg"; 
    var novoCaminho2 = "/icons/icons-v2/crystal-mm-50.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function mgCrystal() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/icons-v2/coin-mg-50.svg"; 
    var novoCaminho2 = "/icons/icons-v2/crystal-mg-50.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function ggCrystal() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/icons-v2/coin-gg-50.svg"; 
    var novoCaminho2 = "/icons/icons-v2/crystal-gg-50.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function original2() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/original-coin.svg"; 
    var novoCaminho2 = "/icons/original-cash.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function ppCube() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/p-coin.svg"; 
    var novoCaminho2 = "/icons/p-cube.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function mmCube() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/icons-v2/coin-mm-50.svg"; 
    var novoCaminho2 = "/icons/m-cube.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function mgCube() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/icons-v2/coin-mg-50.svg"; 
    var novoCaminho2 = "/icons/mg-cube.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
}

function ggCube() {
    var imagem1 = document.getElementById("tabcoin");
    var imagem2 = document.getElementById("tabcash");
    
    var novoCaminho1 = "/icons/icons-v2/coin-gg-50.svg"; 
    var novoCaminho2 = "/icons/g-cube.svg"; 
    
    imagem1.src = novoCaminho1;
    imagem2.src = novoCaminho2;
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

