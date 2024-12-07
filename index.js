let codes = [10101, 12012, 11122, 10234, 12021, 59361, 66773, 90250, 12907, "14523"]
let sender = ["emmanuel", "emmanuel", "emmanuel", "emmanuel", "emmanuel", "unknown", "unknown", "unknown", "emmanuel", "emmanuel"]
let gift = ["wall1.jpg", "pdf2.pdf", "wall3.jpg", "wall4.jpg", "wall5.jpg",
            "note: this is a test note no 1 , note: this is a test note no 2, scratch card: head; scratch head; body; scratch body, downloadable file: wall3.jpg", "head: happy birthday body: i wish you long life",
            "this is a test note info checked", "images.png", "broken.pdf"]
let names = [".wallpaper from e~gift", ".novel from e~gift", ".wallpaper from e~gift", ".wallpaper from e~gift", ".wallpaper from e~gift", "box", "scratch", "note", "wallpaper from e~gift", ".novel from e~gift"]
let ran = ["unrapping gifts", "preparing package", "tying ribbons", "purchasing gift bags", "stamping packages", "delivering packages", "finishing up", "tying friends", "opening gifts", "scanning gift code",
    "searching", "tearing package", "compressing gifts", "chatting with some friends", "checking my email"]
let check = ""
 let part = ""
 let publicindex=""
 let publicarray = ""
 let current = 0
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
 part = names[index].indexOf(" from e~gift")
 check=names[index]
 let head = gift[index].indexOf("head: ")
 let body = gift[index].indexOf("body: ")
 head=gift[index].slice(head+5, body)
 body=gift[index].slice(body+5, ) 
 if(names[index]=="scratch"){document.getElementById("scratchhead").innerHTML=head
 document.getElementById("scratchtxt").innerHTML=body}
publicindex=index
if(names[index]=="box"){
    publicarray=gift[index].split(",")
    console.log(publicarray)
    document.getElementById("h3txt").innerHTML=sender[index]+" sent you a gift box"
}
console.log(part)
document.getElementsByTagName("h1").item(1).innerHTML="found"
document.getElementById("viewbtn").style.cursor="pointer"
document.getElementById("viewbtn").style.textDecoration="none"
 document.getElementsByTagName("p").item(1).innerHTML="congrate, you have a gift from "+sender[index]
 if(names[index]=="note"){ document.getElementsByTagName("p").item(1).innerHTML="congrate, you have a letter/note from "+sender[index]}
 document.getElementById("gifturl").href=gift[index]
 document.getElementById("gifturl").download=names[index]

}
}

    }
})

document.getElementById("viewbtn").addEventListener("click", ()=>{
    if(document.getElementById("viewbtn").style.textDecoration=="none" && part!=-1){
     document.getElementsByTagName("img").item(0).style.display="none"
          document.getElementById("viewbtn").style.display="none"
               document.getElementsByTagName("p").item(1).innerHTML="check your downloads for the package"
 document.getElementById("gifturl").click()
 document.getElementById("gifturl2").click()}
else if(document.getElementById("viewbtn").style.textDecoration=="none" && check=="scratch"){
    scratch()
document.getElementById("plain1").style.display="flex"
window.addEventListener("resize", ()=>{window.alert("the current page has be resized and the page needs to reload to adjust scratch card settings")
    location.reload()
})
}
else if(document.getElementById("viewbtn").style.textDecoration=="none" && check=="note"){
    document.getElementById("plain2").style.display="flex"
    document.getElementById("notetxt").innerHTML=gift[publicindex]
}
else if(document.getElementById("viewbtn").style.textDecoration=="none" && check=="gif"){
    document.getElementById("plain4").style.display="flex"

}
else if(document.getElementById("viewbtn").style.textDecoration=="none" && check=="doodle"){
    document.getElementById("plain5").style.display="flex"

}
else if(document.getElementById("viewbtn").style.textDecoration=="none" && check=="box"){
    document.getElementById("plain3").style.display="flex" 

    for (let index = 0; index < publicarray.length; index++) {
let list = publicarray[index].split(":")
let create = document.createElement("li")
create.innerHTML=list[0]
document.getElementById("prop").append(create)
}
}
})
document.getElementById("open").addEventListener("click", ()=>{ document.getElementById("plain3").style.display="none" 
    document.getElementById("boxprev").style.display="flex" ; document.getElementById("boxnext").style.display="flex" 
giftbox()
    document.getElementById("packtop").style.display="flex"
})
document.getElementById("boxnext").addEventListener("click", ()=>{
    current=current+1
    giftbox()
})
document.getElementById("boxprev").addEventListener("click", ()=>{
    
  if(current>0){current=current-1; console.log(current)}
  giftbox()
})

//gift box----------------------------------------
function giftbox (){
let list = publicarray[current].split(":")
console.log(list[0])

list[0]=list[0].trimEnd()
list[0]=list[0].trimStart()
    document.getElementById("packtop").innerHTML="item "+(current+1)+"/"+publicarray.length+" : "+list[0]
if(list[0]=="downloadable file"){
    document.getElementById("plain2").style.display="none"
document.getElementById("plain3").style.display="none"
document.getElementById("plain4").style.display="none"
document.getElementById("plain5").style.display="none"
document.getElementById("plain1").style.display="none"
    document.getElementsByTagName("img").item(0).style.display="none"
         document.getElementById("viewbtn").style.display="none"
              document.getElementsByTagName("p").item(1).innerHTML="check your downloads for the package"
 document.getElementById("gifturl").href=list[1]
 document.getElementById("gifturl").download="package from E ~gift"
document.getElementById("gifturl").click()
document.getElementById("gifturl2").click()}
else if(list[0]=="scratch card"){
    let list2 = list[1].split(";")
    console.log(list2)
   scratch()
document.getElementById("scratchhead").innerHTML=list2[1]
document.getElementById("scratchtxt").innerHTML=list2[3]
document.getElementById("plain1").style.display="flex"
document.getElementById("plain2").style.display="none"
document.getElementById("plain3").style.display="none"
document.getElementById("plain4").style.display="none"
document.getElementById("plain5").style.display="none"
window.addEventListener("resize", ()=>{window.alert("the current page has be resized and the page needs to reload to adjust scratch card settings")
   location.reload()

})
}
else if(list[0]=="note"){
   document.getElementById("plain2").style.display="flex"
   document.getElementById("plain1").style.display="none"
document.getElementById("plain3").style.display="none"
document.getElementById("plain4").style.display="none"
document.getElementById("plain5").style.display="none"
   document.getElementById("notetxt").innerHTML=list[1]
   console.log("yes")
}
else if(list[0]=="gif"){
    document.getElementById("plain4").style.display="flex"

}
else if(list[0]=="doodle"){
    document.getElementById("plain5").style.display="flex"

}
}
//end--------------------

// scratch card -------------------------------------------------------
function scratch (){let add = 0
   for (let index = 0; index < 50; index++) {
let create = document.createElement("div")
create.style.width="10px"
create.className="row"
if(window.innerWidth<550){create.style.width=((((window.innerWidth*90)/100)*2)/100)+"px"}
create.style.position="absolute"
create.style.marginLeft=add+"px"
if(window.innerWidth<550){add=add+((((window.innerWidth*90)/100)*2)/100)}
else{add=add+10}
document.getElementById("card").append(create)

}
let value = 0

for (let index2 = 0; index2 < 50; index2++) {
  for (let index = 0; index < 30; index++) {
let create = document.createElement("div")
create.style.width="10px"
create.style.height="10px"
if(window.innerWidth<550){create.style.width=((((window.innerWidth*90)/100)*2)/100)+"px"
}
create.style.backgroundColor="white"
create.id="blank"+value

value=value+1
document.getElementsByClassName("row").item(index2).append(create)
}  
} 
let size = 0
document.getElementById("size2").addEventListener("click", ()=>{size=2
      document.getElementById("size2").style.borderBottom="1px solid black"
            document.getElementById("size3").style.borderBottom="0px"
        document.getElementById("size4").style.borderBottom="0px"
})
document.getElementById("size3").addEventListener("click", ()=>{size=3
      document.getElementById("size3").style.borderBottom="1px solid black"
            document.getElementById("size4").style.borderBottom="0px"
        document.getElementById("size2").style.borderBottom="0px"
})
document.getElementById("size4").addEventListener("click", ()=>{size=4
    document.getElementById("size4").style.borderBottom="1px solid black"
      document.getElementById("size3").style.borderBottom="0px"
        document.getElementById("size2").style.borderBottom="0px"})
for (let index = 0; index < 1500; index++) {
    document.getElementById("blank"+index).addEventListener("mouseover", ()=>{
     
        if(size==2){document.getElementById("blank"+index).style.backgroundColor="transparent"
            document.getElementById("blank"+(index+1)).style.backgroundColor="transparent"
        }
        else if(size==3){document.getElementById("blank"+index).style.backgroundColor="transparent"
           document.getElementById("blank"+(index+1)).style.backgroundColor="transparent"
             document.getElementById("blank"+(index+30)).style.backgroundColor="transparent"
        }
        else if(size==4){document.getElementById("blank"+index).style.backgroundColor="transparent"
              document.getElementById("blank"+(index+1)).style.backgroundColor="transparent"
                document.getElementById("blank"+(index+30)).style.backgroundColor="transparent"
                  document.getElementById("blank"+(index+31)).style.backgroundColor="transparent"
        }

    })
    
}
}

//end ---------------------------------------
