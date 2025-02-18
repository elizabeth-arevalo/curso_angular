import { HttpAdapter } from "../../../config/adapters/http/http_adapter";
import { NowPlayingResponse } from "../../../Infraestructure/Interfaces/movie-db.responses";
import { MovieMapper } from "../../../Infraestructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entitie";

interface Options{
    page?: number;
    limit?: number;
}

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>("/now_playing", {
            params: {
                page: options?.page ?? 1,
                limit: options?.limit
            }
        });

        // return nowPlaying.results.map(result=> MovieMapper.fromMovieDBResultToEntity(result))
        return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log(error);
        throw new Error(`Error fetching movies - NowPlaying`);
    }
};
