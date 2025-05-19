let btns = document.querySelectorAll(".subs .btn")
btns.forEach(btn => {
    btn.addEventListener("click",function() {
        
        btns.forEach(btn =>
             btn.classList.remove("btn-clicked")
            // btn.style.background = "none"
        );
        this.classList.add("btn-clicked");
        // this.style.background = "#0f59c7"
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

let link = document.querySelector(".container .sub")

link.addEventListener("click",function(){
    window.location.href = "https://vpath.onrender.com/courses"
})

function mat1008(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/10GMlsZq5NyBuvrWmqscAgWtA96Y9yBs5?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/10JEH4ZWXZCWN9otlpUtAz3v6c3uQCa19?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/10RTJKQrZaCkM3fhnzM2Wc5-dVRuYibhr?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/10RzV2xvHsppyHND0dG4Jp74X-1SNzWD5?usp=drive_link" );
    
    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="MAT1008";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Calculus";
    }
}

function swe1004(){

    scroll();
    returnScroll();
    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1mpmNGRRzTh_5iwg9DEs3ko_44WivE7GQ?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1mqqDcljG00fUJa6Kg-DKlBO7VBp3zMux?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1my6RQ9lTTLUNx80wuuUaiWhGbxfeMiFm?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1n4VUtTZ86aYb5nycTq4VL0kZ22Rf3Yyg?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE1004";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Python";
    }
}

function chy1008(){
    scroll();
    returnScroll();
    
    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1of_gmBaVUbG6FmkUi7PQ5JDrnSeR_HmI?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1oiRO0-qC3j8gekBEYLIgIJFQM41ch7Kq?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1ojsW9LSvXhN79DmHYt2ZYE36gaH37lsk?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1or93H8WuLAp-ySL2qKpdZSojIdBOCWa5?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CHY1008";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Chemistry";
    }
}

function ece1005(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1oJtHYEF-NZxVC9FZClMjYashq_rUXrgu?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1oLBwyOl_UgFrp42XiCK5YKD-vj2X0c4J?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1oQ2E3O12Q-MrSyF0bAy8SYSkI3PGEhpr?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1oRTUISkZf3baRQXxsBFLWreFxos1XYOk?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ECE1005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="BEEE";
    }
}
function eng1005(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1nlbthgv0vU7xDT2ahQikwOoqe2nOpfaM?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1nqlvkd7gczzqVv44xnmOI5JDMKWlCC3a?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1nsQj97b3YlzbOjskxi2SFudecHT-5b0Q?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1nyUo5P2AWZ7GsmL96QxdcKyDUuYOxVgL?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ENG1005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="English (Basic)";
    }
}
function eng1006(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1nXj6b2I-QhSFgFERigVGwBN7HVAh6S5q?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1nZV4Z6Yf0yufdJbfyp59eVioUhxLEUNf?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1na-PtJW4yHIDiaRImSbZtUVd9uFtIfSF?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1ndgy07kMjJZMtuZx0R-9qn9P9dpY4Aqy?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ENG1006";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="English (Func)";
    }
}
function phy1005(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1n4oM-GIFdJKW48biygXpEDAwCUytcgio?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1n7ceVCvLw55Qtw0bFsXLRQNhDeERw461?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1n9fS0n75c9Zlk0TmhGjx66BWNemne2x1?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1nB1DaZXS07f71p2q3h1K6FAnWIRfGi0l?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="PHY1005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Physics";
    }
}
function mat1009(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1mGkPgQKPgcgO4cYaT5Ie1wxmK8W8GSa5?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1mI02yBTPpqhPmZS9WFGdMRs3mkVIaF3l?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1mN3wNJbKi8qoRldw7zV6Bm9i781d0GxE?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1mRHOY6po23RCAoh4qG0xocp9E5sAB55K?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="MAT1009";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Linear Algebra";
    }
}
function mat1014(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1lzFI9tVtAMvWQHf-PwFbI9HDaCz5vQAU?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1m-DlHYRVAscGTNnfRcOzmtBHuvsHdwUn?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1m0-a6Fsq9NFg-SHJuHmdEX1jTfiw_i3A?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1m6JgA9j7vO8EAt8iNfcpNLfIhFtIqv3v?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="MAT1014";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Statistics";
    }

}
function swe2005(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1maFBER8bmzHxckfCWkaqXrc48VoRwn3a?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1mbJfAgJNgBAU7iAjuqRlWvafr_oEZFK3?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1mnWeDINlF2-DPwMHjISnfrWSLgjZZAqO?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1mpELDNMcq6gVwppR7u5Rlp9jJPppyidH?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="SWE2005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="OOPs";
    }
}
function ece1006(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1o4F-WRuSeuPZMyherFO0_UULuDl28XTM?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1o6mWzjjHkvIA3F0ioFKzNjyDcsKuSgCe?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1oItZPNh8HWThjma5HAjMOZgpi6ix_A_H?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1oJqITdk6kE_Z_eqmJuaUZLtkMPrxpn9_?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ECE1006";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="DLM";
    }
}
function eng2004(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1nML1nyE7RMKBMiQwaq5hWdqHz7nRlDf1?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1nMOueQTw8jsEZk_q5RtcdCZYru7hMY37?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1nQa44CLvitwzLsw-1D91ftcwQDagLAA4?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1nXZea6RzfZyZEYwKglVXQOQFOrNturb3?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ENG2004";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="English (Adv)";
    }
}
function mat1001(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1sUS7Z4xjNW9tsQ36ZdPHkWncXnrNdzNH?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1sWtS5_9Fb1msNRHw00dpafU78iteZJXZ?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1sX8kIpxqxuv_rnECo7rS9Ldl8eycBdJ5?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1s_xhyXpQyjneCDcahqLMuby_uJixVPAp?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="MAT1001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Calculus";
    }
}
function cse1012(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1HbrRdicCN_EgmKlG3itbsr_k5ceG1nZH?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1HnGXiMaheMW3fJzTlfhkIDH5vpEC-dLM?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1I4APVQ1f2H7rsCAmgOtkJdyfcZEYf0Mb?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1I70wRdv8K-i1r0aujNJlSc_KDhwrtJwL?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE1012";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Python";
    }
}
function chy1009(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1tCwOte2cKXx6nxrfCrhPpWog60SeI3pF?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1tGxg1IosjQ1Q3mgf0p_eVp2fA0VQk61u?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1tHnviLCZLHb5nIIZN46GeMXByYgd00tk?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1tQB_pJG7FDbYzPHz6Qeo65-Tx7f4aGyt?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CHY1009";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Chemistry";
    }
}
function ece1002(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1B7lYvtH4NCqDERTAltu302IpTAPkV64a?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1BCQCinQMg26R58CiLyfiq0aeVqStrx66?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1BJO_Uar8Po1Cu1wJKnoxgxmyqc8Y3AwG?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1BONfiA-Tot34L_WtD5Wonr5-N65Fz-tL?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ECE1002";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="FEEE";
    }
}
function eng1001(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1IHV-gfowHFW01r0sML4qgWHCW8Kpx3tS?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1IIYV3oggo54jKUcy1WLHaME09Ad3odv1?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1IS00eod11NLFhK-3OcplfObtce9i9avB?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1IWiIQXy_Wih8CiV_J5ixj0vF4bURe9aC?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ENG1001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="English (Ess..)";
    }
}
function ece1003(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1HlxGiSWQwNzL8i9Jf4rrFgr7pDdnF43_?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1KYfL7rpEQuwyovGb_WaFHyo0FW5aEbPH?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1x84CM3OM_p8Kp7zJ5KbBP1x4sLcXdg1P?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1zrTnZ_Vic99JgwBNO2sA3bTwRI45yRZf?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ECE1003";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="DLM";
    }
}
function eng1002(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1IYzXKk3ugxYO85GD0On4VnxmtPWtDwgY?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1I_lGen6bX2__WDcMo-Wy4pExX_khtqC7?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1IdbAS7uuur7rBe3DwKm6AazIj64l4tdc?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1IeMm_KgvNjJDTruPTeAg05wARxE5ajvT?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ENG1002";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="English (Eff..)";
    }
}function phy1008(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1sz3A-GT4uzzPLx4ovcCzIjRHBy15O0Ku?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1t39HIAUKxnkc7iQqrWo323o3oX3vjPHf?usp=drive_link" );
     link[2].setAttribute("href","https://drive.google.com/drive/folders/1t4uIwKaFsDIIa2egmJCqkBFf_YEVbqQ5?usp=drive_link" );
     link[3].setAttribute("href","https://drive.google.com/drive/folders/1t9eAEmdGjVITrI-S3SL1o6eoR-DQ146D?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="PHY1008";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="Physics";
    }
}
function mat1002(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1sh4aiJgW5cBvONyG3MGmsEK5t3wRUgwH?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1shMVkiOod-Kxubpkd6y_m6abmdX4xSew?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1srvzXnCnOYdxfvsyru1VXnFrYLnheeLp?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1stJE8PivCBSlORnAn7zsiBFf652KAoxb?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="MAT1002";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="AD&DE";
    }
}
function cse2005(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1j5cNzevCnt3DnXMYBY1NVkNBrzQipkmI?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/18xeL8TkJGesobmIyqiXHUfmfX3NcAudw?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1_WzQBvmPLrqkHMqrNm5vf-qymuzh0tWU?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1WYZDP08SlUIkmYndZx-AifmPoXnHgg_8?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="CSE2005";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="OOPs";
    }
}
function eng2001(){
    scroll();
    returnScroll();

    let link = document.querySelectorAll(".di a");
    link[0].setAttribute("href","https://drive.google.com/drive/folders/1kdeAPK33iMjHknMux0f2wmxIftNCIU4p?usp=drive_link" );
    link[1].setAttribute("href","https://drive.google.com/drive/folders/1LRC9tqkDdgvkl0j9Hx2kK0-i8Ipk9ggC?usp=drive_link" );
    link[2].setAttribute("href","https://drive.google.com/drive/folders/1BqoZVBa0BorFroSJzBebI4GZqMlyCiGP?usp=drive_link" );
    link[3].setAttribute("href","https://drive.google.com/drive/folders/1lUQ83HC1W2kF6ADniYvD8lPH3ZtmJ2S1?usp=drive_link" );

    let code = document.querySelectorAll(".coco");
    for(i of code) {
        i.innerText="ENG2001";
    }

    let name = document.querySelectorAll(".coti");
    for (i of name ) {
        i.innerText="English (Prof..)";
    }
}
const mobileScreen = function(){
    return window.matchMedia("(max-width : 800px)").matches;
}
const scroll = function(){
    if(mobileScreen()){
        window.location.hash = "container";
    }
}
const returnScroll = function(){
    window.location.hash = "sroll-down";
}
