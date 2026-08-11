import Link from "next/link";
import { Video } from "@/types/video";
import { choirs } from "@/data/choirs";
import { formatDate } from "@/lib/utils";
export function FeaturedVideo({video,label}:{video:Video;label:string}){const choir=choirs.find(c=>c.id===video.choirId); return <article className="featured card"><div className="thumb"><img src={video.thumbnail} alt=""/><span className="feature-badge">오늘의 추천</span><span className="play">▶</span></div><div className="featured-copy"><span className="eyebrow">{label}</span><h3>{video.title}</h3><p className="person">{choir?.name ?? video.speaker}</p><p>{video.description}</p><small>{formatDate(video.publishedAt)}</small><Link className="text-link" href={`/videos/${video.id}`}>영상 자세히 보기 →</Link></div></article>}
