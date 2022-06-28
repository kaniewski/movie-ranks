import Link from 'next/link'
import styles from '../styles/404.module.scss'
import Layout from '../components/Layout'

const NotFound = () => {
    return (  
        <div className={styles.notfound}>
            <Layout>
            <h1>Oooops...</h1>
            <h2>That page could not be found.</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
            </Layout>
        </div>
    );
}

export default NotFound;