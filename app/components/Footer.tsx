'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-reverse sm:space-x-4 mb-6 min-w-0">
              <div className="relative w-14 h-14 sm:w-12 sm:h-12 flex-shrink-0 mb-2 sm:mb-0">
                <Image
                  src="/ايليت تاتش.png"
                  alt="إليت فينيش"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-full shadow-lg bg-white"
                />
              </div>
              <div className="min-w-0 text-center sm:text-right">
                <h3 className="text-xl font-bold truncate max-w-[140px] md:max-w-xs lg:max-w-sm xl:max-w-md">إليت فينيش</h3>
                <p className="text-xs text-gray-400 truncate max-w-[140px] md:max-w-xs lg:max-w-sm xl:max-w-md">تصميم داخلي وتشطيبات</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              نحول أحلامك إلى واقع بتصاميم استثنائية وتشطيبات فاخرة تعكس شخصيتك وأسلوب حياتك.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-colors">
                <i className="fab fa-facebook-f text-white"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-colors">
                <i className="fab fa-instagram text-white"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-colors">
                <i className="fab fa-linkedin text-white"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-colors">
                <i className="fab fa-youtube text-white"></i>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors"><i className="fas fa-drafting-compass ml-2"></i>التصميم المعماري</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors"><i className="fas fa-palette ml-2"></i>التصميم الداخلي</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors"><i className="fas fa-hammer ml-2"></i>التشطيبات الفاخرة</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors"><i className="fas fa-lightbulb ml-2"></i>الإضاءة الذكية</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">الخدمات</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-400 transition-colors">المعرض</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-3 text-gray-400">
              <p><i className="fas fa-phone ml-2"></i>+20 123 456 7890</p>
              <p><i className="fas fa-envelope ml-2"></i>info@elitefinish.com</p>
              <p><i className="fas fa-map-marker-alt ml-2"></i>القاهرة الجديدة، مصر</p>
              <p><i className="fas fa-clock ml-2"></i>السبت - الخميس: 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p><i className="fas fa-copyright ml-1"></i> 2024 إليت فينيش. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
} 