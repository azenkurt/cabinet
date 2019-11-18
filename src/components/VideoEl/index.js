import React from 'react';
import './VideoEl.css';

class VideoEl extends React.Component {
    render() {
        return (
            <div className = "VideoEl">
                <video 
                    width  = "300px"
                    height = "168px"
                    id = { this.props.id }
                    className = { "video" + this.props.id}
                    src = { "./video/young/"+this.props.id+".webm" }
                    controls>
                </video>
            </div>
        )
    }
}

export default VideoEl;