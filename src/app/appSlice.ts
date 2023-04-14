import { type Languages, type Themes } from '@/types'
import { preferredTheme } from '@/utils'
import {
  type PayloadAction,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { type RootState } from './store'
import i18next from '@/i18n/config'

interface AppState {
  theme: Themes
  language: Languages
  menuOpen: boolean
}

const initialState: AppState = {
  theme: preferredTheme(),
  language: i18next.resolvedLanguage as Languages,
  menuOpen: false,
}

export const updateLanguage = createAsyncThunk(
  'app/updateLanguage',
  async (language: Languages) => {
    await i18next.changeLanguage(language)
    return language
  },
)

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
  extraReducers: (builder) => {
    builder.addCase(updateLanguage.fulfilled, (state, action) => {
      state.language = action.payload
    })
  },
})

export const { updateTheme, updateMenuOpen } = appSlice.actions

export const selectTheme = (state: RootState): Themes => state.app.theme
export const selectMenuOpen = (state: RootState): boolean => state.app.menuOpen
export const selectLanguage = (state: RootState): Languages =>
  state.app.language

export default appSlice.reducer
