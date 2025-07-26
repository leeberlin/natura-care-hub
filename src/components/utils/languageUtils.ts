// Language detection utilities
export const detectLanguage = (text: string): string => {
  const viWords = ['xin', 'chào', 'cảm ơn', 'dịch vụ', 'tư vấn', 'sức khỏe', 'giúp', 'hỗ trợ', 'thông tin'];
  const enWords = ['hello', 'hi', 'thank', 'service', 'health', 'care', 'help', 'support', 'information'];
  const deWords = ['hallo', 'danke', 'service', 'gesundheit', 'pflege', 'hilfe', 'unterstützung', 'information'];

  const lowerText = text.toLowerCase();
  
  let viScore = 0;
  let enScore = 0;
  let deScore = 0;

  viWords.forEach(word => {
    if (lowerText.includes(word)) viScore++;
  });
  
  enWords.forEach(word => {
    if (lowerText.includes(word)) enScore++;
  });
  
  deWords.forEach(word => {
    if (lowerText.includes(word)) deScore++;
  });

  // Check for Vietnamese specific characters
  if (/[àáảãạăắằẳẵặâấầẩẫậđèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/.test(lowerText)) {
    viScore += 2;
  }

  // Check for German umlauts
  if (/[äöüßÄÖÜ]/.test(text)) {
    deScore += 2;
  }

  if (viScore > enScore && viScore > deScore) return 'vi';
  if (enScore > deScore) return 'en';
  return 'de'; // Default to German
};

export const getWelcomeMessage = (language: string): string => {
  switch (language) {
    case 'vi':
      return `Chào bạn! Cảm ơn bạn đã quan tâm đến dịch vụ của chúng tôi.

📞 Liên hệ trực tiếp: Anh Tuấn Phạm - 017645858098
📧 Email: info@naturapflegedienst.de
🏢 Văn phòng: 0911/123456
⏰ Giờ làm việc: Thứ 2-5 (8:00-15:00), Thứ 6 (9:00-14:00)
🚨 Cấp cứu: 017645858098

Chúng tôi luôn sẵn sàng hỗ trợ bạn!`;

    case 'en':
      return `Hello! Thank you for your interest in our services.

📞 Direct contact: Mr. Tuan Pham - 017645858098
📧 Email: info@naturapflegedienst.de
🏢 Office: 0911/123456
⏰ Business hours: Mon-Thu (8:00-15:00), Fri (9:00-14:00)
🚨 Emergency: 017645858098

We are always ready to assist you!`;

    default:
      return `Guten Tag! Vielen Dank für Ihr Interesse an unseren Dienstleistungen.

📞 Direktkontakt: Herr Tuan Pham - 017645858098
📧 E-Mail: info@naturapflegedienst.de
🏢 Büro: 0911/123456
⏰ Öffnungszeiten: Mo-Do (8:00-15:00), Fr (9:00-14:00)
🚨 Notfall: 017645858098

Wir stehen Ihnen gerne zur Verfügung!`;
  }
};

export const getContactInfo = (language: string): string => {
  switch (language) {
    case 'vi':
      return `📞 **Liên hệ Natura Pflegedienst:**

**Anh Tuấn Phạm:** 017645858098
**Văn phòng:** 0911/123456 
**Email:** info@naturapflegedienst.de
**Giờ làm việc:** Thứ 2-5 (8:00-15:00), Thứ 6 (9:00-14:00)
**Cấp cứu 24/7:** 017645858098

Chúng tôi luôn sẵn sàng hỗ trợ bạn!`;

    case 'en':
      return `📞 **Contact Natura Pflegedienst:**

**Mr. Tuan Pham:** 017645858098
**Office:** 0911/123456 
**Email:** info@naturapflegedienst.de
**Hours:** Mon-Thu (8:00-15:00), Fri (9:00-14:00)
**Emergency 24/7:** 017645858098

We are always ready to assist you!`;

    default:
      return `📞 **Kontakt Natura Pflegedienst:**

**Herr Tuan Pham:** 017645858098
**Büro:** 0911/123456 
**E-Mail:** info@naturapflegedienst.de
**Öffnungszeiten:** Mo-Do (8:00-15:00), Fr (9:00-14:00)
**Notfall 24/7:** 017645858098

Wir stehen Ihnen gerne zur Verfügung!`;
  }
};

export const getServiceOptions = (language: string) => {
  switch (language) {
    case 'vi':
      return [
        { emoji: '🩺', text: 'Tư vấn sức khỏe' },
        { emoji: '🏠', text: 'Dịch vụ giúp việc gia đình' },
        { emoji: '🛁', text: 'Chăm sóc cá nhân' },
        { emoji: '🏥', text: 'Điều dưỡng tại nhà' },
        { emoji: 'ℹ️', text: 'Thông tin các gói dịch vụ' }
      ];

    case 'en':
      return [
        { emoji: '🩺', text: 'Health Consultation' },
        { emoji: '🏠', text: 'Household Assistance' },
        { emoji: '🛁', text: 'Personal Care' },
        { emoji: '🏥', text: 'Home Nursing' },
        { emoji: 'ℹ️', text: 'Service Information' }
      ];

    default:
      return [
        { emoji: '🩺', text: 'Gesundheitsberatung' },
        { emoji: '🏠', text: 'Haushaltshilfe-Service' },
        { emoji: '🛁', text: 'Persönliche Betreuung' },
        { emoji: '🏥', text: 'Häusliche Pflege' },
        { emoji: 'ℹ️', text: 'Informationen zu unseren Leistungen' }
      ];
  }
};