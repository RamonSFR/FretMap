import type { ReactNode } from 'react'

import * as S from './styles'

interface buttonProps {
  children: ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: buttonProps) => <S.Btn onClick={onClick}>{children}</S.Btn>

export default Button
