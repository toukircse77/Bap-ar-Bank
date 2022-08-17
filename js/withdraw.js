document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountStr = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountStr);
    document.getElementById('Withdraw-field').value ='';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const PreviousWithdrawTotalstr = withdrawTotalElement.innerText;
    const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalstr);
    const currentWithdrawTotal = PreviousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalstr = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(balanceTotalstr);  

    const  newBallanceTotal = PreviousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBallanceTotal; 

})