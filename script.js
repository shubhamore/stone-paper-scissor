let cpuChoice = document.getElementById("cpu-choice")
let yourChoice = document.getElementById("your-choice")
let cpuScore = document.getElementById("cpu-score")
let yourScore = document.getElementById("your-score")
let btns = document.querySelectorAll('button');
let result=document.getElementById("result")
let cpoint = 0
let ypoint = 0

btns.forEach(function (i) {
    i.addEventListener('click', function () {
        console.log(i.dataset.val);
        yourVal = i.dataset.val
        compVal = Math.floor(Math.random() * 3)
        if (yourVal == 0) {
            yourChoice.textContent = "🪨"
        } else if (yourVal == 1) {
            yourChoice.textContent = "📄"
        } else {
            yourChoice.textContent = "✂️"
        }
        if (compVal == 0) {
            cpuChoice.textContent = "🪨"
        } else if (compVal == 1) {
            cpuChoice.textContent = "📄"
        } else {
            cpuChoice.textContent = "✂️"
        }
        if (yourVal == 0 && compVal == 1 || yourVal == 1 && compVal == 2 || yourVal == 2 && compVal == 0) {
            cpoint++
            cpuScore.textContent = cpoint
            result.textContent="CPU won"
        }
        else if(compVal==yourVal){
            result.textContent="TIE"
        }
        else{
            ypoint++
            yourScore.textContent = ypoint
            result.textContent="You WON"

        }
    });
});
