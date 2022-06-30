import Link from 'next/link';
import styles from './index.module.scss'
import { RiMovie2Line } from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi';
import AuthContext from '../../../stores/authContext';
import { useContext, useEffect, useState } from 'react';


const Navbar = () => {
    const { user, login, logout, authReady }= useContext(AuthContext)
    const [isToggled, setIsToggled] = useState(false)    

    return (  
        <header className={styles.header}>
            <Link href='/'>
            <div className={styles.name}>
            <RiMovie2Line />
            <h1>Movie</h1>
            <h2>Ranks</h2>
            </div>
            </Link>
            { authReady && (
            <div>
            {!user && <div className={styles.btn} onClick={login}>Sign in</div>}
            {user && <div className={styles.btn} onClick={logout}>Logout</div>}
            {user && <button className={styles.burger} onClick={() => {setIsToggled(!isToggled)}}><GiHamburgerMenu /></button>}
            {isToggled && <div className={styles.menu}>
                <div className={styles.menutitle}>Menu <button className={styles.burger2} onClick={() => {setIsToggled(!isToggled)}}><GiHamburgerMenu /></button></div>
                {user && <div className={styles.email}>{user.email}</div>}
                <div className={styles.link}>Visit your profile</div>
            </div>}
            
            </div>
            )}
        </header>
    );
}

export default Navbar;