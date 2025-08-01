'use client'

export default function PortfolioSection() {
  const projects = [
    {
      icon: 'fas fa-home',
      title: 'فيلا سكنية فاخرة',
      subtitle: 'فيلا عصرية - الرحاب',
      description: 'تصميم وتنفيذ كامل لفيلا 500 متر',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: 'fas fa-building',
      title: 'مكتب إداري',
      subtitle: 'مقر شركة - العاصمة الإدارية',
      description: 'تصميم مكاتب حديثة بمساحة 1000 متر',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: 'fas fa-utensils',
      title: 'مطعم راقي',
      subtitle: 'مطعم فاخر - زمالك',
      description: 'تصميم مطعم بطابع عصري أنيق',
      gradient: 'from-green-400 to-green-600'
    },
    {
      icon: 'fas fa-bed',
      title: 'شقة سكنية',
      subtitle: 'شقة عائلية - المعادي',
      description: 'تشطيب شقة 200 متر بتصميم مودرن',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: 'fas fa-store',
      title: 'محل تجاري',
      subtitle: 'متجر أزياء - سيتي ستارز',
      description: 'تصميم متجر عصري يجذب العملاء',
      gradient: 'from-red-400 to-red-600'
    },
    {
      icon: 'fas fa-spa',
      title: 'سبا ومركز جمال',
      subtitle: 'سبا فاخر - الشيخ زايد',
      description: 'تصميم مركز جمال بأجواء استرخاء',
      gradient: 'from-indigo-400 to-indigo-600'
    }
  ]

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block bg-yellow-400/10 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            معرض أعمالنا
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            مشاريع تحكي قصص النجاح
            
            </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استعرض مجموعة من أفضل مشاريعنا التي تعكس خبرتنا وإبداعنا في عالم التصميم والتشطيب
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="hover-scale group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl">
                <div className={`h-80 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <i className={`${project.icon} text-6xl mb-4 opacity-80`}></i>
                    <p className="text-lg font-medium">{project.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.subtitle}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 