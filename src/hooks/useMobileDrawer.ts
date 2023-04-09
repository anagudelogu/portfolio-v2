import { updateMenuOpen } from '@/app'
import { useAppDispatch } from './useRedux'

export interface useMobileDrawerReturnData {
  handleOpen: () => void
  handleClose: () => void
}

export const useMobileDrawer = (): useMobileDrawerReturnData => {
  const dispatch = useAppDispatch()

  const handleOpen = (): void => {
    dispatch(updateMenuOpen(true))
  }

  const handleClose = (): void => {
    dispatch(updateMenuOpen(false))
  }

  return { handleOpen, handleClose }
}
