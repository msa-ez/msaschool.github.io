<template>
    <div>
        <mark-down class="content" source="
## 프론트-엔드 설계

### 웹 개발 패러다임의 변화
초창기 웹 페이지는 (~2000) html 을 사용한 정적인 text 와 image 로 이루어진 화면이 대다수 였습니다. 점차적으로 고속 인터넷과 사용자의 눈높이가 높아지면서 사용자와 반응을 할 수 있는 동적인 웹이 등장을 하며 웹개발이 활성화 되었습니다.

2001년 부터 웹 언어가 활성화 되어 동적인 페이지를 생성하기 위하여 ASP, JSP, PHP 등의 서버 렌더링 기법이 나오기 시작하였습니다. 그리고 내용을 보관하기 위한 데이터베이스가 중요해져서 활용되기 시작하였습니다. 이때부터 view 와 model 을 구분하려는 노력이 나오게 되었고, MVC 패턴이 유행을 하게 되었습니다. 그러나 Html 위에 PHP 등의 코드를 올려서 개발하였던 방법은 복잡성이 높아서 유지보수에 큰 어려움을 겪었고, JPS 같은 서버에서 데이터를 처리하는 방법도, 사용자가 많아지면 서버에 과부하가 걸리기 시작하였습니다.

2005년에 구글에서 구글맵을 공개 후 AJAX(Asynchronous Javascript And XML) 를 이용하였다고 밝히면서 비동기 HTTP Request 기술이 발전하였고, 데이터 전송방식을 XML 이 아닌 JSON 으로 주고 받는 방식으로 변화 하였습니다. 이때부터 웹 서비스로 불리는 API 들이 생기게 되면서, 자연스레 웹에서 비동기로 API 를 호출하고, JSON으로 통신을 하는 개발 방식이 보편화 되었습니다.

2013년대 부터 reactive (반응형) 패러다임이 유행하면서 SPA(Single Page Application) 방식으로 웹 개발이 이루어 지게 되었습니다. 이는 브라우저에서 전체 페이지를 서버에 요청을 하는 것이 아니라, 최초 한번 전체 페이지를 로딩 한 후에 이후부터는 데이터만 변경을 하여 사용하는 방식입니다. 데이터를 처리하는 위치가 서버가 아닌 클라이언트이기 때문에 클라이언트 사이드 랜더이라고 부른다.

> 참고:
> <a href='https://unikys.tistory.com/310' target='_blank'>unikys 블로그</a>
> <a href='https://ideveloper2.tistory.com/76' target='_blank'>ideveloper2 블로그</a>

### MVVM (Model + View + View Model) 패턴
마이크로 서비스 아키텍처가 유행을 타면서 더이상 MVC 패턴으로 개발이 힘들어 지게 되었습니다. MVC 패턴은 Model 과 View 사이에 Controller 를 두어서 사용자의 입력을 처리하도록 고안이 되었습니다. 즉 View 에서 사용자의 요청을 Controller 가 받아서 Model 을 변화 시킨 후, return 할 View 를 선택하여 Model 을 보내는 방식으로 단순하지만 View 와 Model 의 의존도가 너무 강하여 다양한 서비스가 존재하는 MSA 에는 적합하지 않다.
이에 Model 이 View 를 몰라도 처리를 할수 있는 방식인 MVVM 주목 받게 되었습니다.

MVVM 패턴은 2005년에 Windows의 그래픽 프레임워크인 WPF(Windows Presentation Foundation)와 Silverlight에서 처음 적용되었고, 주요 목적은 To simplify event-driven programming user interfaces 입니다. 이것을 위해 View에 관한 로직과 비즈니스 로직을 철저히 구분합니다. 여기서 사용되는 주요한 개념이 Data binding 입니다.
        ">
        </mark-down>

        <g-image
            src="~/img/03_Bizdevops/02_설계/08_프론트-엔드_설계/image1.png"
        ></g-image>
        <mark-down class="content" source="
단어의 개념을 살펴보면 다음과 같다.
* Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분입니다.
* View : 사용자에서 보여지는 UI 부분입니다.
* View-Model : View 와 Model 사이에서 인터페이스 역할. View 와는 Binding 이나 Command 로 연결하고 Model 과는 데이터를 주고 받는 역할을 담당합니다.

View에서 사용자의 요청이 들어오면 Command 패턴을 통해 View-Model에 명령을 내리게 되고 Data Binding으로 인해 View-Model의 값이 변화하면 바로 View의 정보가 바뀌어져 버리게 되는 방식입니다.

* MVVM 의 장점은 View 와 Model 사이의 의존성이 없어서 각 구성요소를 독립적으로 작성하고 테스트가 가능하며, 모듈화 하여 개발이 가능합니다.

* MVVM 의 단점은 View-Model 의 설계가 어렵다.

> 참고 :
> <a href='https://beomy.tistory.com/43' target='_blank'>참고 링크</a>


## 사용 프레임워크
마이크로 서비스의 프론트 앤드 기술로 중요한 점은 MVVM 패턴을 사용하고, Web Components 기법으로 마이크로 서비스의 컴포넌트를 생성하여 관리하는 것입니다. Web Components 를 지원하는 라이브러리로 유명한 것은 Bit, Polymer elements, Vaadin components 등이 있고, 이러한 라이브러리를 잘 사용할수 있도록 지원해주는 프레임워크로 가장 많이 쓰이는 것은 Vuejs, Angular, React 가 대표적입니다.

2019년 이전에는 구글에서 나온 Angular와 페이스북이 개발한 React 가 인기가 있었지만, 2019년 이후로는 Vuejs 가 폭발적으로 인기를 끌면서 최근에는 3개의 프레임워크를 비교한 글들이 많이 나오고 있습니다. 3개의 프레임워크가 각각의 장단점이 있어서 잘 비교를 해보고 사용을 하면 됩니다. 다만 W3C Web Components 의 표준으로 지정된 프레임워크는 Polymer와 Vuejs 입니다.

아래 이미지는 블로그 글중에서 3가지 프레임워크를 잘 정리한 표가 있어서 가져왔다.
        ">
        </mark-down>
        <g-image
            src="~/img/03_Bizdevops/02_설계/08_프론트-엔드_설계/image2.png"
        ></g-image>
        <mark-down class="content" source="
> 참고:
> <a href='https://blog.bitsrc.io/9-web-component-ui-libraries-you-should-know-in-2019-9d4476c3f103' target='_blank'>웹 컴포넌트 UI 라이브러리</a>
> <a href='https://gradler.tistory.com/14' target='_blank'>Gradler 블로그</a>
> <a href='https://www.codeinwp.com/blog/angular-vs-vue-vs-react/' target='_blank'>Angular vs Vue vs React 비교</a>
        ">
        </mark-down>
    </div>
</template>


<script>
    // @group 02_02_13
export default {
    name: "DesignEight",
    props: {
        "프론트엔드 설계": {
            type: String
        }
    }
};
</script>