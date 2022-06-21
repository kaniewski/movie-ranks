import styles from './index.module.scss';

const FilterMenu = () => {
    return ( 
        <div className={styles.container}>
            <input className={styles.box} type="checkbox" />
            <p>filter by release date</p>
            <input className={styles.box} type="checkbox" />
            <p>filter by rating</p>
            <input className={styles.box} type="checkbox" />
            <p>filter by popularity</p>
        </div>
    );
}

export default FilterMenu;