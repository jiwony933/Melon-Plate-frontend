# Introduction
- 팀원
  백엔드 : 김응수, 조준형
  프론트 : 김지원, 남장현, 성종화, 신지윤
  
  Introduction
  멜론 플레이트 (melon plate)
  사용자 리뷰 기반 맛집 추천 및 검색 서비스
  강남 맛집 추천 여기서 해결


- 기간 : 22.09.19 - 22.09.29
- 구성 : Front-end 4명, Back-end 2명

- 백앤드 깃헙주소 : https://github.com/wecode-bootcamp-korea/37-1st-Melon-Plate-backend/
- 프론트엔드 깃헙주소 : https://github.com/wecode-bootcamp-korea/37-1st-Melon-Plate-frontend/
- Notion 프로젝트 소개 : https://www.notion.so/1-Melon-Plate-1b383e58e9f9497b9dfe595410d7066d


# Demo

  ![image](https://user-images.githubusercontent.com/109328454/193214827-d8d2b6d7-f394-49f8-bb07-5c79247f6f87.png)

# Technologies
  
- common <br/>
git&github, slack, trello, figma,


- Back-end <br/>
node.js, mysql, typeorm, multer, express, AWS RDS, S3

- Front-end <br/>
HTML, CSS, Javascript, REACT

  
## Feature

### User
  - 로그인 및 회원가입 - FileReader를 사용한 이미지 미리보기, 컴포넌트 재사용으로 두 가지 회원가입 구현
  - 리뷰 작성 및 업로드 - 멜론 이미지로 평점 리뷰 남기기 기능 구현
  <br/>
  
### SEARCH & FILTER
  - 검색창을 통한 맛집 검색 - 쿼리스트링을 사용한 검색, 필터 기능 구현
  - 필터 별 맛집 추출
  - 자체 추천 리스트
  <br/>
  
### ADMIN
  - 식당별 상세 페이지
  - Admin 페이지로 식당 관리
 
 [본인 담당 기능]
- 메인 페이지
  - local storage를 사용하여, 로그인 시, 닉네임을 활용한 웰컴 메시지
  - 검색창 구현
    Query string과 useEffect를 사용하여, 검색어에 따라 검색창 아래에서 검색 결과 바로 확인 
- 헤더 및 푸터 구현
  - useLocaton을 사용하여, 페이지 마다 헤더에 검색창 여부 차별화
  - 호버 시, 드롭다운 메뉴 나타내기
  - createPortal을 사용하여 모달 프로필 메뉴 
- 마이페이지
  - FileReader로, 수정할 이미지 미리보기 구현
- admin 식당 등록 및 수정 페이지
  -  FormData를 사용한, 서버에 여러 타입의 데이터 전송
- 맛집 리스트 구현
  - query string을 사용하여, 테마에 맞는 검색 결과 리스트로 이동
