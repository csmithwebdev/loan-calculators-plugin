import {useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import {PanelBody, PanelRow, RadioControl, TextControl, Dashicon, ColorPicker, CustomSelectControl} from "@wordpress/components";
import metadata from "./calculator-block.json";
import React, { Component, useState } from 'react';
import DebtRepaymentCalc from '../components/DebtRepaymentCalc';
import MortgageCalc from '../components/MortgageCalc';
import AutoLoanCalc from '../components/AutoLoanCalc';

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon: "calculator",

	attributes: {
		calcType: {
			type: "string",
			default: "autocalc",
		},

		buttonColor: {
			type: "string",
			default: "#000",
		},

		buttonText: {
			type: "string",
			default: "Calculate",
		},
	},

	//BACKEND

	edit( {attributes, setAttributes }) {

		const [color, setColor] = useState();

		return  (
			<div {...useBlockProps}>
				<InspectorControls style={{ marginBottom: "40px" }}>
					<PanelBody
						title="Choose Calculator"
					>
						<PanelRow>
							<RadioControl 
								label="Loan Calculator"
								help="The type of calculator to use"
								selected={ attributes.calcType }
								options={[
									{ label: "Auto Loans", value: "autocalc" },
									{ label: "Mortgage", value: "mortgagecalc" },
									{ label: "Debt Repayment", value: "debtrepay" },
									]}
									onChange={(value) => setAttributes( {calcType: value })}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				{ attributes.calcType == "autocalc" && (
					<>
					<AutoLoanCalc
						color={attributes.buttonColor}
						text={attributes.buttonText}
					 />
						<InspectorControls style={{ marginBottom: "40px" }}>
							<PanelBody
								title="Button Settings"
							>
							<p>Button Color</p>
								<PanelRow>
									<ColorPicker
										//onChange={setColor}
										onChange={(value) => setAttributes({buttonColor: value})}
										defaultValue="#000"
									 />
								</PanelRow>
								<PanelRow>
								 <TextControl
									 label="Button Text"
									 onChange={value => setAttributes({buttonText: value})}
									 />
								</PanelRow>
							</PanelBody>
						</InspectorControls>
					
					</>
				)}

				{ attributes.calcType == "mortgagecalc" && (
					<MortgageCalc />
				)}

				{ attributes.calcType == "debtrepay" && (				
					<DebtRepaymentCalc />
				)}

			</div>
		
		);

	},

	//FRONTEND

	save( {attributes} ) {
		return ( 
			<div {...useBlockProps}>
				{attributes.calcType == "autocalc" && (
					<AutoLoanCalc
						color={attributes.buttonColor}
						text={attributes.buttonText}
					/>
					)}

				{ attributes.calcType == "mortgagecalc" && (
					<MortgageCalc />
				)}

				{ attributes.calcType == "debtrepay" && (
					<DebtRepaymentCalc />
				)}
			</div>

		);
	}
}