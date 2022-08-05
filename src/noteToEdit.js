import React from 'react';

export const NoteToEdit = ({
  index,
  editedInput,
  handleEditedInput,
  handleDone,
  editMode,
}) => {
  return (
    <span style={{ display: 'flex' }}>
      {editMode && (
        <>
          <input value={editedInput} onChange={handleEditedInput} />
          <button onClick={() => handleDone(index)}>done</button>
        </>
      )}
    </span>
  );
};
