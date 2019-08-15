import React from 'react';
import SignUp from './components/SignUp'
import MoneySummary from './components/MoneySummary'
import Goals from './components/Goals/Goals';
import Budget from './components/Budget';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component< { [label:string]: any } >{

  render() {
    return (
      <BrowserRouter>
                <div>
                    <Route path="/" exact component={SignUp} />
                    <Route path="/summary" exact component={MoneySummary} />
                    <Route path="/goals" exact component={Goals} />
                    <Route path="/budget" exact component={Budget} />
                </div>
            </BrowserRouter>
    )
  }
  
}

export default App;
