// // import React from 'react';
// // import './Orders.css'; // Import your CSS file

// // const mockOrders = [
// //   { id: 1, customerName: "Manikantha", orderDate: "2024-03-12", status: "Pending" },
// //   { id: 2, customerName: "Chandana", orderDate: "2024-03-11", status: "Shipped" },
// //   { id: 3, customerName: "Sooraj sutar", orderDate: "2024-03-10", status: "Delivered" },
// //   // Add more orders as needed
// // ];

// // const Orders = () => {
// //   return (
// //     <div className="orders-container">
// //       <h2>Orders Management</h2>
// //       <table className="orders-table">
// //         <thead>
// //           <tr>
// //             <th>Order ID</th>
// //             <th>Customer Name</th>
// //             <th>Order Date</th>
// //             <th>Status</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {mockOrders.map(order => (
// //             <tr key={order.id}>
// //               <td>{order.id}</td>
// //               <td>{order.customerName}</td>
// //               <td>{order.orderDate}</td>
// //               <td>{order.status}</td>
// //               <td>
// //                 <button className="action-button view-button">View Details</button>
// //                 <button className="action-button update-button">Update Status</button>
// //                 <button className="action-button delete-button">Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default Orders;



// import React, { useState } from 'react';
// import Modal from './Modal'; 
// import './Orders.css'; 

// const mockOrders = [
//   { id: 1, customerName: "John Doe", orderDate: "2024-03-12", status: "Pending" , address:"Mysore", phoneNumber:"9876575432"},
//   { id: 2, customerName: "Jane Smith", orderDate: "2024-03-11", status: "Shipped" ,address:"Gundlupete", phoneNumber:"9876384543"},
//   { id: 3, customerName: "Alice Johnson", orderDate: "2024-03-10", status: "Delivered" ,address:"Bangalore", phoneNumber:"9868634534"},
// ];

// const Orders = () => {
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const openModal = (order) => {
//     setSelectedOrder(order);
//   }

//   const closeModal = () => {
//     setSelectedOrder(null);
//   }

//   return (
//     <div className="orders-container">
//       <h2>Orders Management</h2>
//       <table className="orders-table">
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Customer Name</th>
//             <th>Order Date</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mockOrders.map(order => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.customerName}</td>
//               <td>{order.orderDate}</td>
//               <td>{order.status}</td>
//               <td>
//                 <button className="action-button view-button" onClick={() => openModal(order)}>View Details</button>
//                 <button className="action-button update-button">Update Status</button>
//                 <button className="action-button delete-button">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Modal isOpen={selectedOrder !== null} onClose={closeModal} order={selectedOrder} />
//     </div>
//   );
// }

// export default Orders;


import React, { useState } from 'react';
import Modal from './Modal'; 
import './Orders.css'; 
import { Link } from 'react-router-dom';


const mockOrders = [
  { id: 1, customerName: "Ajay", orderDate: "2024-03-12", status: "Pending" , address:"Mysore", phoneNumber:"9876575432"},
  { id: 2, customerName: "Niranjan", orderDate: "2024-03-11", status: "Shipped" ,address:"Gundlupete", phoneNumber:"9876384543"},
  { id: 3, customerName: "Rakshi", orderDate: "2024-03-10", status: "Delivered" ,address:"Bangalore", phoneNumber:"9868634534"},
];

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(mockOrders); 

  const openModal = (order) => {
    setSelectedOrder(order);
  }

  const closeModal = () => {
    setSelectedOrder(null);
  }

  const handleDelete = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders); 
  }

  return (
    <div className="orders-container">
      <h2>Orders Management</h2>
      <Link to="/calender"  style={{marginLeft:"77%",marginBottom:"2%"}}>
        <button className="action-button view-button" style={{marginBottom:"1%"}}>Calendar View</button></Link>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button className="action-button view-button" onClick={() => openModal(order)}>View Details</button>
                <button className="action-button update-button">Update Status</button>
                <button className="action-button delete-button" onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={selectedOrder !== null} onClose={closeModal} order={selectedOrder} />
    </div>
  );
}

export default Orders;
