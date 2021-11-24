function Expense(index, date, description, amount) {
  this.index = index;
  this.date = date;
  this.description = description;
  this.amount = amount;
}
let expenses = [];
let totalCost = 0;
//get the form values
$(() => {
  $("[name=date]").val("2021-11-05");
  // alert(new Date($.now()).toLocaleDateString());
  let expenseCount = 0;
  $("form").submit((e) => {
    e.preventDefault();
    let expenseDate = $("[name=date]").val();
    let expenseDescription = $("[name=description]").val();
    let expenseAmount = $("[name=amount]").val();

    date = new Date(expenseDate);

    expenseCount++;

    expenses.push(
      new Expense(expenseCount, expenseDate, expenseDescription, expenseAmount)
    );
    totalCost += parseInt(expenseAmount);
    $("#expense-list").append(`<tr>
    <th scope="row" id="${expenses[expenses.length - 1].index}">1</th>
    <td>${expenses[expenses.length - 1].date}</td>
    <td>${expenses[expenses.length - 1].description}</td>
    <td>${expenses[expenses.length - 1].amount}</td>
    <td><i class="fa fa-trash-o fa-lg "></i></td>
  </tr>`);
    //show total
    $(".total").text(+totalCost);
    $(".fa").click((e) => {
      e.target.parentElement.parentElement.remove();
    });
  });
});
