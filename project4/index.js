const btnEl=document.querySelector(".btn");
const closeIconBtn=document.querySelector(".close-icon");
const trailorContainerEl=document.querySelector(".trailer-container");
const videoEl=document.querySelector("video");
btnEl.addEventListener("click",()=>{
    trailorContainerEl.classList.remove("active");
})
closeIconBtn.addEventListener("click",()=>{
    trailorContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime=0;
})