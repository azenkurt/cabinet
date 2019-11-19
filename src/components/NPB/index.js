import React from 'react';
import './NPB.css';

import ShowScreenPdf from '../ShowScreenPdf';

class NPB extends React.Component {
    render() {
        return (
            <div className = "NPB">
               <p className = "NPB_text">doc0</p>
               {/* <ShowScreenPdf 
                    showSrc = "/pdf/Npb/1.pdf"
                    showWidth = "900px"
                    showHeight = "700px"
                    type = "application/pdf" /> */}
               <a href = "/pdf/Npb/1.exe" >sada</a>
            </div>
        )
    }
}

export default NPB;