import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

import { columns } from '../utils/tableData';

import { useContext, useMemo, useEffect, useRef } from 'react';
import { ResultsContext } from '../context/formContext';

export default function DataTable() {
  const { results } = useContext(ResultsContext);
  const previousResultsRef = useRef();

  // Compare previous results with current results
  useEffect(() => {
    if (previousResultsRef.current !== results) {
      console.log("Results have changed:", results);
    }
    previousResultsRef.current = results; // Update ref for next render
  }, [results]);



  const rows = useMemo(() => {
    if (!results) return [];
    return results.map((item) => ({
      ...item,
      composers: item.composers.map((composer) => composer.names).join(', '),
    }));
  }, [results]);

  console.log("Hi I'm the table!", rows)

  return (
    <Paper sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        getRowId={(row) => row.annSongId}
        columns={columns}
        initialState={{
          columns: {
            columnVisibilityModel: {
              composers: false,
            },
          },
        }}
        density="compact"
        checkboxSelection
      />
    </Paper>
  );
}