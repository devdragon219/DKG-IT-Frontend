import { Divider } from "@mui/material";
import FormInput from "../../components/FormInput";
import { useDispatch } from "react-redux";
import { setMockData } from "../../store/item";

const GaugeConfig = ({
  title,
  gauges,
  setGauges,
  setTitle,
  data,
  min,
  max,
  setMin,
  setMax,
}) => {
  const dispatch = useDispatch();

  const handleRootBlur = (key, value) => {
    const updatedData = {
      ...data,
      originalData: { ...data?.originalData, [key]: value },
    };

    dispatch(setMockData(JSON.stringify(updatedData)));
  };

  const handleTitleChange = (e) => setTitle(e?.target?.value);

  const handleMinChange = (e) => setMin(e?.target?.value);

  const handleMaxChange = (e) => setMax(e?.target?.value);

  const handleChange = (key, value, index) => {
    const updatedGauges = (data?.originalData?.gauges || []).map((gauge, i) => {
      if (index === i) {
        return {
          ...gauge,
          [key]: value,
        };
      }

      return gauge;
    });

    setGauges([...updatedGauges]);
  };

  const handleBlur = () => {
    const updatedData = {
      ...data,
      originalData: { ...data?.originalData, gauges: [...gauges] },
    };

    dispatch(setMockData(JSON.stringify(updatedData)));
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <FormInput
            value={title}
            label={"Title:"}
            onChange={handleTitleChange}
            onBlur={() => handleRootBlur("title", title)}
            style={{ flex: "1" }}
          />
          <FormInput
            value={min}
            label={"Minimum Value:"}
            type="number"
            onChange={handleMinChange}
            onBlur={() => handleRootBlur("min", min)}
          />
          <FormInput
            value={max}
            label={"Maximum Value:"}
            type="number"
            onChange={handleMaxChange}
            onBlur={() => handleRootBlur("max", max)}
          />
        </div>

        {gauges.map(({ label, value }, index) => (
          <div
            style={{ display: "flex", alignItems: "center", gap: "15px" }}
            key={index}
          >
            <div style={{ fontWeight: "bold" }}>Gauge {index + 1}:</div>
            <FormInput
              value={label}
              label={"Label:"}
              onChange={(e) => handleChange("label", e.target.value, index)}
              onBlur={handleBlur}
            />
            <FormInput
              value={value}
              label={"Value:"}
              type="number"
              onChange={(e) => handleChange("value", e.target.value, index)}
              onBlur={handleBlur}
            />
          </div>
        ))}
      </div>
      <Divider />
    </>
  );
};

export default GaugeConfig;
