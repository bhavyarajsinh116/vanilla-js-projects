const testimonial =[
    {
        name:"Sarah T.",
        photoUrl:"pexels-italo-melo-881954-2379004.jpg",
        text:"Plus, the security features give me peace of mind. I feel confident knowing that my data is protected, which is so important in today’s digital world",
    },
    {
        name:"Sarah Thompson.",
        photoUrl:"pexels-stefanstefancik-91227.jpg" ,
        text:"I've been using Apple products for years, and they never disappoint! The seamless integration between devices makes my life so much easier. Plus, the design and user experience are simply unmatched!",
    },
    {
        name:"Michael Johnson",
        photoUrl:"young-bearded-man-with-striped-shirt.jpg" ,
        text:"Plus, the security Switching to  interface and stunning design have made my daily tasks so much more enjoyable. I can't imagine going back to anything else! give me peace of mind. I feel confident knowing that my data is protected, which is so important in today’s digital world",
    },
];
const photoUrlEl=document.querySelector("img");
const textEL=document.querySelector(".text");
const usernsmeEl=document.querySelector(".username");

let idx=0;
updateTestimonial();
function updateTestimonial(){
    const {name,photoUrl,text} = testimonial[idx];
    photoUrlEl.src=photoUrl;
    textEL.innerText=text;
    usernsmeEl.innerText=name;
    idx++
    if(idx==testimonial.length){
        idx=0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 2000);
}