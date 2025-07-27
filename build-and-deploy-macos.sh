#!/bin/bash

# Script build và chuẩn bị deploy cho macOS
# Tác giả: Deploy Assistant for Netcup
# Dành cho: natura-care-hub project

echo "🍎 BUILDING VÀ CHUẨN BỊ DEPLOY TRÊN macOS"
echo "================================================"

# Di chuyển đến thư mục script
cd "$(dirname "$0")"

# Kiểm tra Node.js
echo "🔍 Kiểm tra Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js chưa được cài đặt!"
    echo "📥 Vui lòng cài đặt Node.js từ: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Kiểm tra dependencies
echo ""
echo "📦 Kiểm tra dependencies..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  Thư mục node_modules không tồn tại. Đang cài đặt..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Cài đặt dependencies thất bại!"
        exit 1
    fi
else
    echo "✅ Dependencies đã tồn tại"
fi

# Clean old builds
echo ""
echo "🧹 Dọn dẹp build cũ..."
rm -rf dist deploy-ready website-deploy.zip
echo "✅ Đã xóa: dist/, deploy-ready/, website-deploy.zip"

# Build project
echo ""
echo "🔨 Building project..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Build thất bại! Thư mục dist không được tạo."
    echo "🔍 Hãy kiểm tra lỗi build ở trên và sửa code."
    exit 1
fi

echo "✅ Build thành công!"

# Kiểm tra .htaccess
echo ""
echo "📄 Kiểm tra file .htaccess..."
if [ ! -f ".htaccess" ]; then
    echo "⚠️  File .htaccess không tồn tại. Đang tạo..."
    cat > .htaccess << 'EOF'
RewriteEngine On
RewriteBase /

# Handle client-side routing for React Router
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/ico "access plus 1 year"
    ExpiresByType image/icon "access plus 1 year"
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>
EOF
fi

# Copy .htaccess vào dist
cp .htaccess dist/
echo "✅ Đã copy .htaccess vào dist/"

# Tạo thư mục deploy-ready
echo ""
echo "📁 Chuẩn bị thư mục deploy..."
mkdir deploy-ready
cp -r dist/* deploy-ready/
echo "✅ Đã tạo thư mục deploy-ready/"

# Tạo file zip để upload
echo ""
echo "📦 Tạo file zip để upload..."
cd deploy-ready
zip -r ../website-deploy.zip . -x "*.DS_Store" "*.Thumbs.db"
cd ..
echo "✅ Đã tạo file website-deploy.zip"

# Thống kê
echo ""
echo "📊 THỐNG KÊ BUILD:"
echo "=================="
file_count=$(find deploy-ready -type f | wc -l | tr -d ' ')
total_size=$(du -sh deploy-ready | cut -f1)
zip_size=$(du -sh website-deploy.zip | cut -f1)

echo "📄 Tổng số files: $file_count"
echo "📏 Kích thước thư mục: $total_size"
echo "📦 Kích thước file zip: $zip_size"
echo ""

# Hiển thị nội dung deploy-ready
echo "📋 NỘI DUNG DEPLOY-READY:"
echo "========================"
ls -la deploy-ready/
echo ""

# Hướng dẫn upload
echo "🚀 CÁC BƯỚC TIẾP THEO:"
echo "====================="
echo ""
echo "CÁCH 1: Upload file ZIP (Dễ nhất)"
echo "--------------------------------"
echo "1. Đăng nhập Netcup Control Panel: https://www.customercontrolpanel.de/"
echo "2. Vào Webhosting Panel → File Manager"
echo "3. Navigate đến thư mục public_html/"
echo "4. Upload file: website-deploy.zip"
echo "5. Right-click → Extract/Unzip"
echo "6. Xóa file zip sau khi giải nén"
echo ""
echo "CÁCH 2: Upload qua FTP Client"
echo "-----------------------------"
echo "1. Cài đặt Cyberduck: https://cyberduck.io/"
echo "2. Kết nối với thông tin FTP từ Netcup"
echo "3. Upload toàn bộ nội dung thư mục deploy-ready/"
echo "4. Vào thư mục public_html/ trên server"
echo ""
echo "CÁCH 3: Copy files thủ công"
echo "---------------------------"
echo "Files đã sẵn sàng trong thư mục: deploy-ready/"
echo "Copy toàn bộ nội dung vào thư mục web root của Netcup"
echo ""

# Kiểm tra cuối
echo "✅ HOÀN THÀNH CHUẨN BỊ!"
echo ""
echo "🔍 KIỂM TRA CUỐI:"
echo "- File index.html: $([ -f deploy-ready/index.html ] && echo '✅' || echo '❌')"
echo "- Thư mục assets: $([ -d deploy-ready/assets ] && echo '✅' || echo '❌')"
echo "- File .htaccess: $([ -f deploy-ready/.htaccess ] && echo '✅' || echo '❌')"
echo "- File zip ready: $([ -f website-deploy.zip ] && echo '✅' || echo '❌')"
echo ""

# Mở thư mục deploy-ready trong Finder
echo "📂 Mở thư mục deploy-ready trong Finder..."
open deploy-ready/

echo "🎉 SẴN SÀNG DEPLOY LÊN NETCUP!"
echo ""
echo "💡 Lưu ý: Sau khi upload, nhớ test website và kích hoạt SSL"