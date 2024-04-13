import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage () {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Your Dream Home With Oceanic Design!</h1>
          <p>
            Welcome to Oceanic Design, your premier destination for all your real estate needs. Explore our vast listings, find your dream property, and embark on your journey
            to homeownership effortlessly. Discover the perfect place to call home with just a click.
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>115</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className='box'>
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  )
}

export default HomePage
