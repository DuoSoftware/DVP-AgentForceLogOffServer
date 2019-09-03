FROM node:9.9.0
ARG VERSION_TAG
RUN git clone -b $VERSION_TAG https://github.com/DuoSoftware/DVP-AgentForceLogOffServer.git /usr/local/src/agentforcelogoffserver
RUN cd /usr/local/src/agentforcelogoffserver;
WORKDIR /usr/local/src/agentforcelogoffserver
RUN npm install
EXPOSE 8846
CMD [ "node", "/usr/local/src/agentforcelogoffserver/app.js" ]
