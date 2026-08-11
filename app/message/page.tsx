import type { Metadata } from "next";
import { videos } from "@/data/videos";
import { VideoExplorer } from "@/components/VideoExplorer";
export const metadata:Metadata={title:"말씀 | 찬양과 말씀",description:"오늘의 삶에 힘이 되는 말씀을 만나보세요."};
export default function MessagePage(){return <main className="listing"><div className="container"><span className="eyebrow">Message</span><h1>말씀</h1><p>오늘의 삶에 힘이 되는 말씀을 만나보세요.</p><VideoExplorer kind="sermon" videos={videos.filter(v=>v.type==='sermon')}/></div></main>}
