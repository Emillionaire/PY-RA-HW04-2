import type Data from './types'

type DataRowProps = {
  data: Data
  onRowDelete: (id: number) => void
  onRowEdit: (id: number) => void
}

function DataRow ({ data, onRowDelete, onRowEdit }: DataRowProps): JSX.Element {
  return (
    <div className="container__data">
      <div className="container__data__date">
        {data.date}
      </div>
      <div className="container__data__distance">
        {data.distance}
      </div>
      <div className="container__data__actions">
        <button onClick={() => { onRowDelete(data.id) }}>delete</button>
        <button onClick={() => { onRowEdit(data.id) }}>edit</button>
      </div>
    </div>
  )
}

export default DataRow
