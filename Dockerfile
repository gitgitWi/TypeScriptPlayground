# on debian linux
FROM node:14

ENV LANG=en_US.UTF-8
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

RUN apt update
RUN apt-get update

RUN apt-get install zsh vim curl git-all -y
RUN apt autoremove -y

WORKDIR /home/app

COPY . /home/app/

EXPOSE 8080 3000 4000 8081
