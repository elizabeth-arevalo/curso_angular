import { HttpAdapter } from "../../../config/adapters/http/http_adapter";
import { MovieDBMovieResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entitie";

interface Options{
    page?: number;
    limit?: number;
}

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<MovieDBMovieResponse>("/top_rated", {
            params: {
                page: options?.page ?? 1,
                limit: options?.limit
            }
        });

        // return topRated.results.map(result=> MovieMapper.fromMovieDBResultToEntity(result))
        return topRated.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log(error);
        throw new Error(`Error fetching movies - topRatedUseCase`);
    }
};
