import { useState, useEffect } from 'preact/hooks'
import { getProjects } from '../../scripts/services/supabase.js'
import Project from './Project.jsx'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
      } catch (error) {
        throw error
      }
      console.log(projects)
    }
    fetchData()
    console.log(projects)
  }, [])

  return (
    <ul>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  )
}
