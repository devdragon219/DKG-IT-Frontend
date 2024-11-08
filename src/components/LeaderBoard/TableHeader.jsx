import React from 'react';
import {
  TableHead,
  TableRow,
} from '@mui/material';
import { StyledTableCell, CustomTableSortLabel } from './LeaderBoard';

export function EnhancedTableHead(props) {
  const {  
    headCells,
    backgroundHeader,
    color,
    orderDirection,
    valueToOrderBy,
    handleRequestSort
  } = props;

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((cell) => (
          <StyledTableCell
            key={cell.sortBy}
            backgroundHeader={backgroundHeader}
            color={color}
            align='center'
          >
            {cell.sortable ? (
              <CustomTableSortLabel
                color={color}
                direction={valueToOrderBy === cell.sortBy ? orderDirection : 'asc'}
                active={valueToOrderBy === cell.sortBy}
                onClick={createSortHandler(cell.sortBy)}
              >
                {cell.label}
              </CustomTableSortLabel>
            ) : cell.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}