import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../../reusableComponents/progress-bar'

const Wrapper = styled.div`
    width: 100%;
    padding: 10px;
`

const GoalsHeader =  styled.label`
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 25px;
    padding: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const GoalsList = styled.ul`
    padding: 10px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style: none;
    width: 100%;
`

// Add hover button effect 

const GoalListItem = styled.li`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    margin: 20px 0px;

    > button {
        display: none;
    }

    &:hover {
    
        button {
            display: inline-block;
        }
    }
`

const IndividualGoalHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const EditGoalButton = styled.button`
    align-items: center;
    background-color: palevioletred;
    width: 100px;
    color: white;
    font-size: 16px;
    margin: 1em;
    margin-left: auto;
    padding: 10px 10px;
    border: 2px solid palevioletred;
    border-radius: 3px;
    font-family: 'Merriweather', serif;  

    &:hover {
        cursor: pointer;
        border: 2px solid palevioletred;
    }
`

interface Props {
    goals: {
        title: string,
        description: string,
        timeframe: string,
        MoneyGoal: number,
        completePercentage: number
    }[]
}

class DisplayGoals extends React.Component<Props, { [label:string]: any }> {

    

    render() {
        return (
            <React.Fragment>
                {
                    (this.props.goals.length === 0) 
                    ?
                    (
                        <GoalsHeader>
                            No Goals Added
                        </GoalsHeader>
                    ) 
                    : 
                    (
                        <Wrapper>
                            <GoalsHeader>
                                Current Goals
                            </GoalsHeader>
                            <GoalsList>
                                {
                                    this.props.goals.map(goal => {
                                        return (
                                        <GoalListItem key={goal.title}> 
                                            <IndividualGoalHeader>
                                                {goal.title}
                                            </IndividualGoalHeader>

                                            <IndividualGoalHeader>
                                                {goal.timeframe}
                                            </IndividualGoalHeader>
                                            
                                            <ProgressBar percentage={goal.completePercentage} />
                                            <EditGoalButton>
                                                Edit
                                            </EditGoalButton>
                                        </GoalListItem>)
                                    })
                                }                        
                            </GoalsList>
                        </Wrapper>
                        )    
                }
            </React.Fragment>
        )
    }
}

export default DisplayGoals;