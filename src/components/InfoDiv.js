import React, { Component } from 'react'
import styled from 'styled-components'

const InfoDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 700px) {
		width: 80%;
		font-size: 1.5em;
		padding-right: 5em;
	}

`
const H1 = styled.h1`
	font-size: 2.4em;
	line-height: 1em;
	margin-bottom: 0.3em;
`

const P = styled.p`
	font-size: 0.7em;
	margin-bottom: 1.2em;
	color: grey;
`

const Button = styled.button`
	color: white;
	background-color: #2acfcf;
	border: none;
	outline: none;
	border-radius: 30px;
	font-size: 1em;
	padding: .5em 2em;
`

export default class Info extends Component {
	render() {
		return (
			<InfoDiv>
				<div>
					<H1>More than just shorter links</H1>
					<P>Build your brand's recognition and get insights on how your links are performing.</P>
					<Button>Get Started</Button>
				</div>
			</InfoDiv>
		)
	}
}
