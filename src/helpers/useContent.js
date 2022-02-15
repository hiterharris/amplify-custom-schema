import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listContents } from '../graphql/queries'

const useContent = () => {
    const [content, setContent] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await API.graphql(graphqlOperation(listContents))
            setContent( data.data.listContents.items[0])
        }
        fetchData()
    }, [])


    return { content }
}

  export default useContent
