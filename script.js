// COUNTER ANIMATION
const counters=document.querySelectorAll('.counter');
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
let counter=entry.target;
let target=+counter.dataset.target;
let count=0;
let update=()=>{
let increment=target/100;
if(count<target){
count+=increment;
counter.innerText=Math.ceil(count);
requestAnimationFrame(update);
}else{
counter.innerText=target+"+";
}
};
update();
observer.unobserve(counter);
}
});
});
counters.forEach(c=>observer.observe(c));

// FAQ
document.querySelectorAll('.faq-question').forEach(btn=>{
btn.addEventListener('click',()=>{
let answer=btn.nextElementSibling;
answer.style.maxHeight=answer.style.maxHeight?null:answer.scrollHeight+"px";
});
});

// HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// CLOSE MENU WHEN CLICKING LINK

document.querySelectorAll(".nav-menu a").forEach(link=>{
  link.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
