import Filter from '../components/Filter'
import Layout from '../components/Layout'
import MoviesTable from '../components/Movies'
import SearchInput from '../components/SearchInput'
import styles from '../styles/Home.module.scss'


export default function Home({movies}) {
  console.log(movies)
  return (
    <>
    
    <Layout>
      <p className={styles.counts}>Found {movies.totalResults} movies</p>
      <SearchInput placeholder="Search movies" onChange={() => {
        
      }} />
      <Filter />
      <MoviesTable movies={movies} />
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
