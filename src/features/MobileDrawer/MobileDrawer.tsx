import { memo, type FC } from 'react'
import { Button } from 'react-daisyui'
import { ReactComponent as CloseIcon } from '@/assets/close.svg'
import { Logo } from '../Logo'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useMobileDrawer } from '@/hooks'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../LanguageSwitcher'

export const MobileDrawer: FC = memo(() => {
  const { handleClose } = useMobileDrawer()
  const { t } = useTranslation()
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
          {t('navigation.experience')}
        </a>
        <a
          onClick={handleClose}
          className="text-4xl font-bold"
        >
          {t('navigation.projects')}
        </a>
        <a
          onClick={handleClose}
          className="text-4xl font-bold"
        >
          {t('navigation.about')}
        </a>
        <a
          onClick={handleClose}
          className="text-4xl font-bold"
        >
          {t('navigation.contact')}
        </a>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex flex-col gap-4">
          <span>{t('theme')}</span>
          <ThemeSwitcher
            color="ghost"
            shape="circle"
            className="flex justify-center items-center"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span>{t('language')}</span>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
})

MobileDrawer.displayName = 'MobileDrawer'
