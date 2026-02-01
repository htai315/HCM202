import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Clock, ArrowRight } from 'lucide-react'
import bgr from '../../assets/images/bgr1.jpg'

function Home() {
  const phases = [
    {
      id: 1,
      year: '1911 - 1920',
      title: 'Ra Đi Tìm Đường',
      description: 'Từ bến cảng Nhà Rồng, Nguyễn Tất Thành ra đi tìm con đường cứu nước...',
      icon: '🚢'
    },
    {
      id: 2,
      year: '1921 - 1930',
      title: 'Chuẩn Bị Cách Mạng',
      description: 'Hoạt động tích cực trong phong trào cộng sản, chuẩn bị về chính trị và tổ chức...',
      icon: '📚'
    },
    {
      id: 3,
      year: '1930 - 1941',
      title: 'Kiên Trì Hoạt Động',
      description: 'Vượt qua gian khó, kiên trì hoạt động cách mạng và chờ đợi cơ hội...',
      icon: '💪'
    },
    {
      id: 4,
      year: '1941 - 1945',
      title: 'Về Nước Lãnh Đạo',
      description: 'Trở về Tổ quốc, lãnh đạo nhân dân kháng chiến giành độc lập...',
      icon: '🏳️'
    },
    {
      id: 5,
      year: '1945 - 1969',
      title: 'Thống Nhất Đất Nước',
      description: 'Lãnh đạo kháng chiến chống xâm lược, xây dựng và phát triển đất nước...',
      icon: '⭐'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Hero Section - Cinematic Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgr})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/60 via-dark-navy/40 to-dark-navy"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left: Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="badge mb-8 justify-center lg:justify-start">
                  <span className="w-2 h-2 bg-vietnam-gold rounded-full"></span>
                  <span className="text-white/80">Trải Nghiệm Tương Tác Lịch Sử</span>
                </div>

                {/* Main Heading */}
                <h1 className="section-heading text-white mb-6">
                  HÀNH TRÌNH
                  <br />
                  <span className="text-vietnam-gold">ĐI TÌM ĐƯỜNG</span>
                  <br />
                  CỨU NƯỚC
                </h1>

                {/* Subheading */}
                <p className="section-subheading text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">
                  Khám phá hành trình lịch sử vĩ đại của <span className="text-white font-medium">Nguyễn Ái Quốc</span> – 
                  từ những ngày đầu tìm đường đến khi giành độc lập cho dân tộc.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/journey" className="btn-primary">
                      Bắt Đầu Hành Trình
                      <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/journey" className="btn-secondary">
                      <Clock size={18} />
                      Xem Timeline
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right: Quote Box */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 max-w-md w-full"
            >
              <div className="quote-box">
                <p className="font-serif-display text-xl md:text-2xl italic text-white/90 leading-relaxed mb-4">
                  "Không có gì quý hơn độc lập, tự do. Một dòng sông nhỏ, một cụm tre xanh vẫn là của ta..."
                </p>
                <p className="text-vietnam-gold font-medium">— Nguyễn Ái Quốc</p>
              </div>
            </motion.div> */}
            {/* Right: Placeholder (giữ layout) */}

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm tracking-widest uppercase text-white/60">Khám Phá</span>
            <ChevronDown className="text-vietnam-gold" size={24} />
          </div>
        </motion.div>
      </section>

      {/* Phases Section */}
      <section className="py-24 bg-gradient-to-b from-dark-navy to-[#0d1a2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading text-white mb-4">
              5 Giai Đoạn <span className="text-vietnam-gold">Lịch Sử</span>
            </h2>
            <p className="section-subheading text-white/60 max-w-2xl mx-auto">
              Mỗi giai đoạn là một chương quan trọng trong hành trình tìm đường cứu nước
            </p>
          </motion.div>

                    {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {phases.slice(0, 3).map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/phase/${phase.id}`} 
                  className="group block h-full bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-vietnam-red/50 transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-vietnam-red/20 to-vietnam-red-dark/20 flex items-center justify-center relative overflow-hidden">
                    <span className="text-5xl transform group-hover:scale-110 transition-transform duration-500">{phase.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-vietnam-red/20 text-vietnam-gold text-sm font-medium rounded mb-3 border border-vietnam-gold/30">
                      {phase.year}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-vietnam-gold transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-sans">{phase.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[36rem] mx-auto">
            {phases.slice(3).map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
              >
                <Link 
                  to={`/phase/${phase.id}`} 
                  className="group block h-full bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-vietnam-red/50 transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-vietnam-red/20 to-vietnam-red-dark/20 flex items-center justify-center relative overflow-hidden">
                    <span className="text-5xl transform group-hover:scale-110 transition-transform duration-500">{phase.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-vietnam-red/20 text-vietnam-gold text-sm font-medium rounded mb-3 border border-vietnam-gold/30">
                      {phase.year}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-vietnam-gold transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-sans">{phase.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0d1a2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading text-white mb-4">
              Trải Nghiệm <span className="text-vietnam-gold">Tương Tác</span>
            </h2>
            <p className="section-subheading text-white/60 max-w-2xl mx-auto">
              Khám phá lịch sử theo cách sinh động và giàu cảm xúc
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 bg-vietnam-red/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-vietnam-red/30">
                <Clock className="text-vietnam-gold" size={36} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Timeline Tương Tác</h3>
              <p className="text-white/60 leading-relaxed font-sans">Dòng thời gian trực quan, mỗi mốc lịch sử là một chương phim tài liệu hấp dẫn</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 bg-vietnam-red/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-vietnam-red/30">
                <svg className="text-vietnam-gold" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Bản Đồ Hành Trình</h3>
              <p className="text-white/60 leading-relaxed font-sans">Theo dõi từng bước đi của Bác trên bản đồ thế giới và Việt Nam</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 bg-vietnam-red/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-vietnam-red/30">
                <svg className="text-vietnam-gold" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Thư Viện Tư Liệu</h3>
              <p className="text-white/60 leading-relaxed font-sans">Kho tàng hình ảnh, video và tài liệu lịch sử phong phú</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
