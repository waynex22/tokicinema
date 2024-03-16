import * as request from "@/utils/request/request";
import { Banner } from "@/utils/types/banner";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    banners: [],
    status: 'idle',
    error: null
}


export const getBanner = createAsyncThunk('banner/getBanner' , async () => {
    const res = await request.get('/banner');
    return res.data;
}) 

const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBanner.pending , (state) => {
            state.status = 'loading';
        })
        .addCase(getBanner.fulfilled , (state , action: PayloadAction <Banner>) => {
            state.status = 'succeeded';
            state.banners = action.payload;
        })
        .addCase(getBanner.rejected , (state , action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default bannerSlice.reducer;