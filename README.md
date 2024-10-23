# AMQ Download Utility (WIP)

⚠️ **Work In Progress**: Currently under development.

An SPA for downloading songs from AnisongDB/Amq, featuring a React Material-UI front-end.

## Features

- **Front-end**:
  - Modern UI with React and Material-UI (MUI).
  - Download management interface via external API.

## Possible future features?

- Cover Art integration by scraping.
- Progress bar for downloads.
- Redesign of the search form.
- Integrate a media player.
- Code splitting if necessary.
- Metadata editing before download.
- Unit & end-to-end tests.

## Technologies

- **Front-end**: React, Material-UI (MUI), Emotion
- **Utilities**:
  - `browser-id3-writer`: Updating ID3 tags
  - `jszip`: Creating zip files from the fetched and processed mp3s
  - `file-saver`: Saving files to the client

## Installation (WIP)

1. Clone the repository:
    ```bash
    git clone git@github.com:Tree-Ro/amq-dl-util.git
    cd amq-dl-util
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage (WIP)

- Build the project:
    ```bash
    npm run build
    ```

- Preview the app using Vite:
    ```bash
    npm run preview
    ```

- Access the app at `http://localhost:5137`.
