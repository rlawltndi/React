import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Overview from "./OverView";
import Setting from "./Setting";

function Dashboard(){
    return(
        <div>
            <h1>대시보드</h1>
            <nav>
                <ul>
                    <li><Link to="overview">개요</Link></li>
                    <li><Link to="setting">설정</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="overview" element={<Overview />}/>
                <Route path="setting" element={<Setting />}/>
            </Routes>
        </div>
    )
}
export default Dashboard;