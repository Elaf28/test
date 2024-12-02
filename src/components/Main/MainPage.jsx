import { Component } from "react";
export class MainPage extends Component {
    state={
        myNumber:1,
    }
    increment=()=>{
        this.setState({
            myNumber:this.state.myNumber+1
        });
    };
    decrement=()=>{
        if(this.state.myNumber>1){
            this.setState({
                myNumber:this.state.myNumber-1
            });
        }
    };
    render(){
        return(<>
            <h1>{this.state.myNumber}</h1>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <h3>My name is <span className={this.state.myNumber<5?"red":""}>{this.props.Name}</span></h3>
            <h3>My years old is <span className={this.state.myNumber>5&&this.state.myNumber<10?"blue":""}>{this.props.Year}</span></h3>
            <h3>My Country is <span className={this.state.myNumber>10?"green":""}>{this.props.Country}</span></h3>
        </>)
    }
}