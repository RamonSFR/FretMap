import { useState } from 'react'

import Fretboard from '../Fretboard'
import Modal from '../Modal'
import { notesSharps } from '../../utils/music/notes'

import * as S from './styles'
import Button from '../Button'

const Container = () => {
  const [changeTuning, setChangeTuning] = useState(false)
  const [tuning, setTuning] = useState<string[]>(['E', 'B', 'G', 'D', 'A', 'E'])
  const [filterByScale, setFilterByScale] = useState(false)

  return (
    <S.Container>
      <S.Title>
        Fret<span>Map</span>
      </S.Title>
      <Fretboard tuning={tuning} />
      <Button onClick={() => setChangeTuning(true)}>Mudar Afinação</Button>

      <Modal is_active={changeTuning} onClick={() => setChangeTuning(false)}>
        <>
          <h3>Mudar Afinação</h3>

          <select
            name="e"
            id="first-string"
            value={tuning[0]}
            onChange={(e) =>
              setTuning((prev) => {
                const n = [...prev]
                n[0] = e.target.value
                return n
              })
            }
          >
            {notesSharps.map((note) => (
              <option value={note} key={note}>
                {note}
              </option>
            ))}
          </select>

          <select
            name="B"
            id="second-string"
            value={tuning[1]}
            onChange={(e) =>
              setTuning((prev) => {
                const n = [...prev]
                n[1] = e.target.value
                return n
              })
            }
          >
            {notesSharps.map((note) => (
              <option value={note} key={note}>
                {note}
              </option>
            ))}
          </select>

          <select
            name="G"
            id="third-string"
            value={tuning[2]}
            onChange={(e) =>
              setTuning((prev) => {
                const n = [...prev]
                n[2] = e.target.value
                return n
              })
            }
          >
            {notesSharps.map((note) => (
              <option value={note} key={note}>
                {note}
              </option>
            ))}
          </select>

          <select
            name="D"
            id="fourth-string"
            value={tuning[3]}
            onChange={(e) =>
              setTuning((prev) => {
                const n = [...prev]
                n[3] = e.target.value
                return n
              })
            }
          >
            {notesSharps.map((note) => (
              <option value={note} key={note}>
                {note}
              </option>
            ))}
          </select>

          <select
            name="A"
            id="fifth-string"
            value={tuning[4]}
            onChange={(e) =>
              setTuning((prev) => {
                const n = [...prev]
                n[4] = e.target.value
                return n
              })
            }
          >
            {notesSharps.map((note) => (
              <option value={note} key={note}>
                {note}
              </option>
            ))}
          </select>

          <select
            name="E"
            id="sixth-string"
            value={tuning[5]}
            onChange={(e) =>
              setTuning((prev) => {
                const n = [...prev]
                n[5] = e.target.value
                return n
              })
            }
          >
            {notesSharps.map((note) => (
              <option value={note} key={note}>
                {note}
              </option>
            ))}
          </select>
        </>

        <Button onClick={() => setChangeTuning(false)}>Fechar</Button>
      </Modal>

      <S.buttonsArea>
        <div className='filter'>
          <label htmlFor="scales">Filtrar por escala: </label>
          <input
            onChange={(e) => setFilterByScale(e.target.checked)}
            id="scales"
            type="checkbox"
          />
        </div>
        <div className='scale-select'>
          <select className={filterByScale ? '' : 'disabled'} disabled={!filterByScale} name="" id="">
            <option value="major">Diatônica Maior</option>
            <option value="minor">Diatônica Menor</option>
            <option value="major-pentatonic">Pentatônica Maior</option>
            <option value="minor-pentatonic">Pentatônica Menor</option>
          </select>
          <select className={filterByScale ? '' : 'disabled'} disabled={!filterByScale} name="" id="">
            {notesSharps.map((note) => (
              <option value={note} key={note}>
                {note}
              </option>
            ))}
          </select>
        </div>
      </S.buttonsArea>
    </S.Container>
  )
}

export default Container
