function Expense(index,date, description, amount) {
  this.index=index;
  this.date = date;
  this.description = description;
  this.amount = amount;
}
let expenses=[];

//get the form values
$(()=>{
  $("[name=date]").val("2021-11-05");
  // alert(new Date($.now()).toDateString("YY-MM-DD"));
  let expenseCount=0;
  $("form").submit((e) => {
    e.preventDefault();
    let expenseDate = $("[name=date]").val();
    // alert(expenseDate);
    let expenseDescription = $("[name=description]").val();
    let expenseAmount = $("[name=amount]").val();
    expenseCount++;
    expenses.push(new Expense(expenseCount,expenseDate,expenseDescription,expenseAmount));
    console.log(expenses);
    $('#expense-list').append(`<tr>
    <th scope="row">1</th>
    <td>24/11/2021</td>
    <td>${expenses[expenses.length-1].description}</td>
    <td>${expenses[expenses.length-1].amount}</td>
  </tr>`);
  });
});
