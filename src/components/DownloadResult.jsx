export default function DownloadResult({ downloadLink, filename, onReset }) {
  return (
    <div className="status-card status-card--success">
      <div className="status-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2>Compression complete</h2>
      <p className="status-card__filename">{filename}</p>
      <div className="status-card__actions">
        <a className="btn btn--primary" href={downloadLink} download={filename}>
          Download PDF
        </a>
        <button className="btn btn--secondary" type="button" onClick={onReset}>
          Compress another
        </button>
      </div>
    </div>
  );
}
