import React, { Component } from 'react';
import ListItem from '../src/list';
import './App.css';
import './index.css';
import TodoInput from '../src/todoinput';
class TodoFrame extends Component {
    constructor(props){
        super(props);
        this.state = {
            group:[],
        }
        this.id = 0;
        this.addItem = this.addItem.bind(this);
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
        this.didAll = this.didAll.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.deleteSingle =this.deleteSingle.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    addItem(str){
        var itemArray1=this.state.group.slice();
        itemArray1.push({
            content: str,
            completed: false,
            id: this.id++
        })
        this.setState({
            group:itemArray1,
        });
    }

    onClickCheckBox(clicked) {
    
        var itemArray2 = this.state.group.slice();
        itemArray2.map(item=>{
            if(item.id === clicked.id) {
                item.completed = !item.completed;
            }
        })
            this.setState({
                group:itemArray2
                })
        }

    didAll(){
        var ArrayList1 = this.state.group.slice();
        var checked = ArrayList1.every((item)=>{
            return item.completed === true;
        })
        if (checked === true) {
            ArrayList1.map((item)=>{
                item.completed = false;
            })
        }else{
            ArrayList1.map((item)=>{
                item.completed = true;
            })
        }
        this.setState({
            group:ArrayList1
        })
        }
    clearCompleted(){
        var ArrayList2 = this.state.group.slice();
        var completeArray = ArrayList2.filter((item)=>{
            return(item.completed === false)
        })
                this.setState({
                    group:completeArray
                })
            }
    deleteSingle(clicked,index){
        var ArrayList3 = this.state.group.slice();
            ArrayList3.splice(index,1);
            this.setState({
                group:ArrayList3
            })
    }
    updateState(item,liststate){
        console.log("here is")
        var ArrayList4 = this.state.group.slice();
            ArrayList4.map((single,index)=>{
                if(item.id === single.id) {
                    single.content = liststate
                }
            })
        this.setState({
            ...this.state,
            group:ArrayList4
        },function(){console.log(this.state.group)})
    }
    render() {
      return (
        <div>         

            <TodoInput addItem={this.addItem} didAll={this.didAll}/>
            <ListItem items={this.state.group} onClickCheckBox = {this.onClickCheckBox} clearCompleted={this.clearCompleted}
             deleteSingle ={this.deleteSingle}  updateState={this.updateState}/>
        </div>
      );
    }
  }
  
  export default TodoFrame;