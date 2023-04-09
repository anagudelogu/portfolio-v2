import { memo, type FC } from 'react'
import { Button } from 'react-daisyui'
import { ReactComponent as CloseIcon } from '@/assets/close.svg'
import { Logo } from '../Logo'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useMobileDrawer } from '@/hooks'

export const MobileDrawer: FC = memo(() => {
  const { handleClose } = useMobileDrawer()
  return (
    <div className="h-screen w-screen relative bg-base-100 flex flex-col justify-evenly px-8">
      <Button
        color="ghost"
        shape="circle"
        className="absolute top-4 right-4"
        onClick={handleClose}
      >
        <CloseIcon className="w-8 h-8" />
      </Button>
      <Logo className="text-center mt-8" />
      <div className="flex flex-col gap-8 self-start">
        <a
          onClick={handleClose}
          className="text-4xl font-bold"
        >
          Projects
        </a>
        <a
          onClick={handleClose}
          className="text-4xl font-bold"
        >
          Experience
        </a>
        <a
          onClick={handleClose}
          className="text-4xl font-bold"
        >
          About
        </a>
        <a
          onClick={handleClose}
          className="text-4xl font-bold"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <span>Theme</span>
        <ThemeSwitcher
          color="ghost"
          shape="circle"
          className="flex justify-center items-center"
        />
      </div>
    </div>
  )
})

MobileDrawer.displayName = 'MobileDrawer'
