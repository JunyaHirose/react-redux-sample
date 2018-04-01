import * as React from 'react'
const styles = require('./style.css')

export class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p className={styles.App}>it's home.</p>
      </div>
    )
  }
}
