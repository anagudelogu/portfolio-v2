import { selectLanguage, updateLanguage } from '@/app'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { memo, type FC, type MouseEventHandler } from 'react'
import { Swap, Button, type ButtonProps } from 'react-daisyui'
import { ReactComponent as SpainFlag } from '@/assets/es.svg'
import { ReactComponent as UsaFlag } from '@/assets/us.svg'

export interface LanguageSwitcherProps extends ButtonProps {}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(
  ({ ...props }) => {
    const dispatch = useAppDispatch()
    const language = useAppSelector(selectLanguage)
    const active = language === 'en'
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault()
      if (active) {
        void dispatch(updateLanguage('es'))
      } else {
        void dispatch(updateLanguage('en'))
      }
    }

    return (
      <Button
        onClick={handleClick}
        color="ghost"
        {...props}
      >
        <Swap
          rotate
          active={active}
          onElement={<UsaFlag className="h-8 w-8" />}
          offElement={<SpainFlag className="h-8 w-8" />}
        />
      </Button>
    )
  },
)

LanguageSwitcher.displayName = 'LanguageSwitcher'
