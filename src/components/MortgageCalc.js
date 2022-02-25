import React from 'react'

export default function MortgageCalc() {

	return (
		<div>
			<form>
				<div class="form-grid">
					<div class="grid-expand">
						<label>Loan Amount: </label><br />
						<input type="number" name="amount" min="0" id="mortLoanAmount" />
					</div>
					
					<div class="grid-expand">
						<label>Down Payment: </label><br />
						<input type="number" name="amount" min="0" id="mortDownPayment" placeholder="20,000" />
					</div>

					<div>
						<label>Loan Term: (years) </label><br />
						<input type="number" name="amount" min="0" id="mortLoanTerm" placeholder="30" />
					</div>

					<div>
						<label>Interest Rate: </label><br />
						<input type="number" name="amount" min="0" id="mortInterestRate" placeholder="4.5" />
					</div>

					<input class="calculateButton" type="button" onclick="calculateMortgageLoan()" value="calculate" />
				</div>
			</form>
			<span id="mortOutput"> </span>
		</div>
	)
}