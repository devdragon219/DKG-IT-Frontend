import React, { useState } from "react";

import './style.css';
import FormInput from "../../components/FormInput";

const PentagonDesigner = (props) => {

    let {data} = props.data.originalData

    const [bgColor, setBgColor] = useState('#222296');
    const [titleColor, setTitleColor] = useState('#FFFFFF');

    const handleBgColor=(e)=>{
        setBgColor(e.target.value)
    }

    const handleTitleColor=(e)=>{
        setTitleColor(e.target.value)
    }

    const fallBackData = [
        "Longevity Card",
        "Longevity Club",
        "Chatbot",
        "Women Health",
        "Longevity Marketplace",
        "Digital Avatar",
        "Pathways",
        "Voice Assistant",
        "Longevity Cabinet",
        "Longevity Virtual Clinic",
        "MarTech system",
        "Financial Planner"
    ];

    if(data === undefined || data.length === 0){
        data=fallBackData
    }

    return (
        <>
        <div style={{ display: "flex", alignItems:'center', gap: "25px", padding:'4%'}}>
                    <FormInput
                        type="color"
                        style={{ width: "50%" }}
                        label="Background Color"
                        value={bgColor}
                        onChange={handleBgColor}
                        />
                    <FormInput
                        type="color"
                        style={{ width: "50%" }}
                        label="Title Color"
                        value={titleColor}
                        onChange={handleTitleColor}
                    />
        </div>
        <div className='wrapper'>
            <div className='scenePolygon'>
                <div className='polWrap'>
                    <div className='polDodecahedron'>
                        {data.map((text, index) => (
                            <div className='polPentagon' key={text + index}>
                                <div className='polPentagonInner'>
                                    <div className='polPentagonContent' style={{ background: bgColor }}>
                                        <div className='polPentagonText'>
                                            <span style={{ color: titleColor }}>{text}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PentagonDesigner;
