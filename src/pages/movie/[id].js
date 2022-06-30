import Layout from '../../components/Layout';
import styles from './index.module.scss';
import {BiCameraMovie} from 'react-icons/bi';
import {BsFillFilePersonFill} from 'react-icons/bs';
import MoreInfo from '../../components/moreInformation';



const Movie = ({movie}) => {
    console.log(movie)

        const actors = movie.Actors;
        const actor = actors.split(",");
        let firstActor = actor[0];
        let secondActor = actor[1];
        let thirdActor = actor[2];
    
    return ( 
        <div>
            <Layout>
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
        {movie.Awards !== "N/A" ? 
        <div className={styles.awards}>
            <BiCameraMovie />
            {movie.Awards}
        </div> : <></> }
        <div className={styles.actors}>
            <div className={styles.actor}>
                <BsFillFilePersonFill />
                <p>{firstActor}</p>
            </div>
            <div className={styles.actor} id={styles.mid}>
                <BsFillFilePersonFill />
                <p>{secondActor}</p>
            </div>
    <div className={styles.actor}>
                <BsFillFilePersonFill />
                <p>{thirdActor}</p>
            </div>
        </div>
        </div>
        <MoreInfo movie={movie} />
        </Layout>
        </div>
    );
}

export default Movie;


export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=7b41be11`);
    const movie = await res.json();
    return {
        props: {
            movie,
        }
    }
}
