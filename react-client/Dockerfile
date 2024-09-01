# Sử dụng Node.js làm base image
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json (hoặc yarn.lock)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Cài đặt server để phục vụ ứng dụng React
RUN npm install -g serve

# Chạy ứng dụng React
CMD ["serve", "-s", "build"]

# Cung cấp port mà ứng dụng React sẽ chạy
EXPOSE 3000
