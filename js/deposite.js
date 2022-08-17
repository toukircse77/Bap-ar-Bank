// step 1 ; add even handler deposite button 
document.getElementById('btn-deposite').addEventListener('click',function(){
    // step two get the deposite amount from input deposit field
    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value='';
    // get the deposite total amount 
    const depositeTotalElement = document.getElementById('deposite-total');
    const PreviousDepositTotalstr = depositeTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalstr);

    const currentDepositeTotal = PreviousDepositTotal + newDepositAmount;
    depositeTotalElement.innerText = currentDepositeTotal;
    console.log(currentDepositeTotal);

    // balance section 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalstr = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(balanceTotalstr);
    const currentTotalBalance = PreviousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentTotalBalance;
})









// widtdraw section starts 
 
// document.getElementById('btn-withdraw').addEventListener('click',function(){
//         const withdrawField = document.getElementById('Withdraw-field');
//         const PreviousWithdrawAmountString = withdrawField.value;
//         const previousWithdrawtAmount = parseFloat(PreviousWithdrawAmountString );
//         withdrawField.value='';
//         console.log(previousWithdrawtAmount);

//         const withdrawTotalElement = document.getElementById('withdraw-total');
//     const PreviousWithdrawTotalstr = withdrawTotalElement.innerText;
//     const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalstr);
//     const currentWithdrawTotal = PreviousWithdrawTotal + previousWithdrawtAmount;
//     withdrawTotalElement.innerText = currentWithdrawTotal;
//     console.log(currentWithdrawTotal);

//     const balanceTotalElement = document.getElementById('balance-total');
//     const balanceTotalstr = balanceTotalElement.innerText;
//     const PreviousBalanceTotal = parseFloat(balanceTotalstr);
//     const presentTotalBallance = PreviousBalanceTotal - previousWithdrawtAmount;
//     balanceTotalElement.innerText = presentTotalBallance;
//     console.log(presentTotalBallance);


// })
