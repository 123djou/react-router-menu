import React, { Component } from 'react';

class Item extends Component {
    
    render(props) { 
        return ( 

        <li id={this.props.id} onClick={(e)=>this.props.action(e.target)}  className={this.props.className}>
        
         {this.props.name}  {this.props.list}</li>

         );
    }
}
 
export default Item;