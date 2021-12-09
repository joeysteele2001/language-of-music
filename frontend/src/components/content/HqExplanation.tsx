import React from 'react';

import styles from './HqExplanation.module.css';

export const HqExplanation = () => {
    return (
        <article className={styles.explanation}>
            <h1>What are High-Quality translations?</h1>
            <p>
                In order for this app to be more than marginally useful, we allow you to load any song.
                However, we have to use a computer translator because we don't have every song translated.
                Although the translations should be decent in quality, we can't guarantee they'll be completely accurate.
            </p>
            <p>
                High-Quality translations are those that we have verified are accurate and faithful to the original song.
                Only a few songs have High-Quality translations, but more can be added in the future.
            </p>
        </article>
    );
};

export default HqExplanation;
