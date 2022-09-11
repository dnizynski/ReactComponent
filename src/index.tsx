import React from 'react'

export interface ReactComponentProps {
  text: string
}

const ReactComponent = ({ text }: ReactComponentProps) => {
  return (
    <div>
      ExampleComponent <span>{text}</span>
    </div>
  )
}

export default ReactComponent
