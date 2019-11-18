import React from 'react';
import './VideoScreen.css';
import VideoEl from '../VideoEl';

class VideoScreen extends React.Component {
    render() {
        return (
            <div className = "VideoScreen">
                <VideoEl id = {1} />
                <VideoEl id = {2} />
                <VideoEl id = {3} />
                <VideoEl id = {4} />
                <VideoEl id = {5} />
                <VideoEl id = {6} />
                <VideoEl id = {7} />
                <VideoEl id = {8} />
            </div>
        )
    }
}

export default VideoScreen;