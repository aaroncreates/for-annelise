const music = document.getElementById("music")

function openMessage(){

music.play()
switchPage("message")

}

function showGift(){

switchPage("gift")

}

function nextMessage(){

switchPage("final")

}

function switchPage(id){

document.querySelectorAll("section")
.forEach(sec=>sec.classList.remove("active"))

document.getElementById(id)
.classList.add("active")

}

function openGift(){

launchConfetti()

document.getElementById("reward").style.display="block"

}

function redeem(){

window.open("https://www.roblox.com/redeem")

}

function showLove(){

document.getElementById("finalText").innerHTML =
"On this special day, I just hope you can stay by my side for a long, long time. Semoga hidup kamu semakin dimudahkan, semoga semua hal yang kamu mau terkabulkan, semoga kamu selalu dikasihi oleh cinta dimanapun kamu berada. I pray that you will achieve all your smallest, silliets and biggest dreams and be the person that you want to be. Please do know that I am, and will, always proud of all the things you do and that I will be here in the place where you can easily run to whenever you want to; and II hope life gives you everything you deserve and more. Semoga Tuhan memberkati kamu selalu, I love you❤️"

document.getElementById("choices").style.display="none"

document.getElementById("finalPhoto").style.display="block"

}

function launchConfetti(){

for(let i=0;i<80;i++){

let confetti=document.createElement("div")

confetti.style.position="fixed"
confetti.style.width="8px"
confetti.style.height="8px"
confetti.style.background="white"

confetti.style.left=Math.random()*100+"vw"
confetti.style.top="-10px"

confetti.style.animation="fall 3s linear"

document.body.appendChild(confetti)

setTimeout(()=>confetti.remove(),3000)

}

}

setInterval(()=>{

let heart=document.createElement("div")

heart.innerHTML="❤️"

heart.style.position="fixed"
heart.style.left=Math.random()*100+"vw"
heart.style.bottom="-20px"
heart.style.fontSize="20px"

heart.style.animation="float 6s linear"

document.getElementById("hearts").appendChild(heart)

setTimeout(()=>heart.remove(),6000)

},600)