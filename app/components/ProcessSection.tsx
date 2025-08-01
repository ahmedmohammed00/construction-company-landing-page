'use client'

export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'الاستشارة الأولية',
      description: 'نلتقي بك لفهم احتياجاتك ورؤيتك ومناقشة الأفكار الأولية للمشروع',
      gradient: 'from-yellow-400 to-yellow-600',
      textColor: 'text-black'
    },
    {
      number: '2',
      title: 'التصميم والتخطيط',
      description: 'نضع التصاميم الأولية والمخططات التفصيلية مع مراعاة الميزانية والجدول الزمني',
      gradient: 'from-blue-400 to-blue-600',
      textColor: 'text-white'
    },
    {
      number: '3',
      title: 'التنفيذ والمتابعة',
      description: 'نبدأ التنفيذ بفريق محترف مع متابعة دقيقة لكل مرحلة من مراحل المشروع',
      gradient: 'from-green-400 to-green-600',
      textColor: 'text-white'
    },
    {
      number: '4',
      title: 'التسليم والضمان',
      description: 'نسلم المشروع مكتملاً مع ضمان شامل وخدمة ما بعد التسليم',
      gradient: 'from-purple-400 to-purple-600',
      textColor: 'text-white'
    }
  ]

  return (
    <section id="process" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            عمليتنا المتميزة
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            كيف نحول 
             رؤيتك
             الي واقع

          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نتبع منهجية علمية ومدروسة لضمان تحقيق أفضل النتائج في كل مشروع
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className={`text-2xl font-bold ${step.textColor}`}>{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 