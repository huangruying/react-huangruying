
import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as indexActions from "../actions/index"

class App extends React.Component {
  render(){
      return(
          <div>
              { this.props.children }
          </div>
      )
  }
}

function mapStateToProps (state) {
  return{
      
  }
}

function mapDispatchToProps (dispatch){
  return {
    indexActions: bindActionCreators(indexActions,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)