function validateOrderQty(e){
    e.preventDefault();

    // Get the requested quantity
    let orderQty = parseInt(document.getElementById('pbeOrderQty').value);

    // If quantity is above or below the allowed then show alert message
    if(isNaN(orderQty) || orderQty < 10 || orderQty > 200){
        alert("Please limit your order to a quantity between 10 and 200.");
    }else{
            // Show acceptance alert message if allowed quantity
        alert("Your order has been submitted");
        document.getElementById('pbeOrderQty').value = "";
    }


}






document.querySelector('#pbeOrderSubmit').addEventListener('cluck',validateOrder);

document.querySelector('#pbeDescCharacteristics header a').addEventListener('click',function(e){
    document.getElementById('pbeDescCharacteristics').classList.toggle('pbeDescAccordionCollapsed');
});

document.querySelector('#pbeDescHistory header').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementByClass('pbeDescHistory').classList.toggle('pbeDescAccordionCollapsed');
});

