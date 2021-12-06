import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

const APP_NAME = 'Cantio';

export const Logo = () => {
    return <Link className={styles.nolink} to="/">
        <div className={styles.logo}>{APP_NAME}</div>
    </Link>;
};

export default Logo;
