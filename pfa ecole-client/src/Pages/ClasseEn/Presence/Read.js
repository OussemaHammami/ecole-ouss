import React from "react";
import Modal from 'react-modal'
import { useState } from "react";
import { Link } from "react-router-dom";
import Liste from "../Liste/Liste";
import './Modal.css'
const Read = ({ contact}) => {
  const [modalIsOpen , setModalIsOpen]= useState(false)

  return (
    <tr >
     
      
      <td className="center"> <Link onClick={()=> setModalIsOpen(true)}>{contact.Number}  : الحصة</Link> </td>
      <Modal isOpen={modalIsOpen} shouldCloseOnEsc={false} className="Modal z-depth-5">
      <i class="material-icons right close2" onClick={()=>setModalIsOpen(false)}>close</i>
       <Liste/>
      
      </Modal>
      
      
     
    </tr>
  );
};

export default Read;