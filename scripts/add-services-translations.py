#!/usr/bin/env python3
"""
Add Services page translations to en.json and vi.json
"""

import json
from pathlib import Path

def add_employers_translations():
    """Add employers services translations"""

    # English translations
    en_employers = {
        "tagline": "Recruitment is only the first step – true talent acquisition means sustainable integration",
        "intro": {
            "headline": "Why talentsCARE?",
            "paragraph1": "We support companies in not only attracting international professionals but also retaining them long-term. With practical onboarding programs, intercultural training, and nationwide mentoring, we create the foundation for sustainable integration, stable teams, and long-term business success.",
            "paragraph2": "The skills shortage poses major challenges for many companies – especially regarding sustainable integration and long-term employee retention."
        },
        "detailedServices": {
            "recruiting": {
                "title": "Recruitment Consulting",
                "audience": "Target Audience: Companies with open positions for professionals and trainees from third countries",
                "description": "We find professionals and trainees from third countries who fit your company both professionally and personally. Our consulting includes needs analysis, job profile creation, and matching with pre-qualified candidates from the VIETconsult network."
            },
            "onboarding": {
                "title": "Onboarding Programs",
                "audience": "Target Audience: New international employees, their teams, and managers",
                "description": "We design the start systematically – for talents, teams, and managers. Structured onboarding reduces onboarding time and increases commitment from day one."
            },
            "training": {
                "title": "Intercultural Training",
                "audience": "Target Audience: Teams, departments, and managers working with international colleagues",
                "description": "We train teams and managers to improve collaboration and communication. Diversity becomes strength – misunderstandings are avoided, collaboration strengthened."
            },
            "mentoring": {
                "title": "Mentoring Programs",
                "audience": "Target Audience: Companies wanting to build a structured mentoring system",
                "description": "A proven tool for sustainable integration. Mentoring builds trust and contributes to long-term talent retention."
            },
            "retention": {
                "title": "Talent Retention",
                "audience": "Target Audience: Companies with existing international employees",
                "description": "We develop strategies so talents not only stay but also develop professionally and personally."
            },
            "cooperation": {
                "title": "Strong Cooperation",
                "audience": "Target Audience: Authorities, chambers, educational institutions, and companies",
                "description": "We handle coordination with authorities, chambers, and institutions and design practical formats together."
            }
        }
    }

    # Vietnamese translations
    vi_employers = {
        "tagline": "Tuyển dụng chỉ là bước đầu tiên – thu hút nhân tài thực sự có nghĩa là hội nhập bền vững",
        "intro": {
            "headline": "Tại sao chọn talentsCARE?",
            "paragraph1": "Chúng tôi hỗ trợ doanh nghiệp không chỉ thu hút nhân tài quốc tế mà còn giữ chân họ lâu dài. Với các chương trình định hướng thực tế, đào tạo liên văn hóa và cố vấn toàn quốc, chúng tôi tạo nền tảng cho sự hội nhập bền vững, đội ngũ ổn định và thành công kinh doanh lâu dài.",
            "paragraph2": "Tình trạng thiếu hụt nhân lực đặt ra nhiều thách thức lớn cho các doanh nghiệp – đặc biệt là vấn đề hội nhập bền vững và giữ chân nhân viên lâu dài."
        },
        "detailedServices": {
            "recruiting": {
                "title": "Tư vấn Tuyển dụng",
                "audience": "Đối tượng: Doanh nghiệp có vị trí tuyển dụng chuyên gia và học viên từ các quốc gia thứ ba",
                "description": "Chúng tôi tìm kiếm chuyên gia và học viên từ các quốc gia thứ ba phù hợp với doanh nghiệp của bạn cả về chuyên môn lẫn con người. Dịch vụ tư vấn bao gồm phân tích nhu cầu, xây dựng hồ sơ công việc và kết nối với ứng viên đã được sàng lọc từ mạng lưới VIETconsult."
            },
            "onboarding": {
                "title": "Chương trình Định hướng",
                "audience": "Đối tượng: Nhân viên quốc tế mới, đội ngũ và quản lý của họ",
                "description": "Chúng tôi thiết kế khởi đầu có hệ thống – cho nhân tài, đội ngũ và quản lý. Định hướng có cấu trúc giảm thời gian làm quen và tăng cam kết ngay từ đầu."
            },
            "training": {
                "title": "Đào tạo Liên văn hóa",
                "audience": "Đối tượng: Đội ngũ, phòng ban và quản lý làm việc với đồng nghiệp quốc tế",
                "description": "Chúng tôi đào tạo đội ngũ và quản lý để cải thiện sự hợp tác và giao tiếp. Đa dạng trở thành sức mạnh – hiểu lầm được tránh, hợp tác được củng cố."
            },
            "mentoring": {
                "title": "Chương trình Cố vấn",
                "audience": "Đối tượng: Doanh nghiệp muốn xây dựng hệ thống cố vấn có cấu trúc",
                "description": "Công cụ đã được chứng minh cho sự hội nhập bền vững. Cố vấn xây dựng lòng tin và góp phần giữ chân nhân tài lâu dài."
            },
            "retention": {
                "title": "Giữ chân Nhân tài",
                "audience": "Đối tượng: Doanh nghiệp có nhân viên quốc tế hiện tại",
                "description": "Chúng tôi phát triển chiến lược để nhân tài không chỉ ở lại mà còn phát triển cả về chuyên môn và cá nhân."
            },
            "cooperation": {
                "title": "Hợp tác Mạnh mẽ",
                "audience": "Đối tượng: Cơ quan chức năng, phòng thương mại, tổ chức giáo dục và doanh nghiệp",
                "description": "Chúng tôi xử lý việc phối hợp với cơ quan chức năng, phòng thương mại và các tổ chức, đồng thời thiết kế các hình thức thực tế cùng nhau."
            }
        }
    }

    return en_employers, vi_employers

def add_talents_translations():
    """Add talents services translations"""

    # English translations
    en_talents = {
        "tagline": "Our Goal: You should feel not only professionally but also personally safe, understood, and welcome",
        "intro": {
            "headline": "Your Journey to Germany",
            "description": "We accompany international professionals on their way to Germany – from preparation in the home country to successful integration in work and daily life. With practical training, individual support, and nationwide mentoring, we create the foundation for a secure start, personal development, and long-term success."
        },
        "phasesHeadline": "Your Integration in 6 Phases",
        "phases": {
            "phase1": {
                "title": "Preparation in Home Country",
                "timeline": "Timeline: 3–6 months before arrival",
                "description": "Together with our cooperation partners on site (VIETconsult / HDEU Vietnam), we optimally prepare talents for their start in Germany."
            },
            "phase2": {
                "title": "Support for Starting in Germany",
                "timeline": "Timeline: First 1–3 months after arrival",
                "description": "We offer not mere accompaniment, but real support for settling in."
            },
            "phase3": {
                "title": "Professional Support",
                "timeline": "Timeline: Months 1–12 in the company",
                "description": "Many companies limit themselves to professional onboarding – we deliberately go further."
            },
            "phase4": {
                "title": "Personal Development",
                "timeline": "Timeline: From month 6, ongoing",
                "description": "We support talents as whole people – not just as professionals.",
                "items": [
                    "Building professional networks: Events, industry meetings, alumni network",
                    "Building private networks: Sports clubs, cultural groups, neighborhood initiatives",
                    "Coaching for independence: Self-confidence, personal responsibility, decision-making ability",
                    "Language development: Beyond B2, technical language, understanding dialects",
                    "Career planning: What next steps are possible? Further education, advancement, specialization"
                ]
            },
            "phase5": {
                "title": "Mentoring",
                "timeline": "Timeline: 12–24 months, extendable",
                "description": "Our mentoring programs accompany talents individually throughout the entire integration process.",
                "items": [
                    "Personal support by experienced mentors (1:1)",
                    "Orientation in professional and daily life",
                    "Support in building professional and social networks",
                    "Regular meetings (at least 2x monthly)",
                    "Joint goal setting and progress monitoring"
                ]
            },
            "phase6": {
                "title": "Digital Support & Learning Platforms",
                "timeline": "Timeline: Ongoing",
                "description": "We also support talents digitally to enable continuous learning and networking.",
                "items": [
                    "Online learning platforms: Professional and language education (asynchronous)",
                    "Virtual networks: Exchange with other talents nationwide",
                    "Digital everyday aids: Apps and tools for authorities, housing, health",
                    "Live webinars: Monthly topic evenings on relevant integration questions",
                    "Success stories: Platform for sharing experiences and inspiration"
                ]
            }
        }
    }

    # Vietnamese translations
    vi_talents = {
        "tagline": "Mục tiêu của chúng tôi: Bạn cảm thấy không chỉ chuyên nghiệp mà còn an toàn, được hiểu và được chào đón về mặt con người",
        "intro": {
            "headline": "Hành trình của bạn đến Đức",
            "description": "Chúng tôi đồng hành cùng các chuyên gia quốc tế trên con đường đến Đức – từ chuẩn bị ở quê nhà đến hội nhập thành công trong công việc và cuộc sống hàng ngày. Với đào tạo thực tế, hỗ trợ cá nhân và cố vấn toàn quốc, chúng tôi tạo nền tảng cho sự khởi đầu vững chắc, phát triển cá nhân và thành công lâu dài."
        },
        "phasesHeadline": "Hội nhập của bạn qua 6 Giai đoạn",
        "phases": {
            "phase1": {
                "title": "Chuẩn bị ở Quê nhà",
                "timeline": "Thời gian: 3–6 tháng trước khi nhập cảnh",
                "description": "Cùng với các đối tác hợp tác tại chỗ (VIETconsult / HDEU Vietnam), chúng tôi chuẩn bị tối ưu cho nhân tài khởi đầu ở Đức."
            },
            "phase2": {
                "title": "Hỗ trợ Bắt đầu ở Đức",
                "timeline": "Thời gian: 1–3 tháng đầu sau khi đến",
                "description": "Chúng tôi không chỉ đồng hành mà còn hỗ trợ thực sự cho việc định cư."
            },
            "phase3": {
                "title": "Hỗ trợ Nghề nghiệp",
                "timeline": "Thời gian: Tháng 1–12 tại công ty",
                "description": "Nhiều công ty chỉ giới hạn ở việc định hướng chuyên môn – chúng tôi có chủ đích đi xa hơn."
            },
            "phase4": {
                "title": "Phát triển Cá nhân",
                "timeline": "Thời gian: Từ tháng 6, liên tục",
                "description": "Chúng tôi hỗ trợ nhân tài như con người toàn diện – không chỉ là chuyên gia.",
                "items": [
                    "Xây dựng mạng lưới nghề nghiệp: Sự kiện, cuộc họp ngành, mạng lưới cựu sinh viên",
                    "Xây dựng mạng lưới cá nhân: Câu lạc bộ thể thao, nhóm văn hóa, sáng kiến hàng xóm",
                    "Coaching về tự chủ: Tự tin, trách nhiệm cá nhân, khả năng ra quyết định",
                    "Phát triển ngôn ngữ: Vượt B2, ngôn ngữ chuyên ngành, hiểu phương ngữ",
                    "Lập kế hoạch sự nghiệp: Các bước tiếp theo có thể? Đào tạo thêm, thăng tiến, chuyên môn hóa"
                ]
            },
            "phase5": {
                "title": "Cố vấn",
                "timeline": "Thời gian: 12–24 tháng, có thể kéo dài",
                "description": "Chương trình cố vấn của chúng tôi đồng hành cá nhân với nhân tài trong suốt quá trình hội nhập.",
                "items": [
                    "Hỗ trợ cá nhân bởi cố vấn giàu kinh nghiệm (1:1)",
                    "Định hướng trong nghề nghiệp và cuộc sống hàng ngày",
                    "Hỗ trợ xây dựng mạng lưới nghề nghiệp và xã hội",
                    "Gặp gỡ thường xuyên (ít nhất 2 lần/tháng)",
                    "Đặt mục tiêu chung và theo dõi tiến độ"
                ]
            },
            "phase6": {
                "title": "Hỗ trợ Kỹ thuật số & Nền tảng Học tập",
                "timeline": "Thời gian: Liên tục",
                "description": "Chúng tôi cũng hỗ trợ nhân tài bằng kỹ thuật số để cho phép học tập và kết nối liên tục.",
                "items": [
                    "Nền tảng học trực tuyến: Đào tạo nghề nghiệp và ngôn ngữ (không đồng bộ)",
                    "Mạng lưới ảo: Trao đổi với nhân tài khác trên toàn quốc",
                    "Công cụ hỗ trợ hàng ngày kỹ thuật số: Ứng dụng và công cụ cho cơ quan, nhà ở, sức khỏe",
                    "Webinar trực tiếp: Buổi tối chủ đề hàng tháng về các câu hỏi hội nhập liên quan",
                    "Câu chuyện thành công: Nền tảng chia sẻ kinh nghiệm và cảm hứng"
                ]
            }
        }
    }

    return en_talents, vi_talents

def main():
    """Main function"""
    # Get translations
    en_employers, vi_employers = add_employers_translations()
    en_talents, vi_talents = add_talents_translations()

    # Load existing translations
    en_path = Path("messages/en.json")
    vi_path = Path("messages/vi.json")

    with open(en_path, 'r', encoding='utf-8') as f:
        en_data = json.load(f)

    with open(vi_path, 'r', encoding='utf-8') as f:
        vi_data = json.load(f)

    # Add new translations
    en_data['services']['employers'].update(en_employers)
    en_data['services']['talents'].update(en_talents)

    vi_data['services']['employers'].update(vi_employers)
    vi_data['services']['talents'].update(vi_talents)

    # Save updated translations
    with open(en_path, 'w', encoding='utf-8') as f:
        json.dump(en_data, f, ensure_ascii=False, indent=2)

    with open(vi_path, 'w', encoding='utf-8') as f:
        json.dump(vi_data, f, ensure_ascii=False, indent=2)

    print("[OK] Translations added successfully!")
    print(f"  - English: {len(en_employers) + len(en_talents)} keys added")
    print(f"  - Vietnamese: {len(vi_employers) + len(vi_talents)} keys added")

if __name__ == "__main__":
    main()
