let input1 = document.querySelector(".bill-input");
let select = document.querySelector(".select");
let input2 = document.querySelector(".bill-input-1");
let button = document.querySelector(".btn")
let result = document.querySelector(".result")
console.log(result);

let satya = (e) => {
    e.preventDefault();
    if(input1.value==""){
    alert("enter bill amount");
    }
    else if(select.value=="Select"){
    alert("select service rating")
    }
    else if(input2.value==""){
    alert("How many pepole are sharing the bill ?")
    }
    else{
        let form = (+input1.value) * (+select.value);
        let sum = form / input2.value;
        console.log(sum);
        result.innerText = `Each person has to pay ${sum}`    
    }
}
button.addEventListener("click", satya);