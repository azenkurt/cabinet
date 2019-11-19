import React from 'react';
import './NPB.css';
import ShowScreen from '../ShowScreen';

class NPB extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            isShow : false,
            whatShow : "ЗАКОН РЭСПУБЛІКI БЕЛАРУСЬ",
            fileList : [
                "ЗАКОН РЭСПУБЛІКI БЕЛАРУСЬ",
                "ИМП_2019-2020",
                "Кодакс Рэспублікі Беларусь аб адукацыі",
                "Метадычныя рэкамендацыі па фарміраванні маўлення (слоўн. Дыкт)",
                "Палажэнне аб установе агульнай сярэдняй адукацыі",
                "Правілы бел.арф.",
                "Санітарныя нормы і правілы",
                "Тыпавы вучэб. план (ГАДЗІНЫ) 2019-2020",
                "ЮБІЛЯРЫ 2019-2020",
                "ІМП 2019-2020-pril-2-bel-mova-i-lit"
            ]
        }
    }
   
    render() {
        return (
            <div className = "NPB">                         
                <ShowScreen     
                    vis = { this.state.isShow } 
                    showSrc = { "/public/pdf/npb/" + this.state.whatShow + ".pdf"} />
            </div>
        )
    }
}

export default NPB;