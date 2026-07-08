export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v6h6M9 13h6M9 17h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1>PDF Compressor</h1>
      <p className="app-header__subtitle">
        Compress PDF files directly in your browser. Your files never leave your
        device.
      </p>
    </header>
  );
}
