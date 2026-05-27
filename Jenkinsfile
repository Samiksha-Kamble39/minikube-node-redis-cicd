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

                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {

                    sh 'kubectl apply -f k8s/'
                }
            }
        }

        stage('Verify Deployment') {
            steps {

                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {

                    sh 'kubectl get pods'
                    sh 'kubectl get svc'
                }
            }
        }
    }
}
