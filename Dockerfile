#
# d8b
# 88P
# d88
# 888   d8888b  d888b8b  ?88,.d88b,  88bd88b d8888b ?88,  88P?88   d8P
# ?88  d8P' ?88d8P' ?88  `?88'  ?88  88P'  `d8P' ?88 `?8bd8P'd88   88
# 88b 88b  d8888b  ,88b   88b  d8P d88     88b  d88 d8P?8b, ?8(  d88
#  88b`?8888P'`?88P'`88b  888888P'd88'     `?8888P'd8P' `?8b`?88P'?8b
#                    )88  88P'                                     )88
#                   ,88P d88                                      ,d8P
#               `?8888P  ?8P                                   `?888P'
#

FROM node:8-alpine
MAINTAINER Adam K Dean <adamkdean@googlemail.com>

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
