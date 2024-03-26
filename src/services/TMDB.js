import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* GET Movies by [Type]
    getMovies: builder.query({
      query: () => {
        return `/movie/popular?api_key=${tmdbApiKey}&language=en-US&page=${page}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
