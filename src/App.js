import React, { useState, useEffect } from 'react';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports';
import { listContents } from './graphql/queries'

Amplify.configure(awsconfig);

const App = () => {
  const [content, setContent] = useState()

  const fetchContent = async () => {
    try {
      const content = await API.graphql(graphqlOperation(listContents))
      setContent( content.data.listContents.items[0])
    } catch (error) { console.log('error fetching todos: ', error) }
  }

  useEffect(() => {
    fetchContent()
  }, [])

  return (
    <div className="App">
      <h1>{content?.headerTitle}</h1>
      <h3>{content?.headerSubtitle}</h3>
    </div>
  );
}

export default App;
