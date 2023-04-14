export const lngs = ['en', 'es'] as const

export type Languages = (typeof lngs)[number]
