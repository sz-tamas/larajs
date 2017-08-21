FROM node:8
MAINTAINER Tamas Szalczinger <tamas.szalczinger@gmail.com>

RUN npm install -g gulp webpack mocha nodemon --silent

RUN apt-get update \
     && apt-get install -y --no-install-recommends \
            curl \
     && mkdir /tmp/phantomjs \
     && curl -L https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 \
            | tar -xj --strip-components=1 -C /tmp/phantomjs \
     && mv /tmp/phantomjs/bin/phantomjs /usr/local/bin

RUN npm install -g casperjs --silent

ENV HOME=/var/www

WORKDIR $HOME

CMD ["node"]