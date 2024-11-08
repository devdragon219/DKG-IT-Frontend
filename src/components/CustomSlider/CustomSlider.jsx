import React from 'react';
import Slider from '@mui/material/Slider';

function CustomSlider({years, setYear, startPoint = 0}) {
    return (
        <Slider
            aria-label="Restricted values"
            step={null}
            size="small"
            defaultValue={years[startPoint]}
            min={years[0]}
            max={years[years.length - 1]}
            valueLabelDisplay="auto"
            marks={years.map((year, index) => {
                const label = index === 0 || index === years.length -1 ? year : '';
                return {
                    label: `${label}`,
                    value: year,
                };
            })}

            onChange={(_e, value) => {
                setYear(value);
            }}
        />
    );
}

export default CustomSlider
