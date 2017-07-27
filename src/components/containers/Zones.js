import React, {Component} from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component {
  constructor(props){
    super(props)
    this.state = {
      zone: {
        name: '',
        zipCodes: '',
        comments: '',
      },
      list: [],
    }
  }

  componentDidMount(){


    superagent
    .get('/api/zone')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {

      if(err){
        console.log("message:" + err)
        return
      }
      let results = response.body.results;
      this.setState({
        list: results,
      })
    })
  }

  updateZone(event) {
    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone["name"] = event.target.value;
    this.setState({
      zone: updatedZone,
    })
  }

  updatezipCodes(event) {
    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone["zipCodes"] = event.target.value;
    this.setState({
      zone: updatedZone,
    })
  }

  updateComments(event) {
    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone["comments"] = event.target.value;
    this.setState({
      zone: updatedZone,
    })
  }

  submitZones(event) {
    console.log(this.state.zone)
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.zone);
    this.setState({
      list: updatedList,
    })
  }

  render(){
    const listItems = this.state.list.map( (zone, i) => {
      return(<li key={i}><Zone zone={zone}/></li>)
    })

    return(
      <div>
        <ol>
          {listItems}
        </ol>
        <input className="form-control" type="text" onChange={this.updateZone.bind(this)} placeholder="Zone"/> <br/>
        <input className="form-control" type="text" onChange={this.updatezipCodes.bind(this)} placeholder="zipCodes"/> <br/>
        <input className="form-control" type="text" onChange={this.updateComments.bind(this)} placeholder="Comments"/> <br/>
        <button className="btn btn-info" onClick={this.submitZones.bind(this)}>Submit Zone</button>
      </div>
    )
  }
}

export default Zones;
