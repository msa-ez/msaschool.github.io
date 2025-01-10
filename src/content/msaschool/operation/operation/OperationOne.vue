<template>
    <div>
        <div class="Practice-card-box">
                <VueSubLayoutCard lab="ops-docker-associate"></VueSubLayoutCard>
        </div>
        <mark-down class="content">
## 도커 이미지
</mark-down>
        <g-image style="max-width: 95%"
            src="~/img/03_Bizdevops/06_운영/01/image1.png"
        ></g-image>
    <mark-down class="content">
### Docker Image & Container
- Docker Image
    - 가상머신 생성시 사용하는 ISO 와 유사한 개념의 이미지
    - 여러 개의 층으로 된 바이너리 파일로 존재
    - 컨테이너 생성시 읽기 전용으로 사용
    - 도커 명령어로 레지스트리로부터 다운로드 가능
    - 저장소 이름 : 이미지가 저장된 장소, 이름이 없으면 도커 허브(Docker Hub)로 인식
    - 이미지 이름 : 이미지 이름, 생략 불가
    - 이미지 버전 : 이미지 버전정보, 생략 시 latest 로 인식
</mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/01/image2.png"
        ></g-image>
    <mark-down class="content">
### Docker Image Path Samples
- 이미지 Path는 &#60;URL&#62;/&#60;namespace&#62;/&#60;Image_name&#62;:&#60;tag&#62; 형식
- library는 도커허브 공식 이미지 Namespace로, 여기에 사용자 이름이 위치
- Private 이미지 저장소(Docker, harbor)를 설치하여 운영 가능
</mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/01/image3.png"
        ></g-image>
    <mark-down class="content">
### Docker Image & Container
- Docker Container
- 도커 이미지로 부터 생성
- 격리된 파일시스템, 시스템 자원, 네트워크를 사용할 수 있는 독립공간 생성
- 이미지를 읽기 전용으로 사용, 이미지 변경 데이터는 컨테이너 계층에 저장
</mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/01/image4.png"
        ></g-image>
    <mark-down class="content">
### Layered Architecture
- Image : 여러 개의 읽기 전용(Read Only) 레이어로 구성
- Container : Image 위에 R/W 레이어를 두고, 실행 중 생성 또는 변경 내용 저장
</mark-down>
        <g-image style="max-width: 70%"
            src="~/img/03_Bizdevops/06_운영/01/image5.png"
        ></g-image>
    <mark-down class="content">
### Dockerfile sample
```
FROM openjdk:8-jdk-alpine

RUN apk --no-cache add tzdata && cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime

WORKDIR /app
COPY hello.jar hello.jar
COPY entrypoint.sh run.sh
RUN chmod 774 run.sh

ENV PROFILE=local

ENTRYPOINT ["./run.sh"]
```

- FROM : 이미지를 생성할 때 사용할 베이스 이미지를 지정한다.
- RUN : 이미지를 생성할 때 실행할 코드 지정한다. 예제에서는 패키지를 설치하고 파일 권한을 변경하기 위해 RUN을 사용
- WORKDIR : 작업 디렉토리를 지정한다. 해당 디렉토리가 없으면 새로 생성한다. 작업 디렉토리를 지정하면 그 이후 명령어는 해당 디렉토리를 기준으로 동작
- COPY : 파일이나 폴더를 이미지에 복사한다. WORKDIR로 지정한 디렉토리를 기준으로 복사
- ENV : 이미지에서 사용할 환경 변수 값을 지정한다. 컨테이너를 생성할 때 PROFILE 환경 변수를 따로 지정하지 않으면 local을 기본 값으로 사용
- ENTRYPOINT : 컨테이너를 구동할 때 실행할 명령어를 지정한다.
    </mark-down>

    
    </div>
</template>


<script>
        // @group 02_06_02_true
export default {
    name: "OperationOne",
    props:{
        "도커 이미지": {
            type: String
        }
    }
        
};
</script>