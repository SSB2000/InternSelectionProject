import React, { Component } from 'react'
import styled from 'styled-components'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyButton = styled.button`
	width: 100%;
	padding: .7em 0;
	outline: none;
	border: none;
	background-color: #2acfcf;
	color: white;
	border-radius: 7px;
	font-weight: 800;
	${({ copied }) => copied && `
		background: rgb(58, 48, 83);
	`}
	@media only screen and (min-width: 600px) {
		width: 100px;
		height: 3em;
	}
`

export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {value: props.full_short_link, 
						copied: false};
	}
	onChange = ({target: {value}}) => {
		this.setState({value, copied: false});
		};
	onClick = ({target: {innerHTML}}) => {
		document.getElementById("copyButton").innerHTML = "Copied";
	};
	onCopy = () => {
		this.setState({copied: true});
	};
	render() {
		return (
			<>
				<CopyToClipboard
					onCopy={this.onCopy}
					options={{message: 'Whoa!'}}
					text={this.state.value}>
					<CopyButton id="copyButton" onClick={this.onClick} copied={this.state.copied}>Copy</CopyButton>
				</CopyToClipboard>
			</>
		)
	}
}
