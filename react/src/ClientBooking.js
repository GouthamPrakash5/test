import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Sidebar from './sidebar';

const ClientBooking = () => {
  const [clientList, setClientList] = useState([]);
  const [error, setError] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/client')
      .then(response => {
        setError('');
        const report = response.data.data;
        setClientList(Array.isArray(report) ? report : []);
      })
      .catch(error => {
        console.error('Error fetching list:', error);
        setClientList([]);
        setError('Failed to load list. Please try again later.');
      });
  }, []);

  return (
    <div className={`main-content ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
      <Sidebar onSidebarToggle={setIsSidebarOpen} />

      <div className='nav2'>
        <label>Create</label> <label>Save</label> <label>Print</label> 
        <label>Email</label> <label>Clear</label> <label>Refresh</label> 
        <label>Dispatch</label> <label>Fetch</label> <label>Issues</label> <label>Close</label>
      </div>

      <div className='header'>
        <div className='inputs'>
          <label>Select Client</label>
          <select className='clientSelect'>
            <option> </option>
            <option>A</option>
            <option>B</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Today</button>
          <button>This week</button>
          <button>This Month</button>
          <button>Custom</button>
          <a href='#' className='excelLink'><b>Export to Excel</b></a>
          
        </div>
      </div>

      <div className='main'>
        <table>
          <tr>
            <th style={{ width: '5%' }}>Sl.no</th>
            <th style={{ width: '13%' }}>Client name</th>
            <th style={{ width: '13%' }}>Client Code</th>
            <th style={{ width: '13%' }}>Advance Payment Date</th>
            <th style={{ width: '13%' }}>Collected Date</th>
            <th style={{ width: '13%' }}>Collected User</th>
            <th style={{ width: '13%' }}>Receipt No</th>
            <th style={{ width: '13%' }}>Payment Mode</th>
          </tr>
          {clientList.map(report => (
            <tr key={report.SlNo}>
              <td>{report.SlNo}</td>
              <td>{report.ClientName}</td>
              <td>{report.ClientCode}</td>
              <td>{report.AdvancePaymentDate}</td>
              <td>{report.CollectedDate}</td>
              <td>{report.CollectedUser}</td>
              <td>{report.ReceiptNo}</td>
              <td>{report.PaymentMode}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className='footer1'></div>
      <div className='footer'><label>Copyright@2024</label></div>
    </div>
  );
};

export default ClientBooking;
