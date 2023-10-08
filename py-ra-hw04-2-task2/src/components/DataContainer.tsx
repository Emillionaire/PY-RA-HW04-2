import type Data from './types'
import DataRow from './DataRow'

type DataContainerProps = {
  data: Data[]
  onRowDelete: (id: number) => void
  onRowEdit: (id: number) => void
}

function DataContainer ({ data, onRowDelete, onRowEdit }: DataContainerProps): JSX.Element {
  return (
    <>
      <div className="headers">
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      <div className="container">
        {data.map((item) => <DataRow onRowDelete={onRowDelete} onRowEdit={onRowEdit} key={item.id} data={item} />)}
      </div>
    </>
  )
}

export default DataContainer
