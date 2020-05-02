import React, { useState } from 'react';
import Idea from '../Idea/Idea';

const IdeaContainer = ({ ideas, deleteIdea }) => {
  let ideasDisplay;

  ideas.length
    ? ideasDisplay = ideas.map(idea => (
        <Idea key={idea.id} idea={idea} deleteIdea={deleteIdea} />
      ))
    : ideasDisplay = <p>No ideas to display</p>;

  return (
    <ul>
      {ideasDisplay}
    </ul>
  )
}

export default IdeaContainer;
