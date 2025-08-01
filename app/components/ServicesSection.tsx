'use client'

export default function ServicesSection() {
  const services = [
    {
      icon: 'fas fa-drafting-compass',
      title: 'التصميم المعماري',
      description: 'تصاميم معمارية مبتكرة تجمع بين الجمال والوظائف العملية مع مراعاة أحدث الاتجاهات العالمية',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fas fa-palette',
      title: 'التصميم الداخلي',
      description: 'تصاميم داخلية فريدة تعكس شخصيتك وتخلق بيئة مريحة وملهمة لك ولعائلتك',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fas fa-hammer',
      title: 'التشطيبات الفاخرة',
      description: 'تشطيبات عالية الجودة باستخدام أفضل المواد والتقنيات الحديثة لضمان النتائج المثالية',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'الإضاءة الذكية',
      description: 'أنظمة إضاءة متطورة وذكية تخلق أجواء مثالية وتوفر في استهلاك الطاقة',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: 'fas fa-couch',
      title: 'الأثاث المخصص',
      description: 'قطع أثاث مصممة خصيصاً لمساحتك بأجود المواد والحرفية العالية',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: 'fas fa-tools',
      title: 'الصيانة والتطوير',
      description: 'خدمات صيانة شاملة وتطوير المساحات الموجودة لتواكب أحدث الاتجاهات',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-yellow-400/10 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            خدماتنا المتميزة
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            نقدم حلول شاملة لكل
            احتياجاتك
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            من التصميم الأولي إلى التنفيذ النهائي، نوفر خدمات متكاملة بأعلى معايير الجودة والإبداع
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-hover bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-yellow-600 font-medium">
                <span>اعرف المزيد</span>
                <i className="fas fa-arrow-left mr-2"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 