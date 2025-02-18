import { HttpAdapter } from "../../../config/adapters/http/http_adapter";
import { MovieDBCastResponse } from "../../../Infraestructure/Interfaces/movie-db.responses";
import { CastMapper } from "../../../Infraestructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entitie";

export const getMovieCaseUseCast = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);

        const actors = cast.map(CastMapper.fromMovieDBCastToEntity)

        return actors
    } catch (error) {
       throw new Error(`Cannot get movie cast: ${movieId}`);
        
    }
}