import React from 'react';
import styled from 'styled-components';
import ModalSetup from '../../reusableComponents/modal'
import GoalSelectionForm from './GoalsSelectionForm'
import DisplayGoals from './DisplayGoals'
import ActionPlan from './ActionPlan'



const AddGoalButton = styled.button`
    align-items: center;
    background-color: #52B788;
    width: 320px;
    color: white;
    font-size: 16px;
    margin: 1em;
    padding: 10px 10px;
    border: 2px solid #52B788;
    border-radius: 5px;
    font-family: 'Merriweather', serif;  

    &:hover {
        cursor: pointer;
        background-color: #6DBFA3;
        border: 2px solid #6DBFA3;
    }
`

const H3 = styled.h3`
    font-family: 'Merriweather', serif;  
`

const P = styled.p`
    font-family: 'Merriweather', serif;  
    font-size: 12px;
`
const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: palevioletred;
`

const LeftWizard = styled.div`
    padding: 10px 20px; 
    width: 50%;
    height: 100%;
    background-image: linear-gradient(to bottom right, #1ed761, #52B788);
    display: flex;

` 
const RightWizard = styled.div`
    width: 50%;
    height: 100%;
    background-color: #ffffff;

`
    

class Goals extends React.Component< { [key: string]: any }, { [key: string]: any } > {

    
    constructor(props: any) {
        super(props)

        this.state = {
            modalPage: 1,
            isModalOpen: false,
            selectedGoal: ''
        }

        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.dismissable = this.dismissable.bind(this);
        this.goalTypeSelection = this.goalTypeSelection.bind(this);
    }

    // Passed as Props to GoalsSelectionForm
    goalTypes = [ "Save for Retirement", "Save for Emergency", "Buy a Home", "Save for Education", "Plan a Trip", "Pay off Loans", "Custom Goal"];

    //Passed as Props to DisplayGoals
    goals = [
        {
            title :"Save for Retirement",
            description: "Saving 10,00,000 per month. ",
            timeframe: "May 2030",
            MoneyGoal: 1,
            completePercentage: 20,
        },

        {
            title :"Take a Vacation",
            description: "Saving ",
            timeframe: "May 2022",
            MoneyGoal: 10000,
            completePercentage: 40,
        }

    ]

    public handleModalOpen() {
        this.setState( { isModalOpen: !this.state.isModalOpen } )
    }

    public dismissable() {

        this.setState({
            isModalOpen: false
        })
    }

    public goalTypeSelection(goal: string) {
        console.log(goal)
        this.setState({ selectedGoal: goal})
    }

    render() {

        const { isModalOpen, modalPage } = this.state;
        let children;

        if (isModalOpen) {
            if (modalPage === 1) {
                children = (
                    <div>
                        <H3> Choose or create a custom goal </H3>
                        <GoalSelectionForm goals={this.goalTypes} onClick={this.goalTypeSelection} />
                        <P>Step {modalPage} of 3</P>
                    </div>
                    
                )
            } else {
                children = (
                    null
                )
            }
        }

        return (
            <div>
                <AddGoalButton onClick={this.handleModalOpen}>
                    Add Goal
                </AddGoalButton>

                <Main>
                    <LeftWizard>
                        <DisplayGoals goals={this.goals} />
                    </LeftWizard>
                    <RightWizard>
                        <ActionPlan />
                    </RightWizard>
                </Main>

                <ModalSetup
                    visible={isModalOpen}
                    dismiss={this.dismissable}
                    children={children} 
                />
                
            </div>

            
        )
    }
}

export default Goals;