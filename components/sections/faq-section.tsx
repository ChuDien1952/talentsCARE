/**
 * FAQ Accordion Section
 * Frequently asked questions with expandable answers
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Link } from '@/lib/i18n/navigation';

const faqs = [
  {
    question: 'Dịch vụ của talentsCARE có mất phí không?',
    answer: 'Không, tất cả dịch vụ của chúng tôi hoàn toàn miễn phí cho ứng viên. Chúng tôi tuân thủ nguyên tắc "Nhà tuyển dụng trả phí" theo tiêu chuẩn quốc tế của WHO và ILO. Chi phí được thanh toán bởi các doanh nghiệp tuyển dụng.'
  },
  {
    question: 'Tôi cần trình độ tiếng Đức như thế nào?',
    answer: 'Yêu cầu tiếng Đức tùy thuộc vào vị trí công việc. Đối với hầu hết các vị trí, bạn cần ít nhất B1-B2. Chúng tôi cung cấp các khóa đào tạo tiếng Đức từ A1 đến C1, bao gồm cả ngôn ngữ chuyên ngành. Ngay cả khi bạn đang ở mức độ mới bắt đầu, chúng tôi vẫn có thể hỗ trợ bạn.'
  },
  {
    question: 'Mất bao lâu để tìm được việc làm tại Đức?',
    answer: 'Trung bình, quá trình từ khi bắt đầu đến khi có việc làm mất khoảng 4-6 tháng. Điều này bao gồm đánh giá kỹ năng, đào tạo ngôn ngữ, chuẩn bị hồ sơ, kết nối với nhà tuyển dụng và hoàn tất thủ tục visa. Tuy nhiên, thời gian có thể ngắn hơn hoặc dài hơn tùy thuộc vào ngành nghề và trình độ của bạn.'
  },
  {
    question: 'Tôi có được hỗ trợ về visa và thủ tục pháp lý không?',
    answer: 'Có, chúng tôi cung cấp hỗ trợ đầy đủ về mọi thủ tục pháp lý. Đội ngũ của chúng tôi sẽ tư vấn về loại visa phù hợp, hướng dẫn chuẩn bị hồ sơ, và hỗ trợ trong quá trình nộp đơn. Chúng tôi cũng làm việc chặt chẽ với BAMF và các cơ quan chức năng để đảm bảo quy trình diễn ra suôn sẻ.'
  },
  {
    question: 'Chương trình hội nhập văn hóa bao gồm những gì?',
    answer: 'Chương trình hội nhập của chúng tôi bao gồm: đào tạo về văn hóa làm việc Đức, kỹ năng giao tiếp trong môi trường chuyên nghiệp, hỗ trợ sinh hoạt hàng ngày (nhà ở, bảo hiểm, ngân hàng), kết nối cộng đồng, và mentoring 1-1 với các chuyên gia giàu kinh nghiệm. Chúng tôi đồng hành cùng bạn trong suốt 12-24 tháng đầu tiên.'
  },
  {
    question: 'Tôi có cần bằng cấp được công nhận tại Đức không?',
    answer: 'Đối với hầu hết các nghề nghiệp, bạn cần công nhận bằng cấp hoặc có bằng tương đương. Chúng tôi sẽ hỗ trợ bạn trong quá trình công nhận bằng cấp thông qua các cơ quan có thẩm quyền như ZAB hoặc Anabin. Đối với một số ngành như IT, kinh nghiệm làm việc cũng được chấp nhận thay thế.'
  },
  {
    question: 'Tôi có được hỗ trợ sau khi đã có việc làm không?',
    answer: 'Có, hỗ trợ của chúng tôi không dừng lại khi bạn có việc. Chúng tôi tiếp tục đồng hành trong giai đoạn onboarding, cung cấp coaching sự nghiệp, hỗ trợ giải quyết khó khăn, và tư vấn về con đường phát triển dài hạn. Bạn cũng được tham gia cộng đồng alumni với các sự kiện networking và chia sẻ kinh nghiệm.'
  },
  {
    question: 'Tôi có thể mang gia đình sang Đức không?',
    answer: 'Có, Đức cho phép đoàn tụ gia đình cho người lao động nước ngoài. Yêu cầu bao gồm chứng minh thu nhập ổn định và chỗ ở phù hợp. Chúng tôi sẽ tư vấn chi tiết về thủ tục visa cho vợ/chồng và con cái, cũng như hỗ trợ hội nhập cho toàn bộ gia đình bạn.'
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors px-4 rounded-lg"
      >
        <div className="flex-1">
          <h3 className={`font-semibold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-gray-900'}`}>
            {question}
          </h3>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-600'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6">
              <p className="text-gray-600 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Câu Hỏi Thường Gặp
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Giải Đáp Thắc Mắc
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những câu hỏi phổ biến từ các chuyên gia quốc tế
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
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
            <p className="text-gray-600 mb-6">Vẫn còn câu hỏi khác?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-accent hover:shadow-2xl transition-all duration-300"
              >
                Liên hệ tư vấn
              </Link>
              <a
                href="mailto:info@talentscare.de"
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                Gửi email cho chúng tôi
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
