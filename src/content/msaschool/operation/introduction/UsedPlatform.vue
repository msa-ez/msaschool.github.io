<template>
    <div>
        <mark-down class="content">
## 클라우드 환경 구성
MSA School에서는 **구글 클라우드 플랫폼** (Google Cloud Platform, http://cloud.google.com)을 대상
플랫폼으로 선정하여, 마이크로서비스의 배포 및 운영단계 시 필요한 클라우드의 서버 기능을 GCP 예시로 설명하고 있습니다.

GCP를 사용하기 위해서는 가입 후, 먼저 Kubernetes 프로젝트를 생성해야 합니다.
### Google Cloud Platform 가입 및 프로젝트 생성
        </mark-down>
        <br>
        <g-image src="~/img/01_Introduction/03_사용플랫폼/image1.jpg"></g-image>
        <br>
        <mark-down class="content">

http://cloud.google.com에 접속, "무료로 시작하기"를 클릭하여 구글 클라우드에 가입합니다.
유효한 신용카드 정보를 Validation하여 가입이 완료되면, 12개월 동안 무료로 사용할 수 있는 300$의 크레딧이 주어지는데, GCP의 모든 기능을 해당 크레딧내에서 사용 가능합니다. 가입 후, GCP 플랫폼의 최상위 관리 단위인 '프로젝트'를 생성합니다.
        </mark-down>
        <br>
        <g-image src="~/img/01_Introduction/03_사용플랫폼/image2.jpg"></g-image>
        <br>
        <mark-down class="content">
> 1. 상단의 프로젝트 리스트를 누릅니다.
> 2. 팝업의 오른쪽 상단에 있는 새 프로젝트 버튼을 누릅니다.
> 3. 프로젝트 이름(User-defined), 조직, 위치 등을 설정하고 만들기 버튼을 누릅니다.

### Kubernetes 클러스터 생성
쿠버네티스 클러스터는 컨테이너화된 어플리케이션을 실행하는 워크노드(Work Node)들의 집합이며, 모든 클러스터는 최소 한개의 워크노드를 가집니다. GCP에서 클러스터를 만드는 순서는 아래와 같습니다.
        </mark-down>
        <br>
        <g-image src="~/img/01_Introduction/03_사용플랫폼/image3.jpg"></g-image>
        <br>
        <mark-down class="content">

> 1. 메뉴 중, Kubernetes Engine의 클러스터를 선택합니다.
> 2. '클러스터 만들기' 버튼을 클릭합니다.
        </mark-down>
            <br>
            <g-image src="~/img/01_Introduction/03_사용플랫폼/image4.jpg"></g-image>
            <br>
<mark-down class="content">
> 3. 클러스터 세부 설정을 입력합니다.
> - 이름은 'standard-cluster-1' 기본값으로 둡니다.
> - 위치유형은 영역(zone)을 설정합니다. 상위 위치 유형인 지역(Region) 내에 2~3개의 영역(zone)이 존재합니다.
> - '영역'의 설정값은 'asia-northeast1-a'를 설정합니다.
> - 노드 수는 3을 설정합니다. '노드 수'는 클러스터를 구성하는 지정된 리소스(CPU Core, Memory) 사양의 가상 머신 대수를 의미합니다.

> 4. 하단의 '만들기' 버튼을 누릅니다.
> 5. 생성한 클러스터가 목록화면에 표시되며, 초기화를 수행(약 4~5분) 합니다.
### 클러스터 접속 및 확인
        </mark-down>
        <br>
        <g-image src="~/img/01_Introduction/03_사용플랫폼/image5.jpg"></g-image>
        <br>
        <mark-down class="content">

> 1. 연결 버튼을 클릭해 클러스터 연결 창을 오픈합니다.
> 2. 팝업창에서 'Cloud Shell에서 실행'을 눌러 클라우드 콘솔 창에서 제대로 연결되는지 확인합니다.
        </mark-down>
    </div>
</template>


<script>
    // @group 01_01_03
export default {
    name: "UsedPlatform",
    props: {
        "사용 플랫폼": {
            type: String
        }
    },
    created() {}
};
</script>