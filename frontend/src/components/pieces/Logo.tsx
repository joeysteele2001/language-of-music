import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

import CantioLogo from '../../resources/Cantio.png';

export const Logo = () => {
    return <Link className={styles.nolink} to="/">
        <div className={styles.logo}>
            <img src={CantioLogo} alt="Cantio Logo" />
        </div>
    </Link>;
};

export default Logo;
