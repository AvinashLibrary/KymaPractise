docker build -t  6175406/multitenant-kyma-backend:v1 .
docker push 6175406/multitenant-kyma-backend:v1
kubectl rollout -n avinashmyuser restart deployment  kyma-multitenant-node-multitenancy