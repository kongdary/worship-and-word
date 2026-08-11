import Link from "next/link";
import { Video } from "@/types/video";
import { choirs } from "@/data/choirs";
import { formatDate, isNew } from "@/lib/utils";
export function VideoCard({video}:{video:Video}){const choir=choirs.find(c=>c.id===video.choirId); return <Link href={`/videos/${video.id}`} className="video-card card"><div className="thumb"><img src={video.thumbnail} alt=""/>{isNew(video.publishedAt)&&<b className="new-badge">NEW</b>}<span className="play">▶</span></div><div className="video-info">{video.external&&<span className="recommend-badge">추천 말씀</span>}<h3>{video.title}</h3><p className="person">{choir?.name ?? video.speaker}</p><p className="meta">{formatDate(video.publishedAt)} {video.duration&&`· ${video.duration}`}</p><div className="tag-row">{video.tags.slice(0,2).map(tag=><span key={tag}>{tag}</span>)}</div>{video.external&&<p className="source">출처 · {video.channelName}</p>}</div></Link>}
