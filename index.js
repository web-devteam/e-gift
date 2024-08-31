let codes = [10101, 12012, 11122, 10234, 12021]
let sender = ["emmanuel", "emmanuel", "emmanuel", "emmanuel", "emmanuel"]
let gift = ["wall1.jpg", "pdf2.pdf", "wall3.jpg", "wall4.jpg", "wall5.jpg"]
let names = ["wallpaper from e~gift", "novel from e~gift", "wallpaper from e~gift", "wallpaper from e~gift", "wallpaper from e~gift"]
let ran = ["unrapping gifts", "preparing package", "tying ribbons", "purchasing gift bags", "stamping packages", "delivering packages", "finishing up", "tying friends", "opening gifts", "scanning gift code",
    "searching", "tearing package", "compressing gifts", "chatting with some friends", "checking my email"]

document.getElementById("startbtn").addEventListener("click", ()=>{
    if(document.getElementsByTagName("button").item(0).innerHTML=="log in"){document.getElementsByTagName("p").item(0).innerHTML="enter the code you were given"
    document.getElementsByTagName("button").item(0).innerHTML="enter"
    document.getElementById("inno").style.display="block"}
    else{
document.getElementById("screen").style.display="flex"
document.getElementById("plain").style.display="flex"
setInterval(()=>{document.getElementById("loadbar").value=document.getElementById("loadbar").value+0.1}, 25)
document.getElementsByTagName("h3").item(0).innerHTML=ran[Math.floor(Math.random()*15)]+" ..."
setInterval(()=>{document.getElementsByTagName("h3").item(0).innerHTML=ran[Math.floor(Math.random()*15)]+" ..."}, 5000)
setTimeout(()=>{document.getElementById("plain").style.display="none"}, 28000)
document.getElementById("mains").style.display="none"
document.getElementById("viewbtn").style.cursor="no-drop"
document.getElementById("viewbtn").style.textDecoration="line-through"
for (let index = 0; index < codes.length; index++) {
if(document.getElementById("inno").value==codes[index]){
console.log("found")
document.getElementsByTagName("h1").item(1).innerHTML="found"
document.getElementById("viewbtn").style.cursor="none"
document.getElementById("viewbtn").style.textDecoration="none"
 document.getElementsByTagName("p").item(1).innerHTML="congrate, you have a gift from "+sender[index]
     document.getElementById("gifturl").download=names[index]
 document.getElementById("gifturl").href=gift[index]
}
}

    }
})
document.getElementById("viewbtn").addEventListener("click", ()=>{
    if(document.getElementById("viewbtn").style.textDecoration=="none"){
     document.getElementsByTagName("img").item(0).style.display="none"
          document.getElementById("viewbtn").style.display="none"
               document.getElementsByTagName("p").item(1).innerHTML="check your downloads for the package"
     document.getElementById("gifturl2").click()}
})

