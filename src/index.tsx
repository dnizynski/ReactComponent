import React from 'react'

export interface ReactComponentProps {
  text: string
}

const ReactComponent = ({ text }: ReactComponentProps) => {
  return (
    <div>
      ExampleComponent 0.3.0 <span>{text}</span>
    </div>
  )
}

export default ReactComponent
