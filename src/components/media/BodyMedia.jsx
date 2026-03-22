
import MediaList from "../home/Medialist"
import { media_data } from "../../data/media_data"
export default function BodyMedia(){
    return(
        <>
        <MediaList title="Our inventory" items={media_data} type={true}/>

        </>
    )
}