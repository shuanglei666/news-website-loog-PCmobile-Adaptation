docker build -t ys_home_site .
docker run -d -p 8888:80 --name ysreading ys_home_site:latest
docker save ys_home_site > ys_home_site.tar

#上传镜像 https://docker.metadao.me/v2/_catalog
docker tag c19e5ffa9dc3 docker.metadao.me:443/ys_home_site

docker push docker.metadao.me:443/ys_home_site