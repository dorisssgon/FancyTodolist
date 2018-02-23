import React,{Component}  from 'react';
import './index.css';
import './App.css'

class TodoInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({
            ...this.state,
            content: event.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.content);
        this.setState({
            content:''
        })

    }
    render(){
        return( 
        <div className = "input-greentea">
            <button id="did-All" onClick={this.props.didAll}></button>
            <form  className = "input-all" onSubmit = {this.onFormSubmit}>
                <input className = "input-frame" value={this.state.content}
                onChange = {this.onInputChange}
                placeholder="What needs to be done?" />
                <button id="input-button" type="submit">add</button>
            </form>
            </div>
        )
    }
}

export default TodoInput;