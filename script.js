const calculatorDisplay=document.querySelector('h1');
const inputBtns=document.querySelectorAll('button');
const clearBtn=document.getElementById('clear-btn');

function sendNumberValue(number) {
    const displayValue=calculatorDisplay.textContent;
    calculatorDisplay.textContent=displayValue==='0' ? number: displayValue + number;


}
function addDecimal(){
    if (!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent=`${calculatorDisplay.textContent}.`
    }
}
  //add event listner for numbers , operator,decimal buttons
  inputBtns.forEach((inputBtn)=>{
    if (inputBtn.classList.length===0){
      inputBtn.addEventListener('click',()=>sendNumberValue(inputBtn.value));
    }
    else if(inputBtn.classList.contains('operator')){
       inputBtn.addEventListener('click',()=>sendNumberValue(inputBtn.value));
    }
    else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click',()=>addDecimal());
    }
  });
  
  //reset display
  function resetAll(){
    calculatorDisplay.textContent='0';
  }
  //event lsitner
  clearBtn.addEventListener('click', resetAll);