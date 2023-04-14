import { selectLanguage, updateLanguage } from '@/app'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { lngs, type Languages } from '@/types'
import { memo, type FC, type ChangeEventHandler } from 'react'
import { Select, type SelectProps } from 'react-daisyui'

export interface LanguageSwitcherProps extends Omit<SelectProps, 'children'> {}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(
  ({ ...props }) => {
    const dispatch = useAppDispatch()
    const language = useAppSelector(selectLanguage)
    const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
      void dispatch(updateLanguage(e.target.value as Languages))
    }

    return (
      <Select
        color="ghost"
        onChange={handleChange}
        value={language}
        {...props}
      >
        {lngs.map((lng) => (
          <Select.Option
            key={lng}
            value={lng}
          >
            {lng.toUpperCase()}
          </Select.Option>
        ))}
      </Select>
    )
  },
)

LanguageSwitcher.displayName = 'LanguageSwitcher'
