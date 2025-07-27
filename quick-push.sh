#!/bin/bash

# Quick update script cho GitHub
echo "🚀 Quick push to GitHub..."

cd "$(dirname "$0")"

# Dọn dẹp
rm -rf deploy-ready/ website-deploy.zip *.tar.gz

# Git commands
git add .

if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
    git push origin main 2>/dev/null || git push origin master 2>/dev/null
else
    # Quick commit với timestamp
    git commit -m "⚡ Quick update - $(date '+%Y-%m-%d %H:%M')"
    git push origin main 2>/dev/null || git push origin master 2>/dev/null
fi

echo "✅ Done! Check: https://github.com/leeberlin/natura-care-hub"