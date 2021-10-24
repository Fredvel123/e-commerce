import {createSlice} from '@reduxjs/toolkit'

export const DataApiSlice = createSlice({
  name: "dataApi",
  initialState: {
    value: []
  },
  reducers: {
    setDataApi: (state, action) => {
      state.value = action.payload
    }
  }
})
export default DataApiSlice.reducer;
export const {setDataApi} = DataApiSlice.actions