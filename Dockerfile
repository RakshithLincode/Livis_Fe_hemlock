# FROM node:14.17.3 as build

# WORKDIR /home/republic/frontend/livis-fe/

# COPY package.json /home/republic/frontend/livis-fe/
# COPY angular.json  /home/republic/frontend/livis-fe/
# RUN npm install -g @angular/cli
# RUN npm install --no-package-lock

# COPY . .
# RUN npm run build -- --outputPath=./dist/out 
# # Stage 2, use the compiled app, ready for production with Nginx
# FROM nginx:1.21.5
# COPY --from=build /app/dist/out/ /usr/share/nginx/html
# COPY /nginx.conf /etc/nginx/conf.d/default.conf

# # Stage 1: Build an Angular Docker Image
#Main code.................................
FROM node:14.20.0 as build
WORKDIR /app
COPY package*.json /app/
COPY angular.json /app/
RUN apt-get update
RUN apt-get install -y vim nano
RUN npm install -g@angular/cli
RUN npm install --no-package-lock
COPY . .
RUN npm run build -- --outputPath=./dist/out 
# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx
COPY --from=build /app/dist/out/ /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
#>>>>>>>>>>>>>>>>>>>>>>>>>>>

# FROM fe-container_nginx:v7
# RUN apt-get update
# RUN apt-get install -y ca-certificates
# # COPY Full_CA_Chain /app/
# # COPY pcbainsp-eec-l1.se.com.pfx /app/
# COPY lain01604.sccoe.schneider-electric.com.pfx /app/
# COPY /nginx.conf /etc/nginx/conf.d/default.conf
# COPY /password.txt /app/

# RUN cd .. .. .. .. .. 
# RUN cd app
# RUN cp IT-PKI-1.cer /etc/pki/ca-trust/source/anchors
# RUN cp IT-PKI-2.crt /etc/pki/ca-trust/source/anchors
# RUN cp IT-PKI-3.cer /etc/pki/ca-trust/source/anchors
# RUN cp IT-PKI.crt /etc/pki/ca-trust/source/anchors
# RUN cp PKI-IT-ROOT.cer /etc/pki/ca-trust/source/anchors