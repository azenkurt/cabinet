import React from 'react';
import './ShowScreenPdf.css';

class ShowScreenPdf extends React.Component {
    constructor ( props ) {
        super ();

    } 
    render() {
        return (
            <div className = "ShowScreenPdf">
                <embed 
                    src = { this.props.showSrc }
                    width = { this.props.showWidth }
                    height = { this.props.showHeight }
                    type = {this.props.showType} ></embed>
            </div>
        )
    }
}

export default ShowScreenPdf;