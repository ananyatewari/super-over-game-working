const $ball = document.getElementsByClassName("ball")
const $scoreteam1 = document.getElementById("score-team1")
const $wicketsteam1 = document.getElementById("wickets-team1")

const $scoreteam2 = document.getElementById("score-team2")
const $wicketsteam2 = document.getElementById("wickets-team2")

const resetbutton = document.getElementById("reset")
const strikebutton = document.getElementById("strike")

const strike = new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3")
const cheer = new Audio("https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3")

var scoreteam1 = 0
var scoreteam2 = 0
var wicketsteam1 = 0
var wicketsteam2 = 0
var turn = 1
var ballsfaced = 0

function finished (){
    if (scoreteam1>scoreteam2) alert("India wins")
    if (scoreteam2>scoreteam1) alert("Pakistan wins")
    if (scoreteam1==scoreteam2) alert("TIE")
    
}

// we have to create possible outcomes using arrays, to stoare and access multiple values
// possible outcomes are- 0 1 2 3 4 5 6 WICKET

const possibleoutcomes = [0,1,2,3,4,5,6,"W"]

//math.floor(math.random*length) = gives us the value in the range we want
//event listener- works on click, when the user does something on the page then only the thing happens

//inner text and text content are not the same.



strikebutton.onclick = () => {
    strike.play()
    ballsfaced++;
    if (turn == 1) {
        var score = possibleoutcomes[Math.floor(Math.random()*possibleoutcomes.length)]
        console.log(score)
        if (score==="W"){
            wicketsteam1++
            $wicketsteam1.innerText = wicketsteam1
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = "W"
        }

        else{
            scoreteam1 += score
            $scoreteam1.innerText = scoreteam1
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
            
        }
            // formatting is used because query selector looks for the variable as is with brackets and periods
            //in order to look for the true name of the document, we use formatting

            //print(f"this is {num}") //num=2 to show this is 2 //in python
            //to tell this is a variable, we use dollar sign with it. otherwise js won't be able to read it 
            //for the reason mentioned above
            //it is just a syntax

        
        
    if (ballsfaced==6 || wicketsteam1==2){
        turn = 2
        ballsfaced = 1
    }
    
}

    if (turn == 2) {
        var score = possibleoutcomes[Math.floor(Math.random()*possibleoutcomes.length)]
        console.log(ballsfaced)
        if (score==="W"){
            wicketsteam2++
            $wicketsteam2.innerText = wicketsteam2
            document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = "W"
        }

        else{
            scoreteam2 += score
            $scoreteam2.innerText = scoreteam2
            document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
            
        }
    if (ballsfaced==6 || wicketsteam2==2 || (scoreteam2 > scoreteam1)){
        turn=3
        finished()
        cheer.play()
    }
        
    
        
}
}


resetbutton.onclick = () => {
    window.location.reload()
}
