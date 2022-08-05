import React, { useState } from 'react';

const initialValues = {
  company: '',
  position: '',
  link: '',
  date: '',
  note: '',
};

export default function FormData() {
  const [values, setValues] = useState(initialValues);
  // console.log(values);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // let formData = new FormData();

  return (
    <form>
      <input
        value={values.company}
        onChange={handleInputChange}
        name="company"
        label="Company"
      />
      <input
        value={values.position}
        onChange={handleInputChange}
        name="position"
        label="Job Title"
      />
      // ... Rest of the input fields
      <button type="submit"> Submit </button>
    </form>
  );
}
