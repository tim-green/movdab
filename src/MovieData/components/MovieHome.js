import React, {Component} from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const key = '7791829acab764379407eb8859766691'

class MovieHome extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentWillMount() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2018&vote_average.gte=8`
    fetch(url)
      .then(res => res.json())
      .then(movies => {
        this.setState({
          topMovies: movies
        })
      })
  }

  render() {
    let movies = this.state.topMovies
    if (movies) {
      return (
        <div className="flex-wrapper">
          <div className="movie-home-wrapper">
            <div className="first-row">
              <div className="movie">
                <Rater total={10} rating={movies.results[0].vote_average} interactive={true}/>
                <h3>{movies.results[0].title}</h3>
                <img src={`https://image.tmdb.org/t/p/original${movies.results[0].backdrop_path}`} alt=""/>
              </div>
              <div className="movie">
                <Rater total={10} rating={movies.results[1].vote_average} interactive={true}/>
                <h3>{movies.results[1].title}</h3>
                <img src={`https://image.tmdb.org/t/p/original${movies.results[1].backdrop_path}`} alt=""/>
              </div>
            </div>
            <div className="sec-row">
              <div className="movie">
                <Rater total={10} rating={movies.results[2].vote_average} interactive={true}/>
                <h3>{movies.results[2].title}</h3>
                <img src={`https://image.tmdb.org/t/p/original${movies.results[2].backdrop_path}`} alt=""/>
              </div>
              <div className="movie">
                <Rater total={10} rating={movies.results[3].vote_average} interactive={true}/>
                <h3>{movies.results[3].title}</h3>
                <img src={`https://image.tmdb.org/t/p/original${movies.results[3].backdrop_path}`} alt=""/>
              </div>
              <div className="movie">
                <Rater total={10} rating={movies.results[4].vote_average} interactive={true}/>
                <h3>{movies.results[4].title}</h3>
                <img src={`https://image.tmdb.org/t/p/original${movies.results[4].backdrop_path}`} alt=""/>
              </div>
            </div>
            <div className="backdrop">
              <img src="images/background.jpg" alt="movies background"/>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default MovieHome
