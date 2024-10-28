import { DataGrid } from '@mui/x-data-grid';
import { Button, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { columns } from './TableDisplayComponents/dataTableColumns';
import AlertSnackbar from './TableDisplayComponents/AlertSnackbar';
import useAlertSnackbar from '../hooks/useAlertSnackbar';
import { useColumnVisibility } from '../hooks/useColumnVisibility';
import downloadSongs from '../utils/downloadUtil/downloadSongs';

export default function DataTable({ rows, loading, error }) {
  const [columnVisibilityModel, updateColumnVisibilityModel] = useColumnVisibility(columns, {
    annId: false,
    songArranger: false,
    songLength: false,
  });

  const [selectedRows, setSelectedRows] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  // Use the custom hook for snackbar
  const { snackbar, openSnackbar, closeSnackbar, updateProgress } = useAlertSnackbar();

  const onDownloadClick = async () => {
    openSnackbar('Downloading selected songs...', 'info');
    setRowSelectionModel([]); // Clear selection model 
    const failedDownloads = await downloadSongs(selectedRows, updateProgress);
    setSelectedRows([]); // Clear selected rows
    updateProgress(null); // Reset progress after download

    !failedDownloads.length ?
      openSnackbar('Download complete!', 'success') :
      openSnackbar(`Failed to download one or more songs, check the console for more info`, 'warning')
    console.log('Failed Song Downloads: ', failedDownloads)
  };

  const onClearSelectionClick = () => {
    setSelectedRows([]);
    setRowSelectionModel([]);
  };

  if (error) return `Error: ${error}`;

  return (
    <Paper sx={{ width: '100%' }}>
      <AlertSnackbar
        open={snackbar.open}
        onClose={closeSnackbar}
        text={snackbar.text}
        severity={snackbar.severity}
        progress={snackbar.progress}
      />
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
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = rows.filter((row) =>
            selectedIDs.has(row.annSongId)
          );
          setSelectedRows(selectedRowData);
          setRowSelectionModel(ids);
          console.log('Selected Rows: ', selectedRowData);
        }}
      />
      {
        rowSelectionModel.length > 0 && (
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
