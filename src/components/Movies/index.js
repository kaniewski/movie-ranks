import styles from './index.module.scss'
import React from 'react';
import Link from 'next/link';

const MoviesTable = ({movies}) => {
    return (  
        <div>
            {
            movies.Search?.length > 0 
            ? (
            movies.Search.map(movie => (
                <Link href={`/movie/${movie.imdbID}`}>
                <div className={styles.container}>
                    <div className={styles.poster}>
                        <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300'} alt="poster" />
                    </div> 
                    <div className={styles.wrapper}>
                        <div className={styles.titleandyear}>
                            <div className={styles.title}>{movie.Title}</div> 
                            <div className={styles.year}>{movie.Year}</div> 
                        </div>
                        <div className={styles.type}>{movie.Type}</div>
                    </div> 
                </div>
                </Link>
            ))
            ) : (
                <div className={styles.empty}>
                    <h2>No movies found</h2>
                    <h3>Try another title  &#8282;&#41;</h3>
                    </div>
            )
            }
        </div>
    );
}

export default MoviesTable;