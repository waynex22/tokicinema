import * as request from "@/utils/request/request";
import { Movie } from "@/utils/types/movie";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = {
  movies: [],
  status: 'idle',
  error: null
};

export const getMovies = createAsyncThunk('movie/getMovies', async () => {
  const res = await request.get('/movie');
  return res.data;
});
export const addNewMovie = createAsyncThunk('movie/addNew', async (data: Movie) => {
  const res = await request.post('/movie/add', data)
  return res
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
        state.movies.push(action.payload);
      })
      .addCase(addNewMovie.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  },
});

export default movieSlice.reducer;