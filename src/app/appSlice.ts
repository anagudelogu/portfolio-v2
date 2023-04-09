import { type Themes } from '@/types'
import { preferredTheme } from '@/utils'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type RootState } from './store'

interface AppState {
  theme: Themes
}

const initialState: AppState = {
  theme: preferredTheme(),
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<Themes>) => {
      state.theme = action.payload
    },
  },
})

export const { updateTheme } = appSlice.actions

export const selectTheme = (state: RootState): Themes => state.app.theme

export default appSlice.reducer
