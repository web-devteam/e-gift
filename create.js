let code = ""
let customised = false
let value = ""
let warning = ""
document.getElementById("gen").addEventListener("click", ()=>{
let random = Math.floor(Math.random()*10)
let random1 = Math.floor(Math.random()*10)
let random2 = Math.floor(Math.random()*10)
let random3 = Math.floor(Math.random()*10)
let random4 = Math.floor(Math.random()*10)
code = String(random)+String(random1)+String(random2)+String(random3)+String(random4)
console.log(code)
window.alert("your gift code is "+code+"")
document.getElementById("codeinfo").innerHTML="code : "+code
})
document.getElementById("customise").addEventListener("click", ()=>{
    document.getElementById("blank").style.display="flex"
    document.getElementById("downfile").style.display="none"   
    document.getElementById("intersel").style.display="none"   
    document.getElementById("des").style.display="none"   
    document.getElementById("scratchhead").style.display="none"   
    document.getElementById("scratchtxt").style.display="none" 
    document.getElementById("notetxt").style.display="none"     

if(document.getElementById("type").value=="downloadable"){
 document.getElementsByTagName("h4").item(0).innerHTML="select download item"
 document.getElementById("downfile").style.display="block"   
}
else if(document.getElementById("type").value=="interactive"){
    document.getElementsByTagName("h4").item(0).innerHTML="select interactive gift"
    document.getElementById("intersel").style.display="block"   
    document.getElementById("des").style.display="block"   
}
else if(document.getElementById("type").value=="scratch"){
    document.getElementsByTagName("h4").item(0).innerHTML="scratch card content"
    document.getElementById("scratchhead").style.display="block"   
    document.getElementById("scratchtxt").style.display="block"   
}
else if(document.getElementById("type").value=="note"){
    document.getElementsByTagName("h4").item(0).innerHTML="edit your note"
    document.getElementById("notetxt").style.display="block"   

}

})

document.getElementById("done2").addEventListener("click", ()=>{
    document.getElementById("blank").style.display="none"
    if(document.getElementById("type").value=="downloadable" && document.getElementById("downfile").value!=""){
 customised=true
 value=document.getElementById("downfile").value
  document.getElementById("obj2").innerHTML=""
 warning="NOTE : please attatch your gift"+document.getElementById("downfile").value+"to the email before sending it"
 document.getElementById("obj1").innerHTML="once you click continue your default mail browser will open with a drafted email containg your filled information. There are two steps in sending the email."
 document.getElementById("obj").innerHTML="First insert an image of the "+document.getElementById("downfile").value+" you would like to send to your friend"
}
else if(document.getElementById("type").value=="interactive"  && document.getElementById("intersel").value!="" || document.getElementById("des").value!=""){
    customised=true
    value=document.getElementById("intersel").value+" / custom doodle description ; "+document.getElementById("des").value
    document.getElementById("obj1").innerHTML="once you click continue your default mail browser will open with a drafted email containg your filled information. There are two steps in sending the email."
document.getElementById("obj").innerHTML=""
warning=""
 document.getElementById("obj2").innerHTML=""
    if(document.getElementById("intersel").value=="gif"){warning="NOTE : please attatch your gif or short animated video clip before sending it"
        document.getElementById("obj1").innerHTML="once you click continue your default mail browser will open with a drafted email containg your filled information. There are two steps in sending the email."
         document.getElementById("obj").innerHTML="First insert the gif or short clip you would like to send to your friend"
    }
    if(document.getElementById("des").value!=""){
 document.getElementById("obj2").innerHTML="since you opted for a custom doodle we would include a link in the email for you to try out the doodle we designed. You can write back to us for any changes or adjustment"
    }
     
}
else if(document.getElementById("type").value=="scratch" && document.getElementById("scratchhead").value!=""){
    customised=true
    warning=""
     document.getElementById("obj2").innerHTML=""
    value=document.getElementById("scratchhead").value+document.getElementById("scratchtxt").value
    document.getElementById("obj1").innerHTML="once you click continue your default mail browser will open with a drafted email containg your filled information. There are two steps in sending the email."
     document.getElementById("obj").innerHTML="First (optional) insert an image of the background of the scratch card if you fill the need to but you can skip this step"

}
else if(document.getElementById("type").value=="note"  && document.getElementById("notetxt").value!=""){
customised=true
warning=""
 document.getElementById("obj2").innerHTML=""
document.getElementById("obj1").innerHTML="once you click continue your default mail browser will open with a drafted email containg your filled information."
value=document.getElementById("notetxt").value
 document.getElementById("obj").innerHTML=""
}
else{customised=false}
})
document.getElementById("type").addEventListener("focusout", ()=>{customised=false
if(document.getElementById("type").value=="box"){
customised=true
document.getElementById("obj").innerHTML=""
 document.getElementById("obj2").innerHTML="since you opted for a gift box please describe what the box should contain and attatch all necessary files before sending the email. You can write back to us for any changes or adjustment"
warning=""
}
})
document.getElementById("done").addEventListener("click", ()=>{
if(document.getElementById("name").value!="" && document.getElementById("type").value!="select" && code!="" && customised==true){
    console.log("filled")
    document.getElementById("blank2").style.display="flex"
}
else if(document.getElementById("name").value==""){
    window.alert("please fill in your name")
}
else if(document.getElementById("type").value=="select"){
    window.alert("please select gift type")
}
else if(code==""){
    window.alert("you need to generate your gift code")
}
else if(customised==false){
    window.alert("you need to customise your gift type")
}
})

document.getElementById("continue").addEventListener("click", ()=>{
    let body = "senders name : '"+document.getElementById("name").value
+"' . gift code : '"+code+"' . gift type : '"+document.getElementById("type").value+"' . description : '"+value+"' "+warning
console.log(body)
    location.href="mailto:web.dev.team321@gmail.com"+"?"+"subject=custom gift creation"+"&"+"body="+body; 
    document.getElementById("blank2").style.display="none"
    document.getElementById("blank3").style.display="flex"
})