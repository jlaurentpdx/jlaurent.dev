export default function Work() {
  const { title, label, detail, deploy_url, deploy_prompt, deploy_source, description, image_url } = this.props

  return (
    <li id={label}>
      <h2>{title}</h2>
      <img src={image_url} width={'50%'} />
      <h3>{detail}</h3>
      <p>{description}</p>
      <a href={deploy_url}>{deploy_prompt}</a>
    </li>
  )
}
