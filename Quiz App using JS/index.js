let box = document.querySelectorAll(".box");
let arr = Array.from(box);

let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");

let para = document.querySelector(".para");
let rightans = "";
let btn = document.querySelector(".next");
let score=0;

//first Quiz Page
function first() {
    para.textContent = "1. What is largest animal in the world?";
    b1.textContent = "Shark";
    b2.textContent = "Blue Whale";
    b3.textContent = "Elephant";
    b4.textContent = "Giraffe";

    rightans="Blue Whale";
    arr.forEach(e => {
        e.addEventListener("click", () => {
            if (e.textContent == rightans) {
                e.style.backgroundColor = "green";
                score++;
                console.log(score);
            }

            else {
                e.style.backgroundColor = "red";
            }

        });
    });
    second();
}



//Second Quiz Page
function second(){
btn.addEventListener("click", () => {
    
    clears();
    para.textContent = "2. Which is the smallest country in the world?";
    b1.textContent = "Vatican City";
    b2.textContent = "Bhutan";
    b3.textContent = "China";
    b4.textContent = "Nepal";

    rightans = "Vatican City";
    arr.forEach(e => {
        e.addEventListener("click", () => {
            if (e.textContent == rightans) {
                e.style.backgroundColor = "green";
                score++;
                score--;
               // console.log(score);
            }
            else
            {
                e.style.backgroundColor = "red";
            }
        });
    });
    third();
})
}

//Third Quiz Page

function third(){
    btn.addEventListener("click", () => {
        
        clears();
        para.textContent = "3. Which is the largest desert in the world?";
        b1.textContent = "Kalahari";
        b2.textContent = "Gobi";
        b3.textContent = "Sahara";
        b4.textContent = "Antartica";
    
        rightans = "Antartica";
        arr.forEach(e => {
            e.addEventListener("click", () => {
                if (e.textContent == rightans) {
                    e.style.backgroundColor = "green";
                    score++;
                    score--;
                }
                else {
                    e.style.backgroundColor = "red";
                }
            });
        });
        scorecard();
    })
    }

    first();

//Score of quiz
function scorecard(){
    btn.addEventListener("click",()=>{
        console.log(score);
        para.textContent=`Your score out of 3 is ${score}`;
        document.querySelector(".boxes").style.display="none";
        btn.textContent="Quiz Completed";
    });
  
    }


//Make background white of box contents after clicking on next
function clears(){
   b1.style.backgroundColor="white";
   b2.style.backgroundColor="white";
   b3.style.backgroundColor="white";
   b4.style.backgroundColor="white";
}

