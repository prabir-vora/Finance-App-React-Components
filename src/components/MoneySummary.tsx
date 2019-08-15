import React from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #CED3DC;
`

const Card = styled.div`

  @media (max-width: 768px) {
      width: 90%;
      min-width: 380px;
      box-shadow: none;
      box-shadow: none;
      overflow: visible;
      margin: 0%;
      padding: 15px;
    }

  margin: 5% 0%;
  overflow: visible;
  width: 420px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 10px 50px #555;
  background-image: linear-gradient(to bottom right, #1ed761, #52B788);

`

// background-image: linear-gradient(to bottom right, #A9FBD7, #52B788);

const AccountSummaryHeader =  styled.label`
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 30px;
    padding: 10px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`


const LogoHeader = styled.label`
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 50px;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
`


const BreakdownList = styled.ul`
    font-size: 25px;
    padding: 10px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style: none;
`

const BreakdownListComponent = styled.li`
    align-items: center;
    display: flex;
    justify-content: flex-start;
`

const ComponentTitle = styled.label`

`

const ComponentAmount = styled.label`
    margin-left: auto;
`

const LineSeperator = styled.hr`
    height: 2px;
    color: #333;
    background-image: linear-gradient(to right, #555, #333, #555);
    border: none;
    margin-bottom: 20px;
    margin-top: 20px;
`

const ExpenseSection = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`

const SpendingHeader = styled(AccountSummaryHeader)`

`

// const data = [
//     { name: 'Home', value: 10000 },
//     { name: 'Education', value: 30000 },
//     { name: 'Health', value: 5000 },
//     { name: 'Food & Dining', value: 10000 },
//     { name: 'Insurance Dues', value: 12000}
// ];



class MoneySummary extends React.Component<{ [label:string]: any }, { [label:string]: any }> {

    constructor(props: any) {
        super(props)

        this.state = {
            options: {
                labels: ['Home', 'Education', 'Health', 'Food & Dining', 'Insurance Dues']
            },
            series: [10000, 30000, 5000, 10000, 12000]

        }
    }


    render() {
        return (
            <Wrapper>
                <Card>
                    <AccountSummaryHeader>
                        Account Summary
                    </AccountSummaryHeader>
                    <LogoHeader>
                        Net Worth:
                        ₹52,30,000
                    </LogoHeader>
                    <BreakdownList>
                        <BreakdownListComponent>
                            <ComponentTitle>
                                Cash
                            </ComponentTitle>
                            <ComponentAmount>
                                ₹1,50,000
                            </ComponentAmount>
                        </BreakdownListComponent>
                        <LineSeperator/>
                    
                        <BreakdownListComponent>
                            <ComponentTitle>
                                Investments
                            </ComponentTitle>
                            <ComponentAmount>
                                ₹20,00,000
                            </ComponentAmount>
                        </BreakdownListComponent>
                        <LineSeperator/>

                        <BreakdownListComponent>
                            <ComponentTitle>
                                Credit Card Debt
                            </ComponentTitle>
                            <ComponentAmount>
                                -₹50,000
                            </ComponentAmount>
                        </BreakdownListComponent>
                        <LineSeperator/>

                        <BreakdownListComponent>
                            <ComponentTitle>
                                Monthly Budget
                            </ComponentTitle>
                            <ComponentAmount>
                                ₹70,000
                            </ComponentAmount>
                        </BreakdownListComponent>
                        <LineSeperator/>
                    </BreakdownList>

                    <ExpenseSection>
                        <SpendingHeader>
                            Monthly Spending
                        </SpendingHeader>
                    </ExpenseSection>

                    <p> <br /> </p>

                    <ExpenseSection>
                        <div className="donut">
                            <Chart  options={this.state.options} series={this.state.series} type="pie" width="380"/>
                        </div>
                    </ExpenseSection>

                    
                </Card>
            </Wrapper>
        )
    }
  
}

export default MoneySummary;
