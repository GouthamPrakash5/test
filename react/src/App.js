import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Navbar from './Navbar';
import Sidebar from './sidebar';

const App = () => {
  const [workstationList, setWorkstationList] = useState([]);
  const [error, setError] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/workstation')
      .then(response => {
        setError('');
        const report = response.data.data;
        setWorkstationList(Array.isArray(report) ? report : []);
      })
      .catch(error => {
        console.error('Error fetching workstation list:', error);
        setWorkstationList([]);
        setError('Failed to load workstation list. Please try again later.');
      });
  }, []);

  return (
    <div className={`main-content ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
      <Sidebar onSidebarToggle={setIsSidebarOpen} />
      <div className='nav1'>
        <p>dsssggdhc</p>
      </div>
      <div className='nav2'>
        <label>Create</label>
        <label>Save</label>
        <label>Print</label>
        <label>Email</label>
        <label>Clear</label>
        <label>Refresh</label>
        <label>Dispatch</label>
        <label>Fetch</label>
        <label>Issues</label>
        <label>Close</label>
      </div>
      <div className='header'>
        <div className='inputs'>
          <input className='headerinput' placeholder='Workstation' type='text' />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input className='headerinput' type='text' />
          <input type='checkbox' /> <label>Is Active</label>
        </div>
      </div>
      <div className='main'>
        <label>Workstation List</label>
        <select className='workstationSelect'>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <a href='#' className='excelLink'><b>Export to Excel</b></a>
        <table>
          <thead>
            <tr>
              <th style={{ width: '5%' }}>Sl. No</th>
              <th style={{ width: '10%' }}>Edit</th>
              <th style={{ width: '10%' }}>Workstation Name</th>
              <th style={{ width: '50%' }}>IP Address</th>
              <th style={{ width: '25%' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {workstationList.map(report => (
              <tr key={report.SlNo}>
                <td>{report.SlNo}</td>
                <td>{report.Edit}</td>
                <td>{report.workstationName}</td>
                <td>{report.IpAddress}</td>
                <td>{report.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='footer1'></div>
      <div className='footer'>
        <label>Copyright @2024</label>
      </div>
    </div>
  );
};

export default App;
