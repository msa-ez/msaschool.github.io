<template>
    <div>
        <VueSubLayoutCard lab="token-based-auth-2022-associate"></VueSubLayoutCard>
        <mark-down class="content">
## 마이크로서비스 보안설계

모노리스 시스템에서 인증, 권한 부여 및 기타 다양한 중요 보안 조치를 다루는 중앙 집중식 보안 모듈을 사용하는 경우가 많았습니다. 그러나 마이크로 서비스에서 중앙 집중화는 분산 배포의 이점을 떨어뜨리고, 효율성을 감소시킵니다.
결국 중앙 집중식 세션 관리보다 확장 가능한 방법이 요구 되어지는데, 모든 마이크로 서비스에서 보안 모듈을 심기 보다는 단일 진입점을 제공하는  API 게이트웨이에서 처리하는 것이 효율적입니다. 이 API 게이트웨이에서 사용자 체크와 서비스에 접근 할 수 있는 권한 부여 및 인증을 처리하게 됩니다.

> 이번 장에서는 인증/인가의 정확한 개념과 Rest API 를 인증 하는 방법을 나열하고, 그중 Rest API 인증의 표준 격인 Oauth 2.0 에 대하여 설명 합니다.

## 인증/인가

인증(Authentication) 과 인가(Authorization)란?

1. 인증(Authentication)
- 사용자인지 아닌지를 확인. 주로 아이디/패스워드 인증이 많이 사용되나 생체인식 등의 인증도 사용.
- 서비스를 호출하는 서비스 클라이언트가 자신이라는 것을 어떻게 알 수 있을까?
- who you are
- 사원증 발급
2. 인가(Authorization)
- 사용자가 권한이 있는지 없는지 확인하여 해당 행위를 제한하거나 가능하게 하게 함.
- 마이크로서비스를 호출하는 서비스 클라이언트가 수행하려는 작업을 수행할 자격이 있는지 어떻게 알 수 있을까?
- what you can do
- 사원증 찍고 게이트 통과


## Rest API 인증 방법


1. HTTP Basic Authentication

- 사용자 이름과 암호 Base 64 인코딩을 하여 서버로 전송.
- 요청 할 때 마다 사용자 이름과 암호를 전송해야 합니다.
- 중간자 공격(Man-in-the-middle attack)에 취약합니다.

2. Cookies and Session

- 세션은 키를 사용자 아이디에 매핑합니다.
- 세션이 존재하는 경우 키가 유효한 것으로 판단합니다.
- 매 요청마다 쿠키에서 키를 보내 인증을 하여 세션이 유효한지 판단합니다.
- REST API 의 기본 원칙인 Stateless에 위배 됩니다.

3. API Keys

- 로그인 후 API키를 받아서 전달받아서 매 요청시마다 API키를 전달하는 방법.
- API키가 유출될시 보안문제가 생길 수 있습니다.
- 주기적으로 키를 업데이트 하더라도, 서버와 클라이언트가 잘 맞지 않으면 서비스 장애로 이어진다.
- Cloud 의 상징인 Auto Scaling 등으로 서버의 수가 변하고 IP가 유동적이라면 사실 상 관리가 되지 않는다.

4. OAuth 2.0 (Open Authorization) (Token in HTTP Header)

- API Key의 단점을 보완하여 요청하는 서버와 요청받는 서버 정도로 단순한 구성이 아닌, 요청하는 서버, 요청받는 서버, 그리고 인증하는 서버 등으로 조금 세분화가 이루어진다. (중립적인 위치에서 인증을 전담하는 구조)
- OAuth 1.0 보다 인증 절차를 간소화 하고 다양한 인증 방식을 지원 합니다.
- OAuth 1.0 은 디지털 서명 기반이었지만 OAuth2.0의 암호화는 https에 맡김으로써 복잡한 디지털 서명에관한 로직을 요구하지 않기때문에 구현 자체가 개발자입장에서 쉬워진다.


## Oauth 2.0

Oauth 2.0 를 조금더 간단히 요약하면 웹, 모바일 어플리케이션에서 타사의 API를 사용하고 싶을 때 권한 획득을 위한 프로토콜(Protocol) 입니다.
어떤 site 를 들어갔을때 “facebook으로 로그인”, “Google 계정으로 로그인” 등을 볼 수 있는데, 이것은 OAuth2.0 를 이용하여 특정 서비스에 대한 회원가입 과정을 거치지 않고 기존에 사용하던 서비스들의 계정으로 로그인을 진행하는 방법입니다. 구글이나 페이스북의 로그인 화면이 나온 후 계정 클릭시, 각종 권한 획득에 관한 수락을 요청하는 방식으로 로그인이 처리됩니다. 이러한 과정들이 사용되는 방법을 알아 본다.

사용 용어 :
- Client : 사용자가 사용하려는 서비스. (예: 웹 홈페이지)
- Resource Owner : 사용자
- Authorization Server : 사용자의 동의를 받아서 권한을 부여하는 서버 (보통 Resource Server 의 하위 도메인)
- Resource Server :	서비스에 자신의 API를 제공하는 타사 서비스. (예: 구글,페이스북 등)

아래 그림은 Oauth2.0 의 일반적인 권한 허용 흐름입니다.

        </mark-down>
        <g-image src="~/img/03_Bizdevops/02_설계/07_마이크로서비스_보안설계/image1.png"></g-image>

        <mark-down class="content">
1. 클라이언트가 자원 소유자에게 권한 요청

2. 자원 소유자가 권한을 허가시, 클라이언트는 권한 증서를 발급받음

3. 클라이언트는 권한증서를 가지고 토큰을 권한 서버에 요청

4. 권한증서의 유효성을 체크하고 토큰을 발급해줌

5. 클라이언트는 토큰을 사용하여 자원 요청

6. 토큰 유효성 확인후 요청 처리


### 권한을 요청하는 방법(Grant)은 총 6가지의 방법이 있습니다. 해당 방법에 대하여 장단점을 설명합니다.

#### 1. Authorization Code Grant
        </mark-down>
        <g-image src="~/img/03_Bizdevops/02_설계/07_마이크로서비스_보안설계/image2.png"></g-image>

        <mark-down class="content">
* 구글,페이스북,카카오등 유저 정보가 다른 시스템에 있을때 사용하는 방식

* 어플리케이션이 인증서버에 요청해 브라우저를 열어서 사용자가 인증을 진행하게 하는 방식으로 사용

* 토큰요청시 코드를 요청하는 단계가 있어서 보안에 효과적

* 가장 복잡하지만, 가장 많이 쓰임 > 개발자만 고생하면됨


#### 2. Implicit Grant
        </mark-down>
        <g-image src="~/img/03_Bizdevops/02_설계/07_마이크로서비스_보안설계/image3.png"></g-image>
        <mark-down class="content">
* Authorization_code 방식에서 코드를 요청하는 프로세스를 제거하고, 바로 토큰을 return

* Javascript 로 동작하는 SPA(Single Page Application)에서 사용하기 위해 만들어 졌으나 권장하지 않음

* 신뢰성 있는 앱 또는 단말기에서 사용

* 외부에 있는 Oauth 서버가 cors 를 지원하지 않을때 사용


#### 3. Resource Owner (Password) Credentials Grant
        </mark-down>
        <g-image src="~/img/03_Bizdevops/02_설계/07_마이크로서비스_보안설계/image4.png"></g-image>
        <mark-down class="content">
* 타사의 인증 서버를 사용하지 않고, 자신의 서비스에 인증시 사용 ( 자신이 유저정보를 가지고있고, 내 서비스만 인증할때 )

* Oauth 2.0 의 가장 간단한 인증중 하나

* 전통적으로 이름과 비밀번호로 인증



#### 4. Client Credentials Grant
        </mark-down>
        <g-image src="~/img/03_Bizdevops/02_설계/07_마이크로서비스_보안설계/image5.png"></g-image>
        <mark-down class="content" source="
* 사용자가 아닌 응용프로그램 (client) 이 인증을 요청할때 사용 ( Resource Owner = Client )

* 접근 권한이 한정되어있는 프로그램 사용시 활용

* 신뢰성이 높은 관리자용 Desktop App 이나  Mobile App 에서 사용


#### 5. Device Code Grant
* 장치 코드 부여 유형은 브라우저가 없거나 입력이 제한된 장치에서 사용.

#### 6. Refresh Token Grant
* 기존에 저장해둔 리프러시 토큰이 존재할 때 엑세스토큰을 재발급 받을 필요가 있을 때 사용합니다. 그리고 기존 액세스는 토큰이 만료됩니다.


## 마이크로 서비스 보안을 쇼핑몰에 적용 예제

이번 장은 Oauth2.0 과 JWT 토큰을 사용하여 쇼핑몰에 적용한 예제를 살펴본다.

* 우선 **Client** 는 사용하고자 하는 서비스 이기 때문에 **쇼핑몰 ui** 가 될 수 있습니다.
* 쇼핑몰에 접속시 사용자는 자기자신을 확인 하는 로그인을 하게 되는데, 로그인 정보를 확인 하는 Grant 는 1. Authorization Code Grant, 2. Implicit Grant, 3. Password Credentials Grant 방식을 사용 할 수 있습니다. Authorization Server 를 구축하지 않고 타사 인증 서비스를 사용한다면, 1번 방법밖에 사용 할 수 없지만, Authorization Server 를 구축 하였기에 모든 Grant 를 사용 할 수있습니다. 그중 ui 에서 권한을 요청하는 방식은 **3. Password Credentials Grant 방식** 으로 예제는 구축되어 있습니다.
* **Resource Owner**는 사용자 정보이고, Authorization Server 에 사용자 정보를 같이 가지고 있는 방식으로 예제를 구축하였습니다. 이렇게 인증서버가 사용자 정보를 같이 포함하고 있는 서버를 IAM(Identity and Access Management) 서버라고 부른다.
* **Authorization Server** 는 Spring security 를 사용하여 구축 하였고, 토큰 요청시 JWT 로 변환하는 작업을 포함 하였습니다.
* **Resource Server** 는 토큰이 유효한지 체크를 하고, 유효하면 api 를 허용하는 역할을 하기에, Gateway 서비스에 구현을 하였습니다.

참고 소스 코드 :
<a href='https://github.com/event-storming/oauth' target='_blank'>Authorization Server, Resource Owner - Oauth</a>
<a href='https://github.com/event-storming/gateway' target='_blank'>Resource Server - Gateway</a>
<a href='https://github.com/event-storming/ui' target='_blank'>Client - UI</a>


### Authorization Server 사용
1. <a href='https://github.com/event-storming/oauth' target='_blank'>git clone</a> 합니다.

2. cd oauth 접속 후 mvn spring-boot:run 으로 서버를 실행합니다.

3. 로컬에서 실행시 localhost:8090 으로 서버가 실행 됩니다.

* 서비스(ui)에서 Password Credentials Grant 방식으로 권한증서를 요청하기 위해서는 인증서버에서 발행하여 주는 Client_id, Client_Secret 정보를 모두 알고 있어야 합니다.

* 서버가 실행시 유저 정보를 임의 값으로 생성 메모리 db 에 넣어주었습니다. <a href='https://github.com/event-storming/oauth/blob/master/src/main/java/com/example/template/AuthorizationServerApplication.java' target='_blank'>AuthorizationServerApplication.java</a>

* 서버가 실행시 Client 정보를 임의 값으로 생성 메모리 db 에 넣어주었습니다. <a href='https://github.com/event-storming/oauth/blob/master/src/main/java/com/example/template/config/OAuth2AuthorizationServerConfig.java' target='_blank'>OAuth2AuthorizationServerConfig.java</a>

4. 토큰을 요청하는 api 는 /oauth/token 입니다. 요청시 grant_type=password username, password 를 같이 입력 하고, header 에 Client_id, Client_Secret 정보를 base64 로 인코딩 하여 요청합니다.

* ```http --form POST localhost:8090/oauth/token 'Authorization: Basic dWVuZ2luZS1jbGllbnQ6dWVuZ2luZS1zZWNyZXQ=' grant_type=password username=1@uengine.org password=1```

* Basic 인증은 가장 일반적인 인증 스키마 입니다. base64를 이용하여 인코딩된 사용자 ID/비밀번호 쌍의 인증 정보를 전달합니다. base64는 복호화가 가능한 인코딩이기에 안전하지 않고 HTTPS / TLS 와 같이 사용을 하여야 보안상 안전해 진다. (예제에서는 https 를 사용하지는 않았다.)

* 토큰 요청시 JWT 토큰과 추가로 서버에서 설정한 additionalInfo 값이 return 됩니다. 해당 토큰을 사용하여 자원요청을 하면 됩니다.

### client 에서  Authorization Server 호출과 토큰 저장

1. client (ui) 에서 인증서버로 http 요청을 하는 코드는 다음과 같다. 클라이언트는 알고있는 Client_id, Client_Secret 정보를 javascript 에서 base64 로 변환하는 방법인 btoa() 를 사용하여 인코딩 후 basic 스키마로 토큰 요청을 합니다. <a href='https://github.com/event-storming/ui/blob/master/src/store.js' target='_blank'>store.js</a>

2. 정상적으로 토큰 발행시 토큰 정보는 브라우저의 storage 인 localstorage 에 저장을 합니다. ```localStorage.setItem('accessToken', accessToken)```

* 브라우저에서는 토큰을 api 요청시마다 사용을 하기 때문에 저장을 해야 합니다. 브라우저에서 토큰을 저장하는 방식은 크게 웹 스토리지에 저장을 하거나, cookie 에 저장을 하는 방식이 있습니다.

* 브라우저 웹 스토리지는 로컬스토리지와 세션스토리지 두가지 방식이 있습니다. 로컬스토리지는 삭제를 하지 않는 이상 브라우저를 종료하여도 정보가 남아있고, 세션스토리지는 브라우저를 종료하면 정보가 사라지는 방식입니다. 토큰은 자체 유효시간이 존재하기에 로컬스토리지에 저장을 하는것이 조금더 나은 방식입니다.

* 쿠키는 자체적으로 이름, 값, 만료시간등을 가지고 자바스크립트나 서버에서도 사용할수 있는 값이지만, 4KB 만 저장을 할수 있는 용량문제로 토큰을 저장하는 방식에는 맞지 않다.

3. client (ui) 에서 각종 api 를 요청시 header 값에 토큰을 실어서 같이 보냅니다.

* ```http localhost:8088 'Authorization: Bearer $TOKEN'```
* ```curl localhost:8088/orders --header 'Authorization: Bearer $TOKEN'```

* Bearer 스키마는 Oauth 2.0 의 보안 리소스를 요청하는 방식입니다. <a href='https://tools.ietf.org/html/rfc6750' target='_blank'>RFC 6750</a>

### Resource Server 에서 토큰 유효성 확인

1. Gateway 는 spring-cloud-gateway 를 사용하였습니다. spring-cloud-gateway 는 web reactive 방식을 사용하기 위하여 spring5 의 webflux 방식으로 구현이 되어있습니다. 그러기에 security 적용을 위하여 spring-security-webflux <a href='https://docs.spring.io/spring-security/site/docs/current/reference/html/webflux-oauth2.html' target='_blank'>webflux-oauth2</a> 방식을 사용하여 리소스 서버를 구축해야 합니다.

* webflux 방식에서 jwt 토큰을 인증 하는 방식은 jwk-Set-Uri 를 구성하여 jwt 토큰 생성시 사용한 Key 값을 체크합니다.
        ">
        </mark-down>
        <mark-down class="content" source="
```
@GetMapping('/.well-known/jwks.json')
@ResponseBody
public Map<String, Object> getKey(Principal principal) {
    RSAPublicKey publicKey = (RSAPublicKey) this.keyPair.getPublic();
    RSAKey key = new RSAKey.Builder(publicKey).build();
    return new JWKSet(key).toJSONObject();
}
```

* @EnableWebFluxSecurity 를 선언하여 들어오는 모든 요청을 검사 하고, 그중에서 ServerHttpSecurity http.oauth2ResourceServer().jwt() 역할을 선언하여 토큰 검증을 실시 합니다.
<a href='https://github.com/event-storming/gateway/blob/master/src/main/java/com/example/template/ResourceServerConfiguration.java' target='_blank'>ResourceServerConfiguration.java</a>
        "></mark-down>
    </div>
</template>


<script>
        // @group 02_02_12_true
    export default {
        name: 'DesignSeven',
        props: {
            "마이크로서비스 보안설계": {
                type: String
            },
        },

    }
</script>