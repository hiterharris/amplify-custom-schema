import React, { useState } from 'react';
import '../App.css';
import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';

const UpdateModal = props => {
  const { content, fetchData } = props;
  const [contentUpdate, setContentUpdate] = useState({
    id: 0,
    headerTitle: '',
    headerSubtitle: ''
  })

  const handleSubmit = async () => {
    const payload = {
      id: content.id,
      headerTitle: contentUpdate.headerTitle,
      headerSubtitle: contentUpdate.headerSubtitle
    }
    await API.graphql({ query: mutations.updateContent, variables: {input: payload}});
    fetchData()
  }
  
  return (
    <div className="UpdateModal">
        <input type='text' name='headerTitle' placeholder='Title' onChange={e => setContentUpdate({...contentUpdate, headerTitle: e.target.value})} />
        <input type='text' name='headerSubtitle' placeholder='Subtitle' onChange={e => setContentUpdate({...contentUpdate, headerSubtitle: e.target.value})} />
        <button onClick={() => handleSubmit()}>Update</button>
    </div>
  );
}

export default UpdateModal;
