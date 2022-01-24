let expenses = [];
let histories = "";
let income = 0;
let expense = 0;
let balance = 0;
let inputNumberExpense=document.getElementById('amount');
let inputTextExpense=document.getElementById('text');
let inputIncome=document.getElementById('income');
let historyTable = document.getElementById("history");
let moneyPlus = document.getElementById('money-plus');
let moneyMin = document.getElementById('money-minus');
let balanceDoc = document.querySelector('#balance');
moneyPlus.innerHTML = `<p class="money-plus">+Rp. ${income}</p>`;
moneyMin.innerHTML = `<p class="money-minus">+Rp. - ${expense}</p>`;
balanceDoc.textContent= `Rp. ${balance}`;

const addExpenses=(params)=> {
    if(inputTextExpense.value&&inputNumberExpense.value){
        expenses.push({text: inputTextExpense.value, price: inputNumberExpense.value})
        checkArray(true);
        expense = expense+Number.parseInt(inputNumberExpense.value);
        balance = balance-Number.parseInt(inputNumberExpense.value)
        checkExpense();
        inputNumberExpense.value = "";
        inputTextExpense.value = "";
    }
}

const addIncome=()=>{
    expenses.push({text: "Masuk Income Baru", price: inputIncome.value})
    checkArray(false);
    income = income+Number.parseInt(inputIncome.value);
    balance = balance+Number.parseInt(+inputIncome.value);
    inputIncome.value = "";
    checkExpense();
}

const checkArray=(con)=>{
    if(expenses.length>0&&con){
        histories+=`<li class="minus">${expenses[expenses.length-1].text}<span> - Rp.${expenses[expenses.length-1].price}</span></li>`;
        historyTable.innerHTML = histories
    }
    else {
        histories+=`<li class="plus">${expenses[expenses.length-1].text}<span>  Rp.${expenses[expenses.length-1].price}</span></li>`;
        historyTable.innerHTML = histories
    }
}
const checkExpense=()=>{
    balanceDoc.textContent = `Rp. ${balance}`;
    moneyPlus.innerHTML = `<p class="money-plus">+Rp. ${income}</p>`;
    moneyMin.innerHTML = `<p class="money-minus">+Rp. - ${expense}</p>`;
}