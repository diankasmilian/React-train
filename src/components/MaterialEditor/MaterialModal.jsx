export const MaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        EditModal
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};
