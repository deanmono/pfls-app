FROM node:alpine
EXPOSE 4200 4100
MAINTAINER csanders@cccis.com

COPY files/x-ui /run/x
COPY files/start_app.sh /run/x
RUN chmod +x /run/x/start_app.sh

# Add python
RUN apk update && \
    apk add python emacs curl ca-certificates

# Add npm modules 
RUN npm install -g json-server
RUN cd /run/x && npm install



#CMD /run/x/start_app.sh
CMD sh
