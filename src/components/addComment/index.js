import { useState } from 'react';
import styles from './index.module.scss'

const AddComment = () => {
    function createComment(data) {
    return fetch('/.netlify/functions/todos-create', {
    body: JSON.stringify(data),
    method: 'POST'
}).then(response => {
    return response.json()
})
}

const [comment, setComment] = useState('');
const [searchTerm, setSearchTerm] = useState('');

createComment(comment).then((response) => {
    console.log('API response', response)
  // set app state
}).catch((error) => {
    console.log('API error', error)
})

    return (  
        <div className={styles.container}>
        <div className={styles.add}>
            <textarea name="" id="" cols="30" rows="10" placeholder='Write a comment' onChange={(e) => {
        setSearchTerm(e.target.value)}}></textarea>
            <input type="submit" value="Add" onClick={() => {AddComment(searchTerm)}} />
        </div>
        </div>
    );
}

export default AddComment;