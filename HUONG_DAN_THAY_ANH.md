# 🖼️ HƯỚNG DẪN THAY ẢNH WEBSITE

## 🚀 CÁCH ĐỌN GIẢN NHẤT (Khuyến nghị)

### ⚡ **OPTION 1: Sử dụng Tool Tự Động**

```bash
# Chạy tool Python (dễ nhất)
python3 change_images.py
```

**Hoặc kéo thả file:**
```bash
# Kéo file change_images.py vào Terminal và nhấn Enter
```

---

## 📋 **DANH SÁCH ẢNH CẦN THAY:**

### **1. 🏠 Ảnh Hero (Trang chủ)**
- **File:** `src/assets/hero-care.jpg`
- **Mô tả:** Ảnh chính hiển thị ở banner đầu trang
- **Kích thước:** 1200x600px (tỷ lệ 2:1)
- **Dùng cho:** Trang chủ, Pflegeberatung

### **2. 🩺 Ảnh Chăm Sóc Y Tế** 
- **File:** `src/assets/care-assistance.jpg`
- **Mô tả:** Dịch vụ chăm sóc y tế, điều trị
- **Kích thước:** 800x600px (tỷ lệ 4:3)
- **Dùng cho:** Services, Footer

### **3. 🏠 Ảnh Giúp Việc Nhà**
- **File:** `src/assets/household-help.jpg`  
- **Mô tả:** Dịch vụ giúp việc, dọn dẹp nhà cửa
- **Kích thước:** 800x600px (tỷ lệ 4:3)
- **Dùng cho:** Services, Footer

### **4. 👥 Ảnh Chăm Sóc Đồng Hành**
- **File:** `src/assets/companion-care.jpg`
- **Mô tả:** Dịch vụ đồng hành, trò chuyện
- **Kích thước:** 800x600px (tỷ lệ 4:3)
- **Dùng cho:** Services, Footer

### **5. 🏢 Logo Công Ty**
- **File:** `public/lovable-uploads/7e9df2db-9333-4d29-85cc-b32f727b93cc.png`
- **Mô tả:** Logo hiển thị ở header và footer
- **Kích thước:** 200x200px (nền trong suốt)
- **Dùng cho:** Header, Footer

---

## 🔧 **CÁCH THAY ẢNH:**

### **METHOD 1: Tool Tự Động (Dễ nhất)**

1. **Chạy tool:**
   ```bash
   python3 change_images.py
   ```

2. **Chọn tùy chọn:**
   - `1-5`: Thay ảnh từng cái
   - `b`: Thay hàng loạt từ folder
   - `q`: Thoát

3. **Tool sẽ:**
   - ✅ Tự động backup ảnh cũ
   - ✅ Copy ảnh mới vào đúng vị trí
   - ✅ Rename theo đúng tên
   - ✅ Hiển thị kết quả

### **METHOD 2: Thay Thủ Công**

#### **Thay từng ảnh:**
```bash
# 1. Backup ảnh cũ
cp src/assets/hero-care.jpg backup/

# 2. Copy ảnh mới
cp /path/to/your/new-image.jpg src/assets/hero-care.jpg
```

#### **Thay logo:**
```bash
# Copy logo mới (giữ nguyên tên file dài)
cp /path/to/your/logo.png public/lovable-uploads/7e9df2db-9333-4d29-85cc-b32f727b93cc.png
```

### **METHOD 3: Kéo thả trực tiếp**

1. Mở folder `src/assets` trong Finder/Explorer
2. Kéo ảnh mới vào folder
3. Rename theo đúng tên:
   - `hero-care.jpg`
   - `care-assistance.jpg` 
   - `household-help.jpg`
   - `companion-care.jpg`

---

## 🎯 **TIPS VÀ LƯU Ý:**

### **📏 Kích Thước Khuyến Nghị:**
- **Hero image**: 1200x600px hoặc tỷ lệ 2:1
- **Service images**: 800x600px hoặc tỷ lệ 4:3  
- **Logo**: 200x200px, nền trong suốt (PNG)

### **📁 Format Hỗ Trợ:**
- ✅ JPG/JPEG (khuyến nghị cho ảnh)
- ✅ PNG (khuyến nghị cho logo)
- ✅ WebP (tối ưu nhất)
- ⚠️ GIF (hạn chế)

### **💡 Best Practices:**
- **Tối ưu kích thước**: Dưới 500KB mỗi ảnh
- **Chất lượng cao**: Rõ nét, không bị mờ
- **Phù hợp nội dung**: Ảnh phản ánh đúng dịch vụ
- **Backup trước**: Luôn sao lưu ảnh cũ

---

## 🔄 **SAU KHI THAY ẢNH:**

### **1. Kiểm tra website:**
```bash
# Start development server
pnpm run dev

# Mở http://localhost:8080
```

### **2. Test responsiveness:**
- ✅ Desktop view
- ✅ Tablet view  
- ✅ Mobile view

### **3. Deploy lên production:**
```bash
# Build và check
pnpm run build

# Push lên GitHub (auto-deploy)
git add .
git commit -m "Update website images"
git push origin main
```

---

## 🆘 **TROUBLESHOOTING:**

### **❌ Ảnh không hiển thị:**
- Check đúng tên file và đường dẫn
- Xóa cache browser (Ctrl+F5)
- Restart development server

### **❌ Ảnh bị vỡ layout:**
- Check kích thước ảnh
- Đảm bảo tỷ lệ phù hợp
- Tối ưu dung lượng file

### **❌ Tool Python lỗi:**
```bash
# Cài Python nếu chưa có
brew install python3  # macOS
# hoặc download từ python.org

# Check version
python3 --version
```

---

## 📞 **Hỗ Trợ:**

Nếu gặp khó khăn:
1. Sử dụng tool tự động: `python3 change_images.py`
2. Thay thủ công theo hướng dẫn METHOD 2
3. Liên hệ dev để support

**Happy Editing! 🎉** 