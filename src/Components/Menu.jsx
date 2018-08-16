import React, { Component } from 'react';


class Menu extends Component {
    
    render(props) { 
        return ( 
          <ul className={this.props.className}>{this.props.children} </ul>

         );
    }
}
 
export default Menu;