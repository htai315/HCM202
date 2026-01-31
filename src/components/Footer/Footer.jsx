import { Link } from 'react-router-dom'
import { Heart, BookOpen, Share2 } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-dark-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-vietnam-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">☯</span>
              </div>
              <span className="font-serif font-bold text-xl">
                Hành Trình Đi Tìm Đường Cứu Nước
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Tái hiện hành trình lịch sử của Nguyễn Ái Quốc – Hồ Chí Minh 
              qua câu chuyện tương tác, mang đến trải nghiệm học tập 
              vừa mang tính giáo dục vừa truyền cảm hứng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-vietnam-gold transition-colors">Trang chủ</Link></li>
              <li><Link to="/journey" className="text-gray-400 hover:text-vietnam-gold transition-colors">Hành trình</Link></li>
              <li><Link to="/quiz" className="text-gray-400 hover:text-vietnam-gold transition-colors">Quiz</Link></li>
              <li><Link to="/biography" className="text-gray-400 hover:text-vietnam-gold transition-colors">Tiểu sử</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Kết nối</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-vietnam-red transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-vietnam-red transition-colors">
                <Heart size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-vietnam-red transition-colors">
                <BookOpen size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 Dự án giáo dục lịch sử. Tất cả vì tinh thần dân tộc Việt Nam.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

