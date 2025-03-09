<div align="center"><img src="https://github.com/user-attachments/assets/2261727d-64aa-44a7-b614-518970830027" alt="Material Bread logo"></div>

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

1. **로그인 & 회원가입** 🔐

<img  align="right" src="https://user-images.githubusercontent.com/101618759/197943525-3fbbf517-4b72-47cb-8704-756bf63c9150.gif" width="40%">

- JWT 인증 방식 적용
- 보안 강화를 위한 비밀번호 암호화
- 회원가입 후 자동 로그인 기능

<br />
<br />
<br />
<br />

2. **영상 보기** 🎥

<img  align="right" src="https://user-images.githubusercontent.com/101618759/197943525-3fbbf517-4b72-47cb-8704-756bf63c9150.gif" width="45%">

<div>
<h3>📌 Pages with many features</h3>
<h4>• 로그인 페이지</h4>
<p>소셜로그인, 유효성검사, 아이디/비밀번호 찾기를 할 수 있어요.</p>
<h4>• 회원가입 페이지</h4>
<p>주소검색, 휴대폰/이메일 인증을 할수 있어요.</p>
</div>

<br />
<br />
<br />
<br />

3. **좋아요 & 싫어요** 👍👎

   - 개별 영화에 대한 좋아요 및 싫어요 반영
   - 사용자별 선호도 데이터 저장 및 관리

<br />
<br />
<br />
<br />

4. **위시리스트** 🌟

   - 관심 있는 영화 저장 및 리스트 관리
   - UI에서 직관적인 추가/삭제 기능 제공

<br />
<br />
<br />
<br />

5. **검색 기능** 🔍

   - 키워드 기반 검색
   - 자동완성 기능 추가 (예정)

<br />
<br />
<br />
<br />

6. **회원정보 변경** 🛠

   - 프로필 사진 변경
   - 비밀번호 변경 및 계정 삭제

<br />
<br />
<br />
<br />

7. **관리자 모드** 🏗
   - 영화(Movie), 장르(Genre), 감독(Director), 사용자(User) CRUD
   - 관리자 전용 페이지 제공

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
