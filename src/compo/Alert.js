import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word ? word.toLowerCase() : '';
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    const getAlertStyle = (type) => {
        switch (type) {
            case 'success':
                return { backgroundColor: '#d4edda', color: '#155724' };
            case 'error':
                return { backgroundColor: '#f8d7da', color: '#721c24' };
            case 'warning':
                return { backgroundColor: '#fff3cd', color: '#856404' };
            default:
                return { backgroundColor: '#FFEB55', color: '#000000' };
        }
    };

    return (
        props.alert && (
            <div className="alerte">
                <div 
                    className="alert alert-primary" 
                    style={{ ...getAlertStyle(props.alert.type), border: 'none' }} 
                    role="alert"
                >
                    {props.alert.message} : <strong>{capitalize(props.alert.type)}</strong>
                </div>
            </div>
        )
    );
}

export default Alert;
