#!/bin/bash

echo "🔨 Building project với latest changes..."

# Di chuyển đến thư mục project
cd "$(dirname "$0")"

# Kiểm tra và cài đặt dependencies nếu cần
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Xóa thư mục dist cũ
if [ -d "dist" ]; then
    echo "🗑️  Removing old dist folder..."
    rm -rf dist
fi

# Build project
echo "🚀 Building project..."
npm run build

# Kiểm tra build có thành công không
if [ -d "dist" ]; then
    echo "✅ Build thành công!"
    
    # Copy .htaccess vào dist
    if [ -f ".htaccess" ]; then
        echo "📄 Copying .htaccess to dist..."
        cp .htaccess dist/
    fi
    
    # Tạo thư mục deploy-ready
    echo "📁 Preparing deploy-ready folder..."
    rm -rf deploy-ready
    mkdir deploy-ready
    cp -r dist/* deploy-ready/
    
    echo ""
    echo "🎉 HOÀN THÀNH!"
    echo "📋 Files mới đã sẵn sàng trong thư mục 'deploy-ready'/"
    echo ""
    echo "📊 Thống kê:"
    echo "- Files in dist: $(find dist -type f | wc -l)"
    echo "- Total size: $(du -sh dist | cut -f1)"
    echo ""
    echo "🔗 Tiếp theo: Upload nội dung 'deploy-ready'/ lên Netcup"
    
else
    echo "❌ Build failed! Check errors above."
    exit 1
fi