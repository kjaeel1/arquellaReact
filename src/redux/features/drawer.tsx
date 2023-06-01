import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DrawerState {
  value: boolean
}

const initialState: DrawerState = {
  value: false,
}

export const drawerSlice = createSlice({
  name: 'Drawer',
  initialState,
  reducers: {
    draerState: (state, action) => {
      state.value = action.payload
    },


   
  },
})

// Action creators are generated for each case reducer function
export const {draerState}  = drawerSlice.actions

export default drawerSlice.reducer