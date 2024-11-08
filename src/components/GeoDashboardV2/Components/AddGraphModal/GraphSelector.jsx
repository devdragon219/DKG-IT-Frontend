import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  Checkbox,
  Tooltip,
} from "@mui/material";
import Select from "react-select";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UploadJsonButton from "../../../UploadJsonButton";
import { extractTextValues, getKeys, pathToJSON } from "./utils";
import { pathToLoadFile } from "../../../../constants/routes";
import {
  ARROW_PROGRESS_CHART,
  COMPARISON_BARS,
  NUM13,
  PYRAMID,
  RADAR_CHART_BLURRED,
} from "../../../../constants/diagram";
import { COMPONENTS, NAMES } from "../../../../constants/names";

const DownloadButton = ({ selectedGraph, uploadJson }) =>
  selectedGraph && (
    <div
      style={{
        display: "flex",
        margin: "10px",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Button
        size="normal"
        color="primary"
        variant="contained"
        href={pathToLoadFile(pathToJSON[selectedGraph])}
        download={selectedGraph}
        target="_blank"
      >
        Download Example
      </Button>
      <UploadJsonButton handleChange={uploadJson} />
    </div>
  );

const SelectGraphType = ({
  editedGraph,
  selectedGraph,
  setSelectedGraph,
  uploadJson,
  binded,
  setBinded,
  macroPanel,
  data,
  defaultKey,
  setDefaultKey,
}) => {
  const keys = getKeys(data);
  let components = [
    { value: "PortraitImage", label: "Portrait Image" },
    { value: "MoldovaMapLegend", label: "Moldova Map" },
    { value: "PieChartLabels", label: "Pie Chart" },
    { value: "RadarChartDesigner", label: "Radar Chart" },
    { value: "TimelineHorizontal", label: "Timeline" },
    { value: "LineChartSimple", label: "Line Chart" },
    { value: "HorizontalBar", label: "Horizontal Bar" },
    { value: "AsiaMap", label: "AsiaMap" },
    { value: "KeyIndicatorsResp", label: "Key Indicators" },
    { value: "SwitzerlandMapTopo", label: "Switzerland Map" },
    { value: "PolarChart", label: "Polar Chart" },
    { value: "UKMapTopo", label: "UK Map" },
    { value: "UKMapTopoLegend", label: "UK Map with Legend" },
    { value: "LondonMap", label: "London Map" },
    { value: "VerticalBarForGeoMaps", label: "Vertical Bar" },
    { value: "UsaMap", label: "UsaMap" },
    { value: "ChisinauMapLegend", label: "Chisinau Map" },
    { value: "GlobalMap", label: "Global Map" },
    { value: "MiamiMap", label: "Miami Map" },
    { value: "IframeGeoDash", label: "Iframe Geo Dash" },
    { value: "FloridaMap", label: "Florida Map" },
    { value: "DoughnutChart", label: "Doughnut Chart" },
    { value: "TurkeyMap", label: "Turkey Map" },
    { value: "JapanMap", label: "Japan Map" },
    { value: "UAEMap", label: "UAE Map" },
    { value: "JapanMapLegend", label: "Japan Map Legend" },
    { value: "SwitzerlandMapLegend", label: "Switzerland Map Legend" },
    { value: "TurkeyMapLegend", label: "Turkey Map Legend" },
    { value: "CanadaMap", label: "Canada Map" },
    { value: "IsraelMap", label: "Israel Map" },
    { value: "SouthKoreaMap", label: "South Korea Map" },
    { value: "ChinaMap", label: "China Map" },
    { value: COMPONENTS[NUM13], label: NAMES[NUM13] },
    { value: COMPONENTS[COMPARISON_BARS], label: NAMES[COMPARISON_BARS] },
    {
      value: COMPONENTS[ARROW_PROGRESS_CHART],
      label: NAMES[ARROW_PROGRESS_CHART],
    },
    { value: COMPONENTS[PYRAMID], label: NAMES[PYRAMID] },
    {
      value: COMPONENTS[RADAR_CHART_BLURRED],
      label: NAMES[RADAR_CHART_BLURRED],
    },
    // { value: "VerticalBarChartApi", label: "VerticalBarChartApi" },
    // { value: "TableApi", label: "TableApi" },

    // LONGEVITY CLUB API
    // Users
    { value: "UsersApiUserTypes", label: "Longevity API User Types" },
    {
      value: "UsersGenderDistributionAPI",
      label: "Longevity API Gender Distrubition",
    },
    { value: "UsersAgeDistrubition", label: "Longevity API Age Distrubition" },
    { value: "UsersIndexStats", label: "Longevity API User Index" },
    { value: "UsersRolesAPI", label: "Longevity API User Roles" },
    { value: "UsersGeoMapAPI", label: "Longevity API Users Geo Location" },
    { value: "UsersEngagementsAPI", label: "Longevity API Users Engagements" },
    { value: "UsersGeneralStats", label: "Longevity API Users General Stats" },
    // Rwards
    { value: "RewardsAgeRange", label: "Longevity API Rewards Age Range" },
    { value: "RewardsByGender", label: "Longevity API Rewards Gender (%)" },
    {
      value: "RewardsTopUsers",
      label: "Longevity API Reward Points earned Top 10 Users",
    },
    {
      value: "RewardsEarnedUserType",
      label: "Longevity API Reward Earned points by User Type",
    },
    {
      value: "RewardsIndexPoints",
      label: "Longevity API Reward Longevity Points Index",
    },
    {
      value: "RewardsEventType",
      label: "Longevity API Reward Points Earned by Event Types",
    },
    {
      value: "RewardsGeoMap",
      label: "Longevity API Reward Points Earned by Country",
    },
    {
      value: "RewardsEarningSpent",
      label: "Longevity API Rewards Earned/Spent by month",
    },
    {
      value: "RewardsGeneralStats",
      label: "Longevity API Rewards General Stats",
    },
    // Ambassadors
    {
      value: "AmbassadorsGenders",
      label: "Longevity API Ambassadors Genders Distribution",
    },
    {
      value: "AmbassadorsAgeDist",
      label: "Longevity API Ambassadors Age Range",
    },
    {
      value: "AmbassadorsUserTypes",
      label: "Longevity API Ambassadors Users Types",
    },
    {
      value: "AmbassadorsTopCountries",
      label: "Longevity API Ambassadors Top 5 Countries",
    },
    {
      value: "AmbassadorsTopReferrers",
      label: "Longevity API Ambassadors Top 10 Referrers",
    },
    {
      value: "AmbassadorsRadarReferrs",
      label: "Longevity API Ambassadors Number Users Referred",
    },
    {
      value: "AmbassadorsGeoLocation",
      label: "Longevity API Ambassadors Geo Locations",
    },
    {
      value: "AmbassadorsHorizontalBarReferral",
      label: "Longevity API Ambassadors Ambassador/Referred Users - Horizontal",
    },
    {
      value: "AmbassadorsGeneralStats",
      label: "Longevity API Ambassadors General Stats",
    },
    // MarketPlace
    {
      value: "MarketPlaceTopCat",
      label: "Longevity API MarketPlace Top Visited Categories",
    },
    {
      value: "MarketPlaceVisitorsByGender",
      label: "Longevity API MarketPlace Visitors (%) By Gender",
    },
    {
      value: "MarketPlaceVisitorsAgeRange",
      label: "Longevity API MarketPlace Visitors By Age Range",
    },
    {
      value: "MarketPlaceIndexData",
      label: "Longevity API MarketPlace Caegories Top Index",
    },
    {
      value: "MarketPlaceVisitorsGeoLocation",
      label: "Longevity API MarketPlace Visitors Geo Location",
    },
    {
      value: "MarketPlaceTopCategoriesGenders",
      label: "Longevity API MarketPlace Top Categories For Each Gender",
    },
    {
      value: "MarketPlaceTopEarningCategories",
      label: "Longevity API MarketPlace Top Purchased Categories",
    },
    {
      value: "MarketPlaceViewedPurchasedTop",
      label: "Longevity API MarketPlace Top Purchased/Viewed Offers",
    },
  ].sort(function (a, b) {
    return a.label.localeCompare(b.label);
  });
  if (editedGraph === "macro_panel") {
    // Include only ones for macro panel
    components = [
      { value: "KeyParameters", label: "Key Parameters" },
      // Longevity API
      {
        value: "UsersGeneralStats",
        label: "Longevity API Users General Stats",
      },
      // Rewards
      {
        value: "RewardsGeneralStats",
        label: "Longevity API Rewards General Stats",
      },
      // Ambassadors
      {
        value: "AmbassadorsGeneralStats",
        label: "Longevity API Ambassadors General Stats",
      },
    ].sort(function (a, b) {
      return a.label.localeCompare(b.label);
    });
  }

  const customStyles = {
    menu: (provided, state) => ({
      // styles for the dropdown menu
      ...provided,
      position: (editedGraph === "macro_panel" && "relative") || "absolute",
    }),
    menuList: (provided, state) => ({
      ...provided,
      maxHeight: "150px",
    }),
  };

  return (
    <FormControl fullWidth style={{ marginTop: "10px" }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={components.filter((c) => c.value === selectedGraph)}
        disabled={editedGraph === "macro_panel"}
        placeholder={editedGraph !== "macro_panel" ? "Type" : ""}
        onChange={(v) => {
          setSelectedGraph(v.value);
        }}
        styles={customStyles}
        options={components}
      />
      <DownloadButton selectedGraph={selectedGraph} uploadJson={uploadJson} />

      {selectedGraph && pathToJSON?.[selectedGraph] !== "macroPanel" && (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={binded}
                disabled={!macroPanel?.data}
                onChange={(event) => {
                  setBinded(event.target.checked);
                }}
              />
            }
            label="Add a binding to keys parameters"
          />
        </FormGroup>
      )}
      {binded && macroPanel?.data && (
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
          size="small"
        >
          <InputLabel id="simple-select-standard-label">Default</InputLabel>
          <Select
            labelId="simple-select-standard-label"
            id="demo-simple-select-standard"
            value={defaultKey}
            onChange={(event) => {
              setDefaultKey(Number(event.target.value));
            }}
            label="Default"
          >
            {keys.map((el) => {
              return <MenuItem value={el}>{Number(el) + 1}</MenuItem>;
            })}
          </Select>
        </FormControl>
      )}
      {binded && macroPanel?.data && (
        <div>
          {extractTextValues(macroPanel).map((el, index) => {
            return (
              <div
                key={`key-data-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    marginRight: "10px",
                    width: "10px",
                  }}
                >
                  {index + 1}
                </span>
                <Tooltip title={el}>
                  <InfoIcon
                    style={{
                      cursor: "pointer",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  />
                </Tooltip>

                <UploadJsonButton
                  handleChange={(e) => uploadJson(e, index)}
                  style={{
                    fontSize: "9px",
                    padding: "3px",
                    marginRight: "10px",
                  }}
                />
                {keys.includes(`${index}`) ? (
                  <CheckCircleIcon
                    style={{
                      color: "green",
                    }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </FormControl>
  );
};

const GraphImage = ({ selectedGraph, blured, setBlured }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {pathToJSON?.[selectedGraph] &&
      pathToJSON?.[selectedGraph] !== "macroPanel" ? (
        <>
          <FormGroup
            style={{
              position: "absolute",
              right: 0,
              top: "-9px",
              zIndex: 102,
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={blured}
                  onChange={() => {
                    setBlured(!blured);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Blur"
            />
          </FormGroup>
          <img
            src={`/assets/${pathToJSON[selectedGraph]}.webp`}
            alt="dawda"
            style={{
              width: "250px",
              height: "400px",
              borderRadius: "5px",
              objectFit: "contain",
              filter: blured ? "blur(3px)" : "",
            }}
          />
          {blured ? (
            <>
              <div
                style={{
                  width: "250px",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "20px",
                  alignItems: "center",
                  zIndex: 101,
                  position: "absolute",
                  color: "#083763",
                  right: 0,
                  top: 0,
                }}
              >
                Coming soon
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div
          style={{
            width: "250px",
            height: "400px",
            backgroundColor: "#d6d6d6",
            border: "1px dashed grey",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Select Graph
        </div>
      )}
    </div>
  );
};

const GraphSelector = ({
  selectedGraph,
  setSelectedGraph,
  editedGraph,
  blured,
  setBlured,
  uploadJson,
  macroPanel,
  binded,
  setBinded,
  data,
  defaultKey,
  setDefaultKey,
}) => {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <SelectGraphType
        editedGraph={editedGraph}
        selectedGraph={selectedGraph}
        setSelectedGraph={setSelectedGraph}
        uploadJson={uploadJson}
        binded={binded}
        setBinded={setBinded}
        macroPanel={macroPanel}
        data={data}
        defaultKey={defaultKey}
        setDefaultKey={setDefaultKey}
      />
      {editedGraph !== "macro_panel" && (
        <GraphImage
          selectedGraph={selectedGraph}
          blured={blured}
          setBlured={setBlured}
        />
      )}
    </div>
  );
};

export default GraphSelector;
