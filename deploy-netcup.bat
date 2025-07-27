@echo off
echo 🚀 Bắt đầu quá trình build và chuẩn bị deploy...

REM Kiểm tra node_modules
if not exist "node_modules" (
    echo 📦 Cài đặt dependencies...
    npm install
)

REM Build project
echo 🔨 Building project...
npm run build

REM Copy .htaccess vào thư mục dist
if exist ".htaccess" (
    echo 📄 Copying .htaccess to dist folder...
    copy .htaccess dist\
) else (
    echo ⚠️  File .htaccess không tồn tại!
)

REM Tạo thư mục deploy để chuẩn bị upload
echo 📁 Chuẩn bị thư mục deploy...
if exist "deploy-ready" rmdir /s /q deploy-ready
mkdir deploy-ready
xcopy dist\* deploy-ready\ /E /I

echo ✅ Hoàn thành! Files đã sẵn sàng trong thư mục 'deploy-ready'\
echo.
echo 📋 Các bước tiếp theo:
echo 1. Truy cập Netcup Control Panel
echo 2. Vào File Manager hoặc sử dụng FTP
echo 3. Upload toàn bộ nội dung từ thư mục 'deploy-ready'\ vào public_html\
echo 4. Kiểm tra website tại domain của bạn
echo.
echo 🌐 Happy deploying!
pause