FROM node:14

ENV LANG=en_US.UTF-8
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

RUN apt update
RUN apt-get update

RUN apt-get install zsh vim curl -y
RUN apt autoremove -y

WORKDIR /app

EXPOSE 8080
