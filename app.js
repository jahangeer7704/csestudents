let root=document.querySelector(":root")
let theme=document.querySelector(".theme>img")
let approvel=document.querySelector(".approvel")
let boolean=true

theme.addEventListener("click",()=>{
    if(boolean){
        boolean=false
        root.style.setProperty("--col1","#e32c9c")
        root.style.setProperty("--col2","#110f14")
        approvel.style.color="white"
        console.log("if");
    }
    else{
        boolean=true
        root.style.setProperty("--col1","#9d22f4")
        root.style.setProperty("--col2","#f2ebef")
        approvel.style.color="black"
        console.log("else");
    }
})