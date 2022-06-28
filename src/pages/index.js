import Filter from '../components/Filter'
import Layout from '../components/Layout'
import MoviesTable from '../components/Movies'
import SearchInput from '../components/SearchInput'
import styles from '../styles/Home.module.scss'
import {React, useState, useEffect} from 'react';
import BeatLoader from  'react-spinners/BeatLoader';


export default function Home({}) {
  const searchMovies = async (title) => {
    setLoading(true);
    const res = await fetch(`${API_URL}&s=${title}`)
    const moviesSearch = await res.json();
    setMoviesList(moviesSearch);
    setLoading(false);
  }

  useEffect(() => {
    searchMovies('all');
  }, [])

    const [loading, setLoading] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    
    <Layout>
      <p className={styles.counts}>Found {moviesList.totalResults} movies</p>
      <SearchInput placeholder="Search movies" onChange={(e) => {
        setSearchTerm(e.target.value)}} onClick={() => {searchMovies(searchTerm)}}/>
      <Filter />
      { loading ? 
      (<div className={styles.loader}><BeatLoader size='20px' margin='5px' color='#fed148' speedMultiplier='0.7' /></div>) 
      : (<MoviesTable movies={moviesList} />)}
    </Layout>
    
    </>
  )
}

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7b41be11'

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}&s=all`)
  const movies = await res.json();
  return {
    props: {
      movies,
    }
  }
}

