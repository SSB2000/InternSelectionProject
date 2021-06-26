import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from "./SearchBar"


const SearchSeaction = styled.div`
	background-color: rgb(58, 48, 83);
	width: 80%;
	margin: 0 auto;
	border-radius: 7px;
	padding: 2em 2.4em;
	margin-top: 10em;
	background-image: url(/images/bg-shorten-desktop.svg);
	position: relative;
	top: -60px;
	@media only screen and (max-width: 600px) {
		padding: 1em 1.4em;
	}
`

export default class Search extends Component {
	render() {
		return (
			<SearchSeaction>
				<SearchBar />
			</SearchSeaction>
		)
	}
}
