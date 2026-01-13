export default function Input({ label, placeholder, showDelete, onDelete }) {
  return (
    <div className="input-box">
      <label>{label}</label>

      <div className="input-wrapper">
        <input placeholder={placeholder} />

        {showDelete && (
          <span className="delete-icon" onClick={onDelete}>
            🗑
          </span>
        )}
      </div>
    </div>
  );
}
