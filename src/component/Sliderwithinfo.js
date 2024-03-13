import React, { useState } from 'react'
import Slider from '@mui/material/Slider';

const Sliderwithinfo = ({min , max , value , symbole , title, setValue}) => {




    function valuetext(value) {
        return `${value}°C`;
      }

    return (
        <div>
            <div><p> {title} </p></div>
            <div>
                <h3> {symbole} {value} </h3>
            </div>
            <div>
            <Slider
                aria-label="Temperature"
                defaultValue={value}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={10}
                marks
                min={min}
                max={max}
                onChange={(e) =>
                    setValue(e.target.value)
                    }
        />
        </div>
        <div
        style={{
            display:'flex',
            justifyContent: 'space-between'
        }}
        >
            <div>
                <p>{symbole}{min}</p>
            </div>
            <div>
                <p>{symbole}{max}</p>
            </div>
        </div>
        </div>
    )
}

export  default Sliderwithinfo;