import { useState } from 'react'
import CreateDataForm from './components/CreateDataForm'
import DataContainer from './components/DataContainer'
import type Data from './components/types'

function App (): JSX.Element {
  const [data, setData] = useState<Data[]>([])
  const [date, setDate] = useState('')
  const [distance, setDistance] = useState<number | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <CreateDataForm
        date={date}
        distance={distance}
        onDateChange={setDate}
        onDistanceChange={setDistance}
        onFormSubmit={(newData) => {
          setData((prevData) => {
            const existingData = data.find((item) => item.date === newData.date)
            if (existingData) {
              if (isEditing) {
                setIsEditing(false)
                existingData.distance = newData.distance
              } else {
                existingData.distance += newData.distance
              }
              return [...prevData]
            } else {
              const sortedData = [...prevData, newData]
              sortedData.sort((a, b) => {
                const firstTime = new Date(a.date).getTime()
                const secondTime = new Date(b.date).getTime()
                return secondTime - firstTime
              })
              return [...sortedData]
            }
          })
        }} />
      <DataContainer
        data={data}
        onRowDelete={((id) => {
          const filteredData = data.filter((item) => item.id !== id)
          setData([...filteredData])
        })}
        onRowEdit={((id) => {
          const item = data.find((item) => item.id === id)
          if (item) {
            setIsEditing(true)
            setDate(item.date)
            setDistance(item.distance)
          }
        })} />
    </>
  )
}

export default App
