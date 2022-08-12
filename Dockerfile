FROM ghcr.io/linuxserver/baseimage-alpine:3.16 as buildstage

RUN echo "**** install build packages ****"
RUN apk add --no-cache python3 python3-dev alpine-sdk libxml2-dev libxslt-dev git go

RUN echo "**** install pip ****"
RUN python3 -m ensurepip

RUN echo "**** clone xTeVe ****"
RUN git clone https://github.com/McSwindler/xTeVe.git /tmp/xteve

WORKDIR /tmp/xteve

RUN echo "**** install go modules for xTeVe ****"
RUN go get \
        github.com/koron/go-ssdp \
        github.com/gorilla/websocket \
        github.com/kardianos/osext

RUN echo "**** build xTeVe ****"
RUN go build xteve.go

RUN echo "**** build Streamlink ****"
RUN pip3 install wheel && pip3 wheel streamlink --wheel-dir=/tmp/wheels

FROM ghcr.io/linuxserver/baseimage-alpine:3.16

ENV HOME="/config"

RUN echo "**** install runtime packages ****"
RUN apk add --no-cache python3 vlc ffmpeg

RUN echo "**** install pip ****"
RUN python3 -m ensurepip

COPY --from=buildstage /tmp/xteve/xteve /usr/bin/xteve
COPY --from=buildstage /tmp/wheels /tmp/wheels

RUN chmod +x /usr/bin/xteve

RUN echo "**** install streamlink ****"
RUN pip3 install --no-index --find-links=/tmp/wheels streamlink

EXPOSE 34400
VOLUME /config

CMD /usr/bin/xteve -port=34400 -config=/config/xteve
