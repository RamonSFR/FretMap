import { notesFlats, notesSharps } from '../../utils/music/notes'

import * as S from './styles'

interface Props {
  tuning?: string[]
  filterByScale?: boolean
  scaleType?: string
  scaleRoot?: string
  useFlats?: boolean
}

const Fretboard = ({
  tuning = ['E', 'B', 'G', 'D', 'A', 'E'],
  filterByScale = false,
  scaleType = 'major',
  scaleRoot = 'C',
  useFlats = false
}: Props) => {
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

  const buildMajorScale = (root: string, useSharps = true) => {
    const notes = useSharps ? notesSharps : notesFlats
    const rootIdx = notes.indexOf(root)
    if (rootIdx === -1) return []

    const intervals = [2, 2, 1, 2, 2, 2, 1]
    const scale: string[] = [notes[rootIdx]]
    let idx = rootIdx
    for (const step of intervals.slice(0, 6)) {
      idx = (idx + step) % notes.length
      scale.push(notes[idx])
    }
    return scale
  }

  const buildMinorScale = (root: string, useSharps = true) => {
    const notes = useSharps ? notesSharps : notesFlats
    const rootIdx = notes.indexOf(root)
    if (rootIdx === -1) return []

    const intervals = [2, 1, 2, 2, 1, 2, 2]
    const scale: string[] = [notes[rootIdx]]
    let idx = rootIdx
    for (const step of intervals.slice(0, 6)) {
      idx = (idx + step) % notes.length
      scale.push(notes[idx])
    }
    return scale
  }

  const buildMajorPentatonic = (root: string, useSharps = true) => {
    const major = buildMajorScale(root, useSharps)
    if (!Array.isArray(major) || major.length === 0) return []
    return major.filter((_, idx) => idx !== 3 && idx !== 6)
  }

  const activeScale = (() => {
    if (!filterByScale) return null
    const useSharps = !useFlats
    if (scaleType === 'major') return buildMajorScale(scaleRoot, useSharps)
    if (scaleType === 'minor') return buildMinorScale(scaleRoot, useSharps)
    if (scaleType === 'major-pentatonic')
      return buildMajorPentatonic(scaleRoot, useSharps)
    return null
  })()

  return (
    <S.Container>
      {tuning.map((openNote, stringIndex) => (
        <S.String key={`string-${stringIndex}`}>
          {findNotesInFrets(openNote, 22, !useFlats).map((note, fretIndex) => {
            const isWrong = Array.isArray(activeScale)
              ? !activeScale.includes(note)
              : false
            return (
              <li
                className={isWrong ? 'wrongNote' : ''}
                key={`s${stringIndex}-f${fretIndex}`}
              >
                <span>{note}</span>
              </li>
            )
          })}
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
