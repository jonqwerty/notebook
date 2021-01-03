import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'


export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    // if (!alert.visible) {
    //     return null
    // }
    
    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 800,
                exit: 500
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || "warning"} alert-dismissible`} >
                <strong>Attention!</strong> 
                &nbsp;{alert.text}
                <button onClick={hide} type="button" className="close"  aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}
