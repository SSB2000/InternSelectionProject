import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
	outline: none;
	padding: .3em .7em;
	border: none;
	background-color: #2acfcf;
	color: white;
	border-radius: 20px;
	font-weight: 800;
	font-size: 1em;
`
const Div = styled.div`
	height: 100%;
`

const A = styled.a`
	text-decoration: none;
	color: purple;
	margin-right: .5em;
`

export default class PageLinks extends Component {
	render() {
		return (
			<Div>
				<A href="#">Login</A>
				<Button>Sign Up</Button>
			</Div>
		)
	}
}
