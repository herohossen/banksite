//Handle deposit button event
// document.getElementById('deposit-button').addEventListener('click', function ()
document.getElementById('deposit-button').addEventListener('click', function ()
{
  const depositInput= document.getElementById('deposit-input');
  const depositValue=depositInput.value;
  console.log(depositValue);
  const depositTotal=document.getElementById('deposit-total');
  depositTotal.innerText=depositValue;
  //console.log(depositTotal.innerText);
  depositInput.value='';
}
)