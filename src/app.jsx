import React, { Component } from 'react';
import "./stylesheets/styles.css"


class App extends Component {
  constructor() {
    super();
    this.state = {
      amountDue: "",
      amountRec: "",
      twenties: "0",
      tens: "0",
      fives: "0",
      ones: "0",
      quarters: "0",
      dimes: "0",
      nickels: "0",
      pennies: "0",
      output: "0",
    }
    this.handleDue = this.handleDue.bind(this);
    this.handleRec = this.handleRec.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleDue(event) {
    const amountDue = (event.target.validity.valid) ? event.target.value : this.state.amountDue; 
    this.setState({amountDue});
  }
  handleRec(event) {
    const amountRec = (event.target.validity.valid) ? event.target.value : this.state.amountRec; 
    
    this.setState({amountRec});
  }

  calculate(e) {
    e.preventDefault();
    let amountDue = this.state.amountDue;
    amountDue = parseFloat(amountDue);
    amountDue = amountDue * 100;
    let amountRec = this.state.amountRec;
    amountRec = parseFloat(amountRec)
    amountRec = amountRec * 100;
    let amountLeft = amountRec - amountDue;
    let amountRet2 = amountRec - amountDue;
    amountRet2 = amountRet2 / 100;
    amountRet2 = amountRet2.toFixed(2);
    

    let twenties, tens, fives, ones, quarters, dimes, nickels, pennies;

    if (amountLeft > 1999) {
      amountLeft = amountLeft % 2000;
      twenties = amountLeft/ 2000
      twenties = Math.floor(twenties)
      twenties = twenties.toFixed();
    } else {
      twenties = 0
    }
    if (amountLeft > 999) {
      tens = amountLeft / 1000;
      tens = Math.floor(tens);
      tens = tens.toFixed();
      amountLeft = amountLeft % 1000;
    } else {
      tens = 0
    }
    if (amountLeft > 499) {
      fives = amountLeft / 500;
      fives = Math.floor(fives);
      fives = fives.toFixed();
      amountLeft = amountLeft % 500;
    } else {
      fives = 0
    }
    if (amountLeft > 99) {
      ones = amountLeft / 100;
      ones = Math.floor(ones);
      ones = ones.toFixed();
      amountLeft = amountLeft % 100;
    } else {
      ones = 0
    }
    if (amountLeft > 24) {
      quarters = amountLeft / 25;
      quarters = Math.floor(quarters);
      quarters = quarters.toFixed();
      amountLeft = amountLeft % 25;
    } else {
      quarters = 0
    }
    if (amountLeft > 9) {
      dimes = amountLeft / 10;
      dimes = Math.floor(dimes);
      dimes = dimes.toFixed();
      amountLeft = amountLeft % 10;
    } else {
      dimes = 0
    }
    if (amountLeft > 4) {
      nickels = amountLeft / 5;
      nickels = Math.floor(nickels);
      nickels = nickels.toFixed();
      amountLeft = amountLeft % 5;
    } else {
      nickels = 0
    }
    if (amountLeft > .99) {
      pennies = amountLeft
      pennies = Math.floor(pennies);
    } else {
      pennies = 0
    }
    this.setState({
      twenties : twenties,
      tens : tens,
      fives : fives,
      ones : ones,
      quarters : quarters,
      dimes : dimes,
      nickels : nickels,
      pennies : pennies,
      output : amountRet2
    })
    console.log(this.state.twenties);
  }
  

  render() {
    return (
      <div className="container">
        <header><h1>Change Calculator</h1></header>
          <div className="row">
            <div className="col-lg-4">
              <div className="panel panel-default">
                <div className="panel-heading">Enter Information</div>
                <div className="panel-body">
                    <label  className="inputLabel" 
                            htmlFor="amountDue">
                            How much is due?
                    </label>
                    <input  name = "amountDue"
                            className="form-control" 
                            type = "text" 
                            pattern = "^[0-9]*(\.[0-9]*)?$" 
                            value ={this.state.amountDue}  
                            onChange={this.handleDue} 
                            id="amountDue"
                             />
                    <label  className="inputLabel" 
                            htmlFor="received">
                            How much was received?
                    </label>
                    <input  name = "amountReceived"
                            className="form-control" 
                            type = "text" 
                            pattern = "^[0-9]*(\.[0-9]*)?$" 
                            value ={this.state.amountRec}  
                            onChange={this.handleRec}   
                            id="received" />
                </div>
                <div className="panel-footer">
                  <div className = "form-group">
                    <button className="btn btn-primary form-control" 
                            type ="submit" 
                            onClick = {this.calculate}>
                            Calculate
                    </button>
                  </div>
              </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="panel">
              <div className="panel-body">
                <div className = "row">
                  <div className="alert alert-success outcome">The total change due is ${this.state.output}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group well col-md-2 outputLabels alert alert-success">
                    <h1 className="labels">Twenties</h1>
                    <p className = "lead outputs">{this.state.twenties}</p>
                  </div>
                  <div className="form-group well col-md-2 outputLabels alert alert-success">
                    <h1 className="labels">Tens</h1>
                    <p className = "lead outputs">{this.state.tens}</p>
                  </div>
                  <div className="form-group well col-md-2 outputLabels alert alert-success">
                    <h1 className="labels">Fives</h1>
                    <p className = "lead outputs">{this.state.fives}</p>
                  </div>
                  <div className="form-group well col-md-2 outputLabels alert alert-success">
                    <h1 className="labels">Ones</h1>
                    <p className = "lead outputs">{this.state.ones}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group well col-md-2 outputLabels alert alert-success">
                    <h1 className="labels">Quarters</h1>
                    <p className = "lead outputs">{this.state.quarters}</p>
                  </div>
                  <div className="form-group well col-md-2 outputLabels alert alert-success">
                    <h1 className="labels">Dimes</h1>
                    <p className = "lead outputs">{this.state.dimes}</p>
                  </div>
                  <div className="form-group well col-md-2 outputLabels alert alert-success">
                    <h1 className="labels">Nickels</h1>
                    <p className = "lead outputs">{this.state.nickels}</p>
                  </div>
                  <div className="form-group well col-md-2 outputLabels alert alert-success">
                    <h1 className="labels">Pennies</h1>
                    <p className = "lead outputs">{this.state.pennies}</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div >

    )
  }
}

export default App;
