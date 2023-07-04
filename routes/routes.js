const express = require('express')
const router = express.Router()
const { getPopular, searchMovies, getMovieDetails, getMovieReviews, getMovieTrailer } = require('../controllers/moviesController')
const { getPopularShows, searchShows, getShowDetails, getShowReviews} = require ("../controllers/seriesController")
// Get Popular
router.get('/get-popular', getPopular)

// Search Movies
router.get('/search-movies', searchMovies)

// Get movie details
router.get('/movie/:id', getMovieDetails)

// Get movie reviews
router.get('/reviews/:id', getMovieReviews)

// Get movie trailer
router.get('/trailer/:id', getMovieTrailer)

// Get Popular TV Shows
router.get('/tv/popular', getPopularShows)

// Search TV shows
router.get('/search-tv', searchShows)

// Get show details
router.get('/tv/:id', getShowDetails)


module.exports = router