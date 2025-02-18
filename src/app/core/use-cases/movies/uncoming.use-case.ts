import { HttpAdapter } from "../../../config/adapters/http/http_adapter";
import { MovieDBMovieResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entitie";

interface Options{
    page?: number;
    limit?: number;
}

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<MovieDBMovieResponse>("/upcoming", {
            params: {
                page: options?.page ?? 1,
                limit: options?.limit
            }
        });

        // return upcoming.results.map(result=> MovieMapper.fromMovieDBResultToEntity(result))
        return upcoming.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log(error);
        throw new Error(`Error fetching movies - UpcomingUseCase`);
    }
};
