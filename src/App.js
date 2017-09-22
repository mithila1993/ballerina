import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search'; 
import ResultList from './Components/ResultList';
import SideList from './Components/SideList';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      results:{},
      saved:[]
    }
  }

  savedlist(value){
      const places = this.state.saved.concat([value])
      this.setState({
        saved: places
      })
  }

  updateState(newPlaces){
      console.log(newPlaces);
      
      this.setState({
        results : newPlaces 
      })
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
        <Search callUpdate={this.updateState.bind(this)}/>
    <ResultList resultPlaces={this.state.results} memoryList={this.savedlist.bind(this)}/>
    </div>
    <div className="col-md-4">
      <SideList memory={this.state.saved}/>
      </div>
      </div>
      </div>
      
    );
  }
}

export default App;
