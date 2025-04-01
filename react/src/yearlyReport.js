import React, { useState, useEffect } from "react";
import axios from "axios";
import "./yearlyReport.css";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

const YearlyReport = () => {
  const [reportList, setReportList] = useState([]);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Added sidebar state

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/yrreport")
      .then((response) => {
        setError("");
        const report = response.data.data;
        setReportList(Array.isArray(report) ? report : []);
      })
      .catch((error) => {
        console.error("Error fetching yearly report:", error);
        setReportList([]);
        setError("Failed to load the yearly report. Please try again later.");
      });
  }, []);

  return (
    <div className={`main-content ${isSidebarOpen ? "" : "sidebar-closed"}`}>
      <Sidebar onSidebarToggle={setIsSidebarOpen} />
      <div>
        <div className="nav1">
          <p>Yearly Report</p>
        </div>

        <div className="nav2">
          {[
            "Create",
            "Save",
            "Print",
            "Email",
            "Clear",
            "Refresh",
            "Dispatch",
            "Fetch",
            "Issues",
            "Close",
          ].map((label) => (
            <button key={label} className="navButton">
              {label}
            </button>
          ))}
        </div>

        <div className="main">
          <h2>Yearly Consolidated Report</h2>

          <div className="selections">
            <label>Report For:</label>
            <select className="reportSelect">
              <option>Doctor</option>
              <option>Client</option>
              <option>Walk-in</option>
            </select>

            <label>Report Type:</label>
            <select className="reporttype">
              <option>Total</option>
              <option>Collection</option>
              <option>Outstanding</option>
            </select>

            <label>Financial Year:</label>
            <select className="reporttype">
              <option>2025-26</option>
              <option>2024-25</option>
              <option>2023-24</option>
            </select>
          </div>
  {/* 
            <div className="export-links">
              <a href="#" className="pdfLink">
                <b>Export to PDF</b>
              </a>
              <a href="#" className="excelLink">
                <b>Export to Excel</b>
              </a>
            </div> */}

          {error && <p className="error-message">{error}</p>}

          <table>
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Sl. No</th>
                <th style={{ width: "30%" }}>Referral Name</th>
                {[
                  "JAN",
                  "FEB",
                  "MAR",
                  "APR",
                  "MAY",
                  "JUN",
                  "JUL",
                  "AUG",
                  "SEP",
                  "OCT",
                  "NOV",
                  "DEC",
                ].map((month) => (
                  <th key={month} style={{ width: "5%" }}>
                    {month}
                  </th>
                ))}
                <th style={{ width: "5%" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {reportList.map((report) => (
                <tr key={report.SlNo}>
                  <td>{report.SlNo}</td>
                  <td>{report.referralName}</td>
                  <td>{report.jan}</td>
                  <td>{report.feb}</td>
                  <td>{report.mar}</td>
                  <td>{report.apr}</td>
                  <td>{report.may}</td>
                  <td>{report.jun}</td>
                  <td>{report.jul}</td>
                  <td>{report.aug}</td>
                  <td>{report.sep}</td>
                  <td>{report.oct}</td>
                  <td>{report.nov}</td>
                  <td>{report.dec}</td>
                  <td>{report.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="footer">
          <label>© 2024 Yearly Report</label>
        </div>
      </div>
    </div>
  );
};

export default YearlyReport;
