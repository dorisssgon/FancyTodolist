import React, { Component } from 'react';
import './index.css';
import './App.css';
import TodoFrame from './todoframe';
import after from '../src/assets/after.svg';
import before from '../src/assets/before.svg';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "all"
            }
        this.display = this.display.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
   
    }
    changeCategory(event){
          this.setState({
             ...this.state,
             category:event.target.value
          })
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
                        <li className="item-quaqua" key={index}>
                            <label htmlFor={changeCheckbox} id="input-btn-img1">
                            <input type="checkbox" className="list-btnn"
                            id={changeCheckbox} 
                            onClick={()=>this.props.onClickCheckBox(item)}
                            checked={item.completed}
                            style={{
                                display:'none'
                            }}/>
                            <div className = "imageicon"style={style}></div>
                            </label>
                           {item.content}
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
                        <li className="item-quaqua" key={index}>
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
                            {item.content}
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
                     <li className="item-quaqua" key={index}>
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
                         {item.content}
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