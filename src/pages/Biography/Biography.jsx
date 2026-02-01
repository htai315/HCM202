import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, BookOpen, Star, Heart, Award, ChevronDown, Clock } from 'lucide-react'
import ab from '../../assets/images/ab.jpg'

const biographyData = {
  overview: {
    fullName: 'Nguyễn Tất Thành',
    birthName: 'Nguyễn Sinh Cung',
    otherNames: ['Văn Ba', 'Nguyễn Ái Quốc', 'Hồ Chí Minh'],
    birthDate: '19 tháng 5 năm 1890',
    deathDate: '2 tháng 9 năm 1969',
    birthPlace: 'Làng Hoàng Trù (xã Kim Liên), huyện Nam Đàn, tỉnh Nghệ An',
    restingPlace: 'Mai Động, Hà Nội',
    nationality: 'Việt Nam'
  },
  timeline: [
    {
      year: '1890',
      title: 'Sinh ra tại Nghệ An',
      icon: '👶',
      color: '#C41E3A',
      shortDesc: 'Sinh ra tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Cha là Nguyễn Sinh Sắc, mẹ là Hoàng Thị Loan.'
    },
    {
      year: '1911',
      title: 'Ra đi tìm đường cứu nước',
      icon: '🚢',
      color: '#3B82F6',
      shortDesc: 'Ngày 5/6/1911, với tên Văn Ba, rời bến cảng Nhà Rồng trên tàu Amiran Latusơ Tơrêvin sang Pháp, bắt đầu hành trình 30 năm bôn ba.'
    },
    {
      year: '1920',
      title: 'Tìm thấy con đường',
      icon: '📚',
      color: '#F59E0B',
      shortDesc: 'Đọc được Luận cương của Lênin, bỏ phiếu tán thành Quốc tế III, trở thành người Cộng sản Việt Nam đầu tiên.'
    },
    {
      year: '1930',
      title: 'Thành lập Đảng Cộng sản Việt Nam',
      icon: '🏛️',
      color: '#78716C',
      shortDesc: 'Chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam tại Hương Cảng.'
    },
    {
      year: '1941',
      title: 'Về nước lãnh đạo cách mạng',
      icon: '🏳️',
      color: '#C41E3A',
      shortDesc: 'Trở về Việt Nam, chủ trì Hội nghị Trung ương 8, thành lập Mặt trận Việt Minh tại Pác Bó, Cao Bằng.'
    },
    {
      year: '1945',
      title: 'Tuyên ngôn Độc lập',
      icon: '⭐',
      color: '#D4AF37',
      shortDesc: 'Ngày 2/9/1945, đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.'
    },
    {
      year: '1954',
      title: 'Chiến thắng Điện Biên Phủ',
      icon: '⚔️',
      color: '#C41E3A',
      shortDesc: 'Dưới sự lãnh đạo của Người, quân và dân Việt Nam đánh bại quân Pháp trong trận Điện Biên Phủ lừng lẫy.'
    },
    {
      year: '1969',
      title: 'Từ trần',
      icon: '💫',
      color: '#78716C',
      shortDesc: 'Ngày 2/9/1969, Chủ tịch Hồ Chí Minh qua đời tại Hà Nội, để lại di sản vĩ đại cho dân tộc Việt Nam.'
    }
  ],
  quotes: [
    {
      text: "Không có gì quý hơn độc lập, tự do.",
      context: "Bản Tuyên ngôn Độc lập, 1945"
    },
    {
      text: "Nước Việt Nam là một, dân tộc Việt Nam là một.",
      context: "Thư gửi đồng bào miền Nam, 1963"
    },
    {
      text: "Công dân nước Việt Nam đều sinh ra bình đẳng.",
      context: "Bản Tuyên ngôn Độc lập, 1945"
    },
    {
      text: "Non sông Việt Nam có trở nên tươi đẹp hay không, chính là nhờ công học tập của các cháu.",
      context: "Thư gửi các cháu thiếu niên, nhi đồng"
    }
  ],
  achievements: [
    {
      icon: '🏛️',
      title: 'Lãnh đạo giành độc lập',
      color: '#C41E3A',
      description: 'Chỉ đạo thắng lợi Cách mạng tháng Tám 1945, kết thúc ách thống trị của thực dân và phong kiến'
    },
    {
      icon: '⚔️',
      title: 'Chỉ huy kháng chiến',
      color: '#F59E0B',
      description: 'Lãnh đạo 2 cuộc kháng chiến chống Pháp và chống Mỹ, bảo vệ nền độc lập dân tộc'
    },
    {
      icon: '✍️',
      title: 'Nhà văn, nhà thơ',
      color: '#3B82F6',
      description: 'Để lại kho tàng tác phẩm văn học, thơ ca, báo chí phong phú'
    },
    {
      icon: '🌍',
      title: 'Nhà ngoại giao',
      color: '#78716C',
      description: 'Xây dựng quan hệ quốc tế, được nhân dân thế giới kính trọng'
    },
    {
      icon: '💝',
      title: 'Nhà nhân đạo',
      color: '#D4AF37',
      description: 'Luôn quan tâm đến đồng bào, chiến sĩ và trẻ em'
    },
    {
      icon: '🎯',
      title: 'Người sáng lập Đảng',
      color: '#C41E3A',
      description: 'Thành lập và rèn luyện Đảng Cộng sản Việt Nam'
    }
  ]
}

// Timeline Item Component
function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center justify-center mb-10 relative"
    >
      {/* Year Badge */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div 
          className="w-18 h-18 rounded-full flex items-center justify-center text-white font-serif font-bold text-base shadow-lg border-2 border-white/20"
          style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}80)` }}
        >
          {item.year}
        </div>
      </div>

      {/* Content Card */}
      <div className={`w-full max-w-lg ${isEven ? 'mr-0 md:mr-[40%] pr-12' : 'ml-0 md:ml-[40%] pl-12'}`}>
        <div className="bg-white/10 rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all duration-300 ml-4 md:ml-0">
          <div className="flex items-center gap-4 mb-3">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-lg"
              style={{ backgroundColor: `${item.color}30` }}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-vietnam-gold">
              {item.title}
            </h3>
          </div>
          <p className="text-white/70 leading-relaxed font-sans">
            {item.shortDesc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Quote Card Component
function QuoteCard({ quote, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 bg-white/10 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-300"
    >
      <Star className="text-vietnam-gold mb-3" size={24} />
      <p className="font-serif-display text-lg text-white leading-relaxed italic mb-3">
        "{quote.text}"
      </p>
      <p className="text-white/50 text-sm">{quote.context}</p>
    </motion.div>
  )
}

// Achievement Card Component
function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 bg-white/10 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-300 group text-center"
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {achievement.icon}
      </div>
      <h3 className="text-lg font-serif font-bold text-white mb-2">
        {achievement.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed font-sans">
        {achievement.description}
      </p>
    </motion.div>
  )
}

function Biography() {
  const { overview } = biographyData

  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-red-950/30 to-dark-navy" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-vietnam-gold text-sm tracking-widest uppercase mb-6">
              <BookOpen size={16} />
              Tiểu Sử Chủ Tịch
            </span>
            
            {/* Portrait */}
            <div className="mb-6">
              <div className="relative inline-block">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-vietnam-gold/40 shadow-2xl mx-auto">
                  <img 
                    src={ab}
                    alt="Chủ tịch Hồ Chí Minh"
                    className="w-full h-full object-cover"
                  />

                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-vietnam-red rounded-full flex items-center justify-center shadow-xl">
                  <Star className="text-vietnam-gold" size={28} />
                </div>
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              CHỦ TỊCH
              <br />
              <span className="text-vietnam-gold">HỒ CHÍ MINH</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
              Người sáng lập Đảng Cộng sản Việt Nam, 
              <br className="hidden md:block" />
              lãnh đạo nhân dân giành độc lập tự do
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Calendar className="text-vietnam-gold" size={16} />
                <span className="text-white/80 text-sm font-sans">1890 - 1969</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <MapPin className="text-vietnam-gold" size={16} />
                <span className="text-white/80 text-sm font-sans">Nghệ An</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <Award className="text-vietnam-gold" size={16} />
                <span className="text-white/80 text-sm font-sans">Anh hùng LLĐ</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-vietnam-gold" size={28} />
        </motion.div>
      </section>

      {/* Basic Info Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-white/10 rounded-xl p-5 border border-white/15">
              <BookOpen className="text-vietnam-gold mb-2" size={22} />
              <h3 className="font-serif font-bold text-white text-sm mb-1">Họ và tên</h3>
              <p className="text-white/80 text-sm font-sans">{overview.fullName}</p>
              <p className="text-white/50 text-xs mt-1 font-sans">Tên khai sinh: {overview.birthName}</p>
            </div>

            <div className="bg-white/10 rounded-xl p-5 border border-white/15">
              <Calendar className="text-vietnam-gold mb-2" size={22} />
              <h3 className="font-serif font-bold text-white text-sm mb-1">Sinh - Mất</h3>
              <p className="text-white/80 text-sm font-sans">{overview.birthDate}</p>
              <p className="text-white/50 text-xs mt-1 font-sans">{overview.deathDate}</p>
            </div>

            <div className="bg-white/10 rounded-xl p-5 border border-white/15">
              <MapPin className="text-vietnam-gold mb-2" size={22} />
              <h3 className="font-serif font-bold text-white text-sm mb-1">Quê hương</h3>
              <p className="text-white/80 text-sm font-sans">{overview.birthPlace}</p>
            </div>
          </motion.div>

          {/* Other Names */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 bg-gradient-to-r from-vietnam-red/15 to-transparent rounded-xl p-4 border border-white/15"
          >
            <h3 className="font-serif font-bold text-white text-sm mb-2 flex items-center gap-2">
              <Star className="text-vietnam-gold" size={16} />
              Các tên gọi qua các thời kỳ:
            </h3>
            <div className="flex flex-wrap gap-2">
              {overview.otherNames.map((name, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm font-sans"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 relative">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-0.5 bg-gradient-to-b from-transparent via-white/25 to-transparent" />

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              Cuộc Đời <span className="text-vietnam-gold">Hồ Chí Minh</span>
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto font-sans">
              Hành trình 79 năm sống vì nước, vì dân của một nhân cách lớn
            </p>
          </motion.div>

          <div className="relative">
            {biographyData.timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Famous Quotes Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              Những Câu Nói <span className="text-vietnam-gold">Nổi Tiếng</span>
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto font-sans">
              Những lời dạy của Bác mãi in sâu trong tâm trí mỗi người Việt Nam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {biographyData.quotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section lớn */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vietnam-red/15 to-vietnam-gold/15 rounded-2xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/15">
              <Heart className="text-vietnam-gold mx-auto mb-4" size={36} />
              <p className="font-serif-display text-2xl md:text-3xl italic text-white leading-relaxed mb-4">
                "Suốt đời tôi phấn đấu, hy sinh, mưu sự tự do, hạnh phúc của nhân dân."
              </p>
              <p className="text-vietnam-gold text-lg">— Chủ tịch Hồ Chí Minh</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              Di Sản <span className="text-vietnam-gold">Vĩ Đại</span>
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto font-sans">
              Những đóng góp to lớn của Chủ tịch Hồ Chí Minh cho dân tộc và nhân loại
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {biographyData.achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { number: '79', label: 'Năm tuổi đời', color: 'text-vietnam-red' },
              { number: '8', label: 'Mốc sự kiện chính', color: 'text-vietnam-gold' },
              { number: '6', label: 'Di sản vĩ đại', color: 'text-blue-400' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <p className={`font-serif text-5xl md:text-6xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </p>
                <p className="text-white/60 text-sm font-sans">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-white/40 border-t border-white/5">
        <p>© 2025 Dự án giáo dục lịch sử - Tiểu sử Chủ tịch Hồ Chí Minh</p>
      </footer>
    </div>
  )
}

export default Biography
