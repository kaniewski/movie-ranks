import Layout from '../../components/Layout';
import styles from './index.module.scss';
import {BiCameraMovie} from 'react-icons/bi';
import {useState} from 'react';
import BeatLoader from  'react-spinners/BeatLoader';


const Movie = ({movie}) => {
    console.log(movie)
    return ( 
        <div>
            <Layout>
            {loading ? 
            (<div className={styles.loader}><BeatLoader size='20' margin='5' color='#fed148' speedMultiplier='0.7' /></div>)
            
            }
            <div className={styles.container}>
            <div className={styles.box}>
            <div className={styles.wrapper}>
                <div className={styles.poster}>
                    <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300'} alt="poster" />
                </div>
                <div className={styles.basicinfo}>
                    <div className={styles.Title}>
                        <div className={styles.Name}>{movie.Title}</div>
                        <div className={styles.light}>
                            <p>{movie.Runtime}</p>
                        </div>
                    </div>
                    <div className={styles.info}>
                        {movie.Plot}
                    </div>
                    <div className={styles.content}>
                    <div className={styles.info2}>
                        <div>Genre</div>
                        <div>Premiere</div>
                        <div>Director</div>
                        <div>Writer</div>
                    </div>
                    <div className={styles.info3}>
                        <div>{movie.Genre}</div>
                        <div>{movie.Released}</div>
                        <div>{movie.Director}</div>
                        <div>{movie.Writer}</div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        <div className={styles.awards}>
            <BiCameraMovie />
            {movie.Awards}
        </div>
        </div>
        </Layout>
        </div>
    );
}

export default Movie;

const [loading, setLoading] = useState(false);

export const getServerSideProps = async ({ params }) => {
    setLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=7b41be11`);
    const movie = await res.json();
    setLoading(false);
    return {
        props: {
            movie,
        }
    }
}
