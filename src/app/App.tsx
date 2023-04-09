import { memo, type FC } from 'react'

export const App: FC = memo(() => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
})

App.displayName = 'App'
