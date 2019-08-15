import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const GoalButton = styled.button`
    display: block;
    width: 100px;
    height: 100px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    border: solid 1px #111;
    padding: 20px;
    margin: 20px;
    text-align: center;
    border-radius: 3px;

    &:hover {
        border: solid 1px #1ed761;
        color: #1ed761;

    }
    
` 

const GoalsSelectionForm = ({ goals, onClick }: {goals: string[], onClick: any}) => {
    return (
        <FormWrapper>
            {
                goals.map(goal => {
                    return (
                        <GoalButton onClick={() => onClick(goal)} value={goal}> {goal} </GoalButton>
                    )
                })
            }
            
        </FormWrapper>
    )
}

export default GoalsSelectionForm;