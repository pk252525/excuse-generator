import { useState } from 'react'

function ExcuseCardComponent(props) {
  const [copied, setCopied] = useState(false)

  if (props.excuse === null) {
    return (
      <div className="alert alert-secondary">
        Wybierz powód i kliknij "Generuj wymówkę".
      </div>
    )
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(props.excuse.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <button
        key={i}
        className={i <= props.excuse.rating ? 'btn btn-warning me-1' : 'btn btn-outline-warning me-1'}
        onClick={() => props.onRate(i)}
      >
        ★
      </button>
    )
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Twoja wymówka</h5>
        <p className="card-text fs-5">"{props.excuse.text}"</p>

        <button className="btn btn-success mb-3" onClick={copyToClipboard}>
          {copied ? 'Skopiowano!' : 'Kopiuj do schowka'}
        </button>

        <div>
          <p className="mb-1">Oceń wymówkę: {props.excuse.rating}/5</p>
          {stars}
        </div>
      </div>
    </div>
  )
}

export default ExcuseCardComponent
