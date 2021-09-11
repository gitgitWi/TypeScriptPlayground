FROM debian:stable-slim

ENV LANG=en_US.UTF-8
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

RUN apt update
RUN apt-get update

RUN apt-get install zsh vim curl wget unzip sudo git -y
# for Nodejs using asdf
RUN apt-get install dirmngr gpg gawk -y

RUN apt autoremove -y

RUN git config --global init.defaultBranch main
RUN git config --global user.name "gitgitWi"
RUN git config --global user.email "johnwi@knou.ac.kr"

# for oh-my-zsh
RUN chsh -s /usr/bin/zsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
COPY ./.setup/.zshrc /root/.zshrc
SHELL [ "/bin/zsh", "source", "~/.zshrc" ]

WORKDIR /workspaces/
COPY . /workspaces/

EXPOSE 8080 3000 4000 8081
