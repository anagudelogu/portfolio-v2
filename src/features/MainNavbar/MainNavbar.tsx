import { memo, type FC } from 'react'
import { Button, Navbar } from 'react-daisyui'
import { ReactComponent as HambugerIcon } from '@/assets/hamburger.svg'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Logo } from '../Logo'
import { useMobileDrawer } from '@/hooks'

export const MainNavbar: FC = memo(() => {
  const { handleOpen } = useMobileDrawer()
  return (
    <Navbar className="px-4 sticky top-0 z-20 bg-base-100">
      <Navbar.Start>
        <Logo />
      </Navbar.Start>
      <Navbar.Center className="hidden md:block">
        <Button color="ghost">Projects</Button>
        <Button color="ghost">Experience</Button>
        <Button color="ghost">About</Button>
        <Button color="ghost">Contact</Button>
      </Navbar.Center>
      <Navbar.End>
        <Button
          shape="circle"
          color="ghost"
          className="md:hidden"
          onClick={handleOpen}
        >
          <HambugerIcon className="h-8 w-8" />
        </Button>
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
