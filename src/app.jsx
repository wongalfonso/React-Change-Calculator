import React, { Component } from 'react';

export default class ChangeCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountRec: '',
      twenties: '0',
      tens: '0',
      fives: '0',
      ones: '0',
      quarters: '0',
      dimes: '0',
      nickels: '0',
      pennies: '0',
      output: '0',
    }
    this.handleDue = this.handleDue.bind(this);
    this.handleRec = this.handleRec.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleDue(event) {
    const amountDue = (event.target.validity.valid) ? event.target.value : this.state.amountDue;
    this.setState({ amountDue });
  }
  handleRec(event) {
    const amountRec = (event.target.validity.valid) ? event.target.value : this.state.amountRec;

    this.setState({ amountRec });
  }

  calculate(e) {
    e.preventDefault();
    let twenties, tens, fives, ones, quarters, dimes, nickels, pennies, amountLeft;
    let amountDue = this.state.amountDue;
    let amountRec = this.state.amountRec;
    amountDue = parseFloat(amountDue);
    amountDue = amountDue * 100;
    amountRec = parseFloat(amountRec)
    amountRec = amountRec * 100;

    let amount = amountRec - amountDue;
    let amountRet3 = amountRec - amountDue;
    amountRet3 = amountRet3 / 100;
    amountRet3 = amountRet3.toFixed(2);


    
    if (amount > 1999) {      
      twenties = amount / 2000
      amountLeft = amount % 2000;
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
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
      output: amountRet3
    })
  }


  render() {
    var alert, leftOver;
    if (this.state.output > -1) {
      alert = 'alert alert-success changeOutcome';
      leftOver = 'The total change due is $';
    }
    if (this.state.output < 0) {
      alert = 'alert alert-danger changeOutcome';
      leftOver = 'You owe a balance of $';
    }
    return (
      <div id='changeCalcProject'>
        <div className='container changeContainer'>
          <div id='changeHeader'><h1>Change Calculator</h1></div>

          <div className='row'>

            <div className='col-4'>
              <div className='card card-default'>
                <div className='card-header changeText'>Enter Information</div>
                <div className='card-body'>
                  <label className='changeInputLabel' htmlFor='amountDue'>
                    How much is due?
                  </label>

                  <input name='amountDue'
                    className='form-control'
                    type='text'
                    pattern='^[0-9]*(\.[0-9]*)?$'
                    value={this.state.amountDue}
                    onChange={this.handleDue}
                    id='amountDue'
                  />
                  <label className='changeInputLabel'
                    htmlFor='received'>
                    How much was received?
                    </label>
                  <input name='amountReceived'
                    className='form-control'
                    type='text'
                    pattern='^[0-9]*(\.[0-9]*)?$'
                    value={this.state.amountRec}
                    onChange={this.handleRec}
                    id='received' />
                </div>
                <div className='card-footer'>
                  <div className='form-group'>
                    <button className='btn btn-primary form-control' type='submit' onClick={this.calculate}>
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-8'>
              <div className='card'>
                <div className='card-body'>

                  <div className='row'>
                    <div className={alert}> {leftOver + this.state.output}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='well ChangeOutputLabels alert alert-success'>
                      <h1 className='changeLabels'>Twenties</h1>
                      <p className='lead changeOutputs'>{this.state.twenties}</p>
                    </div>
                    <div className='well ChangeOutputLabels alert alert-success'>
                      <h1 className='changeLabels'>Tens</h1>
                      <p className='lead changeOutputs'>{this.state.tens}</p>
                    </div>
                    <div className='well ChangeOutputLabels alert alert-success'>
                      <h1 className='changeLabels'>Fives</h1>
                      <p className='lead changeOutputs'>{this.state.fives}</p>
                    </div>
                    <div className='well ChangeOutputLabels alert alert-success'>
                      <h1 className='changeLabels'>Ones</h1>
                      <p className='lead changeOutputs'>{this.state.ones}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='form-group well ChangeOutputLabels alert alert-success'>
                      <h1 className='changeLabels'>Quarters</h1>
                      <p className='lead changeOutputs'>{this.state.quarters}</p>
                    </div>
                    <div className='form-group well ChangeOutputLabels alert alert-success'>
                      <h1 className='changeLabels'>Dimes</h1>
                      <p className='lead changeOutputs'>{this.state.dimes}</p>
                    </div>
                    <div className='form-group well ChangeOutputLabels alert alert-success'>
                      <h1 className='changeLabels'>Nickels</h1>
                      <p className='lead changeOutputs'>{this.state.nickels}</p>
                    </div>
                    <div className='form-group well ChangeOutputLabels alert alert-success'>
                      <h1 className='changeLabels'>Pennies</h1>
                      <p className='lead changeOutputs'>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div >
      </div>
    )
  }
};
