import { memo, type FC } from 'react'
import { Button, Navbar } from 'react-daisyui'
import { ReactComponent as HambugerIcon } from '@/assets/hamburger.svg'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Logo } from '../Logo'
import { useMobileDrawer } from '@/hooks'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../LanguageSwitcher'

export const MainNavbar: FC = memo(() => {
  const { handleOpen } = useMobileDrawer()
  const { t } = useTranslation()
  return (
    <Navbar className="px-4 sticky top-0 z-20 bg-base-100">
      <Navbar.Start>
        <Logo />
      </Navbar.Start>
      <Navbar.Center className="hidden md:block">
        <Button color="ghost">{t('navigation.projects')}</Button>
        <Button color="ghost">{t('navigation.experience')}</Button>
        <Button color="ghost">{t('navigation.about')}</Button>
        <Button color="ghost">{t('navigation.contact')}</Button>
      </Navbar.Center>
      <Navbar.End className="xl:gap-2">
        <Button
          shape="circle"
          color="ghost"
          className="md:hidden"
          onClick={handleOpen}
        >
          <HambugerIcon className="h-8 w-8" />
        </Button>
        <LanguageSwitcher className="hidden md:block" />
        <ThemeSwitcher
          color="ghost"
          shape="circle"
          className="hidden md:flex md:justify-center md:items-center"
        />
      </Navbar.End>
    </Navbar>
  )
})

MainNavbar.displayName = 'MainNavbar'
