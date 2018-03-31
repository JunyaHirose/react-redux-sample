import * as React from 'react'
import { FileUploadState } from './module'
import { ActionDispatcher } from './Container'

interface Props {
  value: FileUploadState
  actions: ActionDispatcher
}

export class FileUploadSample extends React.Component<Props, {}> {
  handleChangeFile(e: any) {
    const target: HTMLInputElement = e.target as HTMLInputElement
    if (target.files == null) {
      this.props.actions.updateFile(null)
    } else {
      const file = target.files.item(0)
      this.props.actions.updateFile(file)
    }
  }

  render() {
    const file = this.props.value.file
    const button = file ? <button onClick={() => this.props.actions.upload(file)}>upload</button> : null
    return (
      <div>
        <h2>File upload</h2>
        <input type="file" name="myFile" onChange={(e) => this.handleChangeFile(e)} />
        {button}
      </div>
    )
  }
}
