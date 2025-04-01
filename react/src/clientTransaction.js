import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Sidebar from './sidebar';

const ClientTransaction = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [error, setError] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/transaction')
      .then(response => {
        setError('');
        const report = response.data.data;
        setTransactionList(Array.isArray(report) ? report : []);
      })
      .catch(error => {
        console.error('Error fetching transaction list:', error);
        setTransactionList([]);
        setError('Failed to load transaction list. Please try again later.');
      });
  }, []);

  return (
    <div className={`main-content ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
      <Sidebar onSidebarToggle={setIsSidebarOpen} />

      <div className='nav2'>
        <label>Create</label> <label>Save</label> <label>Print</label>
        <label>Email</label> <label>Clear</label> <label>Refresh</label>
        <label>Dispatch</label> <label>Fetch</label> <label>Issues</label>
        <label>Close</label>
      </div>

      <div className='header'>
        <div className='inputs'>
          <label>Select Client</label>
          <select className='clientSelect'>
            <option> </option>
            <option>A</option>
            <option>B</option>
          </select>
          <button>Today</button>
          <button>This week</button>
          <button>This Month</button>
          <button>Custom</button>
        </div>
      </div>

      <div className='main'>
        <a href='#' className='excelLink'><b>Export to Excel</b></a>
        <label>Client Transaction Details</label>
        <span className='search'>
          <label>Client Name</label>
          <input type='text' placeholder='Search client name' />
        </span>
        <table>
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Sl.no</th>
              <th style={{ width: '25%' }}>Customer List Name</th>
              <th style={{ width: '25%' }}>Encounter DTTM</th>
              <th style={{ width: '25%' }}>Bill Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionList.map(report => (
              <tr key={report.SlNo}>
                <td>{report.SlNo}</td>
                <td>{report.CustomerListName}</td>
                <td>{report.EncounterDTTM}</td>
                <td>{report.BillAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='footer'><label>Copyright © 2024</label></div>
    </div>
  );
};

export default ClientTransaction;
