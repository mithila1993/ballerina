import React,{Component} from 'react';
import axios from 'axios';

class Search extends Component{

    getKey(e){
        e.preventDefault();
        const keyTyped = this.refs.inputName.value;
        const update = this.props;
 
        axios.post('http://localhost:3001/getLocations', {
            city: keyTyped
          })
          .then(function (response) {
            
            console.log(response);
          })
          .catch(function (error) {
            console.log("Mello",error);
          });
    }

    render(){
        return(
            <div>
                <form className="form-horizontal">
            <fieldset>
            <legend>Legend</legend>
           <div className="col-md-10">
    
    <div className="form-group">
      <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
      <div className="col-lg-10">
        <input type="text" className="form-control" id="inputEmail" placeholder="inputName" ref="inputName"/>
      </div>
    </div>
    </div>
    <div className="col-md-2">
      <button className="btn btn-primary" onClick={this.getKey.bind(this)}>Search</button>
     </div>
    </fieldset>
    </form>
            </div>
        )
    }
}  

export default Search;
