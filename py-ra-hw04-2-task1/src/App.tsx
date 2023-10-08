import { useState } from "react"
import HexToRGBConverter from './components/HexToRGBConverter'

function App(): JSX.Element {
  const [text, setText] = useState('')
  const [color, setColor] = useState('#ffffff')

  return (
    <div className="container" style={{
      backgroundColor: color
    }}>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Введите hex"/>
      <HexToRGBConverter onColorChange={(colorValue) => setColor(colorValue)} text={text} />
    </div>
  )
}

export default App
