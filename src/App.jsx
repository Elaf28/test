import { Component } from "react";
import { MainPage } from "./components/Main/MainPage";
import"./App.css"
export default class App extends Component {
  state={
    Name:"Elaf",
    Year:"22",
    Country:"Egypt"
  };
  render(){
    return(<>
        <div className="All">
          <MainPage Name={this.state.Name} Year={this.state.Year} Country={this.state.Country}/>
        </div>
    </>)
  }
}