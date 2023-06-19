import { memo, type FC } from 'react'
import heroImageSrc from '@/assets/hero.png'
import { Avatar } from 'react-daisyui'
import { Trans, useTranslation } from 'react-i18next'

export const Hero: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <section className="min-h-[calc(100dvh-64px)] w-full flex flex-col justify-center items-center gap-5 lg:flex-row-reverse lg:justify-between">
      <Avatar
        shape="circle"
        className="max-w-xs sm:max-w-sm lg:max-w-md lg:w-full xl:max-w-lg ring-2 ring-base-200 ring-offset-4 ring-offset-base-100 rounded-full"
      >
        <img
          src={heroImageSrc}
          alt="hero"
        />
      </Avatar>
      <div className="flex flex-col gap-2 w-full xl:w-1/2">
        <h1 className="flex flex-col text-center lg:text-start leading-none">
          <Trans i18nKey={'hero.title'}>
            <span className="text-xl md:text-2xl font-light">
              Hi, I&apos;m Andres
            </span>
            <span className="text-5xl font-extrabold lg:text-8xl">
              FRONTEND DEVELOPER
            </span>
          </Trans>
        </h1>
        <p className="text-xl text-center md:text-2xl font-light lg:text-start">
          {t('hero.description')}
        </p>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'
