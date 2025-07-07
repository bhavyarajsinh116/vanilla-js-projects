const btnEl=document.getElementById("calculate");
    const billEl=document.getElementById("bill");
    const tipEl=document.getElementById("tip");
    const totalSpan=document.getElementById("total");

btnEl.addEventListener("click",()=>{
   const billValue=billEl.value;
   const tipValue=tipEl.value;
    // const totalValue = billValue*(1+tipValue/100);
    const totalValue =  (parseInt(tipValue)*parseInt(billValue)/100)+parseInt(billValue) ;
    // console.log(totalValue);
     totalSpan.innerText= `$${totalValue}`;
    
})
