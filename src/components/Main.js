import React, { Component } from 'react'
import styled from 'styled-components'
import Search from "./Search"
import Link from "./Link"
import Intro from "./Intro"
import Note from "./Note"
import { v4 as uuidv4 } from 'uuid';


const MainContent = styled.div`
	width: 100%;
	/* background-color: rgb(240, 241, 246); */
	background-color: white;
	overflow: hidden;
`
const SearchSeaction = styled.div`
	background-color: rgb(240, 241, 246);
	padding-bottom: 1em;
	position: relative;
`
let storedLinks = JSON.parse(localStorage.getItem("linkList"));

export default class Main extends Component {
	constructor(){
		super();
		this.state = {
			linkList: storedLinks
		}
	};
	

	render() {
		var linkList = this.state.linkList;
		if(linkList) {
			linkList = linkList.map(link => {
				if (link) {
					return <Link key={uuidv4()} link={link}/>
				} else {
					return;
				}
			});
		}
		return (
			<MainContent>
				<Intro />
				<SearchSeaction>
					<Search />
					<Note />
					{linkList}
				</SearchSeaction>
			</MainContent>
		)
	}
}
