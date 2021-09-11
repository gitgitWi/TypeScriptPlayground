# install Nodejs
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs lts
asdf global nodejs lts
echo "Node installed!"
node -v

npm i -g npm yarn
npm -v
# yarn v1.x -> v3.x
yarn set version berry
yarn -v

# husky init, install packages
yarn
npx husky set .husky/pre-commit "npx pretty-quick --staged"
npx husky add .husky/pre-commit "npx lint-staged"
