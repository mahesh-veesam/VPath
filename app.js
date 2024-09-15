let btn1 = document.querySelector(".box1")
let pBtn1 = document.querySelectorAll(".p1")
let btn2 = document.querySelector(".box2")
let pBtn2 = document.querySelectorAll(".p2")

btn1.addEventListener("mouseover",function(){
    for(btn of pBtn1){
        btn.style.color = "rgb(212, 198, 212)";
        btn.style.fontWeight = "700"
    }
})
btn1.addEventListener("mouseout",function(){
    for(btn of pBtn1){
        btn.style.color = "rgb(142, 147, 151)";
        btn.style.fontWeight = "600"
    }
})
btn2.addEventListener("mouseover",function(){
    for(btn of pBtn2){
        btn.style.color = "rgb(212, 198, 212)";
        btn.style.fontWeight = "700"
    }
})
btn2.addEventListener("mouseout",function(){
    for(btn of pBtn2){
        btn.style.color = "rgb(142, 147, 151)";
        btn.style.fontWeight = "600"
    }
})







































// let btn = document.querySelector(".dropdown-menu li ");
// let body = document.querySelector("body");


// btn.addEventListener("click", ()=>{
//     let li = document.querySelector(".dropdown button")
//     li.innerHTML = "Integrated Mtech"
//     let p = document.querySelector(".coco")
//     console.log("prints")
//     p.innerHTML = "Integrated Mtech"
// });



