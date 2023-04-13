/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.HTMLAttributes<HTMLOrSVGElement>>
  const src: string
  export default src
}
