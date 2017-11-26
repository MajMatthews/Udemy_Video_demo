import React, { Component } from 'react';
// adding component to above enables class declaration to use es6 and negate the need to write  React.Component

class SearchBar extends Component {
	// reason for creating this as a Class based component instaed of a functional component is to enable communication to other components.

	constructor(props) {
		super(props); 
		// set term to emty string 
		this.state = { term : '' };
	}

	render() {
		//the react onChange event is activated by user interacting with the iput box
		return (
			<div className='search-bar'>
				<input
				// value below is initailly set to the empty string from the contructor
				//when the onChange is fired the term from the event in the onChange sets value to the new state of term, which is what ever was typed
				value={this.state.term}
				// the event of the input changes once the user types into the input box
				onChange={event => this.onInputChange(event.target.value )} />
			</div>
		);
	}

	//attach the term typed in to the search bar to the onchange event to update the state
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
		console.log(term);
	}
}

export default SearchBar;