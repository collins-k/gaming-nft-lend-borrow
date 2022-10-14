import { createSlice } from "@reduxjs/toolkit";

export const devSlice = createSlice({
    name: 'dev',
    initialState: {
        createdProfile: false,
    },
    reducers: {
      
    },
})

// Action creators are generated for each case reducer function
export const { isProfileCreated } = devSlice.actions;

export default devSlice.reducer;