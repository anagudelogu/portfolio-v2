import { memo, type FC } from 'react'
import heroImageSrc from '@/assets/hero.png'
import { Avatar } from 'react-daisyui'

export const Hero: FC = memo(() => {
  return (
    <section className="min-h-[calc(100vh-64px)] w-full flex flex-col justify-center items-center gap-5 lg:flex-row-reverse lg:justify-between">
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
          <span className="text-xl md:text-2xl font-light">
            Hi, I&apos;m Andres
          </span>
          <span className="text-5xl font-extrabold lg:text-8xl">
            FRONTEND DEVELOPER
          </span>
        </h1>
        <p className="text-xl text-center md:text-2xl font-light lg:text-start">
          Detail-oriented and team-focused professional committed to
          transforming product ideas into outstanding user experiences.
        </p>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'
