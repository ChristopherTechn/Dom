const amount = document.querySelector('#amount')
const trans = document.querySelector('#trans')
const form = document.querySelector('#form')
const description = document.querySelector('#desc')
// const items = [

// {id: 1,  desc:"Flower", amount:"4000"},
// {id: 2 , desc:"Flower" ,amount:"4000"},
// {id: 3 , desc:"Flower" ,amount:"4000"}

// ]

// let transaction = items;

const listings = document.querySelector('.trans')


const list = (transaction)=>{


const sign = transaction.amount < 0 ? "-" : "+"    
const item = document.createElement('li')
item.classList.add(transaction.amount < 0 ?  "exp" : "inc")
item.innerHTML =  `${transaction.description} <span> ${sign} ${Math.abs(transaction.amount)} </span>
 <button class="btn-del" onclick="removeTrans${transaction.id}"> del</button>`
 
 
 trans.appendChild(item)
 console.log(transaction)
}


const localStorageTrans = JSON.parse(localStorage.getItem("trans"));
let transactions = localStorage.getItem("trans") !== null ? localStorageTrans : [];




function addTransaction(e){
  e.preventDefault();
  if(description.value.trim() == "" || amount.value.trim() == ""){
    alert("Please enter a description and amount")

  }else{
    const transaction = {
        id : uniqueId(),
        description: description.value,
        amount: +amount.value
    };
    transactions.push(transaction)
    list (transaction)
    description.value = "";
    amount.value = "";



  }
}

form.addEventListener("submit" , addTransaction)



function uniqueId(){
    return Math.floor(Math.random()  * 100000)

}



// function removeTrans(id) {

//    if(confirm("Are you sure you want to delete the "))

// }
