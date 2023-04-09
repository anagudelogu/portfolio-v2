import { memo, type FC } from 'react'
import { Button, Navbar, Swap } from 'react-daisyui'
import { ReactComponent as HambugerIcon } from '@/assets/hamburger.svg'
import { ReactComponent as SunIcon } from '@/assets/sun.svg'
import { ReactComponent as MoonIcon } from '@/assets/moon.svg'

export const MainNavbar: FC = memo(() => {
  return (
    <Navbar className="px-4 sticky top-0 z-20 bg-base-100">
      <Navbar.Start>
        <span className="text-2xl lg:text-3xl">
          <strong>Andres</strong>DEV
        </span>
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
        >
          <HambugerIcon className="h-8 w-8" />
        </Button>
        <Button
          shape="circle"
          color="ghost"
          className="md:inline-flex hidden"
        >
          <Swap
            rotate
            active
            onElement={<SunIcon className="h-6 w-6" />}
            offElement={<MoonIcon className="h-6 w-6" />}
          />
        </Button>
      </Navbar.End>
    </Navbar>
  )
})

MainNavbar.displayName = 'MainNavbar'
