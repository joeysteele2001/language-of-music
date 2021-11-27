import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconName, IconSize } from './Icon';

import styles from './HqIndicator.module.css';

export const HqIndicator = () => {
    return (
        <>
            <Link to="/hqexplanation" className={styles.hq}>
                <Icon name={IconName.Star} size={IconSize.Large} />&nbsp;
                <abbr title="High-Quality Translation">HQ</abbr>
            </Link>
        </>
    );
};

export default HqIndicator;
