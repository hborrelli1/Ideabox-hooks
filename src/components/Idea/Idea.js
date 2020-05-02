import React, { useState } from 'react';
import closeButton from '../../svgs/close-button.svg';

const Idea = ({ idea, deleteIdea }) => {

  const handleDelete = (id) => {
    deleteIdea(id)
  }

  return (
    <li
      key={idea.id}
    >
      <img
        src={closeButton}
        alt="Delete Idea"
        onClick={() => deleteIdea(idea.id)}
      />
      {idea.idea}
    </li>
  )
}

export default Idea;
