export default function FileUpload({ file, onFileChange, onSubmit }) {
  const hasFile = Boolean(file?.filename);

  return (
    <form className="upload-card" onSubmit={onSubmit}>
      <label htmlFor="file" className="upload-zone">
        <span className="upload-zone__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16V8m0 0-3 3m3-3 3 3M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="upload-zone__title">
          {hasFile ? file.filename : "Choose a PDF file"}
        </span>
        <span className="upload-zone__hint">
          {hasFile ? "Click to choose a different file" : "or drag and drop here"}
        </span>
        <input
          type="file"
          accept="application/pdf"
          name="file"
          onChange={onFileChange}
          id="file"
        />
      </label>

      {hasFile && (
        <button className="btn btn--primary" type="submit">
          Compress PDF
        </button>
      )}
    </form>
  );
}
