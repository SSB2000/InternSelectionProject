import React, { Component } from 'react'

import styled from 'styled-components'

const FooterNav = styled.div`
	background-color: rgb(32, 32, 39);
	text-align: center;
	padding: 1em 0;
	height: 40vh;
	img {
		color: white;
		width: 20%
	}
`

export default class Footer extends Component {
	render() {
		return (
			<FooterNav>
				<img src="/images/logo.svg" alt="Shortly Logo svg" />
			</FooterNav>
		)
	}
}
