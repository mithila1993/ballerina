import React, {Component} from 'react';

class SideList extends Component{
    render(){
        var SavedList = this.props.memory.map(name=>{
            return(<h2>{name}</h2>)

        })
        return(
            <div>
                <h2>Saved Places</h2>
                {SavedList}
            </div>
        )
    }

}

export default SideList;