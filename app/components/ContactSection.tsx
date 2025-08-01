'use client'

import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    details: ''
  })

    // EmailJS Configuration - Direct credentials
  const emailjsConfig = {
    serviceId: 'service_mpg1inb',
    templateId: 'template_qxo0xza',
    publicKey: 'JBoaut1Z87n-ntnGe',
  }

  // Initialize EmailJS
  useEffect(() => {
    if (emailjsConfig.publicKey) {
      emailjs.init(emailjsConfig.publicKey)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current!,
        emailjsConfig.publicKey
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          phone: '',
          projectType: '',
          details: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ابدأ مشروعك
              اليوم
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              احصل على استشارة مجانية وعرض سعر مخصص لمشروعك. فريقنا جاهز لتحويل أحلامك إلى واقع.
            </p>


          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">احجز استشارة مجانية</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-2xl mb-6 text-sm">
                <i className="fas fa-check-circle ml-2"></i>
                <strong>تم الإرسال بنجاح!</strong> سنتواصل معك قريباً.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-300 text-red-800 p-4 rounded-2xl mb-6 text-sm">
                <i className="fas fa-exclamation-circle ml-2"></i>
                <strong>خطأ في الإرسال!</strong> يرجى المحاولة مرة أخرى.
              </div>
            )}

            <div className="bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-2xl mb-6 text-sm">
              <i className="fas fa-info-circle ml-2"></i>
              <strong>ملاحظة:</strong> سيتم إرسال طلبك عبر البريد الإلكتروني للحصول على استجابة فورية.
            </div>

            <form ref={formRef} className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="الاسم الكامل" 
                  className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors" 
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="رقم الهاتف" 
                  className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors" 
                  required
                />
              </div>

              <select 
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors" 
                required
              >
                <option value="">نوع المشروع</option>
                <option value="سكني">سكني</option>
                <option value="تجاري">تجاري</option>
                <option value="مكتب">مكتب</option>
                <option value="مطعم">مطعم</option>
                <option value="متجر">متجر</option>
              </select>
              <textarea 
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="تفاصيل المشروع ومتطلباتك" 
                rows={4} 
                className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors resize-none" 
                required
              ></textarea>
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black'
                }`}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin ml-2"></i>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane ml-2"></i>
                    إرسال طلب الاستشارة
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 