document.getElementById("done").addEventListener("click", ()=>{
    if(document.getElementById("name").value!="" && document.getElementById("des").value!=""){
        console.log("filled")
        document.getElementById("blank2").style.display="flex"
    }
    else if(document.getElementById("name").value==""){
        window.alert("please fill in your name")
    }
    else if(document.getElementById("des").value==""){
        window.alert("we need some info on your friend")
    }
    })
document.getElementById("continue").addEventListener("click", ()=>{
    let body = "senders name : '"+document.getElementById("name").value
+"' . individual description : '"+document.getElementById("des").value+"' . idea : '"+document.getElementById("des2").value+"'"
console.log(body)
    location.href="mailto:web.dev.team321@gmail.com"+"?"+"subject=custom gift creation"+"&"+"body="+body; 
    document.getElementById("blank2").style.display="none"
    document.getElementById("blank3").style.display="flex"
})