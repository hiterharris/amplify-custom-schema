import React from 'react'
import './App.css'
import useContent from './helpers/useContent'
import UpdateModal from './components/UpdateModal'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = ({ signOut, user }) => {
  const { data, fetchData } = useContent()  
  return (
    <div className="App">
      <h1>Hello {user.attributes.email}</h1>
      <h1>{data?.headerTitle}</h1>
      <h3>{data?.headerSubtitle}</h3>
      <UpdateModal content={data} fetchData={fetchData} />
      <>
      <button className="signout-button" onClick={signOut}>Sign out</button>
      </>

    </div>
  );
}

export default withAuthenticator(App);
  