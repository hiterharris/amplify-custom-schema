import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listContents } from '../graphql/queries'

const useContent = () => {
    const [data, setData] = useState()

    const fetchData = async () => {
        const res = await API.graphql(graphqlOperation(listContents))
        setData( res.data.listContents.items[0])
    }

    useEffect(() => {
        fetchData()
    }, [])


    return { data, fetchData }
}

  export default useContent
