import {useState} from 'react'
import MoleculeDataCounter, {
  moleculeDataCounterSizes
} from '../../../../components/molecule/dataCounter/src'

const stylesSection = {
  border: '1px solid #CCC',
  background: '#fff',
  margin: '40px 0',
  padding: '30px 10px'
}

const consoleValue = (e, {value}) => {
  console.log({value})
}

const minValueHelpText = 'Minimum Value'
const minValueErrorText = 'The value cannot be lower than the Minimum Value'
const maxValueHelpText = 'Maximum Value'
const maxValueErrorText = 'The value cannot be higher than the Maximum Value'

const propsMessages = {
  minValueHelpText,
  minValueErrorText,
  maxValueHelpText,
  maxValueErrorText
}

const Demo = () => {
  const [isLoading, setIsLoading] = useState(false)

  const consoleValueLoading = (e, {value}) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log({value})
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div>
      <h1>Data Counter</h1>
      <h2>Basic</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          onChange={consoleValue}
          label="Label"
          id="demo1"
          {...propsMessages}
        />
      </div>

      <h2>Loading</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          isLoading={isLoading}
          onChange={consoleValueLoading}
          label="Click an action to start loading"
          id="demo1"
          {...propsMessages}
        />
      </div>

      <h2>Disabled</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          onChange={consoleValue}
          label="All"
          id="demo2"
          disabled
          {...propsMessages}
        />
        <br />
        <MoleculeDataCounter
          onChange={consoleValue}
          label="Input"
          id="demo2"
          inputDisabled
          {...propsMessages}
        />
      </div>

      <h2>Min=2 & Max=7 w/ error</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          onChange={consoleValue}
          min={2}
          max={7}
          label="Label"
          value={13}
          id="demo3"
          {...propsMessages}
        />
      </div>

      <h2>Size=SMALL</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter
          onChange={consoleValue}
          label="Label"
          id="demo4"
          min={3}
          size={moleculeDataCounterSizes.SMALL}
          {...propsMessages}
        />
      </div>
    </div>
  )
}

export default Demo
