const express = require('express');
const MoviesService = require('../services/movies');

const moviesApi = app => {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', async (req, res, next) => {
        const { tags } = req.query;//Un query es cuando se pone el signo de ? el nombre del query y se puede concatenar.

        try {
            const movies = await moviesService.getMovies({ tags })
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });
        } catch(err) {
            next(err);
        }
    });

    router.get('/:movieId', async (req, res, next) => {
        const { movieId } = req.params;//La diferencia con el query es que los parametros están establecidos en la url.

        try {
            const movies = await moviesService.getMovies({ movieId })
            res.status(200).json({
                data: movies,
                message: 'movies retrieve'
            });
        } catch(err) {
            next(err);
        }
    });

    router.post('/', async (req, res, next) => {
        const { body: movie } = req;

        try {
            const createMovieId = await moviesService.createMovie({ movie });
            res.status(201).json({
                data: createMovieId,
                message: 'movie created'
            });
        } catch(err) {
            next(err);
        }
    })

    router.put('/:movieId', async (req, res, next) => {
        const { movieId } = req.params;
        const { body: movie } = req;

        try {
            const updatedMovieId = await moviesService.updateMovie({ movieId, movie });
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            });
        } catch(err) {
            next(err);
        }
    })

    router.delete('/:movieId', async (req, res, next) => {
        const { movieId } = req.params;

        try {
            const deleteMovieId = await moviesService.deletedMovie({ movieId });
            res.status(200).json({
                data: deleteMovieId,
                message: 'movie deleted'
            });
        } catch(err) {
            next(err);
        }
    })
};

module.exports = moviesApi;