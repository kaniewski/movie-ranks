import Link from 'next/link';
import styles from './index.module.scss'
import { RiMovie2Line } from 'react-icons/ri';
import AuthContext from '../../../stores/authContext';
import { useContext } from 'react';


const Navbar = () => {
    const { user, login }= useContext(AuthContext)
    

    return (  
        <header className={styles.header}>
            <Link href='/'>
            <div className={styles.name}>
            <RiMovie2Line />
            <h1>Movie</h1>
            <h2>Ranks</h2>
            </div>
            </Link>
            <div className={styles.btn} onClick={login}>Sign in</div>
        </header>
    );
}

export default Navbar;