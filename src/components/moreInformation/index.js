import styles from './index.module.scss'
import {AiFillStar} from 'react-icons/ai'

const MoreInfo = ({movie}) => {
    return (  
        <div className={styles.moreinfo}>
            <div className={styles.basicinfo}>
            <h1 className={styles.Title}>More information about <span>{movie.Title}</span></h1>
            <div className={styles.content}>
                    <div className={styles.info2}>
                        <div>BoxOffice</div>
                        <div>Country</div>
                        <div>Language</div>
                        <div>IMDB Rating</div>
                    </div>
                    <div className={styles.info3}>
                        <div>{movie.BoxOffice}</div>
                        <div>{movie.Country}</div>
                        <div>{movie.Language}</div>
                        <div><AiFillStar /> {movie.imdbRating}</div>
                    </div>
                    </div>
                    </div>
        </div>
    );
}

export default MoreInfo;