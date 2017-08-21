FROM docker.elastic.co/elasticsearch/elasticsearch:5.5.1
MAINTAINER Tamas Szalczinger <tamas.szalczinger@gmail.com>

ADD service/docker/elastic/elasticsearch.yml /usr/share/elasticsearch/config/

USER root

RUN chown elasticsearch:elasticsearch config/elasticsearch.yml

RUN mkdir -p /var/log/elasticsearch
RUN mkdir -p /var/data/elasticsearch

RUN chown elasticsearch:elasticsearch /var/log/elasticsearch
RUN chown elasticsearch:elasticsearch /var/data/elasticsearch

USER elasticsearch