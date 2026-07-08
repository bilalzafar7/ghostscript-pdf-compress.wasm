export default function LoadingState() {
  return (
    <div className="status-card status-card--loading" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <h2>Compressing your PDF</h2>
      <p>This may take a moment for larger files.</p>
    </div>
  );
}
