import React from 'react';
import styled from 'styled-components'

interface Props {
    percentage: number
}

const Tracker = styled.div`
    width: 100%;
    height: 20px;
    margin: 15px auto;
    background: rgb(34,34,34);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
`;

const ProgressInTracker = styled.div`
    width: ${(props: Props) => `${props.percentage}%`};
    height: 100%;
    background-color: palevioletred;
    border-radius: 8px;

`

interface PropTypes {
    percentage: number;
}

class ProgressBar extends React.Component<PropTypes> {

    constructor(props: any) {
        super(props)

    }
    render() {
        return (
           <Tracker>
                <ProgressInTracker percentage={this.props.percentage} />
           </Tracker>

        )
    }
}

export default ProgressBar;
