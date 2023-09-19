// Table.js

import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme"; // Import the shared theme

const withStyledHeader = (column) => ({
  ...column,
  headerName: (
    <Box
      sx={{
        color: "#A5AEE5",
        fontWeight: "bold",
        fontSize: "16px",
        textAlign: "center", // Center align the header text
      }}
    >
      {column.headerName}
    </Box>
  ),
});

const Table = ({ columns, rows }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ height: 400, width: "80%" }}>
        <DataGrid
          rows={rows}
          columns={columns.map(withStyledHeader)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </ThemeProvider>
  );
};

export default Table;
