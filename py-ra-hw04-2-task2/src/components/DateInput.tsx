type DateInputProps = {
  date: string
  onDateChange: (date: string) => void
}

function DateInput ({ date, onDateChange }: DateInputProps): JSX.Element {
  return (
    <input className="create-data__date" value={date} name="date" onChange={(e) => { onDateChange(String(e.target.value)) }} type="date" required/>
  )
}

export default DateInput
