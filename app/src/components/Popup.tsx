import React from 'react';
import './Popup.css';

export interface Props {
    children?: React.ReactNode[];
}

const Popup = (props: Props) => {
    const { children } = props;

    const [isOpen, setIsOpen] = React.useState(false);

    const open = () => {
        setIsOpen(true);
    }

    const close = () => {
        setIsOpen(false);
    }

    const content = () => {
        if (isOpen) {
            return <PopupView handleClose={close}>{children}</PopupView>;
        } else {
            return false;
        }
    }

    return (
        <div>
            <button
                className="LyricButton"
                onClick={open}
            >
                lyrics here
            </button>
            {content()}
        </div>
    )

};


interface ViewProps {
    handleClose: () => void | undefined;
    children: React.ReactNode;
}

const PopupView = (props: ViewProps) => {
    const { handleClose, children } = props;

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                {children}
            </div>
        </div>
    );
};

export default Popup;