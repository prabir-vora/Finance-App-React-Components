import React from 'react';
import { ModalWrapper, ModalBoxSetup, ModalBg } from './ModalStyling';
import PropTypes from "prop-types";

/*
visible: boolean,
dismiss: function on click on Close.
*/

export default class ModalSetup extends React.Component<{ [key: string]: any}> {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        dismiss: PropTypes.func.isRequired
    }

    render() {

        const { visible, dismiss, children } = this.props;

        return (
            <React.Fragment>
               {visible ? (
                 <ModalWrapper>
                     <ModalBoxSetup >{children} </ModalBoxSetup>
                    <ModalBg onClick={dismiss} />
                </ModalWrapper>
               ) : null}
            </React.Fragment>
        );
   
    }

}
