import Link from "next/link";
import { videos } from "@/data/videos";
import { channels } from "@/data/channels";
import { choirs } from "@/data/choirs";
import { SectionTitle } from "@/components/SectionTitle";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { VideoCard } from "@/components/VideoCard";
import { ChoirTabs } from "@/components/ChoirTabs";
import { ChannelCard } from "@/components/ChannelCard";
export default function Home(){const worship=videos.filter(v=>v.type==='worship');const sermons=videos.filter(v=>v.type==='sermon');const todayWorship=worship.find(v=>v.featured)!;const todaySermon=sermons.find(v=>v.featured)!;const latestWorship=[...worship].sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)).slice(0,6);const external=sermons.filter(v=>v.external);return <main>
 <section className="hero"><div className="hero-light"/><div className="container hero-content"><span className="eyebrow">Worship &amp; Message</span><h1>오늘,<br/>찬양과 말씀으로 채우는 하루</h1><p>은혜로운 찬양과 말씀을 한곳에서 만나보세요.</p><div className="hero-buttons"><a href="#today" className="primary-button">오늘의 찬양</a><a href="#message" className="secondary-button">최신 설교</a><a href="#choirs" className="quiet-button">찬양대별 보기</a></div></div></section>
 <section className="section" id="today"><div className="container"><SectionTitle eyebrow="Today&apos;s selection" title="오늘의 추천" copy="오늘 마음에 머문 찬양과 말씀"/><div className="featured-grid"><FeaturedVideo video={todayWorship} label="오늘의 찬양"/><FeaturedVideo video={todaySermon} label="오늘의 말씀"/></div></div></section>
 <section className="section white-section"><div className="container"><SectionTitle eyebrow="New worship" title="새로 올라온 찬양" copy="예배의 감동을 다시 만나보세요." href="/worship"/><div className="video-grid">{latestWorship.map(v=><VideoCard key={v.id} video={v}/>)}</div></div></section>
 <section className="section" id="choirs"><div className="container"><SectionTitle eyebrow="Our choirs" title="찬양대별 찬양" copy="우리 교회의 아름다운 화음을 찬양대별로 모았습니다."/><div className="choir-intros">{choirs.map(c=><div key={c.id}><b>{c.image}</b><span>{c.name}</span></div>)}</div><ChoirTabs videos={worship}/></div></section>
 <section className="section white-section" id="message"><div className="container"><SectionTitle eyebrow="This week&apos;s message" title="이번 주 말씀" copy="오늘의 삶에 힘이 되는 말씀을 함께 묵상해요."/><FeaturedVideo video={todaySermon} label="이번 주 말씀"/><div className="sub-heading"><h3>최근 말씀</h3><Link href="/message">전체보기 →</Link></div><div className="video-grid">{sermons.filter(v=>!v.external).slice(1,6).map(v=><VideoCard key={v.id} video={v}/>)}</div></div></section>
 <section className="section"><div className="container"><SectionTitle eyebrow="Curated message" title="함께 듣고 싶은 말씀" copy="마음에 오래 남는 다른 교회와 목회자의 좋은 말씀"/><div className="video-grid">{external.map(v=><VideoCard key={v.id} video={v}/>)}</div></div></section>
 <section className="section white-section" id="channels"><div className="container"><SectionTitle eyebrow="Sing together" title="함께 부르기 좋은 찬양" copy="어노인팅, 마커스, 피아워십 등 함께 예배하기 좋은 CCM 채널"/><div className="channel-grid">{channels.map(c=><ChannelCard key={c.name} channel={c}/>)}</div></div></section>
 <section className="about-banner"><div className="container"><span className="eyebrow">About us</span><h2>찬양과 말씀을 조금 더<br/>가까이 만나는 공간</h2><p>하루의 어느 순간, 이곳에서 만난 찬양 한 곡과 말씀 한 편이<br/>작은 위로와 힘이 되기를 바랍니다.</p><Link href="/about">더 알아보기 →</Link></div></section>
 </main>}
