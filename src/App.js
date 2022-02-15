import React from 'react';
import './App.css';
import useContent from './helpers/useContent';
import UpdateModal from './components/UpdateModal'

const App = () => {
  const { content } = useContent();
  
  return (
    <div className="App">
      <h1>{content?.headerTitle}</h1>
      <h3>{content?.headerSubtitle}</h3>
      <UpdateModal />
    </div>
  );
}

export default App;
