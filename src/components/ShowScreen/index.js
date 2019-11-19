import React from 'react';
import './ShowScreen.css';

class ShowScreen extends React.Component {
    render() {
        return (
            <div 
                className = "ShowScreen"
                style = {{ visibility : this.props.vis }}
                >
                <embed
                    src = { this.props.showSrc }                                        
                    ></embed>
                <button
                    >X</button>
            </div>
        )
    }
}

export default ShowScreen;