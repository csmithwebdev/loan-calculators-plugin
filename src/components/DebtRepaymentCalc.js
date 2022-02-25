import React from 'react'

export default function DebtRepaymentCalc() {


	function calculateDebtRepayment() {
		console.log('hello')
	}

	return (
		<div>
			<form>
				<div class="form-grid">
					<div>
						<label>Balance Owed: </label><br />
						<input type="number" name="amount" min="0" id="blanceOwed" placeholder="10,000" />
					</div>
					
					<div>
						<label>Interest Rate: </label><br />
						<input type="number" name="amount" min="0" id="drInterestRate" placeholder="19.5" />
					</div>

					<div class="grid-expand">
					<p>Input only one of the following:</p>
					</div>

					<div>
						<input type="radio" name="debt" id="expectedMonthly" value="expected" checked/>
						<label for="Expected monthly payment">Expected monthly payment</label>
					</div>

					<div>
						<input type="radio" name="debt" id="desiredMonths" value="desired" />
						<label for="Desired Months to pay off">Desired Months to pay off</label>
					</div>

					<div>
						<input type="number" name="amount" min="0" id="drExpectedPayment" placeholder="200" />
					</div>

					<div>
						<input type="number" name="amount" min="0" id="desiredPayoffTime" placeholder="36" />
					</div>
					<input class="calculateButton" type="button" onclick="calculateDebtRepayment()" value="calculate" />
				</div>
			</form>
			<span id="debtRepayOutput"> </span>
		</div>
	)
}