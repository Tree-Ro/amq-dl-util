import { DataGrid } from '@mui/x-data-grid';
import { Button, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { columns } from './TableDisplayComponents/dataTableColumns';
import { useColumnVisibility } from '../hooks/useColumnVisibility';
import { useState } from 'react';
import { useAlertSnackbar } from '../hooks/useAlertSnackbar';
import downloadManySongs from '../utils/downloadUtil/downloadManySongs';

export default function DataTable({ rows, loading, error }) {
  const [columnVisibilityModel, updateColumnVisibilityModel] = useColumnVisibility(columns, {
    annId: false,
    songArranger: false,
    songLength: false,
  });

  const [selectedRows, setSelectedRows] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  const { AlertSnackbar, handleClick } = useAlertSnackbar({
    text: `Downloading songs... This may take longer based on the number of songs.`,
    severity: 'info',
    autoHideDuration: 8000
  });

  const onDownloadClick = async () => {
    handleClick();
    setRowSelectionModel([]); // Clear selection model 
    await downloadManySongs(selectedRows);
    setSelectedRows([]); // Clear selected rows
  };

  const onClearSelectionClick = () => {
    setSelectedRows([]);
    setRowSelectionModel([]);
  };

  if (error) return `Error: ${error}`;

  return (
    <Paper sx={{ width: '100%' }}>
      <AlertSnackbar />
      <DataGrid
        sx={{ border: 'none' }}
        rows={rows}
        getRowId={(row) => row.annSongId}
        columns={columns}
        initialState={{
          columns: {
            columnVisibilityModel
          },
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[20, 50, 75, 100]}
        density="compact"
        loading={loading}
        checkboxSelection
        disableRowSelectionOnClick
        isRowSelectable={(params) => !!params.row.audio}
        onColumnVisibilityModelChange={updateColumnVisibilityModel}
        rowSelectionModel={rowSelectionModel} // Use state for selection model
        onRowSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = rows.filter((row) =>
            selectedIDs.has(row.annSongId)
          );
          setSelectedRows(selectedRowData);
          setRowSelectionModel(ids); // Update selection model state
          console.log(selectedRowData);
        }}
      />
      {
        rowSelectionModel.length > 1 && (
          <>
            <Button onClick={onDownloadClick}>Download Selected</Button>
            <Button onClick={onClearSelectionClick}>Clear Selection</Button>
          </>
        )
      }
    </Paper>
  );
}

DataTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
