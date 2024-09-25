terraform apply -target=google_artifact_registry_repository.my_repo  

sudo docker buildx build --platform linux/amd64 -t my-app:tag .   

docker tag c2893a4196b120c6414821ca16ad971127b22f219985514212f4d2bc8368eee7 europe-west1-docker.pkg.dev/test-terraform-435414/my-repo/my-app:tag

docker push  europe-west1-docker.pkg.dev/test-terraform-435414/my-repo/my-app:tag  

terraform apply