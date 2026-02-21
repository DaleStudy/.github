# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

DaleStudy GitHub Organization의 프로필 저장소. SponsorKit을 사용하여 GitHub 후원자 목록을 SVG 이미지로 자동 생성하고, README에 표시한다.

## 주요 명령어

```bash
bun install          # 의존성 설치
bun run sponsors     # 후원자 SVG 생성 (SPONSORKIT_GITHUB_TOKEN 환경 변수 필요)
```

## 아키텍처

- **sponsor.config.ts**: SponsorKit 설정 파일. circles 렌더러 사용, 후원 티어(Past Sponsors / Sponsors) 정의
- **sponsorkit/sponsors.svg**: 생성된 후원자 SVG 이미지 (자동 생성 산출물이므로 직접 수정 금지, `bun run sponsors`로만 갱신)
- **profile/README.md**: GitHub Organization 프로필에 표시되는 README. `raw.githubusercontent.com` 절대 URL로 SVG 참조
- **README.md**: 저장소 README. 상대 경로(`./sponsorkit/sponsors.svg`)로 SVG 참조
- **.github/workflows/sponsors.yml**: 매일 자정(UTC) cron + 수동 트리거로 후원자 SVG를 갱신하고, `chore/update-sponsors` 브랜치에 PR을 자동 생성하는 워크플로우

## 컨벤션

- 패키지 매니저: **Bun** (bun.lock 사용)
- 커밋 메시지: conventional commits 스타일 (`chore: update sponsors`)
- `sponsorkit/.cache.json`은 gitignore 대상 (로컬 캐시)
