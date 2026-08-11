export type VideoType = "worship" | "sermon";
export type Video = {
  id:string; youtubeId:string; title:string; type:VideoType; choirId?:string; speaker?:string;
  church:string; channelName:string; youtubeUrl:string; thumbnail?:string; publishedAt:string;
  category:string; tags:string[]; featured:boolean; recommended:boolean; external:boolean;
  description:string; scripture?:string; duration?:string;
};
