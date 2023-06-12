import { memo, type FC } from 'react'
import { Hero, MainNavbar, MobileDrawer } from '@/features'
import { Drawer, Theme } from 'react-daisyui'
import { useAppSelector } from '@/hooks'
import { selectMenuOpen, selectTheme } from './appSlice'
import '@/i18n'

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
          <main className="px-4 max-w-[1440px] mx-auto xl:px-8">
            <Hero />
          </main>
        </div>
      </Drawer>
    </Theme>
  )
})

App.displayName = 'App'
