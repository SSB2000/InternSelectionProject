import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from "./Logo.js"
import PageLinks from "./PageLinks.js"

const Nav = styled.header`
	padding: 1em 0;
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const LinksDiv = styled.div`
`

export default class Header extends Component {
	render() {
		return (
			<Nav>
				<Logo />
				<LinksDiv>
					<PageLinks />
				</LinksDiv>
			</Nav>
		)
	}
}
