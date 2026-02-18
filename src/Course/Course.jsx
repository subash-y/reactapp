import styles from './Course.module.css'

const course1 = "HTML";

function Course(){
    return (
        <div className={styles.card}>
            <image src="" alt="HTML"></image>
            <h3>{course1}</h3>
            <p>This is HTML Course</p>
        </div>
    );
}

export default Course