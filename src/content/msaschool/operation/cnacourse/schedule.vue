<template>
    <div style="margin-top:80px;">
        <h2 style = "margin:0 0 10px 0;">CNA 개발자 연수과정</h2>
        <table class="gs-table-default">
            <th class="table-title"> </th>
            <th class="table-title">Fundamental</th>
            <th class="table-title">Intermediate</th>
            <th class="table-title">Advanced</th>
            <tr>
                <td class="table-subtitle" style="padding-left:15px; text-align:center;">Biz</td>
                <td>
                    • Object Oriented Design<br>
                    - OOP Design Principles<br><br>
                    • UML & Design Patterns
                </td>
                <td>
                    • Eventstorming<br>
                    - Eventstorming E-Commerce Domain<br>
                    - Big picture & Design level Eventstorming<br>
                    - Context Mapping, CQRS<br><br>
                    
                    • Aggregate Modeling<br>
                    -  Entity Design with Class Diagrams
                </td>
                <td>
                    • Eventstorming for various Domains<br><br>
                    • Core-supporting-generic domain prioritization<br>
                    - Wardlley mapping, Impact mapping<br><br>
                    
                    • 중요도에 따른 구현 전략<br>
                    - Transaction Script<br><br>
                    • Apply Ubiquitous Language 
                </td>
            </tr>
            <tr>
                <td class="table-subtitle" style="padding-left:15px; text-align:center;">Dev</td>
                <td>
                    • Obejct Oriented Programming<br>
                    - Object Oriented Framework<br>
                    - Spring boot, JDBC and JPA<br>
                    - Web UI (VueJS)<br><br>
                    • Understanding GitHub & GitPod<br><br>
                    • Build automation tool<br>
                    - Maven, Gradle<br><br>
                    • Linux OS Basics
                </td>
                <td>
                    • Microservice Clean Architecture<br>
                    - ES Model and Implementation mapping<br><br>
                    • Circuit Breaker Pattern<br>
                    - Req/Res with FeignClient<br><br>
                    • Event driven Microservice<br>
                    - Event Pub/Sub, Compensation & CQRS<br><br>
                    • Message Broker – Kafka<br><br>
                    • Application Packaging & Dockerizing
                </td>
                <td>
                    • Extending Event driven Microservice<br>
                    - 멱등성, 트랜잭션, Kafka Parallel Processing, Deadline 처리<br>
                    - Dedicated Framework (Eventuate, Axon)<br><br>
                    • Inter-service communication<br>
                    - CDC, gRPC Client/Server, Spring Reactive<br><br>
                    • Microservice Authentication/ Authorization<br>
                    - Centralized Session (Redis, Memcached)<br>
                    - Client Token (JWT)
                </td>
            </tr>
            <tr>
                <td class="table-subtitle" style="padding-left:15px; text-align:center;">Ops</td>
                <td>
                    • Cloud Infra, VM<br>
                    - CSP introduction<br>
                    - VM managed Service<br><br>
                    • Deploy to VM<br>
                    - VM, Dabase provisioning<br>
                    - Deploy to Cloud VM
                </td>
                <td>
                    • Cloud Software Platform, Docker<br><br>
                    • Kubernetes 인 액션<br>
                    - Kubernetes SLA features & Telemetry<br>
                    - Deploy manifests Diagramming<br><br>
                    • Service Mesh (Istio)<br>
                    - Traffic Management (Retry, Timeout, Circuit breaker)<br><br>
                    • DevOps Pipeline (Jenkins, CSP managed)
                </td>
                <td>
                    • Service Mesh deep dive<br>
                    - Security, Monitoring, EnvoyFilter, Tracing<br><br>
                    • GitOps Methodology<br>
                    - Workflow with Jenkins & ArgoCD<br>
                    - Canary Deployment with Canary Scoring<br><br>
                    • Serverless<br>
                    - Knative, Tekton 
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td>
                    <div style="text-align:center;">
                        <a href="/operation/fundamental/fundamental/">
                            <button class="table-details-btn">세부사항</button>
                        </a>
                    </div>
                </td>
                <td>
                    <div style="text-align:center;">
                        <a href="/operation/education/curriculum/">
                            <button class="table-details-btn">세부사항</button>
                        </a>
                    </div>
                </td>
                <td>
                    <div style="text-align:center;">
                        <a href="/operation/advanced/advanced/">
                            <button class="table-details-btn">세부사항</button>
                        </a>
                    </div>
                </td>
            </tr>
        </table>
        
        <div style="margin-top:20px; display:inline-flex;">
            <div style="margin-right:20px;">교육 문의 : help@uengine.org</div>
            <div style="margin-right:20px;">정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
            <a target="_blank" style="color:blue;" href="https://open.kakao.com/me/msaschool">카카오톡 오픈채팅</a>
        </div>

        <iframe src="https://calendar.google.com/calendar/embed?src=help%40uengine.org&ctz=Asia%2FSeoul" style="border: 0; width:100%; height:600px; margin-bottom:100px; margin-top:60px;" frameborder="0" scrolling="no"></iframe>
    </div>
</template>

<script>
        // @group 05_02_02
    export default {
        name:'CourseInfo',
        data() {
            return {
                page:1
            }
        },
        props: {
            "커리큘럼": {
                type: String
            },
        },

    }
</script>

<style>
    .table-box {
        width:30%;
        height:550px;
        margin-right:0.5%;
        margin-bottom: 6px;
        background-color: white;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        box-shadow: 0 1px 8px rgba(22,22,22, 0.1);
        float:left;
    }
    .table-title {
        line-height:50px;
        text-align:center;
        background-color:#5a67d8;
        color:white;
        border-radius:0 0 0 0;
        font-weight:700;
        height:50px;
        font-size:26px;
    }
    .table-subtitle {
        font-size:20px;
        font-weight:900;
        opacity:0.9;
        padding-left:5px;
        height:30px;
        margin-top:20px;
        line-height:15px;
    }
    .table-contents {
        font-size:14px;
        opacity:0.8;
        padding:5px;
        height:100px;
    }
    .table-second-contents {
        background-color:#F5F5F5;
        padding:20px 5px 20px 5px;
        font-size:15px;
        height:220px;
    }
    .table-details-btn {
        width:110px !important;
        height:36px !important;
        text-align : center !important;
        line-height:36px !important;
        font-size:15px;
        border-radius: 5px;
        border:black solid;
        padding-bottom: 37px;
    }
    .enterprise-cost-text {
        font-size:14px;
        margin-top:3px;
        font-weight:900;
    }
    .middle-box {
        display:none !important;
    }
    .mobile-box {
        display: none !important;
    }

    @media only screen and (max-width:1700px){
        .table-box {
            width:32.5%;
            height:550px;
            margin-right:0.5%;
            background-color: white;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            box-shadow: 0 1px 8px rgba(22,22,22, 0.1);
            float:left;
        }
        .enterprise-cost-text {
            font-size:16px;
            margin-top:3px;
            font-weight:900;
        }
    }
    
    @media only screen and (max-width:1280px){
        .table-box {
            width:49.5%;
            height:550px;
            margin-right:0.5%;
            background-color: white;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            box-shadow: 0 1px 8px rgba(22,22,22, 0.1);
            float:left;
        }
        .enterprise-cost-text {
            font-size:18px;
            margin-top:3px;
            font-weight:900;
        }
    }

    @media only screen and (max-width:720px){
        .table-box {
            width:100%;
            height:550px;
            margin-right:0.5%;
            margin-bottom: 50px;
            background-color: white;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            box-shadow: 0 1px 8px rgba(22,22,22, 0.1);
            float:left;
        }
        .table-subtitle {
            font-size:20px;
            font-weight:900;
            opacity:0.9;
            padding-left:5px;
            height:30px;
            margin-top:20px;
            line-height:15px;
        }
        .table-contents {
            font-size:15px;
            opacity:0.8;
            padding:5px;
            height:100px;
        }
        .table-second-contents {
            background-color:#F5F5F5;
            padding:20px 5px 20px 5px;
            font-size:18px;
            height:220px;
        }
        .table-details-btn {
            width:110px !important;
            height:36px !important;
            text-align : center !important;
            line-height:36px !important;
            font-size:18px;
        }
    }
</style>