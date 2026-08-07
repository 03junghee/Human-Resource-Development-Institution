# 인적자원개발연구협회 공식 웹사이트

## 1. 프로젝트 개요
인적자원개발연구협회(Human Resource Development Institute)의 공식 웹사이트입니다. AI 시대의 인지적 주체성과 Human Agency를 연구하는 비영리 연구협회로, 신뢰성·학술성·공공성·전문성을 갖춘 기관 웹사이트입니다.

- 대상: 기업 HRD 담당자, 연구자, 정책 관계자, 일반 방문자
- 핵심 가치: 신뢰성 있는 연구기관 이미지, 명확한 정보 전달, 학술적 전문성

## 2. 페이지 구조

### 메인 페이지 (Single Page Sections)
- `/` - 홈 (Hero, 인사말, 사명과 비전, 연혁, 조직도, 연구개발 개요, 영상, 공지사항, 후원, 문의, Footer)

### 서브 페이지
- `/about/greeting` - 인사말
- `/about/mission` - 사명과 비전
- `/about/history` - 연혁
- `/about/organization` - 조직 및 임원
- `/about/articles` - 정관
- `/research/resilient-autonomy` - 회복 주도성
- `/research/career-autonomy` - 진로 주도성
- `/research/relational-autonomy` - 관계 주도성
- `/research/existential-autonomy` - 실존 주도성
- `/business/hr-diagnostics` - HR 진단 연구개발
- `/business/b2b-education` - B2B 교육
- `/business/partnership` - 기업·기관 협력
- `/resources/videos` - 영상
- `/resources/notices` - 공지사항
- `/participate/membership` - 연구회원 / 파트너
- `/participate/sponsorship` - 후원
- `/participate/contact` - 문의

## 3. 핵심 기능
- [x] 상단 GNB (2Depth Dropdown, Sticky, 스크롤 시 축소)
- [x] Hero 섹션 (연구 Grid 배경, 텍스트 중심)
- [x] 인사말 섹션 (Fade-in, Underline Animation)
- [x] 사명과 비전 섹션 (Mission/Vision, Core Values, Strategic Goals)
- [x] 연혁 섹션 (Vertical Timeline, Scroll Progress)
- [x] 조직도 섹션 (Hierarchy Line, Accordion)
- [x] 정관 섹션 (좌측 Sticky 목차, ScrollSpy)
- [x] 연구·개발 섹션 (4대 주도성, ScrollSpy Navigation)
- [x] 영상 섹션 (강연 카드)
- [x] 공지사항 섹션 (List UI)
- [x] 후원 섹션 (Tab 전환, 후원 유형)
- [x] 문의 폼 (Form 연동)
- [x] Footer

## 4. 데이터 모델
- Supabase 불필요 (정적 콘텐츠 중심)
- 문의 폼: Readdy Form 사용
- 후원 폼: Readdy Form 사용

## 5. 백엔드 / 서드파티 통합
- Form: 문의 폼, 후원 문의 폼 연동

## 6. 개발 단계 계획

### Phase 1: 메인 홈페이지 기본 구조 + 네비게이션 + Hero + Footer
- 목표: 전체 사이트의 골격 구축
- 산출물: GNB, Hero, Footer, 기본 레이아웃

### Phase 2: 인사말 + 사명과 비전 + 연혁
- 목표: 협회 소개 핵심 섹션 완성
- 산출물: 인사말, Mission/Vision, Core Values, Strategic Goals, Timeline

### Phase 3: 조직도 + 정관
- 목표: 기관 정보 섹션 완성
- 산출물: 조직도 Hierarchy, 정관 문서 뷰어

### Phase 4: 연구·개발 (4대 주도성)
- 목표: 핵심 연구 콘텐츠 페이지
- 산출물: Career Autonomy 등 연구 페이지

### Phase 5: 영상 + 공지사항 + 후원 + 문의
- 목표: 자료·소식 및 참여 섹션 완성
- 산출물: 영상 카드, 공지 리스트, 후원/문의 폼

### Phase 6: 반응형 + 애니메이션 + SEO
- 목표: 모바일 최적화, 인터랙션, SEO
- 산출물: 반응형 레이아웃, 애니메이션, 메타태그