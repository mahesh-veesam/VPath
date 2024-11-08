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
let share = document.querySelector(".share")
let sharing = document.querySelector(".sharing")
let hide= document.querySelectorAll(".other")
sharing.addEventListener("mouseover",open)
sharing.addEventListener("mouseout",close)

function open(){
    hide.forEach(e=>{
        e.classList.remove("other")
    })
    sharing.classList.add("scale")
}

function close(){
    hide.forEach(e=>{
        e.classList.add("other")
    })
    sharing.classList.remove("scale")
}



let wa = document.querySelector(".wa")
let ig = document.querySelector(".ig")
let copy = document.querySelector(".copy")


wa.addEventListener("click",openwa)
ig.addEventListener("click",openig)
copy.addEventListener("click",copyurl)


function openwa(){
    window.location.href = "https://wa.me?text=If%20you%20want%20to%20access%20previous%20question%20papers%20for%20your%20exams,%20you%20can%20visit%20vpath.%20Check%20it%20out%20here!%20%0A%0Ahttps://vpath.netlify.app/"
    // window.open("https://wa.me?text=If%20you%20want%20to%20access%20previous%20question%20papers%20for%20your%20exams,%20you%20can%20visit%20vpath.%20Check%20it%20out%20here!%20%0A%0Ahttps://vpath.netlify.app/","_blank");
}

function openig(){
    window.location.href = "https://instagram.com/direct/new/?text=If%20you%20want%20to%20access%20previous%20question%20papers%20for%20your%20exams,%20you%20can%20visit%20vpath.%20Check%20it%20out%20here!%20%0A%0Ahttps://vpath.netlify.app/"
    // window.open("https://instagram.com/direct/new/?text=If%20you%20want%20to%20access%20previous%20question%20papers%20for%20your%20exams,%20you%20can%20visit%20vpath.%20Check%20it%20out%20here!%20%0A%0Ahttps://vpath.netlify.app/","_blank");
}

function copyurl(){
    navigator.clipboard.writeText("https://vpath.netlify.app/")
    copy.style.transform = "scale(1.1)"
    setInterval(() => {
        copy.style.transform = "scale(1)"
    }, 500);
}





































// let btn = document.querySelector(".dropdown-menu li ");
// let body = document.querySelector("body");


// btn.addEventListener("click", ()=>{
//     let li = document.querySelector(".dropdown button")
//     li.innerHTML = "Integrated Mtech"
//     let p = document.querySelector(".coco")
//     console.log("prints")
//     p.innerHTML = "Integrated Mtech"
// });



