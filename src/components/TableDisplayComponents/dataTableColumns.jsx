import { DownloadButton } from './DownloadButton.jsx';

export const columns = [
  { field: 'annId', headerName: 'Ann ID', description: 'Anime News Network ID', width: 100 },
  { field: 'animeENName', headerName: 'Anime Name (EN)', description: 'English series name', width: 250 },
  { field: 'songType', headerName: 'Type', description: 'Song type in the anime', width: 100 },
  { field: 'songName', headerName: 'Song Name', description: 'Official name of the song', width: 250 },
  { field: 'songArtist', headerName: 'Artist', description: 'Artist who performed the song', width: 200 },
  { field: 'songComposer', headerName: 'Composer', description: 'Composer of the song', width: 200 },
  { field: 'songArranger', headerName: 'Arranger', description: 'Arranger of the song', width: 200 },
  {
    field: 'songLength', headerName: 'Length', description: 'Length of the song', width: 100, valueGetter: (value) => {
      return value ? `${Math.round(value)}s` : null;
    }
  },
  {
    field: 'downloadEntry',
    headerName: 'Download',
    description: 'Download MP3 of the song',
    width: 90,
    sortable: false,
    disableColumnMenu: true,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => <DownloadButton row={params.row} />
  },
];