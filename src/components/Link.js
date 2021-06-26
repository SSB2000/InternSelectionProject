import React, { Component } from 'react'
import styled from 'styled-components'
import Button from "./Button"

const LinkDiv = styled.div`
	margin: 2em 0;
	border-radius: 7px;
	width: 80%;
	margin: 1em auto;
	padding: 1.2em 1.2em;
	background-color: white;
	@media only screen and (max-width: 600px) {
		padding: 0.5em 0.7em;
	}
	@media only screen and (min-width: 600px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

const FullLink = styled.div`
	border-bottom: grey 2px solid;
	padding-bottom: .3em;
	margin-bottom: .3em;
	@media only screen and (min-width: 600px) {
		border: none;
		max-width: 50%;
		padding-bottom: 0;
		margin-bottom: 0;
	}
`

const ShortenedLink = styled.div`
	margin-bottom: .3em;
	color: #2acfcf;
	margin-right: 1em;

`
const Right = styled.div`
	@media only screen and (min-width: 600px) {
		display: flex;
		width: 35%;
		justify-content: space-between;
		align-items: center;
		margin-left: 1em;
	}
`

export default class Link extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<LinkDiv>
				<FullLink>
					{this.props.link.original_link}
				</FullLink>
				<Right>
					<ShortenedLink>
						{this.props.link.full_short_link}
					</ShortenedLink>
					<Button full_short_link =  {this.props.link.full_short_link} />
				</Right>
			</LinkDiv>
		)
	}
}
