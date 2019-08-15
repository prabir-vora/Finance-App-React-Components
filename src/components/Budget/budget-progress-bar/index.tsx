import React from 'react';
import styled from 'styled-components'

interface TrackerProps {
    percentage: number,
    type: string,
    limit: number,
    
}
interface VerticalLineProps {  

}

const Wrapper = styled.div`
    width: 100%;
`

const Tracker = styled.div`
    position: relative;
    width: 90%;
    height: 30px;
    margin: 30px  auto 15px auto;
    background: rgb(34,34,34);
    border-radius: 7px;
    box-shadow: inset 0 0 5px #000;
`;

const ProgressInTracker = styled.div`
    width: ${(props: TrackerProps) => `${props.percentage}%`};
    height: 100%;
    background-color: ${(props: TrackerProps) => props.type === "under" ? "green" : "red"};
    border-radius: 5px;
    padding: 3px;
    box-shadow: inset 0 0 2px  #000;

    > .vl {
        position: absolute;
        left: ${(props: TrackerProps) => `${props.limit}%`};
        top: 0;
        width: 1px;
        height: 100%;
        background-color: black;
    }

    > .ref {
        position: absolute;
        left: ${(props: TrackerProps) => `${props.limit}%`};
        top: -100%;
        height: 100%;
        text-align: center;
    }

`


const SpendingLabel = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    padding: 2px;
`

const VerticalLine = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    padding: 2px;
`

const ReferenceLabel = styled.label`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

interface PropTypes {
    percentage: number;
    type: string;
    limit: number;
    description: string;
    referanceValue: string;
}

class BudgetProgressBar extends React.Component<PropTypes> {

    render() {
        return (
            <Wrapper>
                <Tracker>
                    <ProgressInTracker  percentage={this.props.percentage} type={this.props.type} limit={this.props.limit}>
                        <VerticalLine className="vl"  />
                        <ReferenceLabel className="ref">
                            {this.props.referanceValue}
                        </ReferenceLabel>
                        <SpendingLabel>
                            {this.props.description}
                        </SpendingLabel>
                    </ProgressInTracker>
                </Tracker>
            </Wrapper>
           

        )
    }
}

export default BudgetProgressBar;
