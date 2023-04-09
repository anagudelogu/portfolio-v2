import { memo, type FC } from 'react'
import { Button, type ButtonProps, Swap } from 'react-daisyui'
import { ReactComponent as SunIcon } from '@/assets/sun.svg'
import { ReactComponent as MoonIcon } from '@/assets/moon.svg'
import { useChangeTheme } from '@/hooks'

export interface ThemeSwitcherProps extends ButtonProps {}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ ...props }) => {
  const { active, handleChangeTheme } = useChangeTheme()
  return (
    <Button
      onClick={handleChangeTheme}
      {...props}
    >
      <Swap
        rotate
        active={active}
        onElement={<SunIcon className="h-6 w-6" />}
        offElement={<MoonIcon className="h-6 w-6" />}
      />
    </Button>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
