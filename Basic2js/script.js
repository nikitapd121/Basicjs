let s1=document.getElementById("sq1");
let s2=document.getElementById("sq2");
let s3=document.getElementById("sq3");
let s4=document.getElementById("sq4");
s1.addEventListener("mouseenter",function(){
    let a=getrandom();
    let b=getrandom();
    let c=getrandom();
    s1.style.backgroundColor=rgb(a,b,c);
    s1.innerHTML=getrandom();
})
s1.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s1.innerHTML=1;
})
s2.addEventListener("mouseenter",function(){
    let a=getrandom();
    let b=getrandom();
    let c=getrandom();
    s2.style.backgroundColor=rgb(a,b,c);
    s2.innerHTML=getrandom();
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
    s2.innerHTML=2;
})
s3.addEventListener("mouseenter",function(){
    let a=getrandom();
    let b=getrandom();
    let c=getrandom();
    s3.style.backgroundColor=rgb(a,b,c);
    s3.innerHTML=getrandom();
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";
    s3.innerHTML=3;
})
s4.addEventListener("mouseenter",function(){
    let a=getrandom();
    let b=getrandom();
    let c=getrandom();
    s4.style.backgroundColor=rgb(a,b,c);
    s4.innerHTML=getrandom();
})
s4.addEventListener("mouseleave",function(){
    s4.style.backgroundColor="white";
    s4.innerHTML=4;
})
function getrandom(){
    return Math.floor(Math.random()*256);
}
function rgb(a, b, c) {
    return `rgb(${a}, ${b}, ${c})`;
}