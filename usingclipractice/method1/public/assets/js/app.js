const getmenubtn = document.getElementById("menu-btn");
const getdropdown = document.getElementById("dropdownmenu");

getmenubtn.addEventListener("click",function(){
     getmenubtn.classList.toggle("crossx");
     getdropdown.classList.toggle("hidden");
});