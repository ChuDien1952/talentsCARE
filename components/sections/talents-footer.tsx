/**
 * Talents Page Unique Footer
 * Distinctive footer design specifically for the Services/Talents page
 */

'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function TalentsFooter() {
  const t = useTranslations();
  const nav = t.raw('common.nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB927] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-2xl" />
      </div>

      {/* Wave Separator */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg className="w-full h-16 md:h-24 text-primary" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <Container className="relative z-10 py-20">
        {/* Career Resources Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quick Contact Form */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Bắt đầu hành trình của bạn
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                Đặt lịch tư vấn miễn phí ngay hôm nay
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="w-full px-6 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDB927]"
                />
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-6 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDB927]"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-[#FDB927] hover:bg-white hover:text-primary text-white font-semibold shadow-xl transition-all"
                >
                  Gửi yêu cầu tư vấn
                </Button>
              </form>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Nhận cập nhật việc làm
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                Đăng ký nhận thông báo về cơ hội việc làm và tips sự nghiệp
              </p>

              {/* Success Stories Counter */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                  <div className="text-4xl font-bold text-[#FDB927] mb-1">500+</div>
                  <div className="text-white/80 text-sm">Nhân tài thành công</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                  <div className="text-4xl font-bold text-[#FDB927] mb-1">95%</div>
                  <div className="text-white/80 text-sm">Tỷ lệ hài lòng</div>
                </div>
              </div>

              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-6 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDB927]"
                />
                <Button
                  type="submit"
                  className="rounded-full bg-[#FDB927] hover:bg-white hover:text-primary px-8 font-semibold shadow-xl transition-all"
                >
                  Đăng ký
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              talentsCARE
            </h3>
            <p className="text-white/70 mb-4">
              Đối tác của bạn trong hành trình thành công nghề nghiệp tại Đức
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { name: 'Facebook', icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' },
                { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FDB927] flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              {['Coaching Sự Nghiệp', 'Tìm Việc', 'Đào Tạo Ngôn Ngữ', 'Hội Nhập Văn Hóa'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/services/talents"
                    className="text-white/70 hover:text-[#FDB927] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Tài nguyên</h4>
            <ul className="space-y-2">
              {[
                { label: 'Câu chuyện thành công', href: '#success-stories' },
                { label: 'Câu hỏi thường gặp', href: '#faq' },
                { label: 'Blog', href: '/blog' },
                { label: 'Về chúng tôi', href: '/about' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#FDB927] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Frankfurt am Main, Germany</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@talentscare.de" className="hover:text-[#FDB927] transition-colors">
                  info@talentscare.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+4969xxxxxxxx" className="hover:text-[#FDB927] transition-colors">
                  +49 69 XXX XXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} talentsCARE. Bảo lưu mọi quyền.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-[#FDB927] transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-[#FDB927] transition-colors">
                Điều khoản
              </Link>
              <Link href="/imprint" className="text-white/60 hover:text-[#FDB927] transition-colors">
                Thông tin xuất bản
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
