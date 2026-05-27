pipeline {
    agent any

    environment {
        IMAGE_NAME = "node-app:v1"
    }

    stages {

        stage('Clone Repository') {
            steps {

                git branch: 'main',
                url: 'https://github.com/samiksha-kamble39/minikube-node-redis-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {

                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy To Kubernetes') {
            steps {

                withCredentials([string(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_CONTENT')]) {

                    sh '''
cat > kubeconfig.yaml <<EOF
$KUBECONFIG_CONTENT
EOF

export KUBECONFIG=$(pwd)/kubeconfig.yaml

kubectl apply -f k8s/
'''
                }
            }
        }

        stage('Verify Deployment') {
            steps {

                withCredentials([string(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_CONTENT')]) {

                    sh '''
cat > kubeconfig.yaml <<EOF
$KUBECONFIG_CONTENT
EOF

export KUBECONFIG=$(pwd)/kubeconfig.yaml

kubectl get pods

kubectl get svc
'''
                }
            }
        }
    }
}
