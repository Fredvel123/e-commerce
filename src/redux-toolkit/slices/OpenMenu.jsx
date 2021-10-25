import { createSlice } from "@reduxjs/toolkit";

export const MenuOpenSlice = createSlice({
  name: "openMenuShopping",
  initialState: {
    value: false
  },
  reducers: {
    setOpenMenuShopping: (state, action) => {
      state.value = action.payload
    }
  }
})
export default MenuOpenSlice.reducer;
export const {setOpenMenuShopping} = MenuOpenSlice.actions