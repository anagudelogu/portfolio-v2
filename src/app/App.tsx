import { memo, type FC } from 'react'
import { MainNavbar } from '@/features'
import { Theme } from 'react-daisyui'
import { useAppSelector } from '@/hooks'
import { selectTheme } from './appSlice'

export const App: FC = memo(() => {
  const theme = useAppSelector(selectTheme)
  return (
    <Theme dataTheme={theme}>
      <div className="max-w-[1600px] mx-auto">
        <MainNavbar />
      </div>
    </Theme>
  )
})

App.displayName = 'App'
