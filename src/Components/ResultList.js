import React,{Component} from 'react';

class ResultList extends Component{
    render(){

        
        if(this.props.resultPlaces.results !== undefined)
            {
                var placeList = this.props.resultPlaces.results.map(name=>{
                    return(<div>
                    <li key={name.id}>{name.name}</li>
                    <button onClick={this.props.memoryList(name.name)}>Save</button>
                    </div>
                )
                })
            }

        return(
            <div>
            <ul>
                {placeList}
        
            </ul>
            </div>
        )
    }

} 

export default ResultList;