function label1(){
    let labels = document.querySelectorAll(".label")
    let scroll = document.querySelectorAll(".se-subs1")
    console.log("btn clicked")
    for(ele of scroll){
        ele.style.transform="translateX(0px)";
        ele.style.transition = "0.6s"
    }
}
function label2(){
    let labels = document.querySelectorAll(".label")
    let scroll = document.querySelectorAll(".se-subs1")
    console.log("btn clicked")
    for(ele of scroll){
        ele.style.transform="translateX(-156px)";
        ele.style.transition = "0.6s"
    }
}
function label3(){
    let labels = document.querySelectorAll(".label")
    let scroll = document.querySelectorAll(".se-subs1")
    console.log("btn clicked")
    for(ele of scroll){
        ele.style.transform="translateX(-468px)";
        ele.style.transition = "0.6s"
    }
}
let width = window.innerWidth
let mobileScreen = width<800;
console.log(width)

function size(){
    if(mobileScreen){
        let dt = document.querySelector(".dt")
        dt.innerHTML = "Select Code&nbsp;&nbsp;:"
    }
}
size()
const scroll = function(){
    if(mobileScreen){
        window.location.hash = "sroll-down" ;
    }
}
const returnScroll = function(){
    window.location.hash = "container";
}

let btns = document.querySelectorAll(".subs .btn")
btns.forEach(btn => {
    btn.addEventListener("click",function() {
        
        btns.forEach(btn => btn.classList.remove("btn-clicked"));
        this.classList.add("btn-clicked");
    });
});
let btns2 = document.querySelectorAll(".se-subs1 .btn")
btns2.forEach(btn => {
    btn.addEventListener("click",function() {
        
        btns2.forEach(btn => btn.classList.remove("btn-clicked"));
        this.classList.add("btn-clicked");
    });
});
let btns3 = document.querySelectorAll(".se-subs2 .btn")
btns3.forEach(btn => {
    btn.addEventListener("click",function() {
        
        btns3.forEach(btn => btn.classList.remove("btn-clicked"));
        this.classList.add("btn-clicked");
    });
});

function swe1002(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/file/d/1evxcwM7U55A141uyH7b5c3EBTYof9o0v/view?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1eLOKb35A3EY_tEiKjiugS6G6k-jJMOk9?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1eVRKg6ni4B_2JMcyWHZ6l1-_KUFwZNbe?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1eViLoOAcjJ0eaEd7wakbXyU8ps0lWNYE?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE1002";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="PSE ";
    }
}

function swe2001(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1fKdiMFW-0e5NalVZHeBa2daLNWZQ5v41?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1fL9zpoylI0m3ZAy_BY30WMaeCdXwzEOo?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1fQqsxqCRGig_QpEwMnMJL6BXhd_cgv_5?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1fRfOOy45e9HWypJB7M-qVjVvSJDvtJ81?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="DSA ";
    }
}
function swe2002(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/12mCikE0TrGLqkc2R90JdCoxfQ4nBt5F-?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/12rnCGChAfK7lLfNw0tnls9_3YAoiQsC-?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/12s7GdqX2dzq1yaIxzRCwVTVstuxenZx2?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/12uccp1yFh9dKTSPOsJ9AaZIG4mtbVrqn?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2002";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="HCI ";
    }
}
function swe2003(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/14H2WHZMK63ijKdgxdAdLxD176wxqbEMG?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/14C_KLMCLYhdQJpN4zEYTTVlEDhwztvu8?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/14C4ajKpGvZwf4BK-nywQSiGs_CQfjcjF?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/13yUIMXMReJKNy92WYC1-c3HNykHviL3T?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2003";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="REM ";
    }
}
function swe2004(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1i1S0xAQWhdQQ7d0V2vkK8txT2Fw7WLhc?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1iILjylgzUcUGCe-4eyYlK2_lUCvXWNMe?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1iKmR0Cm05zTdmRBfLK-ms3zp4DA2cUXn?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1iNK4_S-WiAW-IZYYoC0cOTGA3if1a4cs?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2004";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="SDA ";
    }
}
function swe2006(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1iSFTaHstP-O9jnIA8Rw_t-hCePkzNMXa?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1iX3r5iVMQHH4GjpLuz-O4Ug4tKWAnL14?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1iga1m8jYIWT_V2KJ0-cDg1Q3LZ5zRj7s?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1ihVo7gxNQWJTg2cUG2LroxeE8oZxgDAb?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2006";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="DBS ";
    }
}
function swe2007(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1fhpgSJMa8oQ4LEAJL50zsaUudbQG2B-I?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1fmVB3yVSgocgAuZVt2hEEbcx8v6pqTHF?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1fqEqljk-q7l4xvczydlp-MT3gzfsy89H?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1ftADxa9xVJQOEeBEIqcsqtDoWE_Oze93?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2007";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText=" OS ";
    }
}
function swe2009(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1CW50ZsOPE3KSvkHIz7mOEmxmfl4pTKYT?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1cqqUbVXJcfau5lK2f7oH1b8jEbZq3bhO?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1zVkTckawNuhDNfIceraEhQfwEiTRl_ys?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/13Ld0C62bcal5b8JYP9P2kHgdq_WEyN3k?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2009";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="A..Algorithms";
    }
}
function swe2008(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1JkTm8d1w--lPTqmDxum4GJ4U7V8xxgXn?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1Jkf_jMi5SKpUz_vXUQiFMYQmtNsDt4G-?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1JqX1KWy8YeANdy5VYRqhe8oBBtNJF5Gg?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1K2VRmKzon8rg7NsJRaPze7GnikSy1Ljh?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2008";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="OOAD";
    }
}
function swe4002(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href"," " );
    link[1].setAttribute("href"," " );
    link[2].setAttribute("href"," " );
    link[3].setAttribute("href"," " );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE4002";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="SWT ";
    }
}
function swe4001(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1hizsJTa1v2sXB74UIkxkMCGx7Xo8vDrN?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1hYfmnaJEtSSk22AoN7SRr4JpEY-Q0JrS?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1hc-d0Hk7Ql87IFkOC1D2G-I29CaY0u9G?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1hw8SVTAd9dxbzmcp_BFEcABnsVMpfKT4?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE4001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="I&WT";
    }
}
function swe4003(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href"," " );
    link[1].setAttribute("href"," " );
    link[2].setAttribute("href"," " );
    link[3].setAttribute("href"," " );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE4003";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="CMAD";
    }
}
function swe4004(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href"," " );
    link[1].setAttribute("href"," " );
    link[2].setAttribute("href"," " );
    link[3].setAttribute("href"," " );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE4004";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Cloud..app..";
    }
}
function swe4005(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href"," " );
    link[1].setAttribute("href"," " );
    link[2].setAttribute("href"," " );
    link[3].setAttribute("href"," " );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE4005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="ST&M";
    }
}
function swe3001(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/19kgPsdikNDXZHzTb1wXc94MtlZ4C8EhH?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/19nwUh04q4Ek7N4FLVsdDpHmuIedn8LZY?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/19pZpn1WJnzhAkEcDhtJ8-6HZgAlwgMLn?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1A34jo2e2fDSVHuj7Oai0Kctf8HJdWrq5?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE3001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText=" CN ";
    }
}
function swe3002(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1J6OkNDKwrmxb22T_gkUkbe2amxy7KvUD?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1J9MW0IiAH7UR6LEwVmx_-jUKKnkKPdRC?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1J9yJMIKiPmOzP16F7gbSb4TiVy3R16QG?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1JNULZlEbFGqtofniGXZzGnLD9FzjebDG?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE3002";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="SWPM";
    }
}
function swe3003(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href"," " );
    link[1].setAttribute("href"," " );
    link[2].setAttribute("href"," " );
    link[3].setAttribute("href"," " );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE3003";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="I&SS";
    }
}
function swe3004(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/173S6HEMhYwT8ULnSwpbsDrmrR9a3kZOo?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/173S6HEMhYwT8ULnSwpbsDrmrR9a3kZOo?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/173S6HEMhYwT8ULnSwpbsDrmrR9a3kZOo?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/173S6HEMhYwT8ULnSwpbsDrmrR9a3kZOo?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE3004";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="FED&T";
    }
}
function swe2004(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1i1S0xAQWhdQQ7d0V2vkK8txT2Fw7WLhc?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1iILjylgzUcUGCe-4eyYlK2_lUCvXWNMe?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1iKmR0Cm05zTdmRBfLK-ms3zp4DA2cUXn?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1iNK4_S-WiAW-IZYYoC0cOTGA3if1a4cs?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2004";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="SD&A";
    }
}
function mat1003(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1dnvXDKIrwGppKepKe2Bq6FVxV2UTzUuQ?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1do6wbmGZpMN8WW5Vk5RFyoAFsg8PJiSn?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1doBvfYu_kSKBQtZo74sLIXgVko8oOWs2?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1ds40ogubTMCpboahP1mpAzJ7GKUG0BiO?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="MAT1003";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Discrete";
    }
}
function mat1007(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1dLzzFKPbNjjoTb7p8DZECKUQs5oirgJp?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1dPGtNaFtFpIbFVdHN02Tozl4p12vPS7C?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1dPauqaNGVoLEfmLaSiEzclMzmfsPpivv?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1dQody-429AJK7ldvXvSqCvsjextu3MNY?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="MAT1007";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Discrete";
    }
}
function ece2005(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1LE4ICcT5xU2P35HdDI6I2eb1r1e8AzDp?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1LGsluEIX5GDccFqkfij4FcPnnam4PKRg?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1LOCod2d34TQFPj8gc9H6-L45OiAqk8L3?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1LQis2rcjeRR8E1lq_Rw4sU1f0yYt2xgj?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ECE2005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Signal..";
    }
}


function cse2001(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1lo6A5C0wOv1nsejeojLH4k2Hp7gaKIAq?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1lqRprTwPcGeGsoJ-dT3PcQkGnVdPWsx8?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1m0UbF-64bWf7Q191skbCje9o3hNkXFui?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1m2dEKU7xfnJAkAYHpvhZW96IM4f3ccsV?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE2001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="DSA ";
    }
}
function cse1005(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1jMBBLuTiRnuboNZp6U0-vzp61oobzkN-?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1jOHehwavMI95WGb1UZT_u8UsoP_Wj8TA?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1jboA_GNIOCb2gdkBpO9HzLgInlUGv4s0?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1jf7XzazBuoX39py19yxr73SrSC4NKv6L?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE1005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText=" SE ";
    }
}
function cse2007(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1TC6KJHub14Vuoc3sKifMab1yqsNJFuEL?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1n2NasPUH08rfNPnHx7YSPlPfzcM0n0Fi?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1OMDv8oQrTvBJRwcUBpBSNbxSheM41Now?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1bdD7cZR91oTql1Kv0XL7WczCjTYKDcrC?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE2007";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="DBMS";
    }
}   
function cse2008(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1jgmib41zc7nSC2t6lMba6oP5xbQWm-RW?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1k0qCQ9HsLar6P7FgD5xb5twxVJazObbl?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1k23h2pZkXDtvT6vnGtNEPa3K7zqbsSDS?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1k3qOeEjQ7I30AvfIsw_9Vowxq8XT-sBH?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE2008";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText=" OS ";
    }
}
function cse3002(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1nAHkLqkS9VbLML8jw9dBI4RjprvOU99F?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1nHOeEXgMfQqoDgReZibgbUzk0mJL73-a?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1nHOeEXgMfQqoDgReZibgbUzk0mJL73-a?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1nJTXlSzfnS0xD3-arNoG1u9-o1Um6trN?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE3002";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText=" AI ";
    }
}
function cse1006(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1mh-JSiV9UYeD1SZ5nQb4KAGed-VkwcAf?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1moNk4WNg1RIv-KVhtFghux19Tr1ndAOq?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1mpK1qogimfmQ3WUbfJnFf2oVh65vLPjy?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1mr6Gn6wxRjfyhW11v8UwHBA-Jf3D-yPx?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE1006";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="FDA ";
    }
}
function cse1007(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE1007";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse1021(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE1021";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="FoBT";
    }
}
function cse3003(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/18RTAxHofg1ztK62sNj3NIRaBkp0pdlxj?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1yd-9cqexoE0uDPXSBAuUYnX_i3aqu8dG?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1KpaGWyRc3hx-hTynEzkThgSFl2ink2wd?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1jgZJKqVAcw4xH4ryC9ViWPPydW81uOe7?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE3003";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText=" CN ";
    }
}
function cse3006(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE3006";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse3008(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1nJTXlSzfnS0xD3-arNoG1u9-o1Um6trN?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1lUwhu_Kxrf6JkQlP9U1h9jfJRvO28j2p?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1lbhcZGqkxyFWwNz6UreY9dPnbWJLIW1h?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1lj4lZqTx5KNe411rgC-ILnl-q6ANotmG?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE3008";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText=" ML ";
    }
}
function cse1008(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE1008";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="ToC ";
    }
}
function cse2027(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1i1S0xAQWhdQQ7d0V2vkK8txT2Fw7WLhc?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1iILjylgzUcUGCe-4eyYlK2_lUCvXWNMe?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1iKmR0Cm05zTdmRBfLK-ms3zp4DA2cUXn?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1iNK4_S-WiAW-IZYYoC0cOTGA3if1a4cs?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE2027";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="SD&A";
    }
}
function cse3015(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE3015";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse4001(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse4004(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4004";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse4005(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse4006(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4006";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse4012(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4012";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="UI/UX";
    }
}
function cse4046(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4046";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse4011(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4011";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="IoT ";
    }
}
function cse4047(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4047";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse3004(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/11btW8XuH-gXKijznTo1tI1bPJePoJGar?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1Gqf2jrVDrFyDSWsfL3KgI9yzXUQIYw1l?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1dVk4J6FtlOZVLaixptb9OCgQ6Ty0zNyS?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1fqsq4dAzW_MBnvNo8ebGfc_a0BrEHozV?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE3004";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="D&AA";
    }
}
function cse3001(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE3001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="ADP ";
    }
}
function cse2026(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE2026";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Page of CSE";
    }
}
function cse4007(){
    
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","../CSE.html" );
    link[1].setAttribute("href","../btech.html" );
    link[2].setAttribute("href","../CSE.html" );
    link[3].setAttribute("href","../btech.html" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE4007";
    }6

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="DIP ";
    }
}