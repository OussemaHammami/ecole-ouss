import React from 'react'
import './ListeItems.css'

function ListeItems(props){
    const items= props.items;
    const listItems = items.map(item =>
        {
            return   <div>
            <div className="list z-depth-5" key={item.key} >
            <div className="col1">
             <i className="material-icons close right" onClick={() => props.deleteItem(item.key)} >close</i> 
          
            <h3 className="Mat">المادة</h3>
            </div>
            <div className="txt">
            <h5>{item.text}</h5>
            </div>
          
          <div className="col2"></div>
            </div>
           
           </div> 
        })
       
 return(
    <div className="dis" >
    
        {listItems} 
    </div>
 )
}
export default ListeItems;