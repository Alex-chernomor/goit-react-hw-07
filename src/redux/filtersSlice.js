import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'filters',
    initialState:{
        name:'',
    },
    reducers:{
        searchName:(state,action)=>{
          state.name=action.payload
        }
    }
})

export const { searchName } = slice.actions;
export const selectNameFilter = (state) => state.filters.name;
export default slice.reducer;