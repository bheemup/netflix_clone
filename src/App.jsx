import './App.css'
import Row from './Row'
import requests from './Requests'
import Banner from './componants/Banner'
import Footer from './componants/Footer'


function App() {






  return (
    <div className="App">
      
       <Banner/>
       <Row verticle="true" title="Netflix_Original" fetchUrl={requests.fetchNetflixOrignal}/>
       <Row  title="Trending" fetchUrl={requests.fetchTrending}/>
       <Row  title="Top_Rated"fetchUrl={requests.fetchTopRated} />
       <Row  title="Comedy_movies" fetchUrl={requests.fetchComedyMovies} />
       <Row title="Romantance Movies" fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Footer/>
    </div>
  )
}

export default App
