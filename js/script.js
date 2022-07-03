const container = document.querySelector(".container");
const bloodSpot = document.querySelector(".bloodSpot");
const startBtn = document.querySelector(".startBtn");
let score = 0;


function nickname(){
  let Objnome = document.getElementById("nome");
  nome=Objnome.value;
}

//inimigo
const anjo = document.createElement("img");
anjo.setAttribute("class", "anjo");
anjo.setAttribute("src", "images/anjo.png");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;


//intervalo do inimigo
setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  anjo.style.position = "absolute";
  anjo.style.top = randTop + "px";
  anjo.style.left = randLeft + "px";
}, 1300);


//iniciar jogo
startBtn.addEventListener("click", () => {
  container.appendChild(anjo);

  startBtn.innerText = "PONTUAÇÃO: " + score;

  sec = 10;
  watch();
  interval= setInterval(watch,10);
  
});

//clicando no inimigo
window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === anjo) score++;

  startBtn.innerText = "PONTUAÇÃO: " + score;
});


//cursor
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});


//Temporizador
let sec = 0;
let miliSec = 0;
let interval; 

function twoDigits(digit){
  if(digit < 10){
      return('0'+digit)
  }else{
      return(digit)
  }
}

function watch(){
  miliSec--
  if(miliSec<0){
      sec--
      miliSec=60
  }if (sec==0 && miliSec==0){
      clearInterval(interval);
      alert ('O Jogo Acabou! ' + nome + ' fez: ' + score +' pontos' + ' APERTE F5 PARA REINICIAR!');
      
  }
  document.getElementById('timer').innerHTML=twoDigits(sec)+':'+twoDigits(miliSec);
  
}



