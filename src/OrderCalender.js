import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './OrderCalender.css';


const mockOrders = [
  { id: 1, customerName: "Ajay", orderDate: new Date(2024, 2, 12), status: "Pending" },
  { id: 2, customerName: "Niranjan", orderDate: new Date(2024, 2, 11), status: "Shipped" },
  { id: 3, customerName: "Rakshi", orderDate: new Date(2024, 2, 10), status: "Delivered" },
  // Add more orders as needed
];

const OrderCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const getOrdersForDate = date => {
    return mockOrders.filter(order => {
      const orderDate = new Date(order.orderDate);
      return orderDate.getDate() === date.getDate() &&
             orderDate.getMonth() === date.getMonth() &&
             orderDate.getFullYear() === date.getFullYear();
    });
  };

  return (
    <div className="order-calendar"><h2>Order Calendar View</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      {selectedDate && (
        <div className="orders-for-date">
          <h3>Orders for {selectedDate.toDateString()}</h3>
          <ul>
            {getOrdersForDate(selectedDate).map(order => (
              <li key={order.id}>{order.customerName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OrderCalendar;
