import styles from './header.module.css';

function Header(){
    return (
        <div id={styles.header_container}>
            <div id={styles.header_left_side}>
                <img src='/icons/header/header_icon.png'></img>
            </div>

            <div id={styles.header_right_side}>
                <img src='/icons/header/header_day_and_night_icon.png' alt='enable/disabled dark mode' id={styles.darkmode_button}/>
                <a href=''>Home</a>
                <a href=''>Contacts</a>
                <img src='/icons/header/header_profile_icon.png' alt='account' id={styles.account_button}/> 
            </div>
        </div>
    );
}

export default Header;