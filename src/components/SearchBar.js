import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
	}
`
const Input = styled.input`
	padding: 0.9em;
	border-radius: 7px;
	width: 90%;
	margin-right: 1.5em;
	border: none;
	&:focus {
		outline: none;
		border: none;
	}
	@media only screen and (max-width: 600px) {
		width: 100%;
		margin-right : 0;
		margin-bottom: 1em;
	}
`

const Button = styled.button`
	padding: 0.9em 1.7em;
	width: 150px;
	border-radius: 7px;
	font-weight: bold;
	background-color: #2acfcf;
	outline: none;
	border: none;
	color: white;
	&:focus {
		outline: none;
		border: none;
	}
	@media only screen and (max-width: 600px) {
		width: 100%;
		padding: 0.9em;
	}
`

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			response: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	linkList = JSON.parse(localStorage.getItem("linkList")) || [];
	handleChange(event) {this.setState({value: event.target.value});}

	async fetchShortLink(url) {
		await fetch(url).then((response) => response.json()).then((data) => {
			console.log(data.result);
			this.setState({response: data.result});
		});
		this.linkList.unshift(this.state.response);
		localStorage.setItem("linkList", JSON.stringify(this.linkList));
	}

	handleSubmit(event) {
		const inputUrl = document.getElementById('inputUrl').value;
		const url = "https://api.shrtco.de/v2/shorten?url=" + inputUrl;
		this.fetchShortLink(url);
		document.getElementById('inputUrl').value = null;
		event.preventDefault();
	}

	render() {
		return (
		<Form onSubmit={this.handleSubmit}>
			<Input type="text" name="name" id="inputUrl" required autoComplete="off" placeholder="Shorten a link here..." />
			<Button>Shorten It!</Button>
		</Form>
	);
	}
}
