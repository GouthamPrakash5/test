
import { useState } from "react";
import "./sidebar.css";

const Sidebar = ({ onSidebarToggle }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onSidebarToggle(!isSidebarOpen); // Notify parent to shift body
  };

  return (
    <div className={`sidebar-container ${isSidebarOpen ? "open" : "closed"}`}>
      <button 
        className="toggle-sidebar" 
        onClick={toggleSidebar}  
        style={{ backgroundColor: isSidebarOpen ? '#1e3a5f' : 'white', position: 'fixed', top: '0px', color: isSidebarOpen ? 'white' : 'black' }}
      >
        {isSidebarOpen ? "X" : "☰"}
      </button>

      {isSidebarOpen && (
        <div className="sidebar">
          <button className="menu-button" onClick={() => toggleMenu("primary")}> 
            Primary Menu {openMenus["primary"] ? 'x' : ''}
          </button>
          {openMenus["primary"] && (
            <ul className="submenu">
              <li>Rider tracking</li>
             <a style={{color:'white'}} href="/" ><li>Workstation Master</li></a> 
              <a style={{color:'white'}} href="/yearlyreport"><li>Yearly Consolidating Report</li></a>
            </ul>
          )}

          <div>
            <button className="menu-button" onClick={() => toggleMenu("financial")}> 
              Financial MIS Reports {openMenus["financial"] ? 'x' : 'y'}
            </button>
            {openMenus["financial"] && (
              <ul className="submenu">
                <li>Bill Transaction Report</li>
                <li>Billing Statement</li>
               <a style={{color:'white'}} href="/clientbooking"><li>Client Advance Report</li></a> 
                <li>Client Billing Collection</li>
                <li>Client Portal Registration MIS</li>
               <a style={{color:'white'}} href="/clienttransaction"><li>Client Transaction Details</li></a> 
                <li>Collection MIS Reports</li>
                <li>Sales Summary Report</li>
                <li>Service Wise Transaction MIS</li>
                <li>Transaction Details MIS Report</li>
              </ul>
            )}
          </div>
          
          <div>
            <button className="menu-button">Invoice MIS Reports</button>
          </div>

          <div>
            <button className="menu-button">Clinical MIS Reports</button>
          </div>

          <div>
            <button className="menu-button">Revenue MIS Reports</button>
          </div>

          <div>
            <button className="menu-button">Operational MIS Reports</button>
          </div>
        </div>
      



      )}
    </div>
  );
};

export default Sidebar;
