import { memo, type FC } from 'react'
import { MainNavbar, MobileDrawer } from '@/features'
import { Drawer, Theme } from 'react-daisyui'
import { useAppSelector } from '@/hooks'
import { selectMenuOpen, selectTheme } from './appSlice'

export const App: FC = memo(() => {
  const theme = useAppSelector(selectTheme)
  const mobileMenuOpen = useAppSelector(selectMenuOpen)
  return (
    <Theme dataTheme={theme}>
      <Drawer
        side={<MobileDrawer />}
        open={mobileMenuOpen}
      >
        <div className="max-w-[1600px] mx-auto">
          <MainNavbar />
        </div>
      </Drawer>
    </Theme>
  )
})

App.displayName = 'App'
