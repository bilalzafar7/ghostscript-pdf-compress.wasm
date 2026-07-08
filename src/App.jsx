import { useState } from "react";
import "./App.css";
import { _GSPS2PDF } from "./lib/worker-init.js";
import { APP_STATE } from "./constants/appStates.js";
import { getCompressedFilename, loadPDFData } from "./utils/pdf.js";
import AppHeader from "./components/AppHeader.jsx";
import FileUpload from "./components/FileUpload.jsx";
import LoadingState from "./components/LoadingState.jsx";
import DownloadResult from "./components/DownloadResult.jsx";

function App() {
  const [state, setState] = useState(APP_STATE.INIT);
  const [file, setFile] = useState(undefined);
  const [downloadLink, setDownloadLink] = useState(undefined);

  async function compressPDF(pdf) {
    const dataObject = { psDataURL: pdf };
    const element = await _GSPS2PDF(dataObject);
    const { pdfURL } = await loadPDFData(element);
    setDownloadLink(pdfURL);
    setState(APP_STATE.READY);
  }

  const changeHandler = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    const url = window.URL.createObjectURL(selectedFile);
    setFile({ filename: selectedFile.name, url });
    setState(APP_STATE.SELECTED);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!file) return;

    const { url } = file;
    compressPDF(url);
    setState(APP_STATE.LOADING);
  };

  const onReset = () => {
    setState(APP_STATE.INIT);
    setFile(undefined);
    setDownloadLink(undefined);
  };

  const compressedFilename = getCompressedFilename(file?.filename);

  return (
    <div className="app">
      <AppHeader />

      <main className="app-main">
        {state !== APP_STATE.LOADING && state !== APP_STATE.READY && (
          <FileUpload
            file={file}
            onFileChange={changeHandler}
            onSubmit={onSubmit}
          />
        )}

        {state === APP_STATE.LOADING && <LoadingState />}

        {state === APP_STATE.READY && (
          <DownloadResult
            downloadLink={downloadLink}
            filename={compressedFilename}
            onReset={onReset}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Private by design — no uploads, no tracking.</p>
      </footer>
    </div>
  );
}

export default App;
