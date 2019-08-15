import React from 'react'
import styled from 'styled-components';
import Chart from 'react-apexcharts';

const Wrapper = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ActionPlanHeader =  styled.label`
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 25px;
    padding: 10px;
    margin: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ChartWrapper = styled.div`

    margin: 20px auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 3px 15px #555;
    background-color: white;
`

const ChartTitle = styled.label`
    color: black;
    font-weight: bold;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

class ActionPlan extends React.Component<{ [label:string]: any }, { [label:string]: any }> {
    
    constructor(props: any) {
        super(props)

        this.state = {
            current: {
                title: "Current Money Flow",
                options: {
                    labels: ['Expenses', 'Investments', 'Savings']
                },
                series: [100000, 100000, 200000]
            },
            target: {
                title: "Stategy Recommended: Aggressive Investment",
                options: {
                    labels: ['Expenses', 'Investments', 'Fixed Deposit']
                },
                series: [80000, 200000, 120000]
            }
        }
    }


    render() {
        return (
            <Wrapper>
                <ActionPlanHeader>
                    Saving Strategy
                </ActionPlanHeader>
                <ChartWrapper>
                    <ChartTitle>
                        {this.state.current.title}
                    </ChartTitle>
                    <Chart  options={this.state.current.options} series={this.state.current.series} type="pie" width="400"/>
                </ChartWrapper>

                <ChartWrapper>
                    <ChartTitle>
                        {this.state.target.title}
                    </ChartTitle>
                    <Chart  options={this.state.target.options} series={this.state.target.series} type="pie" width="400"/>
                </ChartWrapper>
            </Wrapper>
        )
    }
}

export default ActionPlan;