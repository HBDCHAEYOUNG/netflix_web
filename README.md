<div align="center"><img src="https://github.com/user-attachments/assets/2261727d-64aa-44a7-b614-518970830027" alt="Material Bread logo"></div>

https://netflix-web-project.vercel.app/landing

# 🎬 Netflix Clone Project

넷플릭스 클론 프로젝트입니다! 다양한 기능과 최신 기술을 활용하여 실제 넷플릭스처럼 동작하도록 구현했습니다. 🚀

## 🚀 프로젝트 소개

관리자 모드, 온보딩, CRUD 기능, 좋아요와 위시리스트 등 전반적인 넷플릭스 구성부터 기능까지 구현해 보았습니다.

## 🛠 사용 기술

- **프론트엔드**: React, TypeScript, Zustand, React Router, FSD Architecture
- **백엔드**: NestJS, Express, PostgreSQL
- **UI 라이브러리**: Tailwind CSS, shadcn/ui
- **기타**: Tanstack Query, React Hook Form, Zod

<div align="center">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"/>
    <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logoColor=white&logo=shadcnui"/>
    <img src="https://img.shields.io/badge/fetch-4285F4?style=for-the-badge&logoColor=white"/>
    <img src="https://img.shields.io/badge/Zustand-8E44AD?style=for-the-badge&logoColor=white"/>
    <img src="https://img.shields.io/badge/FSD (Feature Slice Design)-FF5733?style=for-the-badge&logoColor=white"/>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
    <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
</div>

## 📌 주요 기능

1. **회원 인증** 🔐

<img align="right" src="https://github.com/user-attachments/assets/eb41ad1c-80ce-4147-b835-9391bf43a4e7" width="45%">

- JWT를 활용한 로그인/회원가입 구현
- 이메일 중복 확인 및 유효성 검사
- 로그인 상태 유지 기능

<br />
<br />
<br />
<br />
<br />
<br />

2. **결제 시스템** 💳

<img align="right" src="https://github.com/user-attachments/assets/cbfbdbdb-2fff-4401-8add-6b9d9854bb9b" width="45%">

- 아임포트(I'mport)를 활용한 테스트 결제 기능
- 다양한 결제 수단 지원 (신용카드, 카카오페이, 네이버페이 등)
- 멤버십 등급별 가격 정책

<br />
<br />
<br />
<br />
<br />
<br />

3. **콘텐츠 스트리밍** 🎥

<img align="right" src="https://github.com/user-attachments/assets/1bb137f1-e1ae-4052-871f-b47b1d1d4d75" width="45%">

- 영화 상세 정보 조회
- 영화 예고편 재생 기능
- 장르별 영화 목록 제공
- 조회수 반영 탑 10 영화 목록 제공

<br />
<br />
<br />
<br />
<br />
<br />

4. **인터랙티브 기능** 👍

<img align="right" src="https://github.com/user-attachments/assets/8322c00d-4fa8-4110-b639-de267b71c0ed" width="45%">

- 영화 좋아요 기능
- 내가 찜한 콘텐츠 목록

<br />
<br />
<br />
<br />
<br />
<br />
<br />

5. **검색 시스템** 🔍

   <img align="right" src="https://github.com/user-attachments/assets/0abed0df-e5c4-4af2-9569-a16c20d83096" width="45%">

   - 영화 제목 기반 검색
   - 검색 결과 필터링

<br />
<br />
<br />
<br />
<br />
<br />
<br />

6. **프로필 관리** 👤

<img align="right" src="https://github.com/user-attachments/assets/b0eccfd0-fdcc-4773-981e-6b2e44d69b01" width="45%">

- 프로필 닉네임 변경
- 프로필 별 영화 좋아요 및 찜 목록 제공

<br />
<br />
<br />
<br />
<br />
<br />
<br />

7. **관리자 대시보드** 👨‍💼

<img align="right" src="https://github.com/user-attachments/assets/69c043ff-36f9-4fee-9c27-c4a48d2fd495" width="45%">

- 영화 데이터 CRUD 기능
- 사용자 관리

<br />
<br />
<br />
<br />
<br />
<br />
<br />

## 🏗 프로젝트 구조 (FSD - Feature Slice Design)

```
📂 src
 ┣ 📂 app         # 애플리케이션 초기 설정 (라우팅, 글로벌 스타일, 프로바이더 등)
 ┣ 📂 pages       # 전체 페이지 및 중첩 라우팅이 적용된 대형 페이지 단위
 ┣ 📂 widgets     # 특정 기능을 담당하는 독립적인 UI 블록 (예: 네비게이션 바, 사이드바)
 ┣ 📂 features    # 사용자가 직접 수행하는 주요 기능 (예: 좋아요 버튼, 검색 필터)
 ┣ 📂 entities    # 비즈니스 엔티티 (예: User, Movie, Genre)
 ┗ 📂 shared      # 공통 모듈 (유틸리티, API 함수, UI 컴포넌트 등)
```

# 🛠 기술적 도전

- 아임포트를 이용한 test 결제 기능
