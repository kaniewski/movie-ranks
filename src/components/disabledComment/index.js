import styles from './index.module.scss';
import { MdDisabledByDefault } from 'react-icons/md';

const DisableComment = () => {
    return (  
        <div className={styles.container}>
            <div className={styles.disable}><MdDisabledByDefault /> You need to be logged in to add comments.</div>
        </div>
    );
}

export default DisableComment;