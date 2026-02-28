let random = Math.floor(Math.random() * 100) + 1;
let guess = document.getElementById("guess");
let btn = document.getElementById("check");
let msg = document.getElementById("msg");
let win = document.getElementById("win");
let att = document.getElementById("att");
let attt = 0;

console.log(random);
btn.addEventListener("click", () => {
    const gs = Number(guess.value);
    if (gs < random) {
        document.getElementById("label1").style.display = "inline";
        document.getElementById("label2").style.display = "inline";
        document.getElementById("att").style.display = "inline";
        document.getElementById("msg").style.display = "inline";
        msg.style.color = "Yellow";
        msg.innerText = " Low";

    }
    else if (gs > random) {
        document.getElementById("label1").style.display = "inline";
        document.getElementById("label2").style.display = "inline";
        document.getElementById("att").style.display = "inline";
        document.getElementById("msg").style.display = "inline";
        msg.innerText = " High"
        msg.style.color = "Red"
    }

    else {
        document.getElementById("label1").style.display = "none";
        document.getElementById("label2").style.display = "none";
        document.getElementById("att").style.display = "none";
        document.getElementById("msg").style.display = "none";
        win.innerHTML = `🎉 Congratulations! <br> You won the match <br> Your number is: ${random} <br> You guessed it in ${attt} attempts`;
        document.getElementById("restart").style.display = "block";
        
        setgameover();
    }
    attt++;
    att.innerHTML = attt;
})

function setgameover() {
    guess.disabled = true;
    btn.disabled = true;
}