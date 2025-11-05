# Use nginx alpine for a lightweight web server
FROM nginx:alpine

# Copy the website files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY Kernow.png /usr/share/nginx/html/

# Nginx runs on port 80 by default
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
