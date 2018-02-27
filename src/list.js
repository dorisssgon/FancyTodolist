import React, { Component } from 'react';
import './index.css';
import './App.css';

import after from '../src/assets/after.svg';
import before from '../src/assets/before.svg';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "all",
            flag:"",
            newInput:"",
            entireContent:""
            }
        this.display = this.display.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);
        this.updatedInput = this.updatedInput.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.inputValue = this.inputValue.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    changeCategory(event){
          this.setState({
             ...this.state,
             category:event.target.value
          })
    }
    onInputChange(event){
        this.setState({
            ...this.state,
            newInput:event.target.value
        })
    }
    updatedInput(item,e){
        e.preventDefault();
        this.setState({
            ...this.state,
            entireContent: this.state.newInput,
            flag:"",
            newInput:""
        },function() {this.props.updateState(item,this.state.entireContent)})
    }

    inputValue(item){
        if(!this.state.newInput){
            return(item.content)
        }
        return(this.state.newInput)
    }
    onBlur(e){
        e.preventDefault();
        this.setState({
            ...this.state,
            flag:"",
            newInput:""
        })
    }

    conditionalRender(item){
        if(this.state.flag === item.id){
        return(<form className="conditionList" 
            onSubmit={(e)=>this.updatedInput(item,e)}>
            <input id="updateInput" onChange = {this.onInputChange} value = {this.inputValue(item)} onBlur={this.onBlur}/>
        </form>)}
        else{
            return(<span className="conditionalSpan">{item.content}</span>)
        }
    }

    display(){
        if (this.state.category === "all"){
        return(     
                this.props.items.map((item,index)=> {
                var style = {};
                    if(item.completed === false) {
                        style={
                            
                            backgroundImage: 'url(' + before + ')',
                    }
                    }else{
                        style ={
                        
                        backgroundImage: 'url(' + after + ')',
                       
                        }
                    }
                    var changeCheckbox = `changeCheckbox1${item.id}`;  
                       return(
                        <li className="item-quaqua" key={index} 
                            onDoubleClick={()=>{
                                this.setState(
                                    {...this.state,flag:item.id})
                             }}>
                            <label className="labelPia"htmlFor={changeCheckbox}>
                            <input type="checkbox" className="list-btnn"
                            id={changeCheckbox} 
                            onClick={()=>this.props.onClickCheckBox(item)}
                            checked={item.completed}
                            style={{
                                display:'none'
                            }}/>
                            <div className = "imageicon" style={style}></div>
                            </label>
                            {this.conditionalRender(item)}
                            <button className="list-btn" onClick={()=>this.props.deleteSingle(item,index)}></button>
                        </li>);
                    }
                )
        );}
        else if (this.state.category === "active") {
            var activeItems = this.props.items.filter((item)=>{
                
                return(item.completed === false)
                })
            return(   
                activeItems.map((item,index)=> {  
                    var style = {};
                    if(item.completed === false) {
                        style={
                            
                            backgroundImage: 'url(' + before + ')',
                    }
                    }else{
                        style ={
                        
                        backgroundImage: 'url(' + after + ')',
                       
                        }
                    }
                    var changeCheckbox = `changeCheckbox2${item.id}`;  
                       return(
                        <li className="item-quaqua" key={index}
                            onDoubleClick={()=>{
                            this.setState(
                                {...this.state,flag:item.id})
                            }}>>
                            <label htmlFor={changeCheckbox} id="input-btn-img2">
                            <input type="checkbox"
                            id={changeCheckbox} 
                            onClick={()=>this.props.onClickCheckBox(item)}
                            checked={item.completed}
                            style={{
                                display:'none'
                            }}/>
                            <div className = "imageicon"style={style}></div>
                            </label>
                            {this.conditionalRender(item)}
                            <button className="list-btn" onClick={()=>this.props.deleteSingle(item,index)}></button>
                        </li>);
                    }
                )
        );
        }
        else if (this.state.category === "completed") {
            var completedItems = this.props.items.filter((item)=>{
                return(item.completed === true)
                })
            return(   
                completedItems.map((item,index)=> {  
                    var style = {};
                    if(item.completed === false) {
                        style={
                            
                            backgroundImage: 'url(' + before + ')',
                    }
                    }else{
                        style ={
                        
                        backgroundImage: 'url(' + after + ')',
                       
                        }
                    }
                    var changeCheckbox = `changeCheckbox3${item.id}`;  
                    return(
                     <li className="item-quaqua" key={index}
                     onDoubleClick={()=>{
                        this.setState(
                            {...this.state,flag:item.id})
                     }}>>
                         <label htmlFor={changeCheckbox} id="input-btn-img3">
                         <input type="checkbox"
                         id={changeCheckbox} 
                         onClick={()=>this.props.onClickCheckBox(item)}
                         checked={item.completed}
                         style={{
                             display:'none'
                         }}/>
                         <div className = "imageicon"style={style}></div>
                         </label>
                         {this.conditionalRender(item)}
                        
                         <button className="list-btn" onClick={()=>this.props.deleteSingle(item,index)}></button>
                     </li>);
                    }
                )
        );
        }
    }
    render(){
        return(
            <div className="list-all">
                <div className="item-list">
                    <ul className="unorder-list">
                        {this.display()}
                    </ul>
                </div>    
                <span id= "left-span">{this.props.items.length} items left</span>
                <div className="btn-list">
                <button className = "last-btn" onClick={this.changeCategory} value="all">All</button>
                <button className = "last-btn" onClick={this.changeCategory} value="active">Active</button>
                <button className = "last-btn" onClick={this.changeCategory} value="completed">Completed</button>
                <button className = "long-btn" onClick={this.props.clearCompleted} value="delete">clearCompleted</button>
                </div>
            </div>

        );
    }

}

export default ListItem;