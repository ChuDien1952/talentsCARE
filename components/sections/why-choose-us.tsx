/**
 * Why Choose Us Section
 * Icon grid showcasing key benefits and differentiators
 */

'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

const benefits = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Đảm bảo chất lượng',
    description: 'Được chứng nhận ISO 9001:2015 và công nhận bởi BAMF',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Không phí cho ứng viên',
    description: 'Nguyên tắc Nhà tuyển dụng trả phí - hoàn toàn miễn phí cho bạn',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Mạng lưới rộng',
    description: 'Kết nối với 200+ doanh nghiệp hàng đầu tại Đức',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
    title: 'Đào tạo ngôn ngữ',
    description: 'Khóa học tiếng Đức chuyên sâu từ A1 đến C1',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Hỗ trợ visa',
    description: 'Tư vấn và hỗ trợ đầy đủ về thủ tục visa và giấy phép lao động',
    gradient: 'from-yellow-500 to-amber-500'
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Hội nhập văn hóa',
    description: 'Đào tạo và hỗ trợ thích nghi với văn hóa làm việc Đức',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    title: 'Cộng đồng mạnh',
    description: 'Tham gia mạng lưới 500+ chuyên gia quốc tế',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    title: 'Tư vấn sự nghiệp',
    description: 'Coaching cá nhân hóa cho lộ trình phát triển dài hạn',
    gradient: 'from-violet-500 to-purple-500'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Ưu Điểm Vượt Trội
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Tại Sao Chọn talentsCARE?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            9 lý do khiến chúng tôi là đối tác tốt nhất cho hành trình sự nghiệp của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 overflow-hidden h-full">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${benefit.gradient} rounded-bl-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Năm kinh nghiệm' },
              { number: '500+', label: 'Nhân tài thành công' },
              { number: '200+', label: 'Đối tác doanh nghiệp' },
              { number: '95%', label: 'Tỷ lệ hài lòng' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
