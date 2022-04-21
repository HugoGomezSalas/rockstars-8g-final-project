import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { Styles } from "../../theme/types";
import { TableInfoProps } from "./types";

const TableInfo = <T extends object>({
  columnsNames,
  data,
  row,
  title,
  rowsPerPageOptions,
  sx,
}: TableInfoProps<T>) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0]);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const styles: Styles = {
    table: {
      padding: "24px",
      minWidth: "200px",
      width: "100%",
    },
  };

  const tableStyles = useMemo(
    () => ({
      ...styles.table,
      ...sx,
    }),
    [sx, styles.table]
  );

  return (
    <Paper sx={tableStyles} elevation={6}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <Typography variant="h5">{title}</Typography>
            </TableRow>
            <TableRow>
              {columnsNames.map((name) => (
                <TableCell align="left">
                  <Typography variant="h6">{name}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableInfo;
