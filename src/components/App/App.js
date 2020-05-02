import React, { useState, useEffect } from 'react';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeaContainer from '../IdeaContainer/IdeaContainer';


const App = () => {
  let ideasDisplay;

  const initialIdeas = [
    { id: 1, idea: 'This is my first idea' },
    { id: 2, idea: 'Here we go, a second idea...' },
    { id: 3, idea: 'This is the final idea, i\'m all out.' },
  ]

  const [ideas, setIdeas] = useState(initialIdeas);

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea]);
  }

  const deleteIdea = (id) => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(filteredIdeas)
  }

  return (
    <div>
      <header>
        <h1>Idea Box using Hooks</h1>
        <IdeaForm
          addIdea={addIdea}
        />
      </header>
      <IdeaContainer
        ideas={ideas}
        deleteIdea={deleteIdea}
      />
    </div>
  )
}

export default App;
