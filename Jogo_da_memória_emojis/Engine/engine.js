const state = {
    timeRecord: setInterval(time,1000),
    seg: 0,
    min: 0,
    Fim: false
}
const emojis = [
    "😊",
    "😊",
    "😒",
    "😒",
    "😘",
    "😘",
    "😎",
    "😎",
    "😜",
    "😜",
    "😆",
    "😆",
    "🤢",
    "🤢",
]
let openCard = []

let emojisMexidos = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1))//'sort' ordena através de um paramentro dado|(Se o numero randomico for maior que 0.5 ("?" adiciona 2)(":" se não, subtrair -1))

for(let i=0; i < emojis.length;i++){
    let box = document.createElement("div");//"createElement" Cria um elemento que irá compor o HTML|("div") Irá adicionar um "div"
    box.className = "item";//"className" receber o estilo CSS no elemento com nome "item"
    box.innerHTML = emojisMexidos[i];//"innerHTML" Adicionar o valor no elemento com nome "item"
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}

function handleClick(){
    if(openCard.length < 2){
        this.classList.add("boxOpen");//".add" adiciona no nome da class um incremento
        openCard.push(this);
    }

    if(openCard.length == 2){
        setTimeout(CheckMatch, 500)
    }
}

function CheckMatch(){
   if(openCard[0].innerHTML === openCard[1].innerHTML){
      openCard[0].classList.add("boxMatch");
      openCard[1].classList.add("boxMatch");
   }else{
      openCard[0].classList.remove("boxOpen");
      openCard[1].classList.remove("boxOpen");
   }

   openCard = [];
  if(document.querySelectorAll(".boxMatch").length === emojis.length){
    if(state.min > 0){
        alert("Você venceu, terminou em "+state.seg+" segundos e "+state.min+" minutos")
    }else{
        alert("Você venceu, terminou em "+state.seg+" segundos")
    }
    
  }
}

function time(){
if(!state.Fim){
    if(state.seg < 59){
        state.seg++;
     }else{
         state.min++;
         state.seg = 0;
     }
}

}
   