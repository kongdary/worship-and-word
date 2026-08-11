export const formatDate=(date:string)=>new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'long',day:'numeric'}).format(new Date(date));
export const isNew=(date:string)=>{const diff=Date.now()-new Date(date).getTime();return diff>=0&&diff<=1000*60*60*24*28;};
