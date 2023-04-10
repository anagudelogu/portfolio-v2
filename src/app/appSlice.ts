import { type Themes } from '@/types'
import { preferredTheme } from '@/utils'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type RootState } from './store'

interface AppState {
  theme: Themes
  menuOpen: boolean
}

const initialState: AppState = {
  theme: preferredTheme(),
  menuOpen: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<Themes>) => {
      state.theme = action.payload
    },
    updateMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.menuOpen = action.payload
    },
  },
})

export const { updateTheme, updateMenuOpen } = appSlice.actions

export const selectTheme = (state: RootState): Themes => state.app.theme
export const selectMenuOpen = (state: RootState): boolean => state.app.menuOpen

export default appSlice.reducer
