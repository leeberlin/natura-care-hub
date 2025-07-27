@echo off
echo 🔨 Building project với latest changes...

REM Di chuyển đến thư mục project
cd /d "%~dp0"

REM Kiểm tra và cài đặt dependencies nếu cần
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Xóa thư mục dist cũ
if exist "dist" (
    echo 🗑️  Removing old dist folder...
    rmdir /s /q dist
)

REM Build project
echo 🚀 Building project...
npm run build

REM Kiểm tra build có thành công không
if exist "dist" (
    echo ✅ Build thành công!
    
    REM Copy .htaccess vào dist
    if exist ".htaccess" (
        echo 📄 Copying .htaccess to dist...
        copy .htaccess dist\
    )
    
    REM Tạo thư mục deploy-ready
    echo 📁 Preparing deploy-ready folder...
    if exist "deploy-ready" rmdir /s /q deploy-ready
    mkdir deploy-ready
    xcopy dist\* deploy-ready\ /E /I /Q
    
    echo.
    echo 🎉 HOÀN THÀNH!
    echo 📋 Files mới đã sẵn sàng trong thư mục 'deploy-ready'\
    echo.
    echo 🔗 Tiếp theo: Upload nội dung 'deploy-ready'\ lên Netcup
    
) else (
    echo ❌ Build failed! Check errors above.
    pause
    exit /b 1
)

pause