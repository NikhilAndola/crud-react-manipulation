import React from 'react';
import DeleteIcon from './icon/deleteIcon';
import EditIcon from './icon/editIcon';
import { NoteToEdit } from './noteToEdit';

export const Notes = () => {
  const [editMode, setEditMode] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [editedInput, setEditedInput] = React.useState('');

  const [editIndex, setEditIndex] = React.useState(0);

  const [note, setNote] = React.useState([]);
  console.log('input values in note array', note);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleNoteAdd = () => {
    setNote([...note, input]);
  };

  const handleDelete = (index) => {
    let filteredValue = note.filter((element, deleteIndex) => {
      if (index !== deleteIndex) {
        return element;
      }
    });
    setNote(filteredValue);
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    let filteredValue = note.filter((element, editIndex) => {
      if (index === editIndex) {
        return element;
      }
    });
    setEditedInput(filteredValue);
  };

  const handleEditedInput = (e) => {
    setEditedInput(e.target.value);
  };

  console.log('editedInput', editedInput);

  const handleDone = (index) => {
    console.log(index);
    let newNote = note.splice(index, 1, editedInput);
    setEditMode(false);
  };

  return (
    <>
      <section>
        <h3>Crud app in react</h3>
        <form>
          <input type="text" value={input} onChange={handleOnChange} />
          <input type="button" value="Add" onClick={handleNoteAdd} />
        </form>
      </section>
      <section style={{ marginTop: '10px' }}>
        {note.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 30,
              border: '1px solid black',
              width: '300px',
            }}
          >
            <div style={{ width: '70%' }}>{item}</div>
            <i
              style={{ cursor: 'pointer' }}
              onClick={() => handleDelete(index)}
            >
              <DeleteIcon />
            </i>
            <i style={{ cursor: 'pointer' }} onClick={() => handleEdit(index)}>
              <EditIcon />
            </i>
            {index === editIndex && (
              <NoteToEdit
                editMode={editMode}
                index={index}
                handleDone={handleDone}
                editedInput={editedInput}
                handleEditedInput={handleEditedInput}
              />
            )}
          </div>
        ))}
      </section>
    </>
  );
};
