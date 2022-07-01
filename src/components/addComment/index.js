import styles from './index.module.scss'

const AddComment = () => {
    return (  
        <div className={styles.container}>
        <div className={styles.add}>
            <textarea name="" id="" cols="30" rows="10" placeholder='Write a comment'></textarea>
            <input type="submit" value="Add" />
        </div>
        </div>
    );
}

export default AddComment;