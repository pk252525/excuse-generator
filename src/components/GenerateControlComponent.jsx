import { useState } from 'react'

function GenerateControlComponent(props) {
  const [reason, setReason] = useState('spoznienie')

  function handleSubmit(e) {
    e.preventDefault()
    props.onGenerate(reason)
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Panel sterowania</h5>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Wybierz powód:</label>
          <select
            className="form-select mb-3"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="spoznienie">Spóźnienie</option>
            <option value="brak zadania">Brak zadania domowego</option>
            <option value="nieobecnosc">Nieobecność</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Generuj wymówkę
          </button>
        </form>
      </div>
    </div>
  )
}

export default GenerateControlComponent
