function Expense(index, date, description, amount) {
  this.index = index;
  this.date = date;
  this.description = description;
  this.amount = amount;
}
let calculateCost = (expensesArray) => {
  console.log(expensesArray);
  finalCost = 0;
  if (!expensesArray) {
    return 0;
  } else {
    expensesArray.forEach((expense) => {
      finalCost += parseInt(expense.amount);
    });
    return finalCost;
  }
};

let expenses = [];
let totalCost = 0;
//get the form values
$(() => {
  $("[name=date]").val("2021-11-05");
  // alert(new Date($.now()).toLocaleDateString());
  let expenseCount = 0;
  $("form").submit((e) => {
    e.preventDefault();
    let expenseDate = $("[name=date]");
    let expenseDescription = $("[name=description]");
    let expenseAmount = $("[name=amount]");

    if(!expenseDate.val() || !expenseDescription.val() || !expenseAmount.val()){
      alert("Please input all values");
      return;
    }
    else{
    date = new Date(expenseDate);

    expenseCount++;

    expenses.push(
      new Expense(expenseCount, expenseDate.val(), expenseDescription.val(), expenseAmount.val())
    );

    totalCost = calculateCost(expenses);

    $("#expense-list").prepend(`<tr>
    <th scope="row" id="">1</th>
    <td>${expenses[expenses.length - 1].date}</td>
    <td>${expenses[expenses.length - 1].description}</td>
    <td>${expenses[expenses.length - 1].amount}</td>
    <td><i class="fa fa-trash-o fa-lg" id="${
      expenses[expenses.length - 1].index
    }"></i></td>
  </tr>`);
    //show total
    $(".total").text(totalCost);
    $(".fa").click((e) => {
      let expenseIndex = e.target.id;
      expenses = expenses.filter((expense) => !(expense.index == expenseIndex));
      console.log(expenseIndex);
      e.target.parentElement.parentElement.remove();
      $(".total").text(calculateCost(expenses));
    });
    
  // expenseDate.val(" ");
  expenseDescription.val(" ");
  expenseAmount.val(" ");
  } //close else statement
});

});
