import React, { useContext } from "react";
import Arc from "../Arc";
import { MindMapContext } from "../../MindMap";
import { setXY } from "../../../../store/item";
import { useDispatch } from "react-redux";

const Pies = (props) => {
  const { isEditMode } = useContext(MindMapContext);

  const dispatch = useDispatch();
  const { pies, translateX, translateY, svgRef, strokeWidth, setLiveData } =
    props;

  const handleDrag = (title, x, y) => {
    if (isEditMode) {
      if (setLiveData) {
        setLiveData({ title, x, y });
        return;
      }
      dispatch(setXY({ title, x, y }));
    }
  };

  const transformPie = `translate(${translateX} ${translateY})`;

  return pies.map((pie) => {
    const { data, name, ...resp } = pie;

    return (
      <g transform={transformPie} key={name}>
        {data.map((sector, i) => (
          <Arc
            key={i}
            data={sector}
            onDrag={handleDrag}
            name={name}
            translateX={translateX}
            translateY={translateY}
            parentalSvg={svgRef.current}
            strokeWidth={strokeWidth}
            {...resp}
          />
        ))}
      </g>
    );
  });
};

export default Pies;
