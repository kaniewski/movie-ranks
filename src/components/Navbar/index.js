import Link from 'next/link';
import styles from './index.module.scss'
import { RiMovie2Line } from 'react-icons/ri';
import AuthContext from '../../../stores/authContext';
import { useContext } from 'react';


const Navbar = () => {
    const { user, login, logout }= useContext(AuthContext)
    

    return (  
        <header className={styles.header}>
            <Link href='/'>
            <div className={styles.name}>
            <RiMovie2Line />
            <h1>Movie</h1>
            <h2>Ranks</h2>
            </div>
            </Link>
            {!user && <div className={styles.btn} onClick={login}>Sign in</div>}
            {user && <div className={styles.email}>{user.email}</div>}
            {user && <div className={styles.btn} onClick={logout}>Logout</div>}
        </header>
    );
}

export default Navbar;