import React from 'react';

//instead of using props, cn just use curly brace video as part of es6
const VideoDetail = ({video}) => {
	//add a check, so if parent has not yet recieved data needed this will apear instead.
	//in "const url" use of back tick instead of quotes to combine the ure and id, es6 syntax sugar

	//snippet comes from th eyoutube api//
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	
	return (
		<div className='video-detail col-md-8'>
				<div className='embed-responsive embed-responsive-16by9'>
					<iframe className='embed-responsive-item'src={url}></iframe>
				</div>
				<div className='details'>
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
				</div>
		</div>
	);
};

export default VideoDetail;
