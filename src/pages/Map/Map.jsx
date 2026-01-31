import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, ChevronRight, Play, Pause, ZoomIn, ZoomOut, RotateCcw, Star, ArrowLeft } from 'lucide-react'

const locations = [
  {
    id: 1,
    name: 'Bến Cảng Nhà Rồng',
    year: '1911',
    title: 'Ra Đi Tìm Đường',
    lat: 10.77,
    lng: 106.70,
    color: '#3B82F6',
    description: 'Ngày 5/6/1911, với tên Văn Ba, Người rời bến cảng Nhà Rồng trên tàu Amiran Latusơ Tơrêvin để đi sang Pháp.',
    image: 'https://images.unsplash.com/photo-1559163499-41381127c378?w=600&q=80'
  },
  {
    id: 2,
    name: 'Pháp',
    year: '1920',
    title: 'Tìm Thấy Con Đường',
    lat: 48.85,
    lng: 2.35,
    color: '#F59E0B',
    description: 'Tháng 7/1920, Người đọc được Luận cương của Lênin và tìm thấy con đường giải phóng dân tộc đúng đắn.',
    image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=600&q=80'
  },
  {
    id: 3,
    name: 'Pác Bó - Cao Bằng',
    year: '1941',
    title: 'Về Nước Lãnh Đạo',
    lat: 22.62,
    lng: 105.83,
    color: '#C41E3A',
    description: 'Tháng 5/1941, Người trở về Việt Nam, chủ trì Hội nghị Trung ương 8, thành lập Mặt trận Việt Minh.',
    image: 'https://images.unsplash.com/photo-1598053432880-7167a7d2320a?w=600&q=80'
  },
  {
    id: 4,
    name: 'Ba Đình - Hà Nội',
    year: '1945',
    title: 'Tuyên Ngôn Độc Lập',
    lat: 21.03,
    lng: 105.84,
    color: '#C41E3A',
    description: 'Ngày 02/09/1945, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80'
  },
  {
    id: 5,
    name: 'Điện Biên Phủ',
    year: '1954',
    title: 'Chiến Thắng Lịch Sử',
    lat: 21.39,
    lng: 103.00,
    color: '#D4AF37',
    description: 'Chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu", buộc Pháp ký Hiệp định Genève.',
    image: 'https://images.unsplash.com/photo-1559163499-41381127c378?w=600&q=80'
  },
  {
    id: 6,
    name: 'Sài Gòn',
    year: '1975',
    title: 'Giải Phóng Miền Nam',
    lat: 10.82,
    lng: 106.63,
    color: '#D4AF37',
    description: 'Ngày 30/4/1975, Chiến dịch Hồ Chí Minh giải phóng hoàn toàn miền Nam, thống nhất đất nước.',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe923b0632?w=600&q=80'
  }
]

// SVG World Map Component
function WorldMap({ activeLocation, onLocationClick, isPlaying }) {
  const vietnamScale = 12
  const vietnamX = 70
  const vietnamY = 38

  return (
    <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-dark-navy via-[#0a1a2e] to-dark-navy rounded-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="200" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Simplified World Map Silhouette */}
      <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full opacity-30">
        {/* Simplified continents - abstract shapes */}
        <path d="M 30 25 Q 40 20 50 25 Q 60 22 70 28 Q 75 32 70 38 Q 60 42 50 38 Q 40 35 35 32 Q 28 30 30 25" fill="#1a3a5c" />
        <path d="M 85 18 Q 95 15 110 18 Q 120 20 125 28 Q 128 35 120 40 Q 110 42 100 40 Q 90 38 85 32 Q 82 25 85 18" fill="#1a3a5c" />
        <path d="M 130 20 Q 145 18 160 22 Q 170 28 168 38 Q 162 45 150 42 Q 138 40 132 32 Q 128 25 130 20" fill="#1a3a5c" />
        <path d="M 155 45 Q 165 42 175 48 Q 180 55 175 65 Q 168 72 158 68 Q 148 65 152 55 Q 154 48 155 45" fill="#1a3a5c" />
        <path d="M 25 55 Q 35 50 45 55 Q 55 60 52 70 Q 45 78 35 75 Q 25 72 22 62 Q 22 58 25 55" fill="#1a3a5c" />
        <path d="M 165 55 Q 175 52 185 58 Q 190 65 185 75 Q 178 82 168 78 Q 160 75 162 65 Q 163 58 165 55" fill="#1a3a5c" />
      </svg>

      {/* Connection Lines */}
      <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#C41E3A" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        
        {/* Path Line */}
        <motion.path
          d={locations.map(l => `${l.lng + 10}% ${50 - l.lat + 20}%`).join(' L ')}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="0.5"
          strokeDasharray="2,1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isPlaying ? 1 : 0 }}
          transition={{ duration: isPlaying ? 3 : 0, ease: "linear" }}
        />
      </svg>

      {/* Location Markers */}
      {locations.map((location, index) => {
        const x = location.lng + 10
        const y = 50 - location.lat + 20
        const isActive = activeLocation === location.id
        const isPast = activeLocation > location.id

        return (
          <motion.button
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            onClick={() => onLocationClick(location.id)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: location.color }}
              animate={{
                scale: [1, 2, 1],
                opacity: [isActive ? 0.6 : 0.3, 0, isActive ? 0.6 : 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Main Marker */}
            <div 
              className={`relative w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300
                ${isActive ? 'scale-150' : ''}
              `}
              style={{ 
                backgroundColor: isPast ? location.color : isActive ? location.color : '#666',
                boxShadow: `0 0 15px ${location.color}80`
              }}
            />
            
            {/* Year Label */}
            <motion.div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap
                ${isActive ? 'opacity-100' : 'opacity-70'}
              `}
              style={{ color: location.color }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-xs font-semibold px-2 py-1 bg-dark-navy/80 rounded-full">
                {location.year}
              </span>
            </motion.div>
          </motion.button>
        )
      })}
    </div>
  )
}

// Vietnam Detailed Map
function VietnamMap({ activeLocation, onLocationClick, isPlaying }) {
  return (
    <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-dark-navy via-[#0a1a2e] to-dark-navy rounded-2xl overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 133" className="w-full h-full">
          <defs>
            <pattern id="grid2" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="white" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100" height="133" fill="url(#grid2)" />
        </svg>
      </div>

      {/* Simplified Vietnam Map */}
      <svg viewBox="0 0 100 133" className="absolute inset-0 w-full h-full p-4">
        <path 
          d="M 55 5 
             Q 60 8 65 12 Q 70 18 72 25 
             Q 75 35 73 45 
             Q 70 55 65 65 
             Q 60 75 55 85 
             Q 50 95 48 105 
             Q 45 115 42 125 
             Q 40 130 35 128
             Q 30 125 28 118
             Q 25 110 28 100
             Q 32 90 35 80
             Q 40 70 42 60
             Q 45 50 42 40
             Q 40 30 45 20
             Q 48 12 55 5"
          fill="#1a3a5c"
          stroke="#2a5a8c"
          strokeWidth="0.5"
        />
      </svg>

      {/* Location Markers for Vietnam */}
      {locations.filter(l => l.lat > 8 && l.lat < 24).map((location) => {
        const x = ((location.lng - 102) / 15) * 80 + 10
        const y = ((24 - location.lat) / 16) * 80 + 10
        const isActive = activeLocation === location.id

        return (
          <motion.button
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            onClick={() => onLocationClick(location.id)}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: location.color }}
              animate={{
                scale: [1, 2, 1],
                opacity: isActive ? 0.6 : 0.3,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div 
              className={`relative w-3 h-3 rounded-full border-2 border-white shadow-lg
                ${isActive ? 'scale-150' : ''}
              `}
              style={{ 
                backgroundColor: location.color,
                boxShadow: `0 0 12px ${location.color}80`
              }}
            />
          </motion.button>
        )
      })}
    </div>
  )
}

// Location Card
function LocationCard({ location, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="absolute right-4 top-4 bottom-4 w-80 bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={location.image} 
          alt={location.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent" />
        
        {/* Year Badge */}
        <div 
          className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-bold"
          style={{ backgroundColor: location.color, color: '#fff' }}
        >
          {location.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-white mb-1">
          {location.name}
        </h3>
        <p className="text-white/60 text-sm mb-4">{location.title}</p>
        
        <p className="text-white/80 leading-relaxed text-sm mb-6">
          {location.description}
        </p>

        <Link
          to={`/phase/${location.id}`}
          className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded-xl font-medium transition-colors"
          style={{ backgroundColor: location.color, color: '#fff' }}
        >
          Xem chi tiết
          <ChevronRight size={18} />
        </Link>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
      >
        <span className="text-white">×</span>
      </button>
    </motion.div>
  )
}

function MapPage() {
  const [activeLocation, setActiveLocation] = useState(null)
  const [viewMode, setViewMode] = useState('world') // 'world' or 'vietnam'
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  // Auto-play animation
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const next = prev + 1
        if (next >= locations.length) {
          setIsPlaying(false)
          return 0
        }
        return next
      })
      setActiveLocation(locations[currentStep]?.id)
    }, 2000)

    return () => clearInterval(interval)
  }, [isPlaying, currentStep])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      setCurrentStep(0)
      setActiveLocation(locations[0]?.id)
    }
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
    setActiveLocation(null)
  }

  const currentLocation = locations.find(l => l.id === activeLocation)

  return (
    <div className="min-h-screen bg-dark-navy overflow-hidden">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/journey" 
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Quay lại</span>
          </Link>
          
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-white">
            Bản Đồ <span className="text-vietnam-gold">Hành Trình</span>
          </h1>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Reset"
            >
              <RotateCcw size={20} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative px-4 pb-4">
        <div className="max-w-7xl mx-auto">
          {/* Map Container */}
          <div className="relative">
            {/* View Toggle */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <button
                onClick={() => setViewMode('world')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'world' 
                    ? 'bg-vietnam-red text-white' 
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                🌍 Thế Giới
              </button>
              <button
                onClick={() => setViewMode('vietnam')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'vietnam' 
                    ? 'bg-vietnam-red text-white' 
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                🇻🇳 Việt Nam
              </button>
            </div>

            {/* Map */}
            <div className="relative">
              {viewMode === 'world' ? (
                <WorldMap 
                  activeLocation={activeLocation} 
                  onLocationClick={setActiveLocation}
                  isPlaying={isPlaying}
                />
              ) : (
                <VietnamMap 
                  activeLocation={activeLocation} 
                  onLocationClick={setActiveLocation}
                  isPlaying={isPlaying}
                />
              )}

              {/* Location Card */}
              <AnimatePresence>
                {currentLocation && (
                  <LocationCard 
                    location={currentLocation} 
                    onClose={() => setActiveLocation(null)}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePlay}
                className="inline-flex items-center gap-2 px-6 py-3 bg-vietnam-red hover:bg-red-700 text-white rounded-xl font-semibold transition-colors shadow-lg"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                {isPlaying ? 'Tạm dừng' : 'Phát tự động'}
              </button>
            </div>

            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {locations.map((loc, index) => (
                <button
                  key={loc.id}
                  onClick={() => {
                    setActiveLocation(loc.id)
                    setCurrentStep(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeLocation === loc.id 
                      ? 'scale-125' 
                      : 'opacity-50'
                  }`}
                  style={{ 
                    backgroundColor: activeLocation === loc.id ? loc.color : '#666'
                  }}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <h4 className="text-white/60 text-sm mb-3">📍 Các địa điểm quan trọng:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {locations.map(loc => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc.id)}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: loc.color }}
                    />
                    <span className="text-white/70 text-sm">{loc.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-white/40 text-sm">
        <p>Nhấp vào các điểm trên bản đồ để xem chi tiết</p>
      </footer>
    </div>
  )
}

export default MapPage


