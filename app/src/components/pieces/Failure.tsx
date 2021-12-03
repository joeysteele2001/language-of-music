import React from 'react';
import Icon, { IconName, IconSize } from './Icon';

import styles from './Failure.module.css';

export const Failure: React.FC<{}> = (props) => {
    const { children } = props;
    const loadingText = children || "Error";

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <Icon name={IconName.ExclamationTriangle} size={IconSize.Times5} />
            </div>
            {loadingText}
        </div>
    );
};

export default Failure;