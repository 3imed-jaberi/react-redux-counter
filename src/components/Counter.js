import React, { Component } from 'react';
import { connect } from "react-redux";

class Counter extends Component {

  // display all numbers in the console .. 
  
  componentDidMount(){
    console.log(` counter : ${this.props.counter} `);
  }
  componentWillUpdate(){
     console.log(` counter : ${this.props.counter+1} `);
  }

  myStyles = {
    imed_jaberi : {
      color:"grey",
      fontWeight: "bold"
    },
    plus : {
      color: "#FF1493" 
    }
  }



  render() {
    return (
        <div>
          <center>
          <div className="uk-container">
            <div className="uk-card uk-card-secondary uk-width-1-3@m">
              <div className="uk-card-header">
                  <div className="uk-width-expand">
                    <h1 className="uk-card-title uk-margin-remove-bottom"> 
                      REACT REDUX COUNTER 
                    </h1>
                  </div>
                  <hr/>
              </div>
              <div className="uk-card-body">
                <h1 className="counter"> { this.props.counter } </h1>
              </div>
              <div className="uk-card-footer">
                  <button className="uk-button uk-button-primary uk-button-large plus" onClick={this.props.increament}><h1 style={this.myStyles.plus}>+</h1></button>
                  <button className="uk-button uk-button-danger uk-button-large moins" onClick={this.props.decreament}><h1>-</h1></button>
                  <hr/>
                  <p> &copy; 2019 Copyright || Made by <a style={this.myStyles.imed_jaberi} href="https://github.com/3imed-jaberi" > 3imed-jaberi </a> </p>
              </div>
            </div>
          </div>
          </center>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        increament: () => dispatch({type: 'INCREAMENT'}),
        decreament: () => dispatch({type: 'DECREAMENT'}),
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Counter);