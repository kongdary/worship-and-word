import type { Metadata } from "next";
import { videos } from "@/data/videos";
import { VideoExplorer } from "@/components/VideoExplorer";
export const metadata:Metadata={title:"찬양 | 찬양과 말씀",description:"마음에 쉼을 주는 찬양을 만나보세요."};
export default function WorshipPage(){return <main className="listing"><div className="container"><span className="eyebrow">Worship</span><h1>찬양</h1><p>마음에 쉼을 주는 찬양을 만나보세요.</p><VideoExplorer kind="worship" videos={videos.filter(v=>v.type==='worship')}/></div></main>}
