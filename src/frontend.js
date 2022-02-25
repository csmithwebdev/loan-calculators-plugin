

//******************************************** AUTO LOANS ************************************************

//********************************************************************************************************

//********************************************************************************************************



function calculateAutoLoan() {

var loanAmount = document.getElementById("loanAmount").value;
var interestRate = document.getElementById("interestRate").value;
var loanTerm = document.getElementById("loanTerm").value;
var downPayment = document.getElementById('downPayment').value;
var tradeValue = document.getElementById('tradeValue').value;

var amount = parseInt(loanAmount);
var months = parseInt(loanTerm);
var down  = parseInt(downPayment);
var trade =  parseInt(tradeValue);
var totalDown  = down + trade;

var annInterest = parseFloat(interestRate);
var monInt = annInterest / 1200;

if(!amount){
        alert('Please add a loan amount');
        return;
      }

      if(!interestRate){
        alert('Please add an interest rate');
        return;
      }

      if(!loanTerm){
        alert('Please add loan term in months');
        return;
      }

      if(!months){
        months = 60;
        loanTerm = document.getElementById('loanTerm').value = '60';
      }

      if(!downPayment){
        down = 0;
        downPayment = document.getElementById('downPayment').value = '0';
      }

      if(!trade){
        trade = 0;
        tradeValue = document.getElementById('tradeValue').value = '0';
      }

      if(!annInterest){
        annInterest = 3.25;
        interestRate = document.getElementById('interestRate').value = '3.25';
      }


      var calculation = ((monInt + (monInt / (Math.pow((1 + monInt), months) -1))) * (amount - (totalDown || 0))).toFixed(2);


	var addCommas = calculation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var result = "Monthly payments: $".concat(addCommas);

	var output = document.getElementById('output');
	output.style.display= 'block';


  document.getElementById("output").innerHTML =  result;

}

//******************************************** MORTGAGE PAYMENTS *****************************************

//********************************************************************************************************

//********************************************************************************************************

function calculateMortgageLoan() {

var mortLoanAmount = document.getElementById("mortLoanAmount").value;
var mortDownPayment = document.getElementById("mortDownPayment").value;
var mortInterestRate = document.getElementById("mortInterestRate").value;
var mortLoanTerm = document.getElementById("mortLoanTerm").value;

var p  = mortLoanAmount - mortDownPayment;
var r = mortInterestRate / 100 / 12;
var n = mortLoanTerm * 12;

if(!mortLoanAmount){
        alert('Please add a loan amount');
        return;
      }

      if(!mortDownPayment){
       p = mortLoanAmount;
      }

      if(!mortLoanTerm){
        alert('Please add loan term in years');
        return;
      }     

      if(!mortInterestRate){
         alert('Please add your interest rate');
         return;
      }


var mortCalculation = Math.round(p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) -1));

var addMortCommas = mortCalculation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var mortResult = "Monthly payments: $".concat(addMortCommas);

var mortOutput = document.getElementById('mortOutput');
mortOutput.style.display= 'block';

document.getElementById("mortOutput").innerHTML = mortResult;


}


//******************************************** DEBT REPAYMENT ********************************************

//********************************************************************************************************

//********************************************************************************************************

function calculateDebtRepayment() {

var balanceOwed = document.getElementById("blanceOwed").value;
var drInterestRate = document.getElementById("drInterestRate").value;
var drExpectedPayment = document.getElementById("drExpectedPayment").value;
var desiredPayoffTime = document.getElementById("desiredPayoffTime").value;

var monthlyRate = drInterestRate / 100;
var numYears = desiredPayoffTime / 12; //Converts to months

var AA = Math.pow(1 + monthlyRate/12, numYears*12);
var BB = (1 - (1 / (AA))) / (monthlyRate/12);
var debtPaymentAmount = 10000 / BB;

if(!balanceOwed){
        alert('Please add your balance owed on the account.');
        return;
      }

      if(!drInterestRate){
       alert('Please add the interest rate.');
       return;
      }

      if(!drExpectedPayment || !desiredPayoffTime){
        alert('Please add either "Expected Monthly Payment" or "Desired Payoff Time"');
        return;
      }     

//console.log(debtPaymentAmount);

var radios = document.getElementsByTagName('input');
var value;
for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        value = radios[i].value; 
        if(value === 'expected') {
          // SHOW OUTPUT FOR EXPECTED
          /*Your estimated monthly payment
          $200.00

          Months to pay off
          6 months

          Total principal paid
          $1,000.00

          Total interest paid
          $57.46*/
          var debtResult = "Expected payments:";

          var debtRepayOutput = document.getElementById('debtRepayOutput');
          debtRepayOutput.style.display= 'block';
          document.getElementById("debtRepayOutput").innerHTML = debtResult;



        } else {
          var debtResult = "Desired Months:";

          var debtRepayOutput = document.getElementById('debtRepayOutput');
          debtRepayOutput.style.display= 'block';
          document.getElementById("debtRepayOutput").innerHTML = debtResult;
        }
        

    }
}


///------------------------------------------- GET NUMBER OF PAYMENTS LEFT TILL LOAN IS PAID OFF

var PV = balanceOwed;
var r = drInterestRate;
var i = (drInterestRate/100)/12; //translate interest to monthly
var R = drExpectedPayment; //amount borrower decides to pay. (We should also make sure this amount covers the minimum payment required.)

var equation = (PV * i / R);
var subtractOne = 1 - equation;
var addOne = 1 + i;
var logOne = (Math.log10(subtractOne) * -1);
var logTwo = Math.log10(addOne);

var getNumPayments = logOne / logTwo;


//console.log(getNumPayments);




}















