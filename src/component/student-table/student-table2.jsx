import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./student-table.css";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
});

export default function CustomizedTables({ details, titles }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className="styled-table-header-row">
            {
              titles.map((text, indx) => (
                <StyledTableCell align="center" key={indx}>{text}</StyledTableCell>
              ))
            }
          </TableRow>
        </TableHead>
        {details[0] && <TableBody>
          {details.map((detail, index) => (
            <StyledTableRow key={index} style={{ backgroundColor: 'white' }}>
              {
                Object.values(detail).map((value, indx) => (
                  <StyledTableCell align="center" key={indx}>{value}</StyledTableCell>
                ))
              }
            </StyledTableRow>
          ))}

        </TableBody>}
      </Table>
    </TableContainer>
  );
}
