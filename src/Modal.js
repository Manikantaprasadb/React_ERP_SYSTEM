import React from 'react';
import './Modal.css'; // Import your CSS file

const Modal = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>❌</button>
        <h2>Order Details</h2>
        <p><b>Order ID:</b> {order.id}</p>
        <p><b>Customer Name: </b>{order.customerName}</p>
        <p><b>Order Date:</b> {order.orderDate}</p>
        <p><b>Status:</b> {order.status}</p>
        <p><b>Address :</b>{order.address}</p>
        <p><b>Phone Number:</b>  +91{order.phoneNumber}</p>
      </div>
    </div>
  );
}

export default Modal;
