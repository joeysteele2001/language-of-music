import React from 'react';

export interface Props {
    name: IconName,
    size?: IconSize,
};

const Icon = (props: Props) => {
    let className = IconClassNames[props.name];
    if (props.size) {
        className = `${className} ${props.size}`;
    }

    return <i className={className} />;
};

export const enum IconName {
    Stroopwafel = 'stroopwafel',
    Book = 'book',
    Star = 'star',
    Palette = 'palette',
    Globe = 'globe',
    Spinner = 'spinner',
    Hotdog = 'hotdog',
    Frown = 'frown',
    ExclamationTriangle = 'exclamation-triangle',
    QuestionCircle = 'question-circle',
};

const IconClassNames: Record<IconName, string> = {
    [IconName.Stroopwafel]: 'fas fa-stroopwafel',
    [IconName.Book]: 'fas fa-book',
    [IconName.Star]: 'fas fa-star',
    [IconName.Palette]: 'fas fa-palette',
    [IconName.Globe]: 'fas fa-globe',
    [IconName.Spinner]: 'fas fa-spinner',
    [IconName.Hotdog]: 'fas fa-hotdog',
    [IconName.Frown]: 'fas fa-frown',
    [IconName.ExclamationTriangle]: 'fas fa-exclamation-triangle',
    [IconName.QuestionCircle]: 'fas fa-question-circle',
};

export enum IconSize {
    ExtraSmall = 'fa-xs',
    Small = 'fa-sm',
    Large = 'fa-lg',
    Times2 = 'fa-2x',
    Times3 = 'fa-3x',
    Times4 = 'fa-4x',
    Times5 = 'fa-5x',
    Times6 = 'fa-6x',
    Times7 = 'fa-7x',
    Times8 = 'fa-8x',
    Times9 = 'fa-9x',
    Times10 = 'fa-10x',
};

export default Icon;