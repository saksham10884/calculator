var n = ""
let m = document.getElementById("moniter")
let ans = 0
let lstent = ""
let c = 0
const r=false
function lastent(x) {
    for (i = x.length - 2; i >= 0; i--) {
        if (!(x[i] in ["+", "-", "/", "*","("])) {
            lstent = x[i] + lstent
        }
    }
    return lstent
}
function fact(x){
    x=parseInt(x)
    if(x==0){
        return "1"
    }
    console.log(x)
    return (x*fact((x-1).toString()))
}
Array.from(document.getElementsByClassName("num")).forEach((e) => {
    e.addEventListener("click", () => {
        n += e.innerHTML
        m.innerHTML = m.innerHTML + e.innerHTML
    })
})
Array.from(document.getElementsByClassName("op")).forEach((e) => {
    e.addEventListener("click", () => {
        n += e.innerHTML
        m.innerHTML += e.innerHTML
    })
})
document.getElementById("equal").addEventListener("click", () => {
    console.log(n)
    ans = eval(n)
    m.innerHTML =ans
    n = ans.toString()
})
document.getElementById("start").addEventListener("click", () => {
    m.innerHTML =""
    n = ""
})
document.getElementById("more").addEventListener("click", () => {
    if (document.getElementById("optbox").style.zIndex == 0) {
        document.getElementById("optbox").style.transform = "rotate3d(0,1,0,0deg)"
        document.getElementById("numbox").style.transform = "rotate3d(0,1,0,180deg)"
        document.getElementById("optbox").style.zIndex = 2
    }
    else{
        document.getElementById("optbox").style.transform = "rotate3d(0,1,0,180deg)"
        document.getElementById("numbox").style.transform = "rotate3d(0,1,0,0deg)"
        document.getElementById("optbox").style.zIndex = 0
    }
    console.log("clicked")
})
Array.from(document.getElementsByClassName("trigo")).forEach((e)=>{
    e.addEventListener("click",()=>{
        m.innerHTML += e.innerHTML+"("
        if(document.getElementById("rad").style.backgroundColor=="white"){
            n += "Math."+e.innerHTML+"("
        }
        else{
            n += "Math."+e.innerHTML+"((Math.PI/180)*"
        }
    })
})
document.getElementById("deg").addEventListener("click",()=>{
    document.getElementById("deg").style.backgroundColor="white"
    document.getElementById("deg").style.color="black"
    document.getElementById("rad").style.backgroundColor="black"
    document.getElementById("rad").style.color="white"
})
document.getElementById("rad").addEventListener("click",()=>{
    document.getElementById("deg").style.backgroundColor="black"
    document.getElementById("deg").style.color="white"
    document.getElementById("rad").style.backgroundColor="white"
    document.getElementById("rad").style.color="black"
})
document.getElementById("del").addEventListener("click",()=>{
    n=n.slice(0,n.length-1)
    m.innerHTML=m.innerHTML.slice(0,m.innerHTML.length-1)
})
document.getElementById("log").addEventListener("click",()=>{
    n +="Math.log10("
    m.innerHTML += "log("
})
document.getElementById("ln").addEventListener("click",()=>{
    n +="Math.log("
    m.innerHTML += "ln("
})
document.getElementById("sqroot").addEventListener("click",()=>{
    n +="Math.sqrt("
    m.innerHTML += "sqroot("
})
document.getElementById("curoot").addEventListener("click",()=>{
    n +="Math.cbrt("
    m.innerHTML += "cbroot("
})
document.getElementById("e").addEventListener("click",()=>{
    n +="Math.E"
    m.innerHTML += "e"
})
document.getElementById("pow").addEventListener("click",()=>{
    if(n[n.length-1]=="E"){
        n=n.slice(0,n.length-6)+ "Math.pow(Math.E,"
    }
    else{
        n =n.slice(0,n.length-1)+`Math.pow(${n[n.length-1]},`
    }
    m.innerHTML += "^("
})
document.getElementById("fact").addEventListener("click",()=>{
    n = n.slice(0,n.length-1)+fact(n[n.length-1]).toString()
    m.innerHTML += "!"
})
document.getElementById("pi").addEventListener("click",()=>{
    n +="Math.PI"
    m.innerHTML += "pi"
})
document.getElementById("ans").addEventListener("click",()=>{
    n += ans.toString()
    m.innerHTML += ans.toString()
})