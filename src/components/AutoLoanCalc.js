import React, { useState, useEffect } from 'react';

function AutoLoanCalc(props) {

	return (
		<div>
			<form>
				<div class="form-grid">
					<div class="grid-expand">
						<label>Vehicle Price: </label><br />
						<input type="number" name="amount" min="0" id="loanAmount" />
					</div>
					
					<div>
						<label>Down Payment: </label><br />
						<input type="number" name="amount" min="0" id="downPayment" placeholder="0" />
					</div>

					<div>
						<label>Trade-In Value: </label><br />
						<input type="number" name="amount" min="0" id="tradeValue" placeholder="0" />
					</div>

					<div>
						<label>Interest Rate: </label><br />
						<input type="number" name="amount" min="0" id="interestRate" placeholder="3.5" />
					</div>

					<div>
						<label>Loan Term: (months) </label><br />
						<input type="number" name="amount" min="0" id="loanTerm" placeholder="68 months" />
					</div>

						<input class="calculateButton" style={{backgroundColor:`${props.color}`}} type="button" onclick="calculateAutoLoan()" value={props.text} />
						
				</div>
			</form>
			<span id="output"> </span>
			</div>
			
	)
}

export default AutoLoanCalc;