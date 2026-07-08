# PDF Compressor

A browser-based PDF compression tool powered by Ghostscript compiled to WebAssembly. Compress PDF files entirely on your device — nothing is uploaded to a server.

## Features

- **Client-side compression** — files never leave your browser
- **Web Worker processing** — compression runs off the main thread, keeping the UI responsive
- **No file size limits** — large PDFs are handled in a background worker
- **No tracking** — no cookies, analytics, or ads

## Tech Stack

- React + Vite
- Ghostscript WASM for PDF compression
- Web Workers for background processing

Compression uses the equivalent of:

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
```

## Getting Started

```bash
yarn
yarn dev
```

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `yarn dev`      | Start development server |
| `yarn build`    | Build for production     |
| `yarn preview`  | Preview production build |

## Project Structure

```
src/
├── components/
│   ├── AppHeader.jsx       # Title and description
│   ├── FileUpload.jsx      # File picker and submit
│   ├── LoadingState.jsx    # Compression progress
│   └── DownloadResult.jsx  # Download and reset
├── constants/
│   └── appStates.js        # App state constants
├── lib/
│   ├── background-worker.js
│   ├── gs-worker.js
│   └── worker-init.js      # WASM worker initialization
├── utils/
│   └── pdf.js              # PDF helper utilities
├── App.jsx
└── main.jsx
```

## Deploy

Build and deploy to GitHub Pages:

```bash
./deploy-gh-page.sh
```
