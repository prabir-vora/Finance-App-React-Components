import  React from 'react'
import styled from 'styled-components'
import BudgetProgressBar from './budget-progress-bar'

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    background-color: palevioletred;
`

const LeftWizard = styled.div`
    padding: 10px 20px; 
    width: 60%;
    background-image: linear-gradient(to bottom right, #1ed761, #52B788);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
` 

const RightWizard = styled.div`
    width: 40%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`
const BudgetHeader = styled.div`
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 50px;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
`   

const BudgetHeaderSection = styled.div`
    background-color: white;
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 15px #555;
    border-radius: 10px;
`

// Entire container to show the budget sub sections 

const BudgetDisplaySection = styled.div`
    background-color: white;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 3px 15px #555;
    margin: 30px 0;
`

// Individual Container for Sub Sections 


const BudgetSubSection = styled.div`

    margin: 20px auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: left;
    border-radius: 10px;
    box-shadow: 0px 3px 15px #555;
    padding: 30px 10px;
    background-color: white;
`

const SubSectionHeader = styled.label`
    text-align: left;
    color: black;
    font-weight: bold;
    font-size: 30px;
    padding: 5px;
    margin: 10px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
`

const ActivityNameHeader =  styled(SubSectionHeader)`
    text-align: left;
    font-size: 20px;
    padding: 2px;
`

const BudgetSummaryContainer = styled.div`
    background-color: white;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 2px 5px #555;
    margin: 30px 0;
`

const BudgetSummaryTitle = styled.div`
    
    color: black;
    font-weight: bold;
    font-size: 30px;
    padding: 5px;
    margin: 10px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
`

const BudgetSummaryStatLabels = styled.div`
    
`

class Budget extends React.Component<{[key: string]: any}, {[key: string]: any}> {

    constructor(props: any) {
        super(props)


        this.state = {

        }

        this.renderList = this.renderList.bind(this)
    }

    render() {
        return (
            <Wrapper>
                <LeftWizard>
                    <BudgetHeaderSection>
                        <BudgetHeader>
                            May 2019
                        </BudgetHeader>
                        
                        <BudgetProgressBar referanceValue={"₹15,000 over"} description={"₹75,000 of ₹60,000"} percentage={90} type={"over"} limit={70}/>
                    </BudgetHeaderSection>

                        {this.renderList()}

                </LeftWizard>
                <RightWizard>
                    <BudgetSummaryContainer>
                        <BudgetSummaryTitle>
                            Annual Statistics
                        </BudgetSummaryTitle>
                    </BudgetSummaryContainer>
                </RightWizard>
            </Wrapper>
        )
    }

    renderList() {
        return (
            <React.Fragment>
                <BudgetSubSection>
                    <SubSectionHeader>
                        Entertainment
                    </SubSectionHeader>

                    <ActivityNameHeader>
                        Subscriptions
                    </ActivityNameHeader>

                    <BudgetProgressBar referanceValue={"₹1000 Left"} description={"₹2000 of ₹3000"} percentage={50} type={"under"} limit={75}/>

                    <ActivityNameHeader>
                        Shopping
                    </ActivityNameHeader>

                    <BudgetProgressBar referanceValue={"₹500 Left"} description={"₹4500 of ₹5000"} percentage={75} type={"under"} limit={75}/>
                    
                </BudgetSubSection>

            

                <BudgetSubSection>
                    <SubSectionHeader>
                        Food & Dining
                    </SubSectionHeader>

                    <ActivityNameHeader>
                        Home
                    </ActivityNameHeader>

                    <BudgetProgressBar referanceValue={"₹1000 over"} description={"₹10000 of ₹9000"} percentage={90} type={"over"} limit={75}/>

        

                    <ActivityNameHeader>
                        Restaurants
                    </ActivityNameHeader>

                    <BudgetProgressBar referanceValue={"₹500 Left"} description={"₹4500 of ₹5000"} percentage={75} type={"under"} limit={75}/>
                    
                </BudgetSubSection>
            </React.Fragment>
            
        )
    }
}

export default Budget;