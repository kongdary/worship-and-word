import { Video } from "@/types/video";
const yt = (id:string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const worship = (id:string, youtubeId:string, title:string, choirId:string, date:string, category:string, featured=false):Video => ({id,youtubeId,title,type:"worship",choirId,church:"순복음강북교회",channelName:"순복음강북교회",youtubeUrl:`https://www.youtube.com/watch?v=${youtubeId}`,thumbnail:yt(youtubeId),publishedAt:date,category,tags:[choirId === "zion" ? "시온찬양대" : choirId,"찬양",category],featured,recommended:false,external:false,description:"예배 가운데 함께 나누는 따뜻한 찬양의 고백입니다."});
const sermon = (id:string, youtubeId:string, title:string, speaker:string, date:string, category:string, external=false, featured=false):Video => ({id,youtubeId,title,type:"sermon",speaker,church:external?"추천 설교 아카이브":"순복음강북교회",channelName:external?"공식 YouTube 채널":"순복음강북교회",youtubeUrl:`https://www.youtube.com/watch?v=${youtubeId}`,thumbnail:youtubeId?yt(youtubeId):undefined,publishedAt:date,category,tags:[category,"말씀",external?"추천 말씀":"주일설교"],featured,recommended:external,external,description:"오늘의 삶을 비추는 복음의 메시지를 함께 묵상합니다.",scripture:"시편 23:1-6",duration:"34:12"});
export const videos:Video[] = [
 worship("worship-001","uYpX2lEdL_4","그의 빛 안에 살면","zion","2026-08-07","주일찬양",true),
 worship("worship-002","wnYxk6Nx-UA","주는 우리의 피난처","zion","2026-07-31","주일찬양"),
 worship("worship-003","jOor1mzfPPM","하나님의 사랑","zion","2026-07-24","헌금송"),
 worship("worship-004","Or70DAYGcUk","영광의 왕 예수 그리스도","zion","2026-07-24","주일찬양"),
 worship("worship-005","d9JWl2S_k1M","주 날 인도하시네","zion","2026-07-10","주일찬양"),
 worship("worship-006","8ZvtfUhASjg","어둔 밤 마음에 잠겨","hallelujah","2026-08-09","주일찬양"),
 worship("worship-007","1wYM0TNXkVA","십자가 그 사랑","hallelujah","2026-08-02","주일찬양"),
 worship("worship-008","d_4g6-ztbQI","믿음의 경주","hosanna","2026-08-09","주일찬양"),
 worship("worship-009","G_-MyIKbjw8","네 길을 야훼께 맡기라","hosanna","2026-08-02","주일찬양"),
 worship("worship-010","bSxhc6xQaAw","너는 크게 자유를 외쳐라","bethlehem","2026-08-09","주일찬양"),
 worship("worship-011","EOr7WmjvZCQ","주 자비 영원하네","bethlehem","2026-08-02","주일찬양"),
 worship("worship-012","5Jr2l-dalnY","아무것도 두려워말라","gabriel","2026-08-05","주일찬양"),
 sermon("sermon-001","QVE_MX04Odc","제자훈련과 복음의 본질","옥한흠 목사","2026-08-10","믿음",true,true),
 sermon("sermon-002","9M5b-pwgbDQ","성경과 삶을 깊이 읽는 시간","이재철 목사","2026-08-03","신앙생활",true),
 sermon("sermon-003","","믿음과 성령, 소망의 말씀","조용기 목사","2026-07-27","소망",true),
 sermon("sermon-004","","균형 있는 강해설교","이동원 목사","2026-07-20","믿음",true),
 sermon("sermon-005","","따뜻한 복음의 길","하용조 목사","2026-07-13","위로",true),
 sermon("sermon-006","","은혜와 신학을 깊이 묵상하는 말씀","박영선 목사","2026-07-06","신앙생활",true),
 sermon("sermon-007","","예수님과 동행하는 일상","유기성 목사","2026-08-08","기도",true),
 sermon("sermon-008","","신앙을 삶으로 살아내는 길","김동호 목사","2026-08-01","관계",true),
 sermon("sermon-009","","묵상과 성찰이 있는 말씀","김기석 목사","2026-07-25","회복",true),
 sermon("sermon-010","","고전 설교 아카이브","곽선희 목사","2026-07-18","신앙생활",true),
];

const officialSermonSearches: Record<string,string> = {
 "옥한흠 목사":"사랑의교회 옥한흠 목사 설교", "이재철 목사":"100주년기념교회 이재철 목사 설교", "조용기 목사":"여의도순복음교회 조용기 목사 설교", "이동원 목사":"지구촌교회 이동원 목사 설교", "하용조 목사":"온누리교회 하용조 목사 설교", "박영선 목사":"남포교회 박영선 목사 설교", "유기성 목사":"선한목자교회 유기성 목사 설교", "김동호 목사":"김동호 목사 공식 설교", "김기석 목사":"청파교회 김기석 목사 설교", "곽선희 목사":"소망교회 곽선희 목사 설교"
};
videos.filter(v=>v.type==="sermon"&&v.speaker).forEach(v=>{const q=officialSermonSearches[v.speaker!];if(q&&!v.youtubeId){v.youtubeUrl=`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;v.channelName="공식 교회·사역 아카이브";}});
