# Use official Nginx image
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output to Nginx public folder
COPY dist/antd-haircut-angular/browser /usr/share/nginx/html
# Debug - List files to confirm they were copied
RUN ls -la /usr/share/nginx/html
# Set proper permissions (add this line)
RUN chmod -R 755 /usr/share/nginx/html

# Copy custom Nginx config (optional, see below)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]