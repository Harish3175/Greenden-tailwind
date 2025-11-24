//Selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var Menuicon=document.getElementById("menuicon")
var colsenav= document.getElementById("closenav")

Menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

colsenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
