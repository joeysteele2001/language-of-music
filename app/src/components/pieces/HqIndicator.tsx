import React from 'react';
import Icon, { IconName, IconSize } from './Icon';

export const HqIndicator = () => {
    return (
        <>
            <Icon name={IconName.Star} size={IconSize.Large} />&nbsp;
            <abbr title="High-Quality Translation">HQ</abbr>
        </>
    );
};

export default HqIndicator;
