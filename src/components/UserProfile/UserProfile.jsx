import { formatNumTweets, formatNumFollowers } from "../../utils/format"
import "./UserProfile.css"

export default function UserProfile({ userProfile }) {
  console.log(userProfile)
  return (
    <div className="col user-profile">
      <div className="card">
        <div className="card-bg" />
        <CardContent cardInfo = {userProfile} />
        <CardFooter props = {userProfile}/>
      </div>
    </div>
  )
}

export function CardContent({cardInfo}) {
  return (
    <div className="card-content">
      <span className="fa-stack add-picture-icon">
        <i className="fas fa-camera fa-stack-2x">
          <i className="fas fa-plus fa-stack-1x"></i>
        </i>
      </span>
      <div className="twitter-handle">
        <h3>{cardInfo.name}</h3>
        <p>@{cardInfo.handle}</p>
      </div>
    </div>
  )
}

export function CardFooter({props}) {
  return (
    <div className="card-footer">
      <p>Tweets</p>
      <p>Followers</p>
      <span className="metric">{props.numTweets ? formatNumTweets(props.numTweets) : null}</span>
      <span className="metric">{props.numFollowers ? formatNumFollowers(props.numFollowers) : null}</span>
    </div>
  )
}
