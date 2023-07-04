require("dotenv").config()
const asyncHandler = require("express-async-handler")
const axios = require("../config/axios")
const apiKey = process.env.API_KEY

const getPopularShows = asyncHandler(async(req,res)=>{
    const page = req.query.page ? req.query.page : "1"
    console.log(`/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`)
    await axios.get(`/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`).then(response =>{
        console.log(response.data)  
        res.status(200).json(response.data)
    }).catch(err=>{
        res.status(err.response.status).json(err.response.status)
    })
})

const searchShows = asyncHandler(async (req,res)=>{
    const page = req.query.page ? req.query.page : "1"
    await axios.get(`/search/tv?api_key=${apiKey}$page=${page}&language=en-US`).then(response=>{
        res.status(200).json(response.data)
    }).catch(err=>{
        res.status(err.response.status).json(err.response.status)
    })
})

const getShowDetails = asyncHandler (async(req, res)=>{
    const id = (req.params.id)
    await axios.get(`/tv/${id}?api_key=${apiKey}&language=en-US`).then(response=>{
        res.status(200).json(response.data)
    }).catch(err=>{
        res.status(err.response.status).json(err.response.status)
    })
})
const getShowReviews = asyncHandler(async (req, res) => {
    const id = (req.params.id)
    await axios.get(`/tv/${id}/reviews?api_key=${apiKey}&language=en-US`).then(response => {
        res.status(200).json(response.data)
    }
    ).catch(err => res.status(err.response.status).json(err.response.data))
})
module.exports={getPopularShows, searchShows, getShowDetails, getShowReviews}