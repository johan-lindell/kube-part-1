#!/bin/zsh

# Create the k3d cluster with specified ports and agents
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2

# Wait for the cluster to be ready
echo "Waiting for the cluster to be ready..."
sleep 5

echo "Create PV directory"
docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube

# Apply the Kubernetes configurations from the setup directory
kubectl apply -f /Users/johanlindell/Desktop/skola/devops-kube/part1/cluster/k8s/

echo "Cluster setup complete."