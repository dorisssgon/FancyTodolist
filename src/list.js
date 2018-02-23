import React, { Component } from 'react';
import './index.css';
import './App.css';
import TodoFrame from './todoframe';

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
                    var changeCheckbox = `changeCheckbox1${item.id}`;  
                  
                       return(
                        <li className="item-quaqua" key={index}>
                            <label htmlFor={changeCheckbox} id="input-btn-img1">
                            <input type="checkbox"
                            id={changeCheckbox} 
                            onClick={()=>this.props.onClickCheckBox(item)}
                            checked={item.completed}
                            style={{
                                display:'none'
                            }}/>
                            <div className="checkbox-div"></div>
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
                       return(
                        <li className="item-quaqua" key={index}>
                        <label htmlFor="changeCheckbox2" id="input-btn-img2">
                            <input type="checkbox"
                            id="changeCheckbox2"
                            onClick={()=>this.props.onClickCheckBox(item)}
                            checked={item.completed}/>
                            <div id="checkbox-img2"></div>
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
                       return(
                           <div>
                        <li className="item-quaqua" key={index}>
                            <label htmlFor="changeCheckbox3" id="input-btn-img3">
                            <input type="checkbox"
                            id="changeCheckbox3"
                            onClick={()=>this.props.onClickCheckBox(item)}
                            checked={item.completed}/>
                            <div id="checkbox-img3"></div>
                            </label>
                            {item.content}
                            <button className="list-btn"onClick={()=>this.props.deleteSingle(item,index)}></button>);
                        </li>
                        
                        </div>)
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
    
                <span>{this.props.items.length} items left</span>
                <div className="btn-list">
                <button className = "active" onClick={this.changeCategory} value="all">All</button>
                <button onClick={this.changeCategory} value="active">Active</button>
                <button onClick={this.changeCategory} value="completed">Completed</button>
                <button onClick={this.props.clearCompleted} value="delete">clearCompleted</button>
                </div>
            </div>

        );
    }

}

export default ListItem;