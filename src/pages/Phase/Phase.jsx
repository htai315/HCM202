import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, MapPin, Star } from 'lucide-react'

// Dữ liệu 5 giai đoạn
const phasesData = {
  1: {
    year: '1911 - 1920',
    title: 'Ra Đi Tìm Đường Cứu Nước',
    subtitle: 'Tìm thấy con đường giải phóng dân tộc',
    color: 'from-blue-600 to-blue-800',
    icon: '🚢',
    content: {
      intro: `Hành trình cứu nước của Chủ tịch Hồ Chí Minh trong giai đoạn 1911 - 1920 là một chặng đường lịch sử quan trọng, đánh dấu bước chuyển biến từ một người yêu nước trở thành một chiến sĩ cộng sản.`,
      sections: [
        {
          title: 'Xuất phát từ khát vọng độc lập',
          content: `Xuất phát từ ý chí và khát vọng cháy bỏng giành độc lập cho dân tộc trước cảnh nước mất nhà tan, ngày 5/6/1911, với tên gọi Văn Ba, Người đã rời bến cảng Nhà Rồng trên tàu Amiran Latusơ Tơrêvin để đi sang Pháp.`,
          image: 'https://images.unsplash.com/photo-1559163499-41381127c378?w=800&q=80'
        },
        {
          title: 'Bôn ba khắp nơi trên thế giới',
          content: `Từ năm 1912 đến 1917, Người bôn ba qua nhiều quốc gia ở châu Phi, châu Mỹ, và đến nước Anh vào giữa năm 1913 để vừa lao động, vừa quan sát và nghiên cứu thực tiễn các cuộc cách mạng trên thế giới. Qua quá trình này, Người nhận rõ cội nguồn nỗi đau của nhân dân lao động chính là sự áp bức, bóc lột của chủ nghĩa tư bản đế quốc.`,
          image: 'https://images.unsplash.com/photo-1467269204594-9661b133dd2b?w=800&q=80'
        },
        {
          title: 'Tham gia chính trị tại Pháp',
          content: `Cuối năm 1917, Người trở lại Pháp và bắt đầu tham gia sâu rộng vào các phong trào chính trị. Đầu năm 1919, Người gia nhập Đảng Xã hội Pháp và đến tháng 6/1919, thay mặt Hội những người yêu nước Việt Nam tại Pháp, Người lấy tên là Nguyễn Ái Quốc gửi Bản yêu sách gồm 08 điểm tới Hội nghị Véc-xây để đòi quyền tự do, dân chủ và bình đẳng cho dân tộc Việt Nam.`,
          image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800&q=80'
        },
        {
          title: 'Bước ngoặt lịch sử - Tìm thấy con đường',
          content: `Bước ngoặt quyết định trong hành trình này diễn ra vào tháng 7/1920, khi Người đọc được Luận cương của Lênin về vấn đề dân tộc và thuộc địa, từ đó tìm thấy con đường giải phóng dân tộc đúng đắn: độc lập dân tộc gắn liền với chủ nghĩa xã hội. Sự kiện này dẫn đến việc Người bỏ phiếu tán thành Quốc tế III và tham gia thành lập Đảng Cộng sản Pháp vào tháng 12/1920, trở thành người Cộng sản đầu tiên của Việt Nam, chính thức mở ra một thời đại mới cho con đường cứu nước của dân tộc.`,
          image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80'
        }
      ],
      quotes: [
        {
          text: "Không có gì quý hơn độc lập, tự do.",
          author: "Nguyễn Ái Quốc"
        }
      ]
    }
  },
  2: {
    year: '1921 - 1930',
    title: 'Chuẩn Bị Cách Mạng',
    subtitle: 'Xây dựng nền tảng chính trị, tư tưởng và tổ chức',
    color: 'from-amber-600 to-amber-800',
    icon: '📚',
    content: {
      intro: `Sau khi xác định được con đường cứu nước đúng đắn theo chủ nghĩa Mác – Lênin, giai đoạn 1921 – 1930 đánh dấu bước phát triển có tính quyết định trong hành trình cách mạng của Hồ Chí Minh, khi Người tập trung chuẩn bị toàn diện về chính trị, tư tưởng và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam.`,
      sections: [
        {
          title: 'Truyền bá chủ nghĩa Mác – Lênin',
          content: `Về tư tưởng, Nguyễn Ái Quốc tích cực truyền bá chủ nghĩa Mác – Lênin vào phong trào cách mạng các nước thuộc địa, đặc biệt là Việt Nam. Năm 1921, Người cùng các nhà cách mạng ở Paris thành lập Hội Liên hiệp Thuộc địa, nhằm đoàn kết các dân tộc bị áp bức trong cuộc đấu tranh chống chủ nghĩa thực dân.`,
          image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800&q=80'
        },
        {
          title: 'Báo Le Paria và tiếng nói của người cùng khổ',
          content: `Năm 1922, Người sáng lập và trực tiếp tham gia viết bài cho báo Le Paria (Người cùng khổ) – một diễn đàn báo chí có tiếng vang lớn, tố cáo bản chất tàn bạo của chủ nghĩa thực dân và thức tỉnh ý thức cách mạng của nhân dân các nước thuộc địa.`,
          image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80'
        },
        {
          title: 'Bản án chế độ thực dân Pháp',
          content: `Đặc biệt, tác phẩm Bản án chế độ thực dân Pháp (1925) là một văn kiện chính trị – lý luận sắc bén, góp phần quan trọng vào việc hình thành tư tưởng giải phóng dân tộc theo con đường cách mạng vô sản.`,
          image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80'
        },
        {
          title: 'Nghiên cứu lý luận tại Liên Xô',
          content: `Trong những năm 1923–1924, khi hoạt động tại Liên Xô, Người có điều kiện nghiên cứu sâu hơn về lý luận cách mạng và kinh nghiệm xây dựng Đảng kiểu mới, từ đó vận dụng sáng tạo vào điều kiện cụ thể của Việt Nam.`,
          image: 'https://images.unsplash.com/photo-1515905557558-afc4877a26fc?w=800&q=80'
        },
        {
          title: 'Thành lập Hội Việt Nam Cách mạng Thanh niên',
          content: `Cuối năm 1924, Nguyễn Ái Quốc đến Quảng Châu (Trung Quốc), trực tiếp tổ chức huấn luyện cán bộ cách mạng Việt Nam. Năm 1925, Người sáng lập Hội Việt Nam Cách mạng Thanh niên, một tổ chức tiền thân có vai trò đặc biệt quan trọng.`,
          image: 'https://images.unsplash.com/photo-1598053432880-7167a7d2320a?w=800&q=80'
        },
        {
          title: 'Tác phẩm Đường Kách mệnh',
          content: `Thông qua các lớp huấn luyện và tác phẩm Đường Kách mệnh, Người từng bước thống nhất nhận thức, tư tưởng và hành động trong phong trào cách mạng Việt Nam, chuẩn bị đội ngũ cán bộ cho sự ra đời của Đảng.`,
          image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80'
        },
        {
          title: 'Ngày thành lập Đảng Cộng sản Việt Nam',
          content: `Kết quả của quá trình chuẩn bị công phu là sự ra đời của Đảng Cộng sản Việt Nam ngày 3/2/1930 tại Hương Cảng (Trung Quốc), đánh dấu bước ngoặt vĩ đại của cách mạng Việt Nam, chấm dứt tình trạng khủng hoảng về đường lối và giai cấp lãnh đạo.`,
          image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80'
        }
      ],
      quotes: [
        {
          text: "Người cách mạng phải có đạo đức, không có đạo đức thì tài giỏi mấy cũng không lãnh đạo được nhân dân.",
          author: "Hồ Chí Minh"
        },
        {
          text: "Chỉ có đoàn kết, đoàn kết nữa, đoàn kết mãi, đoàn kết hơn nữa, chúng ta mới thành công.",
          author: "Hồ Chí Minh"
        }
      ]
    }
  },
  3: {
    year: '1930 - 1941',
    title: 'Kiên Trì Hoạt Động',
    subtitle: 'Vượt qua gian khổ và trở về Tổ quốc',
    color: 'from-stone-600 to-stone-800',
    icon: '💪',
    content: {
      intro: `Giai đoạn 1930 – 1941 không chỉ là những con số trên trang sử, mà là một hành trình thử thách tột cùng lòng kiên định và ý chí sắt đá của Người. Dưới đây là những trang sử đầy cảm xúc về những năm tháng kiên trì, bất khuất.`,
      sections: [
        {
          title: 'Bị giam cầm tại Hồng Kông (1931 - 1933)',
          content: `Vào tháng 6/1931, dưới bí danh Tống Văn Sơ, Nguyễn Ái Quốc bị chính quyền thực dân Anh bắt giam tại Hồng Kông. Những ngày tháng bị giam cầm từ tháng 6/1931 đến tháng 1/1933 là quãng thời gian ngột ngạt trong lao tù đế quốc.`,
          image: 'https://images.unsplash.com/photo-1598053432880-7167a7d2320a?w=800&q=80'
        },
        {
          title: 'Sự giải cứu của tình người',
          content: `Chính trong bóng tối của ngục tù, ánh sáng của chủ nghĩa nhân đạo tỏa ra từ cốt cách của Người đã lay động những trái tim chính nghĩa. Luật sư Lô-dơ-bi (Loseby) đã hết lòng bào chữa và cứu giúp Người thoát khỏi án tử.`,
          image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800&q=80'
        },
        {
          title: 'Trở lại Liên Xô rèn luyện (1933 - 1938)',
          content: `Rời Hồng Kông, Người trở lại Liên Xô, tiếp tục hành trình chuẩn bị lý luận cho cuộc cách mạng tương lai. Với số thẻ học viên 375 tại trường Quốc tế Lênin và sau đó là giảng viên tại trường Đại học Phương Đông vào năm 1937, Người âm thầm rèn luyện ý chí.`,
          image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=800&q=80'
        },
        {
          title: 'Vượt qua những quan điểm sai lệch',
          content: `Đây là giai đoạn Người phải thể hiện bản lĩnh chính trị phi thường để vượt qua những quan điểm "tả khuynh" sai lệch của Quốc tế Cộng sản lúc bấy giờ. Có những lúc không được giao nhiệm vụ thực tiễn, Người vẫn không nản chí.`,
          image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80'
        },
        {
          title: 'Thư gửi Quốc tế Cộng sản (1938)',
          content: `Đến tháng 6/1938, Người đã viết thư gửi một đồng chí ở Quốc tế Cộng sản, tha thiết yêu cầu được giao việc để được tiếp tục cống hiến cho sự nghiệp giải phóng.`,
          image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80'
        },
        {
          title: 'Trở về Trung Quốc (1938)',
          content: `Cuối năm 1938, với bí danh Hồ Quang, Người rời Liên Xô về Trung Quốc, từng bước tiếp cận biên giới để tìm đường về với đồng bào.`,
          image: 'https://images.unsplash.com/photo-1467269204594-9661b133dd2b?w=800&q=80'
        },
        {
          title: 'Khoảnh khắc lịch sử: Về quê hương (1941)',
          content: `Ngày 28/1/1941, sau đúng 30 năm đằng đẵng bôn ba qua 3 đại dương và 4 châu lục, Người đã đặt nụ hôn lên mảnh đất quê hương tại Pác Bó, Cao Bang. Nhà thơ Tố Hữu đã ghi lại: "Ôi sáng xuân nay, xuân bốn mốt / Một trời biên giới nắng hoa mơ / Bác về! im lặng con chim hót / Thánh thót bờ lau. Vui ngẩn ngơ".`,
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
        },
        {
          title: 'Viết "Lịch sử nước ta" tại Cao Bằng',
          content: `Tại Cao Bằng, nơi Người chọn làm thí điểm xây dựng Mặt trận Việt Minh, Bác đã viết tác phẩm "Lịch sử nước ta" để khơi dậy niềm tự hào và niềm tin mãnh liệt vào sức mạnh dân tộc: "Dân ta phải biết sử ta / Cho tường gốc tích nước nhà Việt Nam".`,
          image: 'https://images.unsplash.com/photo-1598053432880-7167a7d2320a?w=800&q=80'
        }
      ],
      quotes: [
        {
          text: "Người cách mạng phải có đạo đức, không có đạo đức thì tài giỏi mấy cũng không lãnh đạo được nhân dân.",
          author: "Hồ Chí Minh"
        },
        {
          text: "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam.",
          author: "Hồ Chí Minh"
        }
      ]
    }
  },
  4: {
    year: '1941 - 1945',
    title: 'Về Nước Lãnh Đạo',
    subtitle: 'Lãnh đạo nhân dân giành độc lập',
    color: 'from-red-600 to-red-800',
    icon: '🏳️',
    content: {
      intro: `Giai đoạn 1941 - 1945 đánh dấu bước ngoặt vĩ đại trong sự nghiệp cách mạng của Việt Nam. Sau hơn ba thập kỷ bôn ba tìm đường cứu nước, Người trở về Tổ quốc để trực tiếp lãnh đạo nhân dân đứng lên giành độc lập, kết thúc hàng ngàn năm đế quốc phong kiến.`,
      sections: [
        {
          title: 'Trở về và thành lập Việt Minh',
          content: `Tháng 5/1941, sau hơn 30 năm bôn ba, Người trở về Việt Nam và ngay lập tức chủ trì Hội nghị Trung ương 8 tại Khuổi Nậm (Pác Bó). Tại đây, Người đã thành lập Mặt trận Việt Minh nhằm đoàn kết toàn dân trong bối cảnh đất nước đang rên xiết dưới ách "một cổ hai tròng" của thực dân phong kiến.`,
          image: 'https://images.unsplash.com/photo-1598053432880-7167a7d2320a?w=800&q=80'
        },
        {
          title: 'Những tháng năm gian khổ trong tù',
          content: `Tháng 8/1942, Người chính thức lấy tên Hồ Chí Minh và sang Trung Quốc để tìm kiếm sự liên minh quốc tế chống phát xít. Tuy nhiên, Người bị chính quyền Tưởng Giới Thạch bắt giam suốt 13 tháng. Trong những ngày tháng gian khổ ấy, Người đã sáng tác tập thơ "Nhật ký trong tù" – một tác phẩm bất hủ thể hiện tinh thần lạc quan và ý chí kiên cường.`,
          image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=800&q=80'
        },
        {
          title: 'Trở về căn cứ và chuẩn bị tổng khởi nghĩa',
          content: `Sau khi được trả tự do vào tháng 9/1943, Người trở về căn cứ Cao Bằng. Tháng 5/1945, Người quyết định dời về Tân Trào (Tuyên Quang) để chuẩn bị thành lập Chính phủ lâm thời. Đây là bước chuẩn bị quan trọng cho những sự kiện vĩ đại sắp diễn ra.`,
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
        },
        {
          title: 'Cách mạng tháng Tám - Đỉnh cao chiến thắng',
          content: `Tháng 8/1945, Việt Minh kêu gọi nhân dân phá kho thóc giải quyết nạn đói và đồng lòng đứng lên khởi nghĩa chống Đế quốc Nhật Bản. Thắng lợi của Cách mạng tháng Tám đã buộc Bảo Đại phải thoái vị, chấm dứt hoàn toàn chế độ phong kiến tại Việt Nam.`,
          image: 'https://images.unsplash.com/photo-1529253355930-ddbe923b0632?w=800&q=80'
        },
        {
          title: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa',
          content: `Ngày 02/09/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, chính thức khai sinh ra nước Việt Nam Dân chủ Cộng hòa. Đây là đỉnh cao huy hoàng của hành trình 34 năm tìm đường cứu nước, mở ra kỷ nguyên mới cho dân tộc Việt Nam.`,
          image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800&q=80'
        }
      ],
      quotes: [
        {
          text: "Tôi chỉ có một sự mong mỏi, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do.",
          author: "Hồ Chí Minh"
        },
        {
          text: "Non sông Việt Nam có trở nên tươi đẹp hay không, chính là nhờ công học tập của các cháu.",
          author: "Hồ Chí Minh"
        }
      ]
    }
  },
  5: {
    year: '1945 - 1975',
    title: 'Thống Nhất Đất Nước',
    subtitle: 'Lãnh đạo kháng chiến chống xâm lược và thống nhất đất nước',
    color: 'from-yellow-600 to-red-700',
    icon: '⭐',
    content: {
      intro: `Sau khi nước Việt Nam Dân chủ Cộng hòa được khai sinh, dân tộc ta phải đối mặt với dã tâm của đế quốc Mỹ. Dưới sự lãnh đạo đúng đắn của Đảng và ngọn cờ kháng chiến kiến quốc, quân và dân ta đã làm nên những chiến thắng lịch sử, khép lại hành trình giải phóng dân tộc và thống nhất non sông.`,
      sections: [
        {
          title: 'Thử thách mới sau ngày độc lập',
          content: `Ngay sau khi nước Việt Nam Dân chủ Cộng hòa được khai sinh vào ngày 02/09/1945, dân tộc ta phải đối mặt với dã tâm của đế quốc Mỹ khi chúng dựng lên chính quyền tay sai hòng chia cắt lâu dài đất nước. Thực dân Pháp quay lại xâm lược, kèm theo sự can thiệp của các thế lực đế quốc khác, đặt nền độc lập non trẻ vào thử thách khốc liệt.`,
          image: 'https://images.unsplash.com/photo-1598053432880-7167a7d2320a?w=800&q=80'
        },
        {
          title: 'Chiến thắng Điện Biên Phủ lừng lẻy',
          content: `Dưới sự lãnh đạo đúng đắn của Đảng và ngọn cờ kháng chiến kiến quốc, quân và dân ta đã kiên cường chống lại cuộc xâm lược của thực dân Pháp. Chiến thắng lịch sử Điện Biên Phủ vào năm 1954 đã "lừng lẫy năm châu, chấn động địa cầu", buộc Pháp phải ký Hiệp định Genève, chấm dứt ách thống trị của thực dân tại Việt Nam.`,
          image: 'https://images.unsplash.com/photo-1559163499-41381127c378?w=800&q=80'
        },
        {
          title: 'Kháng chiến chống Mỹ - Chân lý bất diệt',
          content: `Tiếp nối tinh thần chiến thắng, cuộc kháng chiến chống Mỹ cứu nước được thực hiện dựa trên chân lý bất diệt mà Người đã khẳng định: "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi". Đây là cuộc kháng chiến lâu dài, gian khổ nhưng vô cùng anh hùng của dân tộc Việt Nam.`,
          image: 'https://images.unsplash.com/photo-1467269204594-9661b133dd2b?w=800&q=80'
        },
        {
          title: 'Mùa Xuân Đại thắng - 1975',
          content: `Hành trình kháng chiến đã khép lại bằng thắng lợi vĩ đại của cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975. Chiến dịch Hồ Chí Minh mang tên Người đã giải phóng hoàn toàn miền Nam, thu non sông về một mối, kết thúc hoàn toàn cuộc kháng chiến chống xâm lược và mở ra kỷ nguyên độc lập, tự do cho cả nước.`,
          image: 'https://images.unsplash.com/photo-1529253355930-ddbe923b0632?w=800&q=80'
        },
        {
          title: 'Di sản và ý nghĩa lịch sử',
          content: `Chiến thắng 30/4/1975 đánh dấu sự toàn thắng của tinh thần đoàn kết, ý chí tự cường và trí tuệ của dân tộc Việt Nam. Hành trình từ 1911 đến 1975 – 64 năm tìm đường và chiến đấu – đã khép lại bằng việc nước Việt Nam thống nhất, độc lập, tự do. Đây là thắng lợi của chủ nghĩa anh hùng cách mạng và tinh thần quốc sâu núi cao của dân tộc Việt Nam.`,
          image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800&q=80'
        }
      ],
      quotes: [
        {
          text: "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi.",
          author: "Hồ Chí Minh"
        },
        {
          text: "Quyết tâm đánh thắng giặc Mỹ xâm lược. Không có gì quý hơn độc lập, tự do.",
          author: "Hồ Chí Minh"
        }
      ]
    }
  }
}

function Phase() {
  const { id } = useParams()
  const phaseId = parseInt(id) || 1
  const phase = phasesData[phaseId]
  const nextPhase = phaseId < 5 ? phaseId + 1 : null
  const prevPhase = phaseId > 1 ? phaseId - 1 : null

  if (!phase) {
    return (
      <div className="min-h-screen bg-dark-navy flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-serif mb-4">Không tìm thấy giai đoạn</h1>
          <Link to="/" className="btn-primary">Quay về trang chủ</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-navy">
      {/* Hero Section */}
      <section className={`relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${phase.color}`}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/80 text-sm tracking-widest uppercase mb-6">
              <Calendar size={16} />
              {phase.year}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {phase.title}
            </h1>
            <p className="text-xl text-white/80 font-light">
              {phase.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-serif italic">
              "{phase.content.intro}"
            </p>
          </motion.div>

          {/* Sections with Images */}
          <div className="space-y-16">
            {phase.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/50 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${phase.color}`}>
                      <span className="text-lg">{phase.icon}</span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-white/70 leading-relaxed text-lg font-sans">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote Box */}
          {phase.content.quotes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              {phase.content.quotes.map((quote, index) => (
                <div 
                  key={index}
                  className="relative p-8 bg-gradient-to-br from-vietnam-red/20 to-vietnam-red-dark/20 rounded-lg border border-vietnam-red/30 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <Star className="text-vietnam-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-serif-display text-2xl italic text-white/90 leading-relaxed mb-4">
                        "{quote.text}"
                      </p>
                      <p className="text-vietnam-gold font-medium">
                        — {quote.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-white/10">
            {prevPhase ? (
              <Link 
                to={`/phase/${prevPhase}`}
                className="flex items-center gap-2 text-white/70 hover:text-vietnam-gold transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Giai đoạn trước</span>
              </Link>
            ) : (
              <div></div>
            )}
            
            <Link 
              to="/" 
              className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
            >
              Quay về trang chủ
            </Link>

            {nextPhase ? (
              <Link 
                to={`/phase/${nextPhase}`}
                className="flex items-center gap-2 text-white/70 hover:text-vietnam-gold transition-colors"
              >
                <span>Giai đoạn sau</span>
                <ArrowRight size={20} />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Phase

