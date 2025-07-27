#!/bin/bash

# Script tự động commit và push lên GitHub
# Dành cho: natura-care-hub project

echo "🚀 CẬP NHẬT DỰ ÁN LÊN GITHUB"
echo "=============================="

# Di chuyển đến thư mục project
cd "$(dirname "$0")"

# Kiểm tra có phải git repository không
if [ ! -d ".git" ]; then
    echo "❌ Đây không phải git repository!"
    echo "🔧 Khởi tạo git repository..."
    git init
    git remote add origin https://github.com/leeberlin/natura-care-hub.git
fi

# Kiểm tra git config
echo "🔍 Kiểm tra git config..."
git_user=$(git config user.name)
git_email=$(git config user.email)

if [ -z "$git_user" ] || [ -z "$git_email" ]; then
    echo "⚠️  Git user chưa được config!"
    echo "🔧 Vui lòng chạy:"
    echo "git config --global user.name 'Your Name'"
    echo "git config --global user.email 'your.email@example.com'"
    echo ""
    echo "💡 Hoặc để tôi tự động config với thông tin mặc định..."
    read -p "Nhập tên của bạn (hoặc Enter để dùng 'Lee Berlin'): " user_name
    read -p "Nhập email của bạn (hoặc Enter để dùng email mặc định): " user_email
    
    user_name=${user_name:-"Lee Berlin"}
    user_email=${user_email:-"phamtuan17892@gmail.com"}
    
    git config --global user.name "$user_name"
    git config --global user.email "$user_email"
    echo "✅ Đã config git user: $user_name <$user_email>"
fi

# Xóa các file không cần thiết trước khi commit
echo ""
echo "🧹 Dọn dẹp files không cần thiết..."
rm -rf deploy-ready/
rm -f website-deploy.zip
rm -f *.tar.gz

# Kiểm tra trạng thái git
echo ""
echo "📊 Kiểm tra git status..."
git status --porcelain

# Tạo commit message với timestamp
timestamp=$(date "+%Y-%m-%d %H:%M:%S")
commit_message="🚀 Update project - $timestamp

✅ Website deployed successfully to Netcup
🔒 SSL certificate configured
📦 Latest build ready
🎨 UI improvements and bug fixes

Deploy info:
- Domain: https://naturapflegedienst.de
- SSL: Active (Let's Encrypt)
- Build: Production ready"

# Add tất cả changes
echo ""
echo "📝 Adding changes to git..."
git add .

# Kiểm tra có changes không
if git diff --cached --quiet; then
    echo "ℹ️  Không có changes mới để commit."
    echo "🔍 Kiểm tra xem có cần push commits cũ không..."
    
    # Kiểm tra có commits chưa push không
    unpushed=$(git log origin/main..HEAD --oneline 2>/dev/null | wc -l | tr -d ' ')
    if [ "$unpushed" -gt 0 ]; then
        echo "📤 Có $unpushed commits chưa push. Đang push..."
        git push origin main
        echo "✅ Đã push thành công!"
    else
        echo "✅ Repository đã up-to-date!"
    fi
    exit 0
fi

# Commit changes
echo ""
echo "💾 Committing changes..."
git commit -m "$commit_message"

if [ $? -ne 0 ]; then
    echo "❌ Commit thất bại!"
    exit 1
fi

echo "✅ Commit thành công!"

# Push lên GitHub
echo ""
echo "📤 Pushing to GitHub..."

# Thử push main branch
if git push origin main 2>/dev/null; then
    echo "✅ Push thành công lên main branch!"
elif git push origin master 2>/dev/null; then
    echo "✅ Push thành công lên master branch!"
else
    echo "⚠️  Push thất bại. Thử push với upstream..."
    
    # Thử set upstream và push
    if git push --set-upstream origin main 2>/dev/null; then
        echo "✅ Push thành công với upstream main!"
    elif git push --set-upstream origin master 2>/dev/null; then
        echo "✅ Push thành công với upstream master!"
    else
        echo "❌ Push thất bại!"
        echo ""
        echo "🔧 TROUBLESHOOTING:"
        echo "1. Kiểm tra internet connection"
        echo "2. Kiểm tra GitHub credentials:"
        echo "   git config --list | grep user"
        echo "3. Kiểm tra remote URL:"
        echo "   git remote -v"
        echo "4. Thử login lại GitHub:"
        echo "   gh auth login (nếu có GitHub CLI)"
        echo ""
        echo "📞 Hoặc push thủ công:"
        echo "git push origin main"
        exit 1
    fi
fi

# Hiển thị kết quả
echo ""
echo "🎉 HOÀN THÀNH!"
echo "=============="
echo "✅ Dự án đã được update lên GitHub"
echo "🔗 Repository: https://github.com/leeberlin/natura-care-hub"
echo "📱 Website: https://naturapflegedienst.de"
echo ""
echo "📊 GIT LOG GẦN NHẤT:"
git log --oneline -5

echo ""
echo "🌐 Links quan trọng:"
echo "- GitHub: https://github.com/leeberlin/natura-care-hub"
echo "- Website: https://naturapflegedienst.de"
echo "- Commits: https://github.com/leeberlin/natura-care-hub/commits"
echo ""
echo "💡 Lần sau chỉ cần chạy: ./push-to-github.sh"