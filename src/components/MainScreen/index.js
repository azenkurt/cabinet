import React from 'react';
import "./MainScreen.css";

import Author from '../Author';

class MainScreen extends React.Component {
    render() {
        return (
            <div className = "MainScreen">    
            <aside>
            
            </aside>      
                <div className = "Authors">
                    <Author name = "q1" />
                    <Author name = "q2" />
                    <Author name = "q3" />
                    <Author name = "q4" />
                    <Author name = "q5" />
                </div>           
             <div className = "But L n00"><p>Нарматыўна-прававая база</p></div>
             <div className = "But L n0"><p>Анімацыі</p></div>
             <div className = "But L n1"><p>Тэсты</p></div>
             <div className = "But L n2"><p>Трэнінгі</p></div>
             <div className = "But L n3"><p>Спробы пяра</p></div>
     
             <div className = "But R n00"><p>Аўтарскія гульні</p></div>
             <div className = "But R n0"><p>Алімпіядныя заданні</p></div>
             <div className = "But R n1"><p>Лінгвістычныя заданні</p></div>
             <div className = "But R n2"><p>Бібліятэка</p></div>
             <div className = "But R n3"><p>Аудыёлітаратура</p></div>
            </div>            
        )
    }
}

export default MainScreen;