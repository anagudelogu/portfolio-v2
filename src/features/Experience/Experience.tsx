import { memo, type FC } from 'react'
import { Button, Card } from 'react-daisyui'
import { ReactComponent as DownloadIcon } from '@/assets/download.svg'
import { ReactComponent as MicroverseIcon } from '@/assets/Microverse.svg'
import { ReactComponent as HoololiIcon } from '@/assets/Hoololi.svg'
import ResumeSrc from '@/assets/Resume.pdf'
import { useTranslation } from 'react-i18next'

export const Experience: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <section className="w-full flex flex-col gap-10 my-20 lg:grid lg:grid-cols-7 lg:grid-rows-4 xl:grid-cols-2">
      <h2 className="flex flex-col text-center leading-none w-full lg:row-span-2 lg:col-span-3 lg:text-start xl:col-span-1">
        <span className="text-5xl font-extrabold lg:text-6xl xl:text-7xl 2xl:text-8xl">
          {t('experience.title')}
        </span>
        <span className="text-xl md:text-2xl font-light">
          {t('experience.subtitle')}
        </span>
      </h2>
      <div className="flex flex-col gap-5 w-full lg:row-span-4 lg:col-span-4 xl:col-span-1">
        <Card className="bg-base-300 px-6 py-4">
          <h4 className="flex flex-col">
            <span className="text-lg flex">
              <HoololiIcon className="w-8 h-8" />
              Hoololi
            </span>
            <span className="text-xs">Colombia ({t('experience.remote')})</span>
          </h4>
          <h3 className="text-4xl font-extrabold">
            {t('experience.hoololi_title')}
          </h3>
          <h4 className="text-sm">{t('experience.hoololi_date')}</h4>
        </Card>
        <Card className="bg-base-300 px-6 py-4">
          <h4 className="flex flex-col">
            <span className="text-lg flex">
              <MicroverseIcon className="w-8 h-8" />
              Microverse
            </span>
            <span className="text-xs">
              San Francisco, Ca ({t('experience.remote')})
            </span>
          </h4>
          <h3 className="text-4xl font-extrabold">
            {t('experience.microverse_title')}
          </h3>
          <h4 className="text-sm">{t('experience.microverse_date')}</h4>
        </Card>
      </div>
      <a
        href={ResumeSrc}
        target="_blank"
        rel="noreferrer"
        className="block w-full md:max-w-md md:mx-auto lg:row-span-2 lg:col-span-3 lg:justify-self-start lg:mx-0 xl:col-span-1"
      >
        <Button className="flex items-center justify-center gap-5 text-lg w-full">
          {t('experience.resume')} <DownloadIcon className="w-6 h-6" />
        </Button>
      </a>
    </section>
  )
})

Experience.displayName = 'Experience'
