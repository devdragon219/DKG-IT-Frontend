import React from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    position: "relative",
    fontFamily: "system-ui",
  },
});

const DealsStructure = (props) => {
  const classes = useStyles();
  const jsonData = props?.data?.originalData?.data;
  const dataTitle = jsonData?.title;
  const colorTitle = jsonData?.colorTitle || "#3993E1";
  const colorHeader = jsonData?.colorHeader || "white";

  const renderTable = () => {
    const headers = jsonData.table[0]?.headers || [];
    const columnWidths = headers.map((header) => header.width || null);
    const columnAligns = headers.map((header) => header.align || null);
    const colorEven = headers.map((header) => header.colorEven || null);
    const colorOdd = headers.map((header) => header.colorOdd || null);
    const bgColorHeader = headers.map((header) => header.bgColorHeader || null);

    return jsonData.table.map((item, index) => {
      if (index === 0 && item.headers) {
        return (
          <tr key={`header-${index}`}>
            {item.headers.map((header, idx) => (
              <th
                key={`header-${index}-${idx}`}
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  textAlign: "center",
                  padding: "15px 5px",
                  width: columnWidths[idx],
                  backgroundColor: bgColorHeader[idx],
                  color: colorHeader,
                }}
              >
                {header.label}
              </th>
            ))}
          </tr>
        );
      } else if (item.data) {
        return (
          <tr key={`row-${index}`}>
            {item.data.map((rowData, idx) => (
              <td
                key={`cell-${index}-${idx}`}
                style={{
                  width: columnWidths[idx],
                  textAlign: columnAligns[idx],
                  background: (index % 2 === 0) ? colorEven[idx] : colorOdd[idx],
                }}
              >
                {rowData.map((imageInfo, imgIdx) => (
                  <React.Fragment key={`image-${index}-${idx}-${imgIdx}`}>
                    {imageInfo.link ? (
                      <a
                        href={imageInfo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ maxWidth: '50px', maxHeight: '50px', margin: '5px' }}
                          src={imageInfo.url}
                          alt={`Image ${imgIdx + 1}`}
                        />
                      </a>
                    ) : (
                      <img
                        style={{ maxWidth: '50px', maxHeight: '50px', margin: '5px' }}
                        src={imageInfo.url}
                        alt={`Image ${imgIdx + 1}`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </td>
            ))}
          </tr>
        );
      }
      return null;
    });
  };

  return (
    <div className={classes.wrapper}>
      <div
          style={{
            fontSize: "1em",
            color: colorTitle,
            textAlign: "center",
            margin: "15px",
          }}
        >
        {dataTitle}
      </div>
      <table>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default DealsStructure;
