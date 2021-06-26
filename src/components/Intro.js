import React, { Component } from 'react'
import styled from 'styled-components'
import Info from './InfoDiv'


const IntroContent = styled.div`
	background-color: white;
	position: relative;
	width: 80%;
	margin: 0 auto;
	@media only screen and (min-width: 700px) {
		display: flex;
		flex-direction: row-reverse;
	}
`

const ImgDiv = styled.div`
	img {
		width: 140%;
		height: auto;
		margin-right: 0;
		background-color: white;
		margin-bottom: 2em;
		@media only screen and (min-width: 700px) {
			padding-top: 5em;
			width: 140%;
		}
	}
`

export default class Intro extends Component {
	render() {
		return (
			<IntroContent>
				<ImgDiv>
					<img  src="/images/illustration-working.svg" alt="Working SVG"/>
				</ImgDiv>
				<Info />
			</IntroContent>
		)
	}
}
