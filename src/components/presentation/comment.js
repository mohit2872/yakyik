import React, {Component} from 'react'

class Comment extends Component {
  render() {
    const comment = this.props.comment;
    return (
      <div>
        <p style={{fontSize:20, fontWeight:400}}>
          {comment.body}
        </p>
        <span style={{fontWeight:200}}>{comment.username}</span>
        <span style={{fontWeight:200, marginLeft:12, marginRight:12}}>|</span>
        <span style={{fontWeight:200}}>{comment.timestamp}</span>
        <hr/>
      </div>
    )
  }
}

export default Comment;
