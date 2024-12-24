import Post from  "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import {Posts} from "../../dummyData"

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {/* dummydata nunchi Posts ni export chesam 
                Posts array lo prathi post (p) ki oka oka Post component create chesthundi.
                post={p} prop ga pass chesthundi, ante prathi Post component ki specific post data pampistundi.
                key={p.id} ni use chesthunnaru, idi React ki prathi component unique ani cheppadaniki avasaram. */}
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
                
            </div>
        </div>
    )
}