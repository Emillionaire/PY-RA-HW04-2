type DistanceInputProps = {
  distance: number | null
  onDistanceChange: (distance: number) => void
}

function DistanceInput ({ distance, onDistanceChange }: DistanceInputProps): JSX.Element {
  return (
    <input className="create-data__distance" defaultChecked={false} value={distance ?? ''} name="distance" onChange={(e) => { onDistanceChange(Number(e.target.value)) }} type="number" step={0.1} required/>
  )
}

export default DistanceInput
