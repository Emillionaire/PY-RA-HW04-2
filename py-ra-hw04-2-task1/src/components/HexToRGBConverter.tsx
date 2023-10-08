import { useEffect } from "react"

type HexToRGBConverterProps = {
  text: string
  onColorChange: (color: string) => void
}

function HexToRGBConverter({ text, onColorChange }: HexToRGBConverterProps): JSX.Element {
  let rgbText: string = ''
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(text)

  if (result) {
    rgbText = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    onColorChange(rgbText)
  } else if (text.length === 7) {
    rgbText = 'Ошибка!'
    onColorChange('#fc2c08')
  }

  return (
    <span>{rgbText}</span>
  )
}

export default HexToRGBConverter
