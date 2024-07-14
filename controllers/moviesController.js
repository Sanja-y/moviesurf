require('dotenv').config()
const asyncHandler = require('express-async-handler')
const axios = require('../config/axios')
const movieTrailer = require('movie-trailer')
const apiKey = process.env.API_KEY

const getPopular = asyncHandler(async (req, res) => {
    // res.status(401).json({ message: 'Unauthorized' })
    const page = req.query.page ? req.query.page : '1'
    console.log(`/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
    await axios.get(`/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`).then(response => {
        res.status(200).json(response.data)
    }
    ).catch(err => 
         res.status(err.response.status).json(err.response.data)
         )
})

const searchMovies = asyncHandler(async (req, res) => {
    const page = req.query.page ? req.query.page : '1'
    const keyWord = (req.query.keyword)
    if (!keyWord) res.status(400).json({ message: '/keyword is required' })
    await axios.get(`/search/movie?api_key=${apiKey}&query=${keyWord}&page=${page}&language=en-US`).then(response => {
        res.status(200).json(response.data)
    }
    ).catch(err =>
         res.status(err.response.status).json(err.response.data)
         )
})

const getMovieDetails = asyncHandler(async (req, res) => {
    const page = req.query.page ? req.query.page : '1'
    const id = (req.params.id)
    await axios.get(`/movie/${id}?api_key=${apiKey}&language=en-US`).then(response => {
        res.status(200).json(response.data)
    }
    ).catch(err => res.status(err.response.status).json(err.response.data))
})

const getMovieReviews = asyncHandler(async (req, res) => {
    const id = (req.params.id)
    movieTrailer(null, { tmdbId: 5889 }).then(res => console.log(res))
    await axios.get(`/movie/${id}/reviews?api_key=${apiKey}&language=en-US`).then(response => {
        res.status(200).json(response.data)
    }
    ).catch(err => res.status(err.response.status).json(err.response.data))
})

const getMovieTrailer = asyncHandler(async (req, res) => {
    const id = (req.params.id)
    movieTrailer(null, { tmdbId: id }).then(response => {
        res.status(200).json({ id, trailer: response })
    }
    ).catch(err => res.status(err.response.status).json(err.response.data))
})

module.exports = { getPopular, searchMovies, getMovieDetails, getMovieReviews, getMovieTrailer }