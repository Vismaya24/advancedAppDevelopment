import Sidebar from "../../Utils/Sidebar";
import '../../../assets/css/Home.css';
import { FaUsers } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
      <div className="flex gap-6">
      <Sidebar/>
      <div className="dashboard-container">
        <div className="dashboard-card">
          <FaUsers size={70} color="blue"/>
          <div className="dashboard-cardtext1">Total Users<div className="dashboard-cardtext2">25140</div></div>
        </div>
        <div className="dashboard-card">
          <FaIndianRupeeSign size={70} color="blue"/>
          <div className="dashboard-cardtext1">Total Revenue<div className="dashboard-cardtext2">8452172</div></div>
        </div>
        <div className="dashboard-card">
          <FaUsers size={70} color="blue"/>
          <div className="dashboard-cardtext1">Upcoming Events<div className="dashboard-cardtext2">51</div></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
