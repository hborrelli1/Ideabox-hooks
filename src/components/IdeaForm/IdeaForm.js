import React, { useState, useEffect } from 'react';

const IdeaForm = ({ addIdea }) => {
  const [input, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newIdea = {
      id: Date.now(),
      idea: input
    }

    addIdea(newIdea);
    setValue('');
  }

  const validateForm = () => {
    if (input.length) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="ideaInput">New Idea</label>
        <input
          id="ideaInput"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          disabled={validateForm()}
        >Submit Idea</button>
      </div>
    </form>
  )
}

export default IdeaForm;
