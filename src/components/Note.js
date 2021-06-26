import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.form`
	color: #2acfcf;
	width: 80%;
	margin: 0 auto;
	border-radius: 7px;
	padding: 1.2em 1.2em;
	background-color: white;
	@media only screen and (max-width: 600px) {
		padding: 0.5em 0.7em;
	}
`

export default class Note extends Component {
	render() {
		return (
			<Div>
				<p>Please note that after you clicked the "Shorten It!" button, it will take a seconds to get your shortend link.
				Unfortunately currently you need to Reload after button is clicked to display you latest link!</p>
			</Div>
		)
	}
}
