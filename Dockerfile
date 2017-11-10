FROM node:alpine
EXPOSE 4200 4100
MAINTAINER csanders@cccis.com

COPY . /run/x-ui
RUN chmod +x /run/x-ui/start_app.sh

# Add distro dependencies
RUN apk update && \
    apk add python ca-certificates

# Add npm dependencies 
RUN npm install -g json-server
RUN cd /run/x-ui && npm install

CMD cd /run/x-ui/ && ./start_app.sh
#CMD sh
