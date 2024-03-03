import {IRes} from "../types";
import {IMovieDetails, IMovies} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IPosters} from "../interfaces";

const movieService = {

    getAll: (page:string='1'): IRes<IMovies> => apiService.get(urls.movies_list,{params: {page:page}}),
    getById: (movie_id: number): IRes<IMovieDetails> => apiService.get(urls.movies.byId(movie_id)),
    getMoviePosters:(movie_id: number, language:string='en'):IRes<IPosters> => apiService.get(urls.movies.images(movie_id),{params:{language:language}})
}

export {
    movieService
}