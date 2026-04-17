/**
 * Success Stories Section
 * Showcases testimonials and success metrics
 */

'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

const stories = [
  {
    name: 'Nguyễn Minh Anh',
    role: 'Software Engineer tại SAP',
    country: 'Vietnam',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    quote: 'talentsCARE đã giúp tôi tìm được công việc mơ ước tại Đức. Từ visa đến hội nhập văn hóa, họ hỗ trợ tận tình ở mọi bước.',
    achievement: 'Tăng lương 150%',
    duration: '3 tháng'
  },
  {
    name: 'Ahmad Hassan',
    role: 'Data Scientist tại Siemens',
    country: 'Syria',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    quote: 'Chương trình mentoring và đào tạo ngôn ngữ chuyên nghiệp đã giúp tôi tự tin hơn trong môi trường làm việc quốc tế.',
    achievement: 'Thăng tiến sau 1 năm',
    duration: '6 tháng'
  },
  {
    name: 'Maria González',
    role: 'Product Manager tại BMW',
    country: 'Spain',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    quote: 'Sự hỗ trợ liên tục và cộng đồng mạnh mẽ đã biến Đức thành ngôi nhà thứ hai của tôi. Cảm ơn đội ngũ talentsCARE!',
    achievement: 'Định cư thành công',
    duration: '1 năm'
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#FDB927]/10 text-accent rounded-full text-sm font-semibold mb-4">
              Câu Chuyện Thành Công
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Những Người Đã Thành Công
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hơn 500+ chuyên gia quốc tế đã xây dựng sự nghiệp thành công tại Đức cùng chúng tôi
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Avatar Section */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-90 group-hover:scale-110 transition-transform duration-500"
                    style={{ background: story.image }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Country Flag Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  {/* Name & Role Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-xl font-bold mb-1">{story.name}</h3>
                    <p className="text-sm text-white/90">{story.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 italic mb-6 flex-1 leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#FDB927]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#FDB927]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary">{story.achievement}</div>
                        <div className="text-xs text-gray-500">{story.duration}</div>
                      </div>
                    </div>
                    <div className="text-2xl">🇩🇪</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Bạn muốn là người tiếp theo?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Bắt đầu hành trình của bạn
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
