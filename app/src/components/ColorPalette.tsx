import React from 'react';
import './ColorPalette.css';

export const PRIMARY_COLOR = 0x3e188f;
export const PRIMARY_LIGHT = 0xe9dfff;
export const ACCENT_COLOR = 0xef8518;
export const HIGHLIGHT_COLOR = 0x50c234;
export const INCORRECT_COLOR = 0xd42d21;

const COLORS = [
    {
        name: "Accent Color",
        color: ACCENT_COLOR,
        text: "white",
    },
    {
        name: "Primary Light",
        color: PRIMARY_LIGHT,
        text: "black",
    },
    {
        name: "Primary Color",
        color: PRIMARY_COLOR,
        text: "white",
    },
    {
        name: "Highlight Color",
        color: HIGHLIGHT_COLOR,
        text: "white",
    },
    {
        name: "Incorrect Color",
        color: INCORRECT_COLOR,
        text: "white",
    },
];

const splitRGB = (rgb: number) => {
    const r = rgb >> 16;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    return [r, g, b];
};

const rgbToHex = (rgb: number) => {
    const toHex = (x: number) => {
        const hex = x.toString(16);
        if (hex.length === 1) {
            return "0" + hex;
        } else {
            return hex;
        }
    };

    const [r, g, b] = splitRGB(rgb);

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const ColorPalette = () => {
    return (
        <div className="ColorPalette">
            {
                COLORS.map(({ name, color, text }) => {
                    return (
                        <div
                            key={name}
                            style={{
                                color: text,
                                backgroundColor: rgbToHex(color)
                            }}
                        >
                            {name}
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ColorPalette;
