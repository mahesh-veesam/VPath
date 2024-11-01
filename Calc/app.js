let btn1 = document.querySelector("#calc")
btn1.addEventListener("click",calculateGPA)

let btn2 = document.querySelector("#add")
btn2.addEventListener("click",addCourse)

let btn3 =document.querySelector("#reset")
btn3.addEventListener("click",reset);

let c = 6
function addCourse(){
    console.log("ok")
    c = c+1
    let html = `<div class="gpa">
    <h4>Course ${c}</h4>
    <select name="credits" class="credits" id="c${c}">
        <option value="">Credits</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    <select name="grade" class="grade" id="g${c}">
        <option value="">Grade Points</option>
        <option value="10">S</option>
        <option value="9">A</option>
        <option value="8">B</option>
        <option value="7">C</option>
        <option value="6">D</option>
        <option value="5">E</option>
        <option value="0">F</option>
    </select>
</div>`
    let newHtml = document.querySelector(".buttons")
    newHtml.insertAdjacentHTML("beforebegin",html)
    console.log("ok")
}

function calculateGPA(){
    let credits = document.querySelectorAll(".credits")
    let grades = document.querySelectorAll(".grade")
    let r = 0
    let cr = 0
    for(let i=0; i<c; i++){
        r = r + credits[i].value*grades[i].value;
        cr = cr + credits[i].value * 1
    }
    let res = r/cr;
    result = String(res).slice(0,4)
    console.log(result)
    displayGPA(result,cr)
}

function reset(){
    location.reload()
}

function displayGPA(result,cr){
    let rtag = document.querySelector(".results")
    rtag.style.display = "flex"
    let nan = "NaN"
    if(result == nan){
        console.log("Not a Number")
        alert("Select Your Credits and Grades respectively. Thank You!")
    }
    else{
        let ng = document.querySelector("#ng")
        ng.innerHTML = `Your GPA &nbsp; : &nbsp;${result} `
        let nc =document.querySelector("#nc") 
        nc.innerHTML = `Credits  &nbsp;: &nbsp;${cr}`
    }
    if(result<8){
        ng.style.color = "red"
        nc.style.color = "red"
    }
    else if(result>9 || result==9){
        ng.style.color = "green"
        nc.style.color = "green"
    }
    else{
        ng.style.color = "orange"
        nc.style.color = "orange"
    }
}

let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let mbtn1 = document.querySelector(".mbtn1")
let mbtn2 = document.querySelector(".mbtn2")
let calc1 = document.querySelector(".container")

mbtn1.addEventListener("click",()=>{
    img1.classList.add("rotation")
    img2.classList.remove("rotation")
    displayCalc1()

})
mbtn2.addEventListener("click",()=>{
    img1.classList.remove("rotation")
    img2.classList.add("rotation")
    displayCalc2()  
})

function displayCalc1(){
    scroll()
    returnScroll()
    calc1.style.display = "flex"
    calc1.style.transition = "1s"
    calc1.classList.add("display")
}

function displayCalc2(){
    calc1.style.display = "none"
}

const mobileScreen = function(){
    return window.matchMedia("(max-width : 800px)").matches;
}
const scroll = function(){
    window.location.hash = "mode";
}
const returnScroll = function(){
    window.location.hash = "container";
}



// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/service-worker.js')
//         .then((registration) => {
//           console.log('Service Worker registered with scope:', registration.scope);
//         })
//         .catch((error) => {
//           console.log('Service Worker registration failed:', error);
//         });
//     });
//   }