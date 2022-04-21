import { SxProps } from "@mui/material";

export interface TableInfoProps<T> {
  title: string;
  columnsNames: string[];
  data: T[];
  row: (value: T, index: number, array: T[]) => JSX.Element;
  rowsPerPageOptions: number[];
  sx?: SxProps;
}
