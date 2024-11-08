export const NodeComponent = ({
  nodeData,
  foreignObjectProps,
  year,
  links,
}) => {
  const { attributes, name, classes, children } = nodeData;

  return (
    <g
      className={`rd3t-node ${
        classes === "future" ? "node__branch__future" : "node__branch"
      } ${
        parseInt(attributes?.year) === parseInt(year)
          ? "node__branch__current"
          : ""
      }`}
      onClick={() => {
        window.open(links[nodeData?.name], "_blank");
      }}
    >
      <circle r="25"></circle>
      {children?.length > 0 ? (
        <foreignObject {...foreignObjectProps}>
          <div>
            <h3 style={{ textAlign: "center" }}>{name}</h3>
          </div>
        </foreignObject>
      ) : (
        <foreignObject {...foreignObjectProps} x={25} y={-40}>
          <div className={"node__label"}>
            <h3
              style={{
                margin: 0,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {name}
            </h3>
          </div>
        </foreignObject>
      )}
    </g>
  );
};
