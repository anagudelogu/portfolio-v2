import { type MouseEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from './useRedux'
import { selectTheme, updateTheme } from '@/app'

export interface useChangeThemeReturnData {
  active: boolean
  handleChangeTheme: MouseEventHandler<HTMLButtonElement>
}

export const useChangeTheme = (): useChangeThemeReturnData => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const active = theme === 'winter'

  const handleChangeTheme: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (active) {
      dispatch(updateTheme('night'))
    } else {
      dispatch(updateTheme('winter'))
    }
  }

  return { active, handleChangeTheme }
}
