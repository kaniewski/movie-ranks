import styles from './index.module.scss'

const MoviesTable = ({movies}) => {
    return (  
        <div>
            {movies.Search.map(movie => (
                <div className={styles.container}>
                    <div className={styles.poster}>
                        <img src={movie.Poster !== "N/A" ? movie.Poster : 'via.placeholder.com/200'} alt="poster" />
                    </div> 
                    <div className={styles.wrapper}>
                        <div className={styles.titleandyear}>
                            <div className={styles.title}>{movie.Title}</div> 
                            <div className={styles.year}>{movie.Year}</div> 
                        </div>
                        <div className={styles.type}>{movie.Type}</div>
                    </div> 
                </div>
                
            ))}
        </div>
    );
}

export default MoviesTable;