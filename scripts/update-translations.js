/**
 * Update EN and VI translation files with new page content
 * Run with: node scripts/update-translations.js
 */

const fs = require('fs');
const path = require('path');

// Read German file as source
const deFile = path.join(__dirname, '../messages/de.json');
const enFile = path.join(__dirname, '../messages/en.json');
const viFile = path.join(__dirname, '../messages/vi.json');

const de = JSON.parse(fs.readFileSync(deFile, 'utf8'));
const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const vi = JSON.parse(fs.readFileSync(viFile, 'utf8'));

// English translations for new content
const enUpdates = {
  home: {
    ...en.home,
    services: {
      headline: "Our Services",
      subheadline: "Tailored Solutions for Your Success",
      employers: {
        title: "For Employers",
        description: "Strategic HR consulting and integration programs for successful collaboration with international professionals"
      },
      talents: {
        title: "For Talents",
        description: "Individual career support and practical assistance for your professional success in Germany"
      },
      consulting: {
        title: "HR Consulting",
        description: "Professional consulting for your HR strategy and integration processes"
      }
    }
  },
  services: {
    ...en.services,
    employers: {
      ...(en.services?.employers || {}),
      hero: {
        headline: "Services for Employers",
        description: "Successful integration starts with the right strategy. We support you in recruiting, integrating, and retaining international professionals.",
        cta: "Schedule Consultation"
      },
      servicesHeadline: "Our Service Portfolio",
      servicesSubheadline: "Tailored Solutions for Your Challenges",
      recruitment: {
        title: "International Recruitment",
        description: "Attract the best international talents for your company with our strategic recruitment consulting."
      },
      onboarding: {
        title: "Onboarding Programs",
        description: "Professional onboarding processes for fast and successful integration of new employees."
      },
      integration: {
        title: "Integration Programs",
        description: "Sustainable programs for cultural and professional integration of international professionals."
      },
      training: {
        title: "Intercultural Training",
        description: "Training for your team to strengthen intercultural competencies and collaboration."
      },
      compliance: {
        title: "Compliance & Legal",
        description: "Support with legal and regulatory requirements of international recruitment."
      },
      consulting: {
        title: "HR Strategy Consulting",
        description: "Development of sustainable HR strategies for international and diverse teams."
      },
      cta: {
        headline: "Ready to Strengthen Your Team?",
        description: "Let's develop your integration strategy together.",
        button: "Contact Us Now"
      }
    },
    talents: {
      ...(en.services?.talents || {}),
      hero: {
        headline: "Services for Talents",
        description: "Your path to professional success in Germany. We support you on your career journey with individual consulting and practical assistance.",
        cta: "Book Free Initial Consultation"
      },
      servicesHeadline: "Our Support for You",
      servicesSubheadline: "Professional Guidance on Your Career Path",
      careerCoaching: {
        title: "Career Coaching",
        description: "Individual consulting for your professional development and career planning in Germany."
      },
      jobSearch: {
        title: "Job Search & Placement",
        description: "Support in job search and placement of suitable positions with our partner companies."
      },
      language: {
        title: "Language Training",
        description: "Professional Business German training for successful work life."
      },
      cultural: {
        title: "Cultural Integration",
        description: "Support in integrating into German work culture and society."
      },
      networking: {
        title: "Networking & Community",
        description: "Access to our professional network and community events."
      },
      mentoring: {
        title: "Mentoring Programs",
        description: "Personal guidance by experienced mentors from your industry."
      },
      cta: {
        headline: "Start Your Career in Germany",
        description: "Let's shape your success path together.",
        button: "Request Consultation Now"
      }
    }
  },
  about: {
    hero: {
      headline: "About talentsCARE",
      description: "We are your partner for successful integration and sustainable collaboration in a global work environment."
    },
    mission: {
      headline: "Our Mission",
      paragraph1: "We believe in a work world where diversity is seen as strength and cultural differences are experienced as enrichment. Our mission is to build bridges between companies and international talents.",
      paragraph2: "With passion, expertise, and a deep understanding of intercultural dynamics, we accompany both sides on their common path to success. We create spaces for encounter, foster understanding, and develop sustainable solutions for the challenges of a globalized work world."
    },
    valuesHeadline: "Our Values",
    values: {
      empathy: {
        title: "Empathy",
        description: "We meet all people with appreciation, respect, and genuine interest in their individual story."
      },
      excellence: {
        title: "Excellence",
        description: "We strive for highest quality in everything we do and continuously develop ourselves."
      },
      integrity: {
        title: "Integrity",
        description: "We act transparently, reliably, and responsibly in all our relationships."
      },
      diversity: {
        title: "Diversity",
        description: "We celebrate differences and see cultural diversity as a source of innovation and strength."
      }
    },
    approach: {
      headline: "Our Approach",
      description: "We combine solid expertise with practical experience and a holistic view of integration and collaboration.",
      step1: {
        title: "Analysis & Understanding",
        description: "We listen and analyze your specific situation and challenges."
      },
      step2: {
        title: "Concept & Strategy",
        description: "We develop tailored solutions that fit your goals and resources."
      },
      step3: {
        title: "Implementation & Support",
        description: "We stay by your side and ensure sustainable results."
      }
    },
    cta: {
      headline: "Let's Write Success Stories Together",
      description: "Contact us for a non-binding initial consultation.",
      button: "Get in Touch",
      teamButton: "Meet Our Team"
    }
  },
  team: {
    hero: {
      headline: "Our Team",
      description: "Meet the experts who work with passion and competence for your success."
    },
    member1: {
      name: "Dr. Maria Schmidt",
      role: "Founder & CEO",
      bio: "Over 15 years of experience in international HR consulting and organizational development."
    },
    member2: {
      name: "Ahmad Hassan",
      role: "Senior Integration Consultant",
      bio: "Specialist in intercultural communication and diversity management."
    },
    member3: {
      name: "Lisa Chen",
      role: "Career Coach",
      bio: "Expert in professional development and career planning for international talents."
    }
  },
  blog: {
    hero: {
      headline: "News & Insights",
      description: "Stay informed about trends, best practices, and news from the world of integration."
    },
    comingSoon: {
      headline: "Coming Soon",
      description: "We're working on exciting content for you. Subscribe to our newsletter to not miss any updates.",
      cta: "Subscribe to Newsletter"
    }
  },
  contact: {
    ...en.contact,
    hero: {
      headline: "Contact",
      description: "Do you have questions or would you like to learn more about our services? We look forward to your message."
    },
    formHeadline: "Write to Us",
    infoHeadline: "Contact Information",
    info: {
      ...en.contact?.info,
      hoursWeekday: "Mon-Fri: 09:00 - 18:00",
      hoursWeekend: "Sat-Sun: Closed"
    }
  },
  notFound: {
    headline: "Page Not Found",
    description: "The page you are looking for unfortunately does not exist. It may have been moved or deleted.",
    homeButton: "Go to Homepage",
    contactButton: "Contact Us"
  },
  legal: {
    privacy: {
      headline: "Privacy Policy",
      lastUpdated: "Last updated: April 2026",
      section1: {
        title: "1. Privacy at a Glance",
        content: "The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified."
      },
      section2: {
        title: "2. Data Collection on This Website",
        content: "Data processing on this website is carried out by the website operator. Their contact details can be found in the imprint of this website. Your data is collected partly by you communicating it to us, for example through entries in a contact form."
      },
      section3: {
        title: "3. Analysis Tools and Third-Party Tools",
        content: "When visiting this website, your surfing behavior can be statistically evaluated. This is done primarily with so-called analysis programs. Detailed information about these analysis programs can be found in the following sections of this privacy policy."
      },
      section4: {
        title: "4. Your Rights",
        content: "You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time. You also have a right to request the correction or deletion of this data."
      },
      section5: {
        title: "5. Contact",
        content: "If you have any questions about data protection, you can contact us at any time. The contact details can be found in the imprint of this website."
      }
    },
    imprint: {
      headline: "Imprint",
      company: {
        title: "Information according to § 5 TMG"
      },
      contact: {
        title: "Contact",
        phone: "Phone",
        email: "Email"
      },
      management: {
        title: "Authorized Managing Director",
        names: "Dr. Maria Schmidt"
      },
      register: {
        title: "Register Entry",
        court: "Register Court",
        number: "Register Number",
        vat: "VAT ID"
      },
      responsible: {
        title: "Responsible for Content according to § 55 Abs. 2 RStV",
        name: "Dr. Maria Schmidt"
      }
    },
    terms: {
      headline: "Terms and Conditions",
      lastUpdated: "Last updated: April 2026",
      section1: {
        title: "1. Scope",
        content: "These General Terms and Conditions (GTC) apply to all contracts between talentsCARE GmbH and its clients for the provision of consulting and training services."
      },
      section2: {
        title: "2. Contract Conclusion",
        content: "The contract is concluded by the client's acceptance of the offer. Acceptance can be made in writing, orally, or through implied action."
      },
      section3: {
        title: "3. Scope of Services",
        content: "The scope of services to be provided is defined in the respective offer or service description. Changes to the scope of services require written agreement."
      },
      section4: {
        title: "4. Remuneration and Payment Terms",
        content: "Remuneration is based on the currently valid price list. Invoices are due for payment within 14 days of the invoice date without deduction."
      },
      section5: {
        title: "5. Liability",
        content: "We are fully liable for intent and gross negligence. In case of slight negligence, we are only liable for breach of essential contractual obligations."
      }
    }
  }
};

// Vietnamese translations
const viUpdates = {
  home: {
    ...vi.home,
    services: {
      headline: "Dịch Vụ Của Chúng Tôi",
      subheadline: "Giải Pháp Tùy Chỉnh Cho Sự Thành Công Của Bạn",
      employers: {
        title: "Cho Nhà Tuyển Dụng",
        description: "Tư vấn HR chiến lược và chương trình hội nhập cho sự hợp tác thành công với nhân tài quốc tế"
      },
      talents: {
        title: "Cho Nhân Tài",
        description: "Hỗ trợ sự nghiệp cá nhân và hỗ trợ thực tế cho sự thành công nghề nghiệp của bạn tại Đức"
      },
      consulting: {
        title: "Tư Vấn HR",
        description: "Tư vấn chuyên nghiệp cho chiến lược HR và quy trình hội nhập của bạn"
      }
    }
  },
  services: {
    ...vi.services,
    employers: {
      ...(vi.services?.employers || {}),
      hero: {
        headline: "Dịch Vụ Cho Nhà Tuyển Dụng",
        description: "Hội nhập thành công bắt đầu với chiến lược đúng đắn. Chúng tôi hỗ trợ bạn trong việc tuyển dụng, hội nhập và giữ chân nhân tài quốc tế.",
        cta: "Đặt Lịch Tư Vấn"
      },
      servicesHeadline: "Danh Mục Dịch Vụ",
      servicesSubheadline: "Giải Pháp Tùy Chỉnh Cho Thách Thức Của Bạn",
      recruitment: {
        title: "Tuyển Dụng Quốc Tế",
        description: "Thu hút nhân tài quốc tế tốt nhất cho công ty bạn với tư vấn tuyển dụng chiến lược của chúng tôi."
      },
      onboarding: {
        title: "Chương Trình Onboarding",
        description: "Quy trình onboarding chuyên nghiệp cho việc hội nhập nhanh chóng và thành công của nhân viên mới."
      },
      integration: {
        title: "Chương Trình Hội Nhập",
        description: "Chương trình bền vững cho hội nhập văn hóa và chuyên môn của nhân tài quốc tế."
      },
      training: {
        title: "Đào Tạo Liên Văn Hóa",
        description: "Đào tạo cho đội ngũ của bạn để tăng cường năng lực và hợp tác liên văn hóa."
      },
      compliance: {
        title: "Tuân Thủ & Pháp Lý",
        description: "Hỗ trợ các yêu cầu pháp lý và quy định của tuyển dụng quốc tế."
      },
      consulting: {
        title: "Tư Vấn Chiến Lược HR",
        description: "Phát triển chiến lược HR bền vững cho đội ngũ quốc tế và đa dạng."
      },
      cta: {
        headline: "Sẵn Sàng Củng Cố Đội Ngũ?",
        description: "Hãy cùng phát triển chiến lược hội nhập của bạn.",
        button: "Liên Hệ Ngay"
      }
    },
    talents: {
      ...(vi.services?.talents || {}),
      hero: {
        headline: "Dịch Vụ Cho Nhân Tài",
        description: "Con đường đến thành công nghề nghiệp tại Đức. Chúng tôi hỗ trợ bạn trên hành trình sự nghiệp với tư vấn cá nhân và hỗ trợ thực tế.",
        cta: "Đặt Lịch Tư Vấn Miễn Phí"
      },
      servicesHeadline: "Hỗ Trợ Của Chúng Tôi",
      servicesSubheadline: "Hướng Dẫn Chuyên Nghiệp Trên Con Đường Sự Nghiệp",
      careerCoaching: {
        title: "Coaching Sự Nghiệp",
        description: "Tư vấn cá nhân cho sự phát triển nghề nghiệp và kế hoạch sự nghiệp của bạn tại Đức."
      },
      jobSearch: {
        title: "Tìm Việc & Giới Thiệu",
        description: "Hỗ trợ tìm việc và giới thiệu vị trí phù hợp tại các công ty đối tác."
      },
      language: {
        title: "Đào Tạo Ngôn Ngữ",
        description: "Đào tạo tiếng Đức thương mại chuyên nghiệp cho công việc thành công."
      },
      cultural: {
        title: "Hội Nhập Văn Hóa",
        description: "Hỗ trợ hội nhập vào văn hóa làm việc và xã hội Đức."
      },
      networking: {
        title: "Networking & Cộng Đồng",
        description: "Tiếp cận mạng lưới chuyên nghiệp và sự kiện cộng đồng."
      },
      mentoring: {
        title: "Chương Trình Mentoring",
        description: "Hướng dẫn cá nhân bởi các mentor giàu kinh nghiệm trong ngành của bạn."
      },
      cta: {
        headline: "Bắt Đầu Sự Nghiệp Tại Đức",
        description: "Hãy cùng định hình con đường thành công của bạn.",
        button: "Yêu Cầu Tư Vấn Ngay"
      }
    }
  },
  about: {
    hero: {
      headline: "Về talentsCARE",
      description: "Chúng tôi là đối tác của bạn cho hội nhập thành công và hợp tác bền vững trong môi trường làm việc toàn cầu."
    },
    mission: {
      headline: "Sứ Mệnh Của Chúng Tôi",
      paragraph1: "Chúng tôi tin vào một thế giới làm việc nơi sự đa dạng được xem là sức mạnh và sự khác biệt văn hóa là sự phong phú. Sứ mệnh của chúng tôi là xây dựng cầu nối giữa doanh nghiệp và nhân tài quốc tế.",
      paragraph2: "Với đam mê, chuyên môn và hiểu biết sâu sắc về động lực liên văn hóa, chúng tôi đồng hành cùng cả hai bên trên con đường chung đến thành công. Chúng tôi tạo không gian gặp gỡ, thúc đẩy sự hiểu biết và phát triển giải pháp bền vững cho thách thức của thế giới làm việc toàn cầu hóa."
    },
    valuesHeadline: "Giá Trị Của Chúng Tôi",
    values: {
      empathy: {
        title: "Đồng Cảm",
        description: "Chúng tôi đối xử với mọi người bằng sự trân trọng, tôn trọng và quan tâm thực sự đến câu chuyện cá nhân của họ."
      },
      excellence: {
        title: "Xuất Sắc",
        description: "Chúng tôi phấn đấu đạt chất lượng cao nhất trong mọi việc và không ngừng phát triển."
      },
      integrity: {
        title: "Chính Trực",
        description: "Chúng tôi hành động minh bạch, đáng tin cậy và có trách nhiệm trong mọi mối quan hệ."
      },
      diversity: {
        title: "Đa Dạng",
        description: "Chúng tôi tôn vinh sự khác biệt và xem sự đa dạng văn hóa là nguồn gốc của sự đổi mới và sức mạnh."
      }
    },
    approach: {
      headline: "Phương Pháp Của Chúng Tôi",
      description: "Chúng tôi kết hợp chuyên môn vững chắc với kinh nghiệm thực tế và cái nhìn toàn diện về hội nhập và hợp tác.",
      step1: {
        title: "Phân Tích & Hiểu Biết",
        description: "Chúng tôi lắng nghe và phân tích tình huống và thách thức cụ thể của bạn."
      },
      step2: {
        title: "Khái Niệm & Chiến Lược",
        description: "Chúng tôi phát triển giải pháp tùy chỉnh phù hợp với mục tiêu và nguồn lực của bạn."
      },
      step3: {
        title: "Triển Khai & Hỗ Trợ",
        description: "Chúng tôi ở bên cạnh bạn và đảm bảo kết quả bền vững."
      }
    },
    cta: {
      headline: "Hãy Cùng Viết Câu Chuyện Thành Công",
      description: "Liên hệ với chúng tôi để được tư vấn ban đầu không ràng buộc.",
      button: "Liên Hệ",
      teamButton: "Gặp Gỡ Đội Ngũ"
    }
  },
  team: {
    hero: {
      headline: "Đội Ngũ Của Chúng Tôi",
      description: "Gặp gỡ các chuyên gia làm việc với đam mê và năng lực cho sự thành công của bạn."
    },
    member1: {
      name: "Dr. Maria Schmidt",
      role: "Nhà Sáng Lập & Giám Đốc Điều Hành",
      bio: "Hơn 15 năm kinh nghiệm trong tư vấn HR quốc tế và phát triển tổ chức."
    },
    member2: {
      name: "Ahmad Hassan",
      role: "Tư Vấn Viên Hội Nhập Cấp Cao",
      bio: "Chuyên gia về giao tiếp liên văn hóa và quản lý đa dạng."
    },
    member3: {
      name: "Lisa Chen",
      role: "Coach Sự Nghiệp",
      bio: "Chuyên gia phát triển nghề nghiệp và kế hoạch sự nghiệp cho nhân tài quốc tế."
    }
  },
  blog: {
    hero: {
      headline: "Tin Tức & Thông Tin",
      description: "Luôn cập nhật xu hướng, thực hành tốt nhất và tin tức từ thế giới hội nhập."
    },
    comingSoon: {
      headline: "Sắp Ra Mắt",
      description: "Chúng tôi đang làm việc trên nội dung thú vị cho bạn. Đăng ký nhận tin để không bỏ lỡ cập nhật.",
      cta: "Đăng Ký Nhận Tin"
    }
  },
  contact: {
    ...vi.contact,
    hero: {
      headline: "Liên Hệ",
      description: "Bạn có câu hỏi hoặc muốn tìm hiểu thêm về dịch vụ của chúng tôi? Chúng tôi mong nhận được tin nhắn của bạn."
    },
    formHeadline: "Gửi Tin Nhắn",
    infoHeadline: "Thông Tin Liên Hệ",
    info: {
      ...vi.contact?.info,
      hoursWeekday: "Thứ 2-6: 09:00 - 18:00",
      hoursWeekend: "Thứ 7-CN: Đóng cửa"
    }
  },
  notFound: {
    headline: "Không Tìm Thấy Trang",
    description: "Trang bạn đang tìm kiếm không tồn tại. Có thể đã bị di chuyển hoặc xóa.",
    homeButton: "Về Trang Chủ",
    contactButton: "Liên Hệ"
  },
  legal: {
    privacy: {
      headline: "Chính Sách Bảo Mật",
      lastUpdated: "Cập nhật lần cuối: Tháng 4 2026",
      section1: {
        title: "1. Bảo Mật Tổng Quan",
        content: "Các lưu ý sau đây cung cấp tổng quan đơn giản về những gì xảy ra với dữ liệu cá nhân của bạn khi bạn truy cập trang web này. Dữ liệu cá nhân là bất kỳ dữ liệu nào mà bạn có thể được xác định cá nhân."
      },
      section2: {
        title: "2. Thu Thập Dữ Liệu Trên Trang Web",
        content: "Xử lý dữ liệu trên trang web này được thực hiện bởi người vận hành trang web. Chi tiết liên hệ có thể được tìm thấy trong phần imprint của trang web này. Dữ liệu của bạn được thu thập một phần bằng cách bạn cung cấp cho chúng tôi, ví dụ qua biểu mẫu liên hệ."
      },
      section3: {
        title: "3. Công Cụ Phân Tích",
        content: "Khi truy cập trang web này, hành vi lướt web của bạn có thể được đánh giá thống kê. Điều này được thực hiện chủ yếu với các chương trình phân tích. Thông tin chi tiết về các chương trình phân tích này có thể được tìm thấy trong các phần sau của chính sách bảo mật này."
      },
      section4: {
        title: "4. Quyền Của Bạn",
        content: "Bạn có quyền nhận thông tin về nguồn gốc, người nhận và mục đích của dữ liệu cá nhân được lưu trữ của bạn bất cứ lúc nào. Bạn cũng có quyền yêu cầu chỉnh sửa hoặc xóa dữ liệu này."
      },
      section5: {
        title: "5. Liên Hệ",
        content: "Nếu bạn có bất kỳ câu hỏi nào về bảo mật dữ liệu, bạn có thể liên hệ với chúng tôi bất cứ lúc nào. Chi tiết liên hệ có thể được tìm thấy trong phần imprint của trang web này."
      }
    },
    imprint: {
      headline: "Thông Tin Pháp Lý",
      company: {
        title: "Thông Tin Theo § 5 TMG"
      },
      contact: {
        title: "Liên Hệ",
        phone: "Điện Thoại",
        email: "Email"
      },
      management: {
        title: "Giám Đốc Được Ủy Quyền",
        names: "Dr. Maria Schmidt"
      },
      register: {
        title: "Đăng Ký",
        court: "Tòa Án Đăng Ký",
        number: "Số Đăng Ký",
        vat: "Mã Số Thuế"
      },
      responsible: {
        title: "Chịu Trách Nhiệm Nội Dung",
        name: "Dr. Maria Schmidt"
      }
    },
    terms: {
      headline: "Điều Khoản & Điều Kiện",
      lastUpdated: "Cập nhật lần cuối: Tháng 4 2026",
      section1: {
        title: "1. Phạm Vi",
        content: "Các Điều khoản và Điều kiện Chung này áp dụng cho tất cả các hợp đồng giữa talentsCARE GmbH và khách hàng để cung cấp dịch vụ tư vấn và đào tạo."
      },
      section2: {
        title: "2. Ký Kết Hợp Đồng",
        content: "Hợp đồng được ký kết bằng cách khách hàng chấp nhận đề nghị. Chấp nhận có thể được thực hiện bằng văn bản, bằng lời nói hoặc thông qua hành động ngầm định."
      },
      section3: {
        title: "3. Phạm Vi Dịch Vụ",
        content: "Phạm vi dịch vụ được cung cấp được xác định trong đề nghị tương ứng hoặc mô tả dịch vụ. Thay đổi phạm vi dịch vụ yêu cầu thỏa thuận bằng văn bản."
      },
      section4: {
        title: "4. Thù Lao & Điều Kiện Thanh Toán",
        content: "Thù lao dựa trên bảng giá hiện hành. Hóa đơn phải được thanh toán trong vòng 14 ngày kể từ ngày hóa đơn mà không khấu trừ."
      },
      section5: {
        title: "5. Trách Nhiệm Pháp Lý",
        content: "Chúng tôi hoàn toàn chịu trách nhiệm cho hành vi cố ý và sơ suất nghiêm trọng. Trong trường hợp sơ suất nhẹ, chúng tôi chỉ chịu trách nhiệm cho vi phạm nghĩa vụ hợp đồng thiết yếu."
      }
    }
  }
};

// Merge updates
const updatedEN = { ...en, ...enUpdates };
const updatedVI = { ...vi, ...viUpdates };

// Write updated files
fs.writeFileSync(enFile, JSON.stringify(updatedEN, null, 2), 'utf8');
fs.writeFileSync(viFile, JSON.stringify(updatedVI, null, 2), 'utf8');

console.log('✅ English translations updated');
console.log('✅ Vietnamese translations updated');
console.log('📊 EN file: ' + fs.statSync(enFile).size + ' bytes');
console.log('📊 VI file: ' + fs.statSync(viFile).size + ' bytes');
