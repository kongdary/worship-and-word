import { Video } from "@/types/video";
const yt = (id:string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const worship = (id:string, youtubeId:string, title:string, choirId:string, date:string, category:string, featured=false):Video => ({id,youtubeId,title,type:"worship",choirId,church:"순복음강북교회",channelName:"순복음강북교회",youtubeUrl:`https://www.youtube.com/watch?v=${youtubeId}`,thumbnail:yt(youtubeId),publishedAt:date,category,tags:[choirId === "zion" ? "시온찬양대" : choirId,"찬양",category],featured,recommended:false,external:false,description:"예배 가운데 함께 나누는 따뜻한 찬양의 고백입니다."});
const sermon = (id:string, youtubeId:string, title:string, speaker:string, date:string, category:string, external=false, featured=false):Video => ({id,youtubeId,title,type:"sermon",speaker,church:external?"은혜교회":"순복음강북교회",channelName:external?"은혜교회 공식 YouTube":"순복음강북교회",youtubeUrl:`https://www.youtube.com/watch?v=${youtubeId}`,thumbnail:yt(youtubeId),publishedAt:date,category,tags:[category,"말씀",external?"추천 말씀":"주일설교"],featured,recommended:external,external,description:"오늘의 삶을 비추는 복음의 메시지를 함께 묵상합니다.",scripture:"시편 23:1-6",duration:"34:12"});
export const videos:Video[] = [
 worship("worship-001","dQw4w9WgXcQ","주 날 인도하시네","zion","2026-08-09","주일찬양",true),
 worship("worship-002","3JWTaaS7LdU","주의 은혜라","zion","2026-08-02","헌금송"),
 worship("worship-003","L_jWHffIx5E","하나님의 사랑","zion","2026-07-26","특송"),
 worship("worship-004","kJQP7kiw5Fk","주와 같이 길 가는 것","zion","2026-07-19","주일찬양"),
 worship("worship-005","fJ9rUzIMcZQ","내 영혼의 그윽히 깊은 데서","zion","2026-07-12","연습영상"),
 worship("worship-006","OPf0YbXqDm0","내 주 되신 주를 참 사랑하고","choir2","2026-08-05","주일찬양"),
 worship("worship-007","CevxZvSJLk8","주 품에 품으소서","choir2","2026-07-29","특송"),
 worship("worship-008","2Vv-BfVoq4g","주의 길을 가리","choir3","2026-07-23","여성중창"),
 worship("worship-009","09R8_2nJtjg","주님의 마음을 본받는 자","choir3","2026-07-16","주일찬양"),
 worship("worship-010","RgKAFK5djSk","오 신실하신 주","choir4","2026-07-09","헌금송"),
 worship("worship-011","pRpeEdMmmQ0","사랑의 주님","choir4","2026-07-02","남성중창"),
 worship("worship-012","e-ORhEE9VVg","기쁜 날의 찬양","choir5","2026-06-25","주일찬양"),
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
