import { Link } from 'react-router-dom'
import { Home as HomeIcon, ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-vietnam-red/20">404</h1>
        <h2 className="text-3xl font-serif font-bold text-dark-navy mt-4 mb-2">
          Trang không tìm thấy
        </h2>
        <p className="text-gray-600 mb-8">
          Có thể đường dẫn này chưa được xây dựng. Hãy quay lại trang chủ nhé!
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/" className="btn-primary inline-flex items-center">
            <HomeIcon size={20} className="mr-2" />
            Về trang chủ
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary inline-flex items-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Quay lại
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound

