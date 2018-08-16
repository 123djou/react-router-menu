import React, { Component } from 'react';


class Header extends Component {
   
    render(props) { 
        return (

   <div  className="header">{this.props.content}</div>

          );
    }
}
 
export default Header;