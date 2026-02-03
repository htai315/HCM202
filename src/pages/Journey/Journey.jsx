import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Star, ChevronDown } from 'lucide-react'

import heroBg from '../../assets/images/anhlacovietnam.jpg'

const phases = [
  {
    id: 1,
    year: '1911',
    title: 'Ra Đi Tìm Đường',
    subtitle: 'Tìm thấy con đường giải phóng dân tộc',
    icon: '🚢',
    color: '#3B82F6',
    gradient: 'from-blue-500 to-blue-800',
    shortDesc: 'Từ bến cảng Nhà Rồng đến tìm ra con đường cách mạng',
    content: 'Ngày 5/6/1911, với tên Văn Ba, Người rời bến cảng Nhà Rồng trên tàu Amiran Latusơ Tơrêvin. Trải qua 9 năm bôn ba khắp thế giới, đến tháng 7/1920, Người đọc được Luận cương của Lênin và tìm thấy con đường giải phóng dân tộc.'
  },
  {
    id: 2,
    year: '1921',
    title: 'Chuẩn Bị Cách Mạng',
    subtitle: 'Xây dựng nền tảng chính trị và tổ chức',
    icon: '📚',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-amber-700',
    shortDesc: 'Hoạt động trong phong trào cộng sản quốc tế',
    content: 'Giai đoạn này đánh dấu bước trưởng thành về mặt tổ chức và lý luận của Nguyễn Ái Quốc trong phong trào cộng sản quốc tế.'
  },
  {
    id: 3,
    year: '1930',
    title: 'Kiên Trì Hoạt Động',
    subtitle: 'Vượt qua gian khổ, chờ đợi cơ hội',
    icon: '💪',
    color: '#78716C',
    gradient: 'from-stone-500 to-stone-700',
    shortDesc: 'Kiên trì hoạt động cách mạng trong khó khăn',
    content: 'Trong giai đoạn khó khăn này, Nguyễn Ái Quốc kiên trì hoạt động cách mạng và chờ đợi thời cơ thích hợp để trở về Tổ quốc.'
  },
  {
    id: 4,
    year: '1941',
    title: 'Về Nước Lãnh Đạo',
    subtitle: 'Lãnh đạo nhân dân giành độc lập',
    icon: '🏳️',
    color: '#C41E3A',
    gradient: 'from-red-600 to-red-800',
    shortDesc: 'Trở về và lãnh đạo kháng chiến giành độc lập',
    content: 'Tháng 5/1941, Người trở về Việt Nam, chủ trì Hội nghị Trung ương 8, thành lập Việt Minh. Sau 13 tháng bị giam cầm, Người về nước lãnh đạo Cách mạng tháng Tám 1945.'
  },
  {
    id: 5,
    year: '1945',
    title: 'Thống Nhất Đất Nước',
    subtitle: 'Giành độc lập và thống nhất',
    icon: '⭐',
    color: '#D4AF37',
    gradient: 'from-yellow-500 to-red-600',
    shortDesc: 'Chiến thắng Điện Biên Phủ và Giải phóng miền Nam',
    content: 'Chiến thắng Điện Biên Phủ 1954 và chiến thắng 30/4/1975 đã giải phóng hoàn toàn miền Nam, thống nhất đất nước, kết thúc hành trình 64 năm tìm đường cứu nước.'
  }
]

// Timeline Item lớn hơn
function TimelineItem({ phase, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="flex items-center justify-center mb-12 relative"
    >
      {/* Year Badge lớn */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg shadow-xl border-3 border-white/20"
          style={{ background: `linear-gradient(135deg, ${phase.color}, ${phase.color}80)` }}
        >
          {phase.year}
        </div>
      </div>

      {/* Card lớn hơn */}
      <div className={`w-full max-w-xl ${isEven ? 'mr-0 md:mr-[40%] pr-16' : 'ml-0 md:ml-[40%] pl-16'}`}>
        <Link
          to={`/phase/${phase.id}`}
          className="block bg-white/10 rounded-2xl p-8 border border-white/15 hover:border-white/40 transition-all duration-300 group hover:bg-white/15 ml-4 md:ml-0"
        >
          {/* Icon & Title */}
          <div className="flex items-center gap-5 mb-4">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-lg"
              style={{ backgroundColor: `${phase.color}30` }}
            >
              {phase.icon}
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white group-hover:text-vietnam-gold transition-colors">
                {phase.title}
              </h3>
              <p className="text-white/60 text-base mt-1 font-sans-light">{phase.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/70 text-lg leading-relaxed mb-4 font-sans">
            {phase.shortDesc}
          </p>

          {/* Link */}
          <div className="flex items-center gap-2 text-vietnam-gold text-base font-medium">
            <span>Xem chi tiết</span>
            <ArrowRight size={18} />
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

function Journey() {
  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Hero Section lớn */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        {/* Background Image & Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/90 via-red-950/70 to-dark-navy/90" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-vietnam-gold text-sm tracking-widest uppercase mb-8">
              <Clock size={16} />
              Hành Trình Lịch Sử
            </span>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              HÀNH TRÌNH
              <br />
              <span className="text-vietnam-gold">64 NĂM</span>
              <br />
              TÌM ĐƯỜNG CỨU NƯỚC
            </h1>

            <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto mt-8 leading-relaxed font-sans">
              Từ bến cảng Nhà Rồng năm 1911 đến ngày độc lập năm 1945,
              <br className="hidden md:block" />
              khám phá hành trình vĩ đại của Chủ tịch Hồ Chí Minh.
            </p>

            {/* Scroll indicator */}
            <motion.div
              className="mt-12"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="text-vietnam-gold mx-auto" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section lớn hơn */}
      <section className="py-20 px-6 relative">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-transparent via-white/25 to-transparent" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              5 Giai Đoạn <span className="text-vietnam-gold">Lịch Sử</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-sans">
              Mỗi giai đoạn là một chương quan trọng trong hành trình tìm đường cứu nước của dân tộc Việt Nam
            </p>
          </motion.div>

          <div className="relative">
            {phases.map((phase, index) => (
              <TimelineItem key={phase.id} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section lớn */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vietnam-red/15 to-vietnam-gold/15 rounded-3xl blur-2xl" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/15">
              <Star className="text-vietnam-gold mx-auto mb-6" size={48} />
              <p className="font-serif-display text-3xl md:text-4xl italic text-white leading-relaxed mb-6">
                "Không có gì quý hơn độc lập, tự do"
              </p>
              <p className="text-vietnam-gold text-xl">— Chủ tịch Hồ Chí Minh</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section lớn */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-12 text-center">
            {[
              { number: '64', label: 'Năm hành trình', color: 'text-vietnam-red' },
              { number: '5', label: 'Giai đoạn lịch sử', color: 'text-vietnam-gold' },
              { number: '1', label: 'Dân tộc Việt Nam', color: 'text-blue-400' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <p className={`font-serif text-6xl md:text-7xl font-bold ${stat.color} mb-3`}>
                  {stat.number}
                </p>
                <p className="text-white/60 text-lg font-sans">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center text-white/40 border-t border-white/5">
        <p>© 2025 Dự án giáo dục lịch sử - Hành Trình Đi Tìm Đường Cứu Nước</p>
      </footer>
    </div>
  )
}

export default Journey
