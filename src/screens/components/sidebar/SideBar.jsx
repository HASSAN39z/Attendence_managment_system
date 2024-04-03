import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { CustomBtn } from '../../../commons';
import { ICONS } from '../../../constants';

function SideBar() {
  return (
    <>
    <div className="sidebar">
    <CustomBtn title={'Dashboard'} icon={ICONS.dashboardIcon}/>
      {/* <div className="sidebar-section">
        <Link to='/dashboard'>Dashboard</Link>
        <h3>Analysis</h3>
        <ul>
          <li>
            <Link to="/dashboard/attendance">Attendance</Link>
          </li>
          <li>
            <Link to="/dashboard/absence">Absence</Link>
          </li>
          <li>
            <Link to="/dashboard/report">Report</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Manage</h3>
        <ul>
          <li>
            <Link to="/dashboard/student">Student</Link>
          </li>
          <li>
            <Link to="/dashboard/subject">Subject</Link>
          </li>
        </ul>
      </div>
      <div className="logout-btn">
        <button>Logout</button>
      </div> */}
    </div>
    </>
  )
}

export default SideBar