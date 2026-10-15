function ExcuseHistoryComponent(props) {
  function getBadgeColor(status) {
    if (status === 'udana') return 'bg-success'
    if (status === 'odrzucona') return 'bg-danger'
    return 'bg-warning text-dark'
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Historia wymówek</h5>

        {props.history.length === 0 && <p>Brak użytych wymówek.</p>}

        <ul className="list-group">
          {props.history.map((item) => (
            <li key={item.id} className="list-group-item">
              <p className="mb-1">{item.text}</p>
              <small className="text-muted">
                Powód: {item.reason} | Ocena: {item.rating}/5
              </small>
              <div className="mt-2">
                <span className={'badge me-2 ' + getBadgeColor(item.status)}>
                  {item.status}
                </span>
                <button
                  className="btn btn-sm btn-outline-success me-1"
                  onClick={() => props.onChangeStatus(item.id, 'udana')}
                >
                  Udana
                </button>
                <button
                  className="btn btn-sm btn-outline-danger me-1"
                  onClick={() => props.onChangeStatus(item.id, 'odrzucona')}
                >
                  Odrzucona
                </button>
                <button
                  className="btn btn-sm btn-outline-warning"
                  onClick={() => props.onChangeStatus(item.id, 'oczekująca')}
                >
                  Oczekująca
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExcuseHistoryComponent
