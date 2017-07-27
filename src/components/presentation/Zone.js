import React, {Component} from 'react'
import styles from './styles'

class Zone extends Component {
  render(){
    const zipCode = this.props.zone.zipCodes[0]
    return(
      <div style={styles.zone.container}>
        <h2 style={styles.zone.header}>
          <a style={styles.zone.anchor} href="">{this.props.zone.name}</a>
        </h2>
        <span className="detail">{zipCode}</span><br/>
        <span className="detail">{this.props.zone.comments} comments</span>
      </div>
    )
  }
}

export default Zone;
