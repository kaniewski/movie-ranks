import { React, useState } from 'react';
import styles from './index.module.scss'
import { BsFilter } from 'react-icons/bs';
import FilterMenu from '../filterMenu'

const Filter = () => {
    const [active, setActive] = useState(false);
    return ( 
        <div className={styles.container}>
            <div className={styles.filters}>
                <button onClick={() => setActive((prevCheck) => !prevCheck)}><BsFilter /> Filters</button>
            </div>
            <div className={styles.FilterMenu}>{active ? <FilterMenu /> : <></>}</div>
        </div>
    );
}

export default Filter;


