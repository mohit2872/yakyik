import React, {Component} from 'react'
import Comment from '../presentation/comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component {
  constructor(props){
    super(props)

    this.state = {
      comment: {
        body: '',
        username: '',
        timestamp: '',
      },
      comments: [],
    }
  }

  componentDidMount(){
    superagent
    .get('/api/comment')
    .query(null)
    .set('Accept', '/application/json')
    .end((err, response) => {
      if(err){
        console.log('message:', err)
        return
      }

      let results = response.body.results;
      this.setState({
        comments: results
      })

    })
  }

  submitComment() {
    let updatedList = Object.assign([], this.state.comments);
    updatedList.push(this.state.comment)
    this.setState({
      comments: updatedList
    })
  }

  updateUsername(event) {
    let updatedComment = this.state.comment;
    updatedComment["username"] = event.target.value;
    this.setState({
      comment: updatedComment,
    })
  }

  updateTime(event) {
    let updatedComment = this.state.comment;
    updatedComment["timestamp"] = event.target.value;
    this.setState({
      comment: updatedComment,
    })
  }

  updateComment(event) {
    let updatedComment = this.state.comment;
    updatedComment["body"] = event.target.value;
    this.setState({
      comment: updatedComment,
    })
  }

  render() {
    const commentList = this.state.comments.map( (comment,i) => {
      return <li key={i}><Comment comment={comment}/></li>
    })
    return (
      <div>
        <h3>Comments: Zone 1</h3>
        <div style={styles.comment.commentsBox}>
          <ul style={styles.comment.commentsList}>
            {commentList}
          </ul>


            <input onChange={this.updateUsername.bind(this)} type="text" className="form-control" placeholder="username"/> <br/>
            <input onChange={this.updateComment.bind(this)} type="text" className="form-control" placeholder="comment"/> <br/>
            <input onChange={this.updateTime.bind(this)} type="text" className="form-control" placeholder="time"/> <br/>
            <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

        </div>
      </div>
    )
  }
}

export default Comments;
