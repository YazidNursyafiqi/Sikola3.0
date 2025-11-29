import styles from './main_content.module.css';
import { Routes , Route } from 'react-router-dom';

//import pages
import Courses from '../../pages/courses/courses.jsx';
import Dashboard from '../../pages/dashboard/dashboard.jsx';
import Grades from '../../pages/grades/grades.jsx';
import Home_page from '../../pages/home/home.jsx';
import Inventory from '../../pages/inventory/inventory.jsx';
import Notification from '../../pages/notification/notification.jsx';
import Reports from '../../pages/reports/reports.jsx';


function Content(){
    return(
        <div id={styles.main_content}>
            <Routes>
                <Route path='/' element={<Home_page/>}/>
                <Route path='/Courses' element={<Courses/>}/>
                <Route path='/Dashboard' element={<Dashboard/>}/>
                <Route path='/Grades' element={<Grades/>}/>
                <Route path='/Inventory' element={<Inventory/>}/>
                <Route path='/Notification' element={<Notification/>}/>
                <Route path='/Reports' element={<Reports/>}/>
            </Routes>
        </div>
    );
}

export default Content;