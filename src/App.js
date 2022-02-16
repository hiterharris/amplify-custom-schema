import React from 'react'
import './App.css'
import useContent from './helpers/useContent'
import UpdateModal from './components/UpdateModal'

const App = () => {
  const { data, fetchData } = useContent()
  
  return (
    <div className="App">
      <h1>{data?.headerTitle}</h1>
      <h3>{data?.headerSubtitle}</h3>
      <UpdateModal content={data} fetchData={fetchData} />
    </div>
  );
}

export default App;
