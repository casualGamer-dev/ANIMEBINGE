import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post ,}) => {
  const disqusShortname = "animebinge-1"

  const disqusConfig = {
    url: "https://localhost:3000",
    identifier:'123', 
    title: "Demo Post" 
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComments;