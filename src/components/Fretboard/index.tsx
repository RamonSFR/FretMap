import { notesFlats, notesSharps } from '../../utils/music/notes'

import * as S from './styles'

interface Props {
  tuning?: string[]
}

const Fretboard = ({ tuning = ['E', 'B', 'G', 'D', 'A', 'E'] }: Props) => {
  const fretMarkers = [
    '',
    '•',
    '',
    '•',
    '',
    '•',
    '',
    '•',
    '',
    '•',
    '',
    '',
    '••',
    '',
    '',
    '•',
    '',
    '•',
    '',
    '•',
    '',
    '•',
    ''
  ]

  const findNotesInFrets = (
    initialNote: string,
    numberOfFrets: number,
    useSharps: boolean
  ): string[] => {
    const notes = useSharps ? notesSharps : notesFlats
    const fretNotes: string[] = []

    const idxInSharps = notesSharps.indexOf(initialNote)
    const idxInFlats = notesFlats.indexOf(initialNote)
    const semitoneIndex = idxInSharps !== -1 ? idxInSharps : idxInFlats

    if (semitoneIndex === -1) {
      throw new Error(`findNotesInFrets: unknown initialNote "${initialNote}"`)
    }

    if (numberOfFrets < 0) return []

    for (let fret = 0; fret <= numberOfFrets; fret++) {
      const note = notes[(semitoneIndex + fret) % notes.length]
      fretNotes.push(note)
    }

    return fretNotes
  }

  console.log(findNotesInFrets('C#', 22, true))
  return (
    <S.Container>
      {tuning.map((openNote, stringIndex) => (
        <S.String key={`string-${stringIndex}`}>
          {findNotesInFrets(openNote, 22, true).map((note, fretIndex) => (
            <li key={`s${stringIndex}-f${fretIndex}`}>
              <span>{note}</span>
            </li>
          ))}
        </S.String>
      ))}

      <S.Markers>
        {fretMarkers.map((marker, index) => (
          <li key={index}>
            <span>{marker}</span>
          </li>
        ))}
      </S.Markers>
    </S.Container>
  )
}

export default Fretboard
