import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const parseData = ({ data, error }) => {
  if (error) throw error
  return data
}

export async function getProjects() {
  const projects = await supabase.from('projects').select('*')
  return parseData(projects)
}

export async function getWorks() {
  const works = await supabase.from('work').select('*')
  return parseData(works)
}
