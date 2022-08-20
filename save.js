



document.getElementById('btn-saving').addEventListener('click',function(){

    let savingFieldElement = document.getElementById('saving-field')
    let savingField = savingFieldElement.value;
     
     
    


    if(savingField> 100){
        alert('please provide valid percentage')
    }

    let totalBalanceElement= document.getElementById('balance')
    let totalBalance = parseFloat(totalBalanceElement.innerText);

    let totalSavingElement= document.getElementById('total-saving')
    let totalSaving = parseFloat(totalSavingElement.innerText);
     totalSaving = totalBalance*(savingField/100);


     totalSavingElement.innerText = totalSaving;
     

    let balanceLeftElement= document.getElementById('balance-left')
    let balanceLeft = parseFloat(balanceLeftElement.innerText)
    balanceLeft = totalBalance-totalSaving;
    balanceLeftElement.innerText = balanceLeft;

})