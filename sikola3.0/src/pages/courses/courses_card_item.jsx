import styles from './courses_sub_item.module.css'

function Course_card_item({course}){
    return(
        <div className={styles.Course_card_item_container}>
            <img src={course.image}/>
            <p className={styles.Course_card_item_information_title}>{course.title}</p>
            <p className={styles.Course_card_item_information_major}>{course.major}</p>
            <div className={styles.Course_card_item_information}>
                <p>{course.percentage}% complete</p>
            </div>
        </div>
    );   
}

export default Course_card_item;