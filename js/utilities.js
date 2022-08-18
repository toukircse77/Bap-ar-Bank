function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    inputField.value = '';
    return inputFieldValue;
}
// function getElementById (elementId){
//     const Element = document.getElementById(elementId);
//     const ElementValueStr =Element.innerText;
//     const Value = parseFloat(ElementValueStr);
//     return Value;
// }
function getTextElementById (elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueStr = textElement.innerText;
    const Value = parseFloat(textElementValueStr);
    return Value;
}

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}

document.getElementById('btn-deposite').addEventListener('click',function(){

    const newDepositAmount = getInputValueById('deposite-field');
    const PreviousDepositTotal = getTextElementById('deposite-total');
    const newDepositTotal = PreviousDepositTotal + newDepositAmount;
    setTextElementValueById('deposite-total',newDepositTotal);
    const PreviousBalanceTotal = getTextElementById('balance-total');
    const newBalanceTotal = PreviousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithDrawAmount = getInputValueById('Withdraw-field');
    const previousWithdrawTotal = getTextElementById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    setTextElementValueById('withdraw-total',newWithdrawTotal);
    const PreviousBalanceTotal = getTextElementById('balance-total');
    const newBalanceTotal = PreviousBalanceTotal - newWithDrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

})



