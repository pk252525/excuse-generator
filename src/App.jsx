import { useState } from 'react'
import GenerateControlComponent from './components/GenerateControlComponent'
import ExcuseCardComponent from './components/ExcuseCardComponent'
import ExcuseHistoryComponent from './components/ExcuseHistoryComponent'

const excuses = {
  spoznienie: [
    'Autobus mi uciekł sprzed nosa.',
    'Budzik się nie włączył.',
    'Były straszne korki na mieście.',
    'Kot schował mi klucze.',

  ],
  'brak zadania': [
    'Pies zjadł mój zeszyt.',
    'Komputer się zepsuł i wszystko usunęło.',
    'Myślałem, że zadanie jest na przyszły tydzień.',
    'Zostawiłem zadanie w domu na biurku.'
  ],
  nieobecnosc: [
    'Byłem chory i miałem gorączkę.',
    'Miałem wizytę u dentysty.',
    'Musiałem pomóc babci w przeprowadzce.',
    'Zatrułem się czymś na obiedzie.'
  ]
}

function App() {
  const [currentExcuse, setCurrentExcuse] = useState(null)
  const [history, setHistory] = useState([])

  function generateExcuse(reason) {
    const list = excuses[reason]
    const randomIndex = Math.floor(Math.random() * list.length)

    const newExcuse = {
      id: Date.now(),
      text: list[randomIndex],
      reason: reason,
      rating: 0,
      status: 'oczekujaca'
    }

    setCurrentExcuse(newExcuse)
    setHistory([newExcuse, ...history])
  }

  function rateExcuse(rating) {
    const updated = { ...currentExcuse, rating: rating }
    setCurrentExcuse(updated)

    const newHistory = history.map((item) => {
      if (item.id === currentExcuse.id) {
        return { ...item, rating: rating }
      }
      return item
    })
    setHistory(newHistory)
  }

  function changeStatus(id, status) {
    const newHistory = history.map((item) => {
      if (item.id === id) {
        return { ...item, status: status }
      }
      return item
    })
    setHistory(newHistory)
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Excuse Generator & Tracker</h1>

      <div className="row">
        <div className="col-md-6">
          <GenerateControlComponent onGenerate={generateExcuse} />
          <ExcuseCardComponent excuse={currentExcuse} onRate={rateExcuse} />
        </div>
        <div className="col-md-6">
          <ExcuseHistoryComponent history={history} onChangeStatus={changeStatus} />
        </div>
      </div>
    </div>
  )
}

export default App
