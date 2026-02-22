import Fretboard from '../Fretboard'
import * as S from './styles'



const Container = () => {
  return (
    <S.Container>
      <S.Title>
        Fret<span>Map</span>
      </S.Title>
      <Fretboard />
    </S.Container>
  )
}

export default Container
