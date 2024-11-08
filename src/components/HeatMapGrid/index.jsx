import {HeatMapGrid} from './HeatMapGrid';
const HeatMapGridDesigner = ({data, geoDashboard}) => {
  const width = data?.width || "450px";
  if (!geoDashboard) {
    return <div style={{margin: "0 auto", width: width}}>
      <HeatMapGrid data={data}/>
    </div>
  }

  return <div id="here" style={{width: "80%"}}>
    <HeatMapGrid data={data} geoDashboard={true}/>
  </div>
};

export default HeatMapGridDesigner
