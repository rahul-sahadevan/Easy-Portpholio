var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");


function opentab(tabname){
    for(let i =0;i<tablinks.length;i++){
        tablinks[i].classList.remove("active-links");
    }
    for(let i=0;i<tabcontents.length;i++){
       
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
    console.log(document.getElementById(tabname))
}
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px"
}
