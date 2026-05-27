# 🚀 Minikube Node.js + Redis CI/CD Pipeline

A complete DevOps project demonstrating deployment of a containerized Node.js application with Redis using Docker, Kubernetes (Minikube), and Jenkins CI/CD on AWS EC2.

---

# 📌 Project Overview

This project demonstrates:

- Containerization using Docker
- Kubernetes deployment using Minikube
- Redis integration with Node.js
- CI/CD pipeline using Jenkins
- Automated deployment to Kubernetes
- GitHub integration with Jenkins

The application is deployed inside a Kubernetes cluster and automatically redeployed whenever new code is pushed to GitHub.

---

# 🛠️ Technologies Used

- Node.js
- Redis
- Docker
- Kubernetes
- Minikube
- Jenkins
- GitHub
- AWS EC2
- Ubuntu Linux

---

# 📂 Project Structure

```bash
minikube-node-redis-cicd/
│
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── redis-deployment.yaml
│   └── redis-service.yaml
│
└── README.md
```

---

# ⚙️ Application Workflow

```text
GitHub → Jenkins → Docker Build → Kubernetes Deployment → Node.js App → Redis
```

---

# 🐳 Docker Setup

## Build Docker Image

```bash
docker build -t node-app:v1 .
```

## Run Docker Container

```bash
docker run -p 3000:3000 node-app:v1
```

---

# ☸️ Kubernetes Deployment

## Start Minikube

```bash
minikube start --driver=docker
```

## Apply Kubernetes Manifests

```bash
kubectl apply -f k8s/
```

## Verify Pods

```bash
kubectl get pods
```

## Verify Services

```bash
kubectl get svc
```

---

# 🔁 Access Application

## Port Forwarding

```bash
kubectl port-forward service/node-app-service 3000:3000 --address=0.0.0.0
```

## Open in Browser

```text
http://<EC2-PUBLIC-IP>:3000
```

Example:

```text
http://51.21.195.249:3000
```

---

# 🔴 Redis Integration

Redis is used as the backend service for the Node.js application.

The Node.js app connects to Redis using Kubernetes service discovery.

This demonstrates:

- Inter-service communication
- Kubernetes networking
- Multi-container deployment architecture

---

# ⚡ Jenkins CI/CD Pipeline

The Jenkins pipeline performs:

1. Pull latest code from GitHub
2. Build Docker image
3. Deploy application to Kubernetes
4. Verify deployment

---

# 🧩 Jenkins Pipeline Stages

```text
Checkout Code
       ↓
Build Docker Image
       ↓
Deploy to Kubernetes
       ↓
Verify Deployment
```

---

# 🔐 Jenkins Credentials Used

| Credential Type | Purpose |
|---|---|
| Secret File | Kubernetes kubeconfig |

---

# 🚀 How CI/CD Works

Whenever code is pushed to GitHub:

1. Jenkins detects changes
2. Pipeline starts automatically
3. Docker image gets rebuilt
4. Kubernetes deployment updates automatically
5. Latest application version becomes available

---

# 📋 Useful Commands

## Check Pods

```bash
kubectl get pods
```

## Check Services

```bash
kubectl get svc
```

## Check Deployments

```bash
kubectl get deployments
```

## View Logs

```bash
kubectl logs <pod-name>
```

## Jenkins Container Access

```bash
docker exec -it jenkins bash
```

---

# ✅ Sample Output

```json
{
  "message": "Application working successfully",
  "redis": "connected"
}
```

---

# 🌍 Deployment Environment

- AWS EC2 Ubuntu Instance
- Minikube Kubernetes Cluster
- Docker Runtime
- Jenkins Running in Docker

---

# 📸 Demo Features

- GitHub Integration
- Automated Jenkins Builds
- Docker Image Build
- Kubernetes Deployment
- Redis Connectivity
- Live Application Access

---

# 👩‍💻 Author

**Samiksha Kamble**

GitHub Repository:

https://github.com/samiksha-kamble39/minikube-node-redis-cicd
