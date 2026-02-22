import * as S from './styles'

export interface Props {
  children: React.ReactNode
  is_active: boolean
  onClick?: () => void
}

const Modal = (props: Props) => (
  <S.Overlay $is_active={props.is_active} onClick={props.onClick}>
    <S.ModalContent onClick={(e) => e.stopPropagation()}>{props.children}</S.ModalContent>
  </S.Overlay>
)

export default Modal
