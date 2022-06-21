import styles from './index.module.scss';
import { BsSearch } from 'react-icons/bs';

const SearchInput = ({...rest}) => {
    return (
        <div className={styles.wrapper}>
            <BsSearch className={styles.icon} />
            <input className={styles.input} {...rest} />
        </div>
    );
}

export default SearchInput;