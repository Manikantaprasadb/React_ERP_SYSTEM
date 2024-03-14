import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Context from "./Context";
import { useContext } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function HomePage() {

  const { rows, setRows, setEditData } = useContext(Context);

  function handleEdit(row) {
    setEditData(row);
  }



  function handleDelete(id) {
    debugger
    setRows(data => (
      data.filter((row) => row.pId !== id)
    ))
  }


  return (
    <div><h1>Product Management</h1>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button

          variant="contained"
          style={{ marginLeft: "85%", marginTop: "2%" }}
        >
          Dash Board
        </Button>
      </Link>
      <Link to="/add" style={{ textDecoration: "none" }}>
        <Button

          variant="contained"
          style={{ marginLeft: "85%", marginTop: "2%" }}
          startIcon={<AddShoppingCartIcon />}
        >
          Add Item
        </Button>
      </Link>

      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Id</StyledTableCell>
              <StyledTableCell align="left">Praduct Name</StyledTableCell>
              <StyledTableCell align="left">Selling price</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.pId}>
                <StyledTableCell component="th" scope="row">
                  {row.pId}
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="left">Rs {row.price}/- </StyledTableCell>
                <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                <StyledTableCell align="left">
                  <Stack
                    style={{ marginLeft: "43%" }}
                    direction="row"
                    spacing={5}
                  >
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(row.pId)}>
                      Delete
                    </Button>
                    <Link to={`/edit/${row.pId}`} style={{ textDecoration: "none" }}>
                      <Button variant="contained" startIcon={<EditIcon />} onClick={() => handleEdit(row)}>Edit</Button>
                    </Link>

                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
