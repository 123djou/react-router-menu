import React, { Component } from 'react';
import Header from './Components/Header'
import Menu from './Components/Menu'
import Item from './Components/Item'
import './App.css';
import { Route, Link } from "react-router-dom";

import { Home, Contact, Entrepreneur, Student, Hobbi } from './Components/Home'

class App extends Component {
  constructor() {

    super()

    this.state = {
      active: "home"
    }

  }
  services = ["for entrepreneurs", "for students", "for hobbists"]

  contact = ["facebook", "twitter"]

  show = (e) => {
if(e.id!==""){
  
      this.setState({
          
        active: e.id
      })}
      
    }
  


  render() {

    return (

      <div className="App">

        <Header content={

          <Menu className="nav">

            <li>

              <Link  id="home"
              
               onClick={(e)=>this.show(e.target)} 

               className={this.state.active === "home" ? "item active" : "item"}

                to="/home"> home</Link> </li>

            <Item

              action={this.show}

              id="service"

              name="services"

              className={this.state.active === "service"? "item active" : "item"}

              list={

                <Menu className="sub-menu">

                  {this.services.map(x => {

                    return <li className="sub-item"><Link className="link" to={"/services/" + x}>{x}</Link> </li>
                  })}

                </Menu>} />

            <Item name="contacts"

              id="contact"

              className={this.state.active === "contact" ? "item active" : "item"}

              action={this.show}

              list={

                <Menu className= "sub-menu">

                  {this.contact.map(x => {

                    return <li className="sub-item"> <Link className="link" to={"/contact/" + x}>{x}</Link> </li>

                  })}

                </Menu>
              }
            />
          </Menu>} />

        <Route path="/home" render={() => <Home />} />

        <Route exact path="/" render={() => <Home />} />
        <Route path="/contact/:id" render={(a) => <Contact id={a.match.params.id}/>} />
        <Route path="/services/for entrepreneurs" render={() => <Entrepreneur />} />
        <Route path="/services/for students" render={() => <Student />} />
        <Route path="/services/for hobbists" render={() => <Hobbi />} />

      </div>


    );
  }
}



export default App;
