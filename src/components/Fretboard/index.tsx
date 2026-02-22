import * as S from './styles'

const Fretboard = () => {
  const notesSharps = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
  ]
  const notesFlats = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B'
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
      <S.String>
        {findNotesInFrets('E', 22, true).map((note) => (
          <li key={note}>{note}</li>
        ))}
      </S.String>

      <S.String>
        {findNotesInFrets('B', 22, true).map((note) => (
          <li key={note}>{note}</li>
        ))}
      </S.String>

      <S.String>
        {findNotesInFrets('G', 22, true).map((note) => (
          <li key={note}>{note}</li>
        ))}
      </S.String>

      <S.String>
        {findNotesInFrets('D', 22, true).map((note) => (
          <li key={note}>{note}</li>
        ))}
      </S.String>

      <S.String>
        {findNotesInFrets('A', 22, true).map((note) => (
          <li key={note}>{note}</li>
        ))}
      </S.String>
      
      <S.String>
        {findNotesInFrets('E', 22, true).map((note) => (
          <li key={note}>{note}</li>
        ))}
      </S.String>
    </S.Container>
  )
}

export default Fretboard
