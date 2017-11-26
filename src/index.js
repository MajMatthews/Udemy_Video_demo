import _ from 'lodash';
import React, { Component } from 'react'
import ReactDom from 'react-Dom';
import YTSearch from 'youtube-api-search';
//above are node modules added using npm  

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//api key from youtube, via https://console.developers.google.com
const API_KEY = 'AIzaSyBhHasGNrRmz98Wbm0cJZwY79CiQQvaaeo';

 class App extends Component {
 	//on app opening, this constructor will run and fetch data
  	constructor(props) {
 		super(props);

 		this.state = { 
 			videos: [],
 			selectedVideo: null
 		};
 		//initail video search term ran when constructor is fired
 		this.videoSearch('dogs');
 	}

 	videoSearch(term) {
 			//using api key to get details of dominica from youtube
		//added the api key in here for use in downwards data, this is the parent component for the app
		//used term videos instead of data
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos : videos,
				//set the first video in the array to selected
				selectedVideo: videos[0]
			});
		});
 	}
 				//list the components in order of appearance
 				//debounce is installed via npm, to slow down the amount of searches completed whilst typing. the serach will run every 300 milliseconds
 	render() {
 		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)
	 	return (
		 	<div>
		 		<SearchBar onSearchTermChange={videoSearch}/>
		 		<VideoDetail video={this.state.selectedVideo}/>
		 		<VideoList 
		 		onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
		 		videos={this.state.videos} />
		 	</div>
	 	);
	 }
 }

 ReactDom.render(<App />, document.querySelector('.container'));