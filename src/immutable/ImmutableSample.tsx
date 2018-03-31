import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { List } from 'immutable'

export default class ImmutableSample extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    const list = List.of(1, 2, 3, 4, 5, 6)
    const filtered = list.filter((i) => i % 2 === 0)
    return <div>{filtered.map((i) => <li key={i}>{i}</li>)}</div>
  }
}
