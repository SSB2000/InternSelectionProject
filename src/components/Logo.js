import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.header`
	padding-top: .3em;
`


export default class Logo extends Component {
	render() {
		return (
			<Div>
				<img src="/images/logo.svg" alt="Shortly Logo" />
			</Div>
		)
	}
}
