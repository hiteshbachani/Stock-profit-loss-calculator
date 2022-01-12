var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#Output");

// function errorHandler(error) {
    

    
// }

function clickHandler() {


var ip = Number(initialPrice.value);
var qty = Number(quantity.value);
var cp = Number(currentPrice.value);





 calcualteProfitLoss(ip, qty, cp);



}

function calcualteProfitLoss(initial, quantity, current){

  
    
    if(current>initial){
        var profit = current - initial;
        var profitPercent = profit/initial * 100;
 
    output.style.color = "green";
    output.innerText = `profit is ${quantity*profit.toFixed(2)} & profit % is ${quantity*profitPercent.toFixed(2)}%`;
     
    }
    else if(initial>current){
        var loss = initial - current;
        var lossPercent = loss/initial * 100;
      

    output.style.color = "red";
    output.innerText = `loss is ${quantity*loss.toFixed(2)} & loss% is ${quantity*lossPercent.toFixed(2)}%`;
    }
     else {
         output.style.color = "black";
         output.innerText = "No Pain No Gain; No Gain No Pain";
     }
   
    

   
    


 
     
}


// function showOutput(resultMessage){

// }


 submitBtn.addEventListener("click", clickHandler);


