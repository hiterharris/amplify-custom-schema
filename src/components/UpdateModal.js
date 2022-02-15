import React, { useState } from 'react';
import '../App.css';
import useContent from '../helpers/useContent';
import { updateContent } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify'

const UpdateModal = () => {
  const { content } = useContent();
  const [update, setUpdate] = useState({})

    const handleOnChange = (e) => {
        setUpdate({...content, headerTitle: e.target.value})
    }

    const handleSubmit = async () => {
        console.log(update)
        // await API.graphql(graphqlOperation(updateContent, {input: update}));
    }
  
  return (
    <div className="UpdateModal">
        <input type='text' name='headerTitle' placeholder={content?.headerTitle} onChange={e => handleOnChange(e)} />
        <button onClick={() => handleSubmit()}>Update</button>
    </div>
  );
}

export default UpdateModal;
