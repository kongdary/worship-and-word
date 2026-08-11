# 찬양과 말씀 · Worship & Message

YouTube 기반의 교회 찬양·말씀 큐레이션 웹사이트입니다. Next.js App Router, TypeScript와 반응형 CSS로 제작되어 GitHub 및 Vercel 배포에 바로 사용할 수 있습니다.

Hero 배경 이미지가 필요해지면 `public/images/`에 넣고 `app/page.tsx`의 Hero 영역에서 경로를 연결하면 됩니다. 현재는 이미지 교체 전에도 자연스럽게 보이도록 따뜻한 추상 광원 배경을 적용했습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다. 배포 전 점검은 `npm run build`로 할 수 있습니다.

## Vercel 배포

1. 이 폴더를 새 GitHub 저장소에 push합니다.
2. [Vercel](https://vercel.com/new)에서 해당 GitHub 저장소를 Import합니다.
3. Framework Preset으로 Next.js가 감지되면 **Deploy**를 누릅니다. 별도 환경 변수는 현재 필요하지 않습니다.

## 영상 데이터 추가

`data/videos.ts`에 `Video` 객체를 추가합니다. `youtubeId`만 있으면 기본 YouTube 썸네일 URL이 자동으로 구성됩니다. `featured: true`인 찬양 및 설교는 홈의 오늘의 추천에 노출됩니다. `external: true`는 외부 추천 말씀 배지와 출처 표시에 사용됩니다.

## 찬양대 추가

`data/choirs.ts`에 `id`, `name`, `description`, `image`, `youtubeKeyword`, `sortOrder`를 추가합니다. 이어서 해당 `id`를 영상의 `choirId`로 지정하면 탭·필터에 자동 반영됩니다.

## YouTube API 추후 연결

`lib/youtube.ts`에 API 연동 지점이 분리되어 있습니다. `getLatestChannelVideos()`와 `getVideoDetails()`에 YouTube Data API 호출을 추가하고, `classifyVideo()`로 제목·설명 기반 찬양대 자동 분류를 이용하세요. API 키는 `.env.local`의 `YOUTUBE_API_KEY`로 관리하고 Vercel 환경 변수에도 동일하게 등록하세요.

## Supabase 추후 연결

현재 `data/videos.ts`, `data/choirs.ts`, `data/channels.ts`가 임시 데이터 저장소 역할을 합니다. 이후 Supabase의 `videos`, `choirs`, `channels` 테이블에 같은 필드를 만들고, 이 파일을 조회 함수(repository)로 교체하면 UI를 거의 변경하지 않고 연동할 수 있습니다. 서버 전용 Supabase 키는 반드시 Vercel 환경 변수에만 설정하세요.
