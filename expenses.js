function calculation (fieldId){
let fieldElement = document.getElementById(fieldId)
let incomeField = parseInt(fieldElement.value)
// fieldElement.value= '';
return incomeField;
}
// button interaction
document.getElementById('btn-calculate').addEventListener('click',function(){

const income= calculation('income-field')
 const food= calculation('food-field')   
 const rent= calculation('rent-field')   
 const cloth= calculation('cloth-field')
 
 
 // cost calculation--------
 let totalCostElement= document.getElementById('total-cost')
 let totalCost = parseFloat(totalCostElement.innerText);
totalCost = food+rent+cloth;

if(isNaN(totalCost)){
    alert('please provide an amount')
    return;
   }


 if(totalCost>income ){
    alert('The Expenses can not be more than the Income.');
   return; 
}


totalCostElement.innerText = totalCost;

 
// balance calculation -------
 let totalBalanceElement= document.getElementById('balance')
 let totalBalance = parseFloat(totalBalanceElement.innerText);
 totalBalance = income- totalCost;

 if(isNaN(totalBalance)){
    alert('please provide an Amount')
    return;
   }

totalBalanceElement.innerText = totalBalance;



})