import React from 'react';

import styles from './ProgressBar.module.css';

const WIDTH = 10;
const WIDTH_UNIT = 'ch';

export interface Props {
    /** The value of the progress so far.
     * 
     * Default range: 0 to 1.
     */
    value: number;

    /** The maximum progress possible.
     * 
     * Default: 100.
     */
    max?: number;
}

export const ProgressBar = (props: Props) => {
    const { value } = props;
    const max = props.max || 100;

    return (
        <div className={styles.progressbar} style={{ width: `${WIDTH}${WIDTH_UNIT}` }}>
            <div
                className={styles.progress}
                style={{
                    width: `${value / max * WIDTH}${WIDTH_UNIT}`
                }}
            />
        </div>
    );
};

export default ProgressBar;
