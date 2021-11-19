import React from 'react';

export interface Props {
    name: IconName,
};

const Icon = (props: Props) => {
    const className = IconClassNames[props.name];
    return <i className={className} />;
};

export enum IconName {
    Stroopwafel = 'stroopwafel',
    Book = 'book',
    Star = 'star',
    Palette = 'palette',
    Globe = 'globe',
};

const IconClassNames: Record<IconName, string> = {
    [IconName.Stroopwafel]: 'fas fa-stroopwafel',
    [IconName.Book]: 'fas fa-book',
    [IconName.Star]: 'fas fa-star',
    [IconName.Palette]: 'fas fa-palette',
    [IconName.Globe]: 'fas fa-globe',
};

export default Icon;