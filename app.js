let root=document.querySelector(":root")
let theme=document.querySelector(".theme>img")
let approvel=document.querySelector(".approvel")
let boolean=true
let ls=localStorage

theme.addEventListener("click",themeFun)

function themeFun(){
    if(boolean){
        boolean=false
        root.style.setProperty("--col1","#e32c9c")
        root.style.setProperty("--col2","#110f14")
        approvel.style.color="white"
    ls.setItem("root",JSON.stringify(boolean))

    }
    else{
        boolean=true
        root.style.setProperty("--col1","#9d22f4")
        root.style.setProperty("--col2","#f2ebef")
        approvel.style.color="black"
        ls.setItem("root",JSON.stringify(boolean))

    }
}
function themeSetter(){
let boolGet=ls.getItem("root")
if (boolGet) {
    let themeFunCaller=JSON.parse(boolGet)
   if(themeFunCaller==false){
    themeFun()
   }
}
}

themeSetter()


