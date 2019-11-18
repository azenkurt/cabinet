import React from 'react';
import './App.css';

import MainScreen from '../MainScreen';
import VideoScreen from '../VideoScreen';
 
class App extends React.Component {
  constructor ( props ) {
    super ();
    this.state = {
      showed : "main",
      showedText : "Маладыя паэты"
    };
  }
  retScreen() {
      return this.state.showed === "main" ? <MainScreen /> : <VideoScreen />;
  }
  render(){
    return (
      <div className="App">
        <div 
          className = "YoungBut"
          onClick = { ()=> {
            this.state.showed === "main" ? 
              this.setState({ showed: "video", showedText : "Галоуная старонка"}) :
              this.setState({showed: "main", showedText : "Маладыя паэты"});
          }}>
  <p>{this.state.showedText}</p>          
        </div>
        {this.retScreen()}
      </div>
    );
  }
}

export default App;
