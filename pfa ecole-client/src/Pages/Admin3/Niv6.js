import React, { Component } from 'react'
import NavbarAd from "../../component/NavbarAd"
import back from "../../images/A4.jpeg"
import './Admin3.css'
import ListeItems from "./ListeItems"
import Cov from '../../images/chan2.jpeg'
import { Link } from 'react-router-dom'
class Niv6 extends Component {
 
    constructor(props){
        super(props)
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:'',
            }  
        }
        this.handleInput=this.handleInput.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem= this.deleteItem.bind(this);
    }
    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }

        })
    }
    addItem(e){
        e.preventDefault();
        const newItem=this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const newItems=[...this.state.items,newItem];
            this.setState({
                items : newItems,
                currentItem:{
                    text:'',
                    key:''
                }

            })

        }
    }
    deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
          item.key!==key);
        this.setState({
          items: filteredItems
        })
    }
    render(){
        return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
        <NavbarAd/>
        <div className="cov z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 35%",
            backgroundSize:"100% 250%"}
        }>

        </div>

        
        <div className="ad  z-depth-5">
        <div className="b">       
                <Link to="/niv6" class="waves-effect waves-light btn-large abc">السنة السادسة</Link>
                <Link to="/niv5" class="waves-effect waves-light btn-large abc"> السنة الخامسة</Link>
                <Link to="/niv4" class="waves-effect waves-light btn-large abc">السنة الرابعة</Link>
                <Link to="/niv3" class="waves-effect waves-light btn-large abc"> السنة الثالثة</Link>
                <Link to="/niv2" class="waves-effect waves-light btn-large abc">السنة الثانية</Link>
                <Link to="/niv1" class="waves-effect waves-light btn-large abc">السنة الأولى</Link>            
        </div>
        <div className="matiere">
                        <form id="to-do" onSubmit={this.addItem}>
                        <button className="btn-floating " type="submit" id="badd" >  <i class="material-icons">add</i></button>
                            <input className="in" type="text" placeholder="أدخل مادة جديدة.." value={this.state.currentItem.text} onChange={this.handleInput}/>
                   
                            
                        </form>
                        
        </div>
        
            <ListeItems items={this.state.items} deleteItem={this.deleteItem}></ListeItems>
        </div>
        
        
        
        
        </div>
    )
        }
}

export default Niv6