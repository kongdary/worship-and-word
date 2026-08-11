"use client";
import { useState } from "react";
import { choirs } from "@/data/choirs";
import { Video } from "@/types/video";
import { VideoCard } from "./VideoCard";
export function ChoirTabs({videos}:{videos:Video[]}){const [selected,setSelected]=useState('all'); const choices=[{id:'all',name:'전체'},...choirs]; const displayed=videos.filter(v=>selected==='all'||v.choirId===selected).slice(0,6);return <><div className="tabs">{choices.map(c=><button className={`pill chip ${selected===c.id?'active':''}`} key={c.id} onClick={()=>setSelected(c.id)}>{c.name}</button>)}</div><div className="video-grid choir-grid">{displayed.map(v=><VideoCard key={v.id} video={v}/>)}</div></>}
