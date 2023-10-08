import type { FormEvent } from 'react'
import DateInput from './DateInput'
import DistanceInput from './DistanceInput'
import type Data from './types'

type CreateDataFormProps = {
  date: string
  distance: number | null
  onFormSubmit: (data: Data) => void
  onDateChange: (date: string) => void
  onDistanceChange: (distance: number | null) => void
}

let id = 1

function CreateDataForm ({ date, distance, onFormSubmit, onDateChange, onDistanceChange }: CreateDataFormProps): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const date = String(formData.get('date'))
    const distance = Number(formData.get('distance'))
    onDateChange('')
    onDistanceChange(null)

    date && distance && onFormSubmit({ id: id++, date, distance })
  }

  return (
    <>
      <div className="form-header">
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено км</div>
        <div></div>
      </div>
      <form className="create-data" onSubmit={(e) => { handleSubmit(e) }}>
        <DateInput date={date} onDateChange={onDateChange} />
        <DistanceInput distance={distance} onDistanceChange={onDistanceChange} />
        <input className="create-data__submit" type="submit" value='ОК' />
      </form>
    </>
  )
}

export default CreateDataForm
