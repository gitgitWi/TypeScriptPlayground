# sudo user 추가

```bash
adduser [username]

usermod -aG sudo [username]

# check
groups [username]

su - [username]

# sudo 없는 경우; root에서 설치
apt-get install sudo
```
