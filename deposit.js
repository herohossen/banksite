//Handle deposit button event
// document.getElementById('deposit-button').addEventListener('click', function ()
document.getElementById('deposit-button').addEventListener('click', function ()
{
  const depositInput= document.getElementById('deposit-input');
  const depositAmount=depositInput.value;
 // console.log(depositAmount);
  const depositTotal=document.getElementById('deposit-total');
 
 const previousDepositAmount = depositTotal.innerText;
 const newDepositTotal =(parseFloat(previousDepositAmount) + parseFloat(depositAmount)) ;
 console.log(newDepositTotal);
  
 depositTotal.innerText=newDepositTotal;
  
  depositInput.value='';
}
)