#!/usr/bin/env python3
"""
🖼️ NATURA PFLEGEDIENST - IMAGE CHANGER TOOL
Công cụ thay đổi ảnh website đơn giản nhất

Usage: python3 change_images.py
"""

import os
import shutil
from datetime import datetime
import sys

class ImageChanger:
    def __init__(self):
        self.assets_dir = "src/assets"
        self.public_dir = "public/lovable-uploads"
        self.backup_dir = f"backup_images_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        # Mapping của các ảnh cần thay
        self.image_map = {
            "1": {
                "name": "hero-care.jpg",
                "description": "🏠 Ảnh chính Hero Section (trang chủ)",
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: 1200x600px hoặc tỷ lệ 2:1"
            },
            "2": {
                "name": "care-assistance.jpg", 
                "description": "🩺 Ảnh dịch vụ chăm sóc y tế",
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: 800x600px hoặc tỷ lệ 4:3"
            },
            "3": {
                "name": "household-help.jpg",
                "description": "🏠 Ảnh dịch vụ giúp việc nhà", 
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: 800x600px hoặc tỷ lệ 4:3"
            },
            "4": {
                "name": "companion-care.jpg",
                "description": "👥 Ảnh dịch vụ chăm sóc đồng hành",
                "path": self.assets_dir, 
                "size_guide": "Khuyến nghị: 800x600px hoặc tỷ lệ 4:3"
            },
            "5": {
                "name": "7e9df2db-9333-4d29-85cc-b32f727b93cc.png",
                "description": "🏢 Logo công ty (header & footer)",
                "path": self.public_dir,
                "size_guide": "Khuyến nghị: 200x200px, nền trong suốt"
            },
            "11": {
                "name": "NATURA.svg",
                "description": "🎯 Logo SVG banner carousel (scroll animation)",
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: Vector SVG, scalable"
            },
            "6": {
                "name": "banner1.png",
                "description": "🎨 Banner carousel 1",
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: 1200x400px hoặc tỷ lệ 3:1"
            },
            "7": {
                "name": "banner2.png",
                "description": "🎨 Banner carousel 2",
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: 1200x400px hoặc tỷ lệ 3:1"
            },
            "8": {
                "name": "banner3.png",
                "description": "🎨 Banner carousel 3",
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: 1200x400px hoặc tỷ lệ 3:1"
            },
            "9": {
                "name": "banner4.png",
                "description": "🎨 Banner carousel 4",
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: 1200x400px hoặc tỷ lệ 3:1"
            },
            "10": {
                "name": "banner5.png",
                "description": "🎨 Banner carousel 5",
                "path": self.assets_dir,
                "size_guide": "Khuyến nghị: 1200x400px hoặc tỷ lệ 3:1"
            }
        }

    def backup_current_images(self):
        """Backup ảnh hiện tại để phòng khi cần khôi phục"""
        print(f"📦 Đang backup ảnh hiện tại vào: {self.backup_dir}")
        os.makedirs(self.backup_dir, exist_ok=True)
        
        for img_id, img_info in self.image_map.items():
            current_path = os.path.join(img_info["path"], img_info["name"])
            if os.path.exists(current_path):
                backup_path = os.path.join(self.backup_dir, f"{img_id}_{img_info['name']}")
                shutil.copy2(current_path, backup_path)
                print(f"✅ Đã backup: {img_info['name']}")

    def show_current_images(self):
        """Hiển thị danh sách ảnh hiện tại"""
        print("\n" + "="*60)
        print("🖼️  DANH SÁCH ẢNH HIỆN TẠI")
        print("="*60)
        
        for img_id, img_info in self.image_map.items():
            current_path = os.path.join(img_info["path"], img_info["name"])
            status = "✅ Có sẵn" if os.path.exists(current_path) else "❌ Không tìm thấy"
            
            print(f"\n{img_id}. {img_info['description']}")
            print(f"   📁 File: {img_info['name']}")
            print(f"   📏 {img_info['size_guide']}")
            print(f"   📊 Trạng thái: {status}")

    def replace_image(self, img_id: str, new_image_path: str):
        """Thay thế ảnh mới"""
        if img_id not in self.image_map:
            print(f"❌ ID ảnh không hợp lệ: {img_id}")
            return False
            
        if not os.path.exists(new_image_path):
            print(f"❌ Không tìm thấy file: {new_image_path}")
            return False
            
        img_info = self.image_map[img_id]
        target_path = os.path.join(img_info["path"], img_info["name"])
        
        try:
            # Tạo thư mục nếu chưa có
            os.makedirs(img_info["path"], exist_ok=True)
            
            # Copy ảnh mới
            shutil.copy2(new_image_path, target_path)
            print(f"✅ Đã thay thế: {img_info['description']}")
            print(f"   📁 Từ: {new_image_path}")
            print(f"   📁 Đến: {target_path}")
            return True
            
        except Exception as e:
            print(f"❌ Lỗi khi thay thế ảnh: {e}")
            return False

    def bulk_replace(self, folder_path: str):
        """Thay thế nhiều ảnh cùng lúc từ một folder"""
        if not os.path.exists(folder_path):
            print(f"❌ Không tìm thấy folder: {folder_path}")
            return
            
        print(f"\n📂 Đang quét folder: {folder_path}")
        replaced_count = 0
        
        for img_id, img_info in self.image_map.items():
            # Tìm file có tên tương tự
            base_name = os.path.splitext(img_info["name"])[0]
            possible_extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
            
            for ext in possible_extensions:
                test_file = os.path.join(folder_path, f"{base_name}{ext}")
                if os.path.exists(test_file):
                    if self.replace_image(img_id, test_file):
                        replaced_count += 1
                    break
                    
                # Thử tìm theo số thứ tự
                test_file = os.path.join(folder_path, f"{img_id}{ext}")
                if os.path.exists(test_file):
                    if self.replace_image(img_id, test_file):
                        replaced_count += 1
                    break
        
        print(f"\n🎉 Đã thay thế {replaced_count} ảnh thành công!")

    def run(self):
        """Chạy tool chính"""
        print("🖼️  NATURA PFLEGEDIENST - IMAGE CHANGER")
        print("=====================================")
        
        # Backup trước khi thay đổi
        self.backup_current_images()
        
        while True:
            self.show_current_images()
            
            print("\n" + "="*60)
            print("🔧 TÙYCHỌN:")
            print("1-11: Thay thế ảnh theo số")
            print("b   : Thay thế hàng loạt từ folder")
            print("q   : Thoát")
            print("="*60)
            
            choice = input("\n👉 Nhập lựa chọn: ").strip().lower()
            
            if choice == 'q':
                print("👋 Cảm ơn bạn đã sử dụng tool!")
                break
                
            elif choice == 'b':
                folder = input("📂 Nhập đường dẫn folder chứa ảnh mới: ").strip()
                self.bulk_replace(folder)
                
            elif choice in self.image_map:
                img_info = self.image_map[choice]
                print(f"\n📝 Thay thế: {img_info['description']}")
                print(f"📏 {img_info['size_guide']}")
                
                new_path = input("📁 Nhập đường dẫn ảnh mới: ").strip()
                self.replace_image(choice, new_path)
                
            else:
                print("❌ Lựa chọn không hợp lệ!")
            
            input("\n⏸️  Nhấn Enter để tiếp tục...")

if __name__ == "__main__":
    try:
        changer = ImageChanger()
        changer.run()
    except KeyboardInterrupt:
        print("\n\n👋 Tool đã dừng!")
    except Exception as e:
        print(f"\n❌ Lỗi: {e}") 