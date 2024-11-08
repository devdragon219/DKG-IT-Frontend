import React from "react";
import { Card, Col, Collapse, Row, Tooltip } from "antd";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { CREATE_ROUTE } from "../../../../constants/routes";

import { getName } from "../../../../constants/names";

import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Description from "@mui/icons-material/Description";

const { Meta } = Card;

const useStyles = makeStyles(() => ({
  card: {
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow:
      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  customСollapse: {
    "& .ant-collapse-arrow": {
      fontSize: "16px !important",
      marginTop: "8px",
    },
  },
}));

const CardComp = ({ tool }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const cardDetails = tool.cards;
  const isMobile = window.outerWidth < 700;

  const DemoActions = () => {
    const [showPopup, setShowPopup] = React.useState(false);
    const timeoutRef = React.useRef(null);

    const handleDemoClick = (e) => {
      e.preventDefault();

      if (
        Array.isArray(cardDetails.demoExample) &&
        cardDetails.demoExample.length > 0
      ) {
        const popupWindow = window.open(cardDetails.demo, "_blank");
        if (popupWindow) {
          setShowPopup(true);
        }
      } else if (typeof cardDetails.demo === "string") {
        window.open(cardDetails.demo, "_blank");
      }
    };

    const handleMouseEnter = () => {
      setShowPopup(true);
      clearTimeout(timeoutRef.current);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setShowPopup(false);
      }, 200);
    };

    return (
      <>
        <a
          href={cardDetails?.demo}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleDemoClick}
          style={{ position: "relative" }}
        >
          Demo
        </a>
        {showPopup &&
          Array.isArray(cardDetails.demoExample) &&
          cardDetails.demoExample.length > 0 && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "absolute",
                bottom: "30px",
                right: "0",
                background: "#fff",
                padding: "10px",
                borderRadius: "3px",
                border: "1px solid #f0f0f0",
              }}
            >
              {cardDetails.demoExample.map((link, index) => (
                <div key={index}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      margin: "5px 0",
                      color: "#000000de",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#1677ff")}
                    onMouseLeave={(e) => (e.target.style.color = "#000000de")}
                  >
                    Demo {index + 1}
                  </a>
                </div>
              ))}
            </div>
          )}
      </>
    );
  };
  return (
    <Card
      className={classes.card}
      cover={
        <>
          <img
            onClick={() => {
              window.open(cardDetails.demo, "_blank");
            }}
            alt="example"
            src={`/assets/${tool.name}.webp`}
            style={{
              height: "250px",
              objectFit: "contain",
              padding: "3px",
            }}
          />
        </>
      }
      actions={[
        <DemoActions />,
        <a
          href={
            cardDetails?.link ? cardDetails?.link : `${CREATE_ROUTE}${tool.name}`
          }
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Create
        </a>,
      ]}
    >
      <Meta
        title={
          <div
            style={{
              textAlign: "center",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            <Tooltip title={getName(tool.name)}>{getName(tool.name)}</Tooltip>

            {cardDetails?.video && (
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  position: "absolute",
                  bottom: "43px",
                  left: "6px",
                  cursor: "pointer",
                }}
                size="normal"
                color="primary"
                variant="contained"
                onClick={() => {
                  window.open(cardDetails.video, "_blank");
                }}
              >
                <OndemandVideoIcon
                  style={{ fontSize: "26px", color: "#000000de" }}
                />
              </div>
            )}
            {cardDetails?.instruction && (
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  position: "absolute",
                  bottom: "45px",
                  right: "6px",
                  cursor: "pointer",
                }}
                size="normal"
                color="primary"
                variant="contained"
                onClick={() => {
                  window.open(cardDetails.instruction, "_blank");
                }}
              >
                <Description style={{ fontSize: "24px", color: "#000000de" }} />
              </div>
            )}
          </div>
        }
      />
    </Card>
  );
};

const Section = ({ tools, name }) => {
  const classes = useStyles();
  return (
    <Collapse
      className={classes.customСollapse}
      defaultActiveKey={["1"]}
      size="large"
      style={{
        marginBottom: "20px",
      }}
      items={[
        {
          key: "1",
          label: (
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {getName(name)}
            </div>
          ),
          children: (
            <Row gutter={[32, 32]}>
              {tools.map((tool) => {
                return (
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <CardComp tool={tool} />
                  </Col>
                );
              })}
            </Row>
          ),
        },
      ]}
    />
  );
};

export default Section;
