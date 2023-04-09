import { memo, type FC } from 'react'
import { Button } from 'react-daisyui'

export const App: FC = memo(() => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button color="primary">Click Me!</Button>
    </div>
  )
})

App.displayName = 'App'
