import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

import CantioLogo from '../../resources/Cantio.png';

const APP_NAME = 'Cantio';

export const Logo = () => {
    return <Link className={styles.nolink} to="/">
        <div className={styles.logo}>
            <img src={CantioLogo} />
        </div>
        {/* <div className={styles.logo}>{APP_NAME}</div> */}
    </Link>;
};

export default Logo;
