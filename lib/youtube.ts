import { choirs } from "@/data/choirs";
/** YouTube Data API 연결 시 이 파일에서 API 호출을 구현하세요. */
export type YouTubeSource={id:string;title:string;description:string;publishedAt:string;thumbnail:string};
export async function getLatestChannelVideos(channelId:string):Promise<YouTubeSource[]>{
  // TODO: YOUTUBE_API_KEY로 /youtube/v3/search 요청 후 앱 Video 타입으로 변환
  console.info(`YouTube channel integration pending: ${channelId}`); return [];
}
export async function getVideoDetails(videoId:string):Promise<YouTubeSource|null>{console.info(`YouTube detail integration pending: ${videoId}`);return null;}
export function classifyVideo(title:string,description="") {const text=`${title} ${description}`.toLowerCase();const choir=choirs.find(c=>text.includes(c.youtubeKeyword.toLowerCase()));return choir?.id ?? 'uncategorized';}
