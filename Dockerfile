#Grab the latest alpine image
FROM alpine:latest

# Install python and pip
RUN apk add --no-cache --update nodejs npm ffmpeg

# Install dependencies
RUN npm install -g forever
RUN npm install

CMD gunicorn --bind 0.0.0.0:$PORT wsgi 