import styles from './index.module.scss';
import { BsSearch } from 'react-icons/bs';

const SearchInput = ({placeholder, value, onChange, onClick}) => {
    return (
        <div className={styles.wrapper}>
            <BsSearch className={styles.icon} onClick={onClick}/>
            <input className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
}

export default SearchInput;