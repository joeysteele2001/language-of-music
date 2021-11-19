import React from 'react';
import Icon, { IconName, IconSize } from './Icon';

import styles from './Loading.module.css';

export const Loading: React.FC<{}> = (props) => {
    const { children } = props;
    const loadingText = children || "Loading...";

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <Icon name={IconName.Spinner} size={IconSize.Times5} />
            </div>
            {loadingText}
        </div>
    );
};

export default Loading;