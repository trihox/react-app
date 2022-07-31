import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { count: 0 };

export const dataSlice = createSlice({
    name: "data",
    initialState: { value: initialStateValue },
    reducers: {
        setData: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;