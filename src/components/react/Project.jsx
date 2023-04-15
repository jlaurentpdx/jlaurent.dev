export default function Project({ project }) {
  const { title, description, label, deploy_url, image_url, repo_url } = project
  return (
    <li id={label}>
      <h2>{title}</h2>
      <img src={image_url} width={'50%'} />
      <p>{description}</p>
      <br />
      <a href={deploy_url}>Deployed on Netlify</a>
      <br />
      <a href={repo_url}>Github Repo</a>
    </li>
  )
}
