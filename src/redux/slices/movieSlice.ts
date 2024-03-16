import * as request from "@/utils/request/request";
import { Movie } from "@/utils/types/movie";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = {
  movies: [],
  movie: null,
  status: 'idle',
  error: null
};

export const getMovies = createAsyncThunk('movie/getMovies', async () => {
  const res = await request.get('/movie');
  return res.data;
});
export const addNewMovie = createAsyncThunk('movie/addNew', async (data: Movie) => {
  const res = await request.post('/movie/add', data)
  return res.data;
})
export const getMovieById = createAsyncThunk('movie/id', async (_id: string) => {
  const res = await request.get(`/movie/${_id}`);
  return res.data;
})
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addNewMovie: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovies.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewMovie.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(addNewMovie.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getMovieById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovieById.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default movieSlice.reducer;