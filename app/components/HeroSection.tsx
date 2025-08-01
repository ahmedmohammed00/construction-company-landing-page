'use client'

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="fade-in-up">
              <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <i className="fas fa-star ml-2"></i>
                الشركة الرائدة في التصميم الداخلي
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 fade-in-up stagger-1">
              نحول
              <span className="text-gradient">  أحلامك </span>
              إلى واقع
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed fade-in-up stagger-2">
              تصاميم داخلية استثنائية وتشطيبات فاخرة تعكس شخصيتك وأسلوب حياتك. خبرة تزيد عن 15 عاماً في إبداع مساحات تلهم وتبهر.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
              <button 
                onClick={() => onScrollToSection('portfolio')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
              >
                <i className="fas fa-images ml-2"></i>
                استعرض أعمالنا
              </button>
              <button 
                onClick={() => onScrollToSection('contact')}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-bold transition-all"
              >
                <i className="fas fa-phone ml-2"></i>
                تواصل معنا
              </button>
            </div>
          </div>
          <div className="relative fade-in-up stagger-4">
            <div className="floating">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl absolute top-10 right-10"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl h-32 flex items-center justify-center">
                    <i className="fas fa-home text-white text-3xl"></i>
                  </div>
                  <div className="bg-white/20 rounded-2xl h-32 flex items-center justify-center">
                    <i className="fas fa-palette text-white text-3xl"></i>
                  </div>
                  <div className="bg-white/20 rounded-2xl h-32 flex items-center justify-center">
                    <i className="fas fa-lightbulb text-white text-3xl"></i>
                  </div>
                  <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl h-32 flex items-center justify-center">
                    <i className="fas fa-couch text-white text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 