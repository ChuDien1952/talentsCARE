/**
 * How It Works Section
 * Visual process flow diagram showing the journey
 */

'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Link } from '@/lib/i18n/navigation';

const steps = [
  {
    number: '01',
    title: 'Đăng ký & Đánh giá',
    description: 'Điền form đăng ký và nhận đánh giá kỹ năng miễn phí từ chuyên gia',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    color: 'from-blue-500 to-blue-600',
    delay: 0
  },
  {
    number: '02',
    title: 'Lập kế hoạch',
    description: 'Tư vấn 1-1 để xây dựng lộ trình sự nghiệp phù hợp với mục tiêu của bạn',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    color: 'from-purple-500 to-purple-600',
    delay: 0.1
  },
  {
    number: '03',
    title: 'Chuẩn bị',
    description: 'Đào tạo ngôn ngữ, kỹ năng mềm và hồ sơ ứng tuyển chuyên nghiệp',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: 'from-green-500 to-green-600',
    delay: 0.2
  },
  {
    number: '04',
    title: 'Kết nối',
    description: 'Giới thiệu đến nhà tuyển dụng phù hợp và hỗ trợ phỏng vấn',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: 'from-yellow-500 to-yellow-600',
    delay: 0.3
  },
  {
    number: '05',
    title: 'Hội nhập',
    description: 'Đồng hành trong quá trình làm việc và sinh sống tại Đức',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    color: 'from-red-500 to-red-600',
    delay: 0.4
  },
  {
    number: '06',
    title: 'Phát triển',
    description: 'Hỗ trợ liên tục cho sự thăng tiến và phát triển dài hạn',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    color: 'from-pink-500 to-pink-600',
    delay: 0.5
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Quy Trình Làm Việc
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Chúng Tôi Hỗ Trợ Như Thế Nào?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quy trình 6 bước đơn giản và hiệu quả để đưa bạn đến thành công
          </p>
        </motion.div>

        {/* Desktop View - Flowing Path */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Path */}
            <svg className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#003366" />
                  <stop offset="50%" stopColor="#CE1126" />
                  <stop offset="100%" stopColor="#FDB927" />
                </linearGradient>
              </defs>
              <path
                d="M 0 8 Q 150 -20, 300 8 T 600 8 T 900 8 T 1200 8"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10 5"
              />
            </svg>

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className="flex flex-col items-center"
                >
                  {/* Icon Circle */}
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-2xl mb-4 flex items-center justify-center group hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-primary mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="flex gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center`}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent mx-auto mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Trung bình 4-6 tháng</strong> từ khi bắt đầu đến khi có việc làm
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#FDB927] text-white font-semibold rounded-full hover:bg-primary hover:shadow-2xl transition-all duration-300"
            >
              Bắt đầu ngay hôm nay
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
