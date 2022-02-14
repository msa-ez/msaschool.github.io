<template>
    <div>
        <mark-down class="content" source='
## 배포자동화 :  CI/CD 실습시 필요한 스크립트

### AWS CodeBuild
<details>
<summary>쿠버네티스 자동 배포를 위한 아마존(AWS) 매니지드 서비스인 CodeBuild CI/CD에 필요한 Scripts</summary>
<p>


- CodeBuild 생성시 환경변수명
- AWS_ACCOUNT_ID
- KUBE_URL
- KUBE_TOKEN

- CodeBuild 와 ECR 연결 정책설정
<pre style="white-space: pre-wrap">{
      "Action": [
        "ecr:BatchCheckLayerAvailability",
        "ecr:CompleteLayerUpload",
        "ecr:GetAuthorizationToken",
        "ecr:InitiateLayerUpload",
        "ecr:PutImage",
        "ecr:UploadLayerPart"
      ],
      "Resource": "*",
      "Effect": "Allow"
 }
</pre>

- CodeBuild 와 EKS 연결
- 1. eks-admin-service-account.yaml 파일 생성하여 sa 생성

<pre style="white-space: pre-wrap">
apiVersion: v1
kind: ServiceAccount
metadata:
  name: eks-admin
  namespace: kube-system
</pre>

- 2. kubectl apply -f eks-admin-service-account.yaml
- 혹은, 바로 적용도 가능함

````

cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: eks-admin
  namespace: kube-system
EOF
````

- 3. eks-admin-cluster-role-binding.yaml 파일 생성하여 롤바인딩
````
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: eks-admin
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: eks-admin
  namespace: kube-system
````

- 4. kubectl apply -f eks-admin-cluster-role-binding.yaml
- 혹은, 바로 적용도 가능함
````

cat <<EOF | kubectl apply -f -
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: eks-admin
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: eks-admin
  namespace: kube-system
EOF
````
- 만들어진 eks-admin SA 의 토큰 가져오기
- kubectl -n kube-system describe secret eks-admin
- kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-admin | awk "{print $1}")

</p>
</details>
<hr />
<br />

### Azure Pipeline
<details>
<summary>Azure 메니지드 서비스의 CI/CD Lab.에 필요한 가이드 Scripts</summary>
<p>

- azure shell 에서 클러스터 연결
- az aks get-credentials --resource-group (user01_resource_group) --name (user01_cluster)
- 연결 확인
- kubectl get all
- AKS와 ACR 연결
- az aks update -n [azure-cluster-name] -g [azure-resource-Group-name] --attach-acr [azure-acr-name]
- Arguments 샘플
  - deploy monolith --image=[your container registry].azurecr.io/monolith:$(Build.BuildId)
- Copy Files Task 속성정보
  - Source Folder    : $(system.defaultworkingdirectory)    
  - Contents    : azure/*
  - Target Folder : $(build.artifactstagingdirectory)
- Bash Arguments 샘플
  - sed -i &#34;s/latest/$(Build.BuildId)/g&#34; $(System.DefaultWorkingDirectory)/(_1st-prj-CI)/drop/azure/deploy.yaml
</p>
</details>
<hr />

       '></mark-down>
    </div>
</template>


<script>
    // @group 02_05_05
    export default {
        name: 'DeploymentFour',
        props: {
            "실습 스크립트": {
                type: String
            },
        },

    }
</script>