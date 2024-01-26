
let counter=document.getElementById("counterValue")

function onIncrement(){
   let previousCounterValue=counter.textContent;
   let updatedCounterValue=parseInt(previousCounterValue)+1;
   counter.textContent=updatedCounterValue;

   if(updatedCounterValue>0){
counter.style.color="green";

}
else if(updatedCounterValue<0){
    counter.style.color="red";
}
else{
    counter.style.color="black";
}
}

function onDecrement(){
    let previousCounterValue=counter.textContent;

    let updatedCounterValue=parseInt(previousCounterValue)-1;
    counter.textContent=updatedCounterValue;
    if(updatedCounterValue>0){
        counter.style.color= "green";
        
        }
        else if(updatedCounterValue<0){
            counter.style.color= "red";
        }
        else{
            counter.style.color= "black";
        }

}

function onReset(){
    let updatedCounterValue =0;
    counter.textContent=updatedCounterValue;
}