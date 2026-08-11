import { Video } from "@/types/video";
const yt = (id:string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const worship = (id:string, youtubeId:string, title:string, choirId:string, date:string, category:string, featured=false):Video => ({id,youtubeId,title,type:"worship",choirId,church:"순복음강북교회",channelName:"순복음강북교회",youtubeUrl:`https://www.youtube.com/watch?v=${youtubeId}`,thumbnail:yt(youtubeId),publishedAt:date,category,tags:[choirId === "zion" ? "시온찬양대" : choirId,"찬양",category],featured,recommended:false,external:false,description:"예배 가운데 함께 나누는 따뜻한 찬양의 고백입니다."});
const sermon = (id:string, youtubeId:string, title:string, speaker:string, date:string, category:string, external=false, featured=false):Video => ({id,youtubeId,title,type:"sermon",speaker,church:external?"은혜교회":"순복음강북교회",channelName:external?"은혜교회 공식 YouTube":"순복음강북교회",youtubeUrl:`https://www.youtube.com/watch?v=${youtubeId}`,thumbnail:yt(youtubeId),publishedAt:date,category,tags:[category,"말씀",external?"추천 말씀":"주일설교"],featured,recommended:external,external,description:"오늘의 삶을 비추는 복음의 메시지를 함께 묵상합니다.",scripture:"시편 23:1-6",duration:"34:12"});
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
 sermon("sermon-001","dQw4w9WgXcQ","광야에서도 함께하시는 하나님","김은혜 목사","2026-08-10","위로",false,true),
 sermon("sermon-002","3JWTaaS7LdU","작은 믿음으로 시작하는 하루","박지훈 목사","2026-08-03","믿음"),
 sermon("sermon-003","L_jWHffIx5E","감사로 다시 보는 일상","김은혜 목사","2026-07-27","감사"),
 sermon("sermon-004","kJQP7kiw5Fk","기도가 머무는 자리","이도현 목사","2026-07-20","기도"),
 sermon("sermon-005","fJ9rUzIMcZQ","관계 속에서 배우는 사랑","박지훈 목사","2026-07-13","관계"),
 sermon("sermon-006","OPf0YbXqDm0","가정을 세우는 말의 힘","김은혜 목사","2026-07-06","가정"),
 sermon("sermon-007","CevxZvSJLk8","소망을 붙드는 마음","한소망 목사","2026-08-08","소망",true),
 sermon("sermon-008","2Vv-BfVoq4g","회복을 향한 한 걸음","정하늘 목사","2026-08-01","회복",true),
 sermon("sermon-009","09R8_2nJtjg","신앙생활의 리듬","윤빛 목사","2026-07-25","신앙생활",true),
 sermon("sermon-010","RgKAFK5djSk","은혜 안에 머무는 법","최은혜 목사","2026-07-18","위로",true),
];
