FROM node:10-alpine
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "index.js"]

# docker build -t movies-api . //para crear imagen del aplicativo
# docker run -d movies-api //ejecuta la imagen en modo detach
# docker run -p 3000:3000 -d movies-api //opcional