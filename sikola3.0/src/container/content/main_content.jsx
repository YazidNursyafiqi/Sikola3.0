import styles from './main_content.module.css';
import { Routes , Route } from 'react-router-dom';

//import pages
import Home_page from '../../pages/home/home.jsx';


function Content(){
    return(
        <div id={styles.main_content}>
            <Routes>
                <Route path='/' element={<Home_page/>}/>
            </Routes>
        </div>
    );
}

export default Content;