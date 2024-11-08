import React, { useMemo } from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import StarsIcon from '@mui/icons-material/Stars';
import { EnhancedTableHead } from "./TableHeader";


const useStyles = makeStyles({
  wrapBlock: {
    width: (props) => props.blockWidth,
    background: (props) => props.backgroundColor,
    color: (props) => props.color,
  },
  underlayerBlock: {
    background: (props) => props.underlayerBackground,
  },
  blockTitle: {
    paddingTop: '0.75em',
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    paddingBottom: '0.5em',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
});

const StyledTableCell = styled(TableCell)(({ backgroundHeader, color }) => ({
    [`&.${tableCellClasses.head}`]: {
      background: backgroundHeader,
      color: color,
      borderBottom: 'none'
    },
    [`&.${tableCellClasses.body}`]: {
      color: color,
      borderBottom: '0.8px solid rgba(255, 255, 255, 0.1)',
    },
}));

const CustomTableSortLabel = styled(TableSortLabel)(({ color }) => ({
    color: `${color} !important`,
    '& .MuiTableSortLabel-icon': {
      color: `${color} !important`,
    },
    '&:hover, &.Mui-focusVisible': {
      color: `${color} !important`,
    },
}));

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const sortedRowInformation = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray.map((el,index) => [el, index])
    stabilizedRowArray.sort((a,b) => {
        const order = comparator(a[0], b[0])
        if(order !==0) return order
        return a[1] - b[1]
    })
    return stabilizedRowArray.map((el) => el[0])
}

const LeaderBoard = (props) => {
    const classes = useStyles(props?.data?.originalData);
    const { title, isNameBlurred, blockHeight, backgroundHeader, color, contentStyle} = props?.data?.originalData;

    const dataProps = props?.data?.originalData?.data;
    const headCells = props?.data.originalData.header;
    const columns = Object.keys(dataProps[0]);
    const getClassByDataType = (value) => {
        return typeof value === 'number' ? 'numeric' : 'string';
    };

    const [orderDirection, setOrderDiraction] = React.useState('asc');
    const [valueToOrderBy, setValueToOrderBy] = React.useState('id');

    const handleRequestSort = (event, property) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDiraction(isAscending  ? 'desc' : 'asc')
    }

  return (
    <Box className={classes.wrapBlock}>
      <Box className={classes.underlayerBlock}>
        <Box className={classes.contentBlock} style={contentStyle}>
          <Typography className={classes.blockTitle}>{title}</Typography>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: blockHeight }}>
                    <Table stickyHeader aria-label="sticky table">
                        <EnhancedTableHead
                            headCells={headCells}
                            backgroundHeader={backgroundHeader}
                            color={color}
                            orderDirection={orderDirection}
                            valueToOrderBy={valueToOrderBy}
                            handleRequestSort={handleRequestSort}
                        />
                        <TableBody>
                         {sortedRowInformation(dataProps, getComparator(orderDirection, valueToOrderBy))
                         .map((row, index) => (
                            <TableRow key={index}>
                                  {columns.map((column) => (
                                    <StyledTableCell
                                        key={column}
                                        color={color}
                                        className={getClassByDataType(row[column])}
                                        align='center'
                                    >
                                        {column === 'id' && Number(row.id) === 1 ? <StarsIcon width="10" height="10" /> :
                                        column === 'name' && isNameBlurred ? (
                                        <span style={{ filter: 'blur(5px)'}}>{row[column]}</span>
                                        ) : column === 'ranking' ? (
                                        <span style={{ fontSize: '20px' }}>{row[column]}%</span>
                                        ) : (
                                        row[column]
                                        )}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeaderBoard;
export { StyledTableCell, CustomTableSortLabel };
