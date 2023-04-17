import { useState, useEffect } from 'preact/hooks'
import { getWorks } from '../../scripts/services/supabase.js'
import Work from './Work.jsx'

export default function Works() {
  const [works, setWorks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWorks()
        setWorks(data)
      } catch (error) {
        throw error
      }
    }
    fetchData()
  }, [])

  return (
    <ul>
      {works.map((work) => (
        <Work {...work} />
      ))}
    </ul>
  )
}
