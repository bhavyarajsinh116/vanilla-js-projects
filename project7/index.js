const inputEl=document.getElementById("input");
const errorEl=document.getElementById("error");
const resuleEl=document.getElementById("result");
let errorTime;
let completeTime;
function updateResult() {
    // console.log(inputEl.value);
    if (inputEl.value<=0 || isNaN(inputEl.value)) {
        errorEl.innerText="Please Enter a valid number !";
        clearTimeout(errorTime);
        errorTime=setTimeout(()=>{
            errorEl.innerHTML="";
            inputEl.value="";
        },2000)

    }else{
        resuleEl.innerText=(+inputEl.value/2.2).toFixed(2);
        clearTimeout(completeTime)
        completeTime=setTimeout(()=>{
            resuleEl.innerText="";
            inputEl.value="";
        },10000)
    }
}

inputEl.addEventListener("input",updateResult)