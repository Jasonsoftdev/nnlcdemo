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