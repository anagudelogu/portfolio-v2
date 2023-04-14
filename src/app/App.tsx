import { memo, type FC } from 'react'
import { MainNavbar, MobileDrawer } from '@/features'
import { Drawer, Theme } from 'react-daisyui'
import { useAppSelector } from '@/hooks'
import { selectMenuOpen, selectTheme } from './appSlice'
import '@/i18n'
import { useTranslation } from 'react-i18next'

export const App: FC = memo(() => {
  const theme = useAppSelector(selectTheme)
  const mobileMenuOpen = useAppSelector(selectMenuOpen)
  const { t } = useTranslation()
  return (
    <Theme dataTheme={theme}>
      <Drawer
        side={<MobileDrawer />}
        open={mobileMenuOpen}
      >
        <div className="max-w-[1600px] mx-auto">
          <MainNavbar />
          <h1>{t('hello')}</h1>
        </div>
      </Drawer>
    </Theme>
  )
})

App.displayName = 'App'
