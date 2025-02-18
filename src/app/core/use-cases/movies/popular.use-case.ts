import { HttpAdapter } from "../../../config/adapters/http/http_adapter";
import { MovieDBMovieResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entitie";

interface Options{
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MovieDBMovieResponse>("/popular", {
            params: {
                page: options?.page ?? 1,
                limit: options?.limit
            }
        });

        // return popular.results.map(result=> MovieMapper.fromMovieDBResultToEntity(result))
        return popular.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log(error);
        throw new Error(`Error fetching movies - PopularUseCase`);
    }
};
