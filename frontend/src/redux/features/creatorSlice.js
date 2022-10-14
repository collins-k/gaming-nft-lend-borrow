import { createSlice } from "@reduxjs/toolkit";
import creatorData from "../../data/creatorData";

export const creatorSlice = createSlice({
    name: 'creator',
    initialState: {
        creators: creatorData,
        specificItem: creatorData[0],
    },
    reducers: {
        specificCreator: (state, action) => {
            state.specificItem = state.creators.find(creator => creator.id === action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { specificCreator } = creatorSlice.actions;

export default creatorSlice.reducer;