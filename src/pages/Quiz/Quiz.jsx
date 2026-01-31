import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, XCircle, Trophy, RotateCcw, Home, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const quizQuestions = [
  // Phase 1: 1911 - 1920
  {
    phase: 1,
    question: 'Ngày năm 1911, Nguyễn Tất Thành rời bến cảng Nhà Rồng sang Pháp với tên gì?',
    options: ['Nguyễn Ái Quốc', 'Văn Ba', 'Hồ Chí Minh', 'Nguyễn Sinh Cung'],
    correct: 1,
    explanation: 'Với tên Văn Ba, Người đã lên tàu Amiran Latusơ Tơrêvin ngày 5/6/1911 để bắt đầu hành trình tìm đường cứu nước.'
  },
  {
    phase: 1,
    question: 'Năm nào Nguyễn Ái Quốc đọc được Luận cương của Lênin và tìm thấy con đường giải phóng dân tộc?',
    options: ['1919', '1920', '1921', '1917'],
    correct: 1,
    explanation: 'Năm 1920, Người đọc được Luận cương của Lênin về vấn đề dân tộc và thuộc địa, từ đó tìm thấy con đường đúng đắn.'
  },
  {
    phase: 1,
    question: 'Năm 1919, Nguyễn Ái Quốc đã làm gì tại Hội nghị Véc-xây?',
    options: ['Tuyên bố độc lập Việt Nam', 'Gửi Bản yêu sách 8 điểm', 'Thành lập Đảng', 'Ký hiệp định hòa bình'],
    correct: 1,
    explanation: 'Thay mặt Hội những người yêu nước Việt Nam tại Pháp, Người gửi Bản yêu sách 8 điểm tới Hội nghị Véc-xây để đòi quyền tự do, dân chủ.'
  },
  // Phase 2: 1921 - 1930
  {
    phase: 2,
    question: 'Năm 1920, Nguyễn Ái Quốc trở thành người đầu tiên của Việt Nam làm gì?',
    options: ['Làm Bộ trưởng ngoại giao', 'Trở thành Tổng thống', 'Trở thành người Cộng sản', 'Làm Đại sứ'],
    correct: 2,
    explanation: 'Người bỏ phiếu tán thành Quốc tế III và tham gia thành lập Đảng Cộng sản Pháp, trở thành người Cộng sản Việt Nam đầu tiên.'
  },
  {
    phase: 2,
    question: 'Năm 1925, Nguyễn Ái Quốc đã sáng lập tổ chức nào tại Quảng Châu?',
    options: ['Đảng Cộng sản Việt Nam', 'Việt Minh', 'Hội Việt Nam Cách mạng Thanh niên', 'Hội Liên hiệp Thuộc địa'],
    correct: 2,
    explanation: 'Năm 1925, Người sáng lập Hội Việt Nam Cách mạng Thanh niên, một tổ chức tiền thân quan trọng chuẩn bị cho sự ra đời của Đảng.'
  },
  {
    phase: 2,
    question: 'Ngày 3/2/1930, sự kiện lịch sử quan trọng nào đã xảy ra?',
    options: ['Tuyên ngôn Độc lập', 'Chiến thắng Điện Biên Phủ', 'Thành lập Đảng Cộng sản Việt Nam', 'Khởi nghĩa Cách mạng tháng Tám'],
    correct: 2,
    explanation: 'Tại Hương Cảng (Trung Quốc), Đảng Cộng sản Việt Nam được thành lập, đánh dấu bước ngoặt vĩ đại của cách mạng Việt Nam.'
  },
  {
    phase: 2,
    question: 'Tác phẩm "Đường Kách mệnh" được viết vào năm nào?',
    options: ['1920', '1925', '1927', '1930'],
    correct: 1,
    explanation: 'Tác phẩm "Đường Kách mệnh" được viết năm 1925, truyền bá chủ nghĩa Mác-Lênin và đường lối cách mạng cho cán bộ.'
  },
  // Phase 3: 1930 - 1941
  {
    phase: 3,
    question: 'Năm 1931, Nguyễn Ái Quốc bị bắt giam tại đâu?',
    options: ['Việt Nam', 'Pháp', 'Hồng Kông', 'Trung Quốc'],
    correct: 2,
    explanation: 'Dưới bí danh Tống Văn Sơ, Người bị chính quyền thực dân Anh bắt giam tại Hồng Kông từ tháng 6/1931 đến 1/1933.'
  },
  {
    phase: 3,
    question: 'Ngày năm 1941, Nguyễn Ái Quốc trở về Việt Nam sau 30 năm bôn ba?',
    options: ['28/1', '2/9', '19/5', '3/2'],
    correct: 0,
    explanation: 'Ngày 28/1/1941, sau đúng 30 năm bôn ba qua 3 đại dương và 4 châu lục, Người đã đặt nụ hôn lên mảnh đất quê hương tại Pác Bó, Cao Bằng.'
  },
  {
    phase: 3,
    question: 'Tại Pác Bó năm 1941, Người đã làm gì?',
    options: ['Tuyên bố độc lập', 'Thành lập Việt Minh', 'Tổ chức khởi nghĩa', 'Ký hiệp định'],
    correct: 1,
    explanation: 'Tại Pác Bó, Người chủ trì Hội nghị Trung ương 8 và thành lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh).'
  },
  // Phase 4: 1941 - 1945
  {
    phase: 4,
    question: 'Tập thơ "Nhật ký trong tù" được viết khi nào?',
    options: ['1920-1925', '1930-1933', '1942-1943', '1960-1965'],
    correct: 2,
    explanation: 'Trong 13 tháng bị giam cầm tại Trung Quốc (1942-1943), Bác đã sáng tác tập thơ "Nhật ký trong tù" nổi tiếng.'
  },
  {
    phase: 4,
    question: 'Ngày 2/9/1945, sự kiện lịch sử nào đã diễn ra tại Quảng trường Ba Đình?',
    options: ['Khởi nghĩa Cách mạng tháng Tám', 'Tuyên ngôn Độc lập', 'Chiến thắng Điện Biên Phủ', 'Thành lập Chính phủ'],
    correct: 1,
    explanation: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.'
  },
  // Phase 5: 1945 - 1969
  {
    phase: 5,
    question: 'Chiến dịch Điện Biên Phủ diễn ra vào năm nào và kết thúc vào ngày nào?',
    options: ['1954 - 7/5', '1954 - 30/4', '1975 - 7/5', '1960 - 2/9'],
    correct: 0,
    explanation: 'Chiến dịch Điện Biên Phủ (1954) kết thúc vào ngày 7/5, buộc Pháp phải ký Hiệp định Geneva, chấm dứt ách thống trị thực dân.'
  },
  {
    phase: 5,
    question: 'Chủ tịch Hồ Chí Minh qua đời vào ngày tháng năm nào?',
    options: ['19/5/1890', '2/9/1969', '30/4/1975', '3/2/1930'],
    correct: 1,
    explanation: 'Chủ tịch Hồ Chí Minh qua đời ngày 2/9/1969 tại Hà Nội, để lại di sản vĩ đại cho dân tộc Việt Nam.'
  },
  {
    phase: 5,
    question: '"Không có gì quý hơn độc lập, tự do" là câu nói nổi tiếng của Bác trong văn kiện nào?',
    options: ['Hiến pháp 1946', 'Bản Tuyên ngôn Độc lập', 'Thư gửi đồng bào', 'Di chúc'],
    correct: 1,
    explanation: 'Câu nói này được viết trong Bản Tuyên ngôn Độc lập ngày 2/9/1945, tuyên bố với thế giới sự ra đời của nước Việt Nam Dân chủ Cộng hòa.'
  }
]

// Quiz Card Component
function QuizCard({ question, selectedAnswer, onSelect, showResult }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15"
    >
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-vietnam-red/20 text-vietnam-gold text-xs font-medium rounded-full border border-vietnam-gold/30">
          Giai đoạn {question.phase}
        </span>
      </div>
      
      <h3 className="font-serif text-xl text-white mb-6 leading-relaxed">
        {question.question}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const isCorrect = index === question.correct
          const showCorrect = showResult && isCorrect
          const showWrong = showResult && isSelected && !isCorrect
          
          let buttonClass = "w-full text-left p-4 rounded-xl transition-all duration-300 font-sans "
          if (showCorrect) {
            buttonClass += "bg-green-500/30 border-green-500 text-white"
          } else if (showWrong) {
            buttonClass += "bg-red-500/30 border-red-500 text-white"
          } else if (isSelected) {
            buttonClass += "bg-white/20 border-white/40 text-white"
          } else {
            buttonClass += "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/30"
          }
          
          return (
            <motion.button
              key={index}
              onClick={() => !showResult && onSelect(index)}
              disabled={showResult}
              className={buttonClass}
              whileHover={!showResult ? { scale: 1.02 } : {}}
              whileTap={!showResult ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showCorrect && <CheckCircle size={20} className="text-green-400" />}
                {showWrong && <XCircle size={20} className="text-red-400" />}
              </div>
            </motion.button>
          )
        })}
      </div>
      
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10"
        >
          <p className="text-white/80 font-sans text-sm">
            <span className="text-vietnam-gold font-semibold">Giải thích: </span>
            {question.explanation}
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

// Result Card Component
function ResultCard({ score, total, onRetry }) {
  const percentage = (score / total) * 100
  
  let grade = ''
  let gradeColor = ''
  let message = ''
  let icon = null
  
  if (percentage >= 90) {
    grade = 'XUẤT SẮC'
    gradeColor = 'text-vietnam-gold'
    message = 'Bạn thực sự am hiểu sâu sắc về lịch sử hành trình của Chủ tịch Hồ Chí Minh!'
    icon = <Trophy className="text-vietnam-gold" size={64} />
  } else if (percentage >= 70) {
    grade = 'GIỎI'
    gradeColor = 'text-green-400'
    message = 'Bạn có kiến thức tốt về lịch sử dân tộc. Tiếp tục phát huy nhé!'
    icon = <Trophy className="text-green-400" size={64} />
  } else if (percentage >= 50) {
    grade = 'KHÁ'
    gradeColor = 'text-blue-400'
    message = 'Bạn đã nắm được những kiến thức cơ bản. Cần tìm hiểu thêm!'
    icon = <Trophy className="text-blue-400" size={48} />
  } else {
    grade = 'CẦN CỐ GẮNG'
    gradeColor = 'text-orange-400'
    message = 'Hãy quay lại trang Hành trình để ôn lại kiến thức lịch sử nhé!'
    icon = <RotateCcw className="text-orange-400" size={48} />
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/15 max-w-lg mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-6"
        >
          {icon}
        </motion.div>
        
        <h2 className="font-serif text-3xl font-bold text-white mb-2">
          KẾT QUẢ
        </h2>
        
        <div className="mb-6">
          <p className={`font-serif text-5xl font-bold ${gradeColor} mb-2`}>
            {grade}
          </p>
          <p className="text-white/60 font-sans">
            Bạn trả lời đúng <span className="text-vietnam-gold font-bold">{score}/{total}</span> câu
            <br />
            ({percentage.toFixed(0)}%)
          </p>
        </div>
        
        <p className="text-white/70 font-sans mb-8">
          {message}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-vietnam-red text-white font-semibold rounded-xl hover:bg-vietnam-red-dark transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw size={20} />
            Làm lại
          </motion.button>
          
          <Link
            to="/journey"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={20} />
            Về trang Hành trình
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleSelect = (index) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: index
    }))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResult(false)
    setQuizStarted(false)
  }

  const calculateScore = () => {
    let score = 0
    quizQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        score++
      }
    })
    return score
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-dark-navy flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/15">
            <Trophy className="text-vietnam-gold mx-auto mb-6" size={64} />
            
            <h1 className="font-serif text-4xl font-bold text-white mb-4">
              KIỂM TRA KIẾN THỨC
              <br />
              <span className="text-vietnam-gold">LỊCH SỬ</span>
            </h1>
            
            <p className="text-white/60 font-sans mb-8">
              15 câu hỏi trắc nghiệm về hành trình tìm đường cứu nước của Chủ tịch Hồ Chí Minh
            </p>
            
            <div className="bg-white/5 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-serif font-bold text-vietnam-red">15</p>
                  <p className="text-white/50 text-sm">Câu hỏi</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-vietnam-gold">5</p>
                  <p className="text-white/50 text-sm">Giai đoạn</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-blue-400">1</p>
                  <p className="text-white/50 text-sm">Lần thử</p>
                </div>
              </div>
            </div>
            
            <motion.button
              onClick={() => setQuizStarted(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-vietnam-red text-white font-semibold text-lg rounded-xl hover:bg-vietnam-red-dark transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bắt đầu Quiz
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-dark-navy py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ResultCard 
            score={calculateScore()} 
            total={quizQuestions.length} 
            onRetry={handleRetry}
          />
        </div>
      </div>
    )
  }

  const currentQ = quizQuestions[currentQuestion]
  const hasSelected = selectedAnswers[currentQuestion] !== undefined

  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Header */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-vietnam-gold text-sm tracking-widest uppercase">
            Quiz Lịch Sử
          </span>
          <h1 className="font-serif text-3xl font-bold text-white mt-4 mb-2">
            Câu hỏi {currentQuestion + 1} / {quizQuestions.length}
          </h1>
          <p className="text-white/60 font-sans">
            Trả lời đúng {calculateScore()} / {currentQuestion} câu đã làm
          </p>
          
          {/* Progress bar */}
          <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-vietnam-red"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </section>

      {/* Quiz Content */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <QuizCard
              key={currentQuestion}
              question={currentQ}
              selectedAnswer={selectedAnswers[currentQuestion]}
              onSelect={handleSelect}
              showResult={hasSelected}
            />
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="mt-6 flex justify-between">
            <motion.button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentQuestion === 0 
                  ? 'bg-white/5 text-white/30 cursor-not-allowed' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={currentQuestion !== 0 ? { scale: 1.05 } : {}}
              whileTap={currentQuestion !== 0 ? { scale: 0.95 } : {}}
            >
              Trước
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={!hasSelected}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !hasSelected
                  ? 'bg-white/5 text-white/30 cursor-not-allowed'
                  : 'bg-vietnam-red text-white hover:bg-vietnam-red-dark'
              }`}
              whileHover={hasSelected ? { scale: 1.05 } : {}}
              whileTap={hasSelected ? { scale: 0.95 } : {}}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Xem kết quả' : 'Tiếp theo'}
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quiz

