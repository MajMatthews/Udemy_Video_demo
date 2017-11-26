import React from 'react';
import VideoListItem from './video_list_item';
//props is coming from the properties of the parent class App in index.js
//display the amount of items in the video array
// Just using props here instead of this.props as its a functional component instead of a class based component

//using map to iterate over each item in the array
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem 
		onVideoSelect={props.onVideoSelect}
		key={video.etag} 
		video={video} />
	});
	
	return (
		<ul className='col-md-4 list-group'>
			{videoItems}
		</ul>
	);
}

export default VideoList;