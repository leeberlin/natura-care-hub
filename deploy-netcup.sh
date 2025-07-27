#!/bin/bash

# Script deploy cho Netcup Webhosting 4000
# Chạy script này để build và chuẩn bị files cho upload

echo "🚀 Bắt đầu quá trình build và chuẩn bị deploy..."

# Kiểm tra node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Cài đặt dependencies..."
    npm install
fi

# Build project
echo "🔨 Building project..."
npm run build

# Copy .htaccess vào thư mục dist
if [ -f ".htaccess" ]; then
    echo "📄 Copying .htaccess to dist folder..."
    cp .htaccess dist/
else
    echo "⚠️  File .htaccess không tồn tại!"
fi

# Tạo thư mục deploy để chuẩn bị upload
echo "📁 Chuẩn bị thư mục deploy..."
rm -rf deploy-ready
mkdir deploy-ready
cp -r dist/* deploy-ready/

echo "✅ Hoàn thành! Files đã sẵn sàng trong thư mục 'deploy-ready'/"
echo ""
echo "📋 Các bước tiếp theo:"
echo "1. Truy cập Netcup Control Panel"
echo "2. Vào File Manager hoặc sử dụng FTP"
echo "3. Upload toàn bộ nội dung từ thư mục 'deploy-ready'/ vào public_html/"
echo "4. Kiểm tra website tại domain của bạn"
echo ""
echo "🌐 Happy deploying!"