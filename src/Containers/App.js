import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import Search from "../Components/Search";
import { Robots } from "../Robots";
import Scroll from "../Components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: Robots,
      Searchfield: "",
    };
  }

  onsearchchange = (event) => {
    this.setState({ Searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.Robots.filter((Robots) => {
      return Robots.name
        .toLowerCase()
        .includes(this.state.Searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <Search searchChange={this.onsearchchange} />
        <Scroll>
          <Cardlist Robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
