import { memo, type FC } from 'react'
import { MainNavbar } from '@/features'

export const App: FC = memo(() => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <MainNavbar />
    </div>
  )
})

App.displayName = 'App'
