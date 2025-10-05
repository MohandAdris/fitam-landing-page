import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Heart, Shield, Users, CheckCircle, Phone, Mail, User } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [language, setLanguage] = useState('ar')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const content = {
    ar: {
      hero: {
        title: 'تحكم في صحتك: أقلع عن التدخين مع فطام',
        subtitle: 'أخيراً، طريق مثبت نحو حياة خالية من التدخين. فطام يقدم برنامجاً شخصياً وداعماً لمساعدتك على الإقلاع عن التدخين نهائياً.',
        cta: 'ابدأ تقييمك المجاني الآن'
      },
      services: {
        title: 'تحرر من التدخين مع إرشادنا المتخصص',
        description: 'الإقلاع عن التدخين هو أحد أفضل القرارات التي يمكنك اتخاذها لصحتك، لكن ليس من السهل دائماً القيام بذلك وحدك. فطام هي عيادة مهنية للإقلاع عن التدخين مكرسة لتزويدك بالأدوات والدعم والإرشاد المتخصص الذي تحتاجه للنجاح.',
        items: [
          {
            title: 'تقييم الإدمان المجاني',
            description: 'افهم عادات التدخين الفريدة لديك ومستوى الإدمان من خلال تقييمنا الشامل بدون التزام. احصل على ملاحظات وتوصيات شخصية عبر الواتساب خلال 24 ساعة.',
            icon: Shield
          },
          {
            title: 'برنامج الإقلاع الشخصي',
            description: 'احصل على برنامج مخصص لمدة 3 أشهر مصمم خصيصاً لاحتياجاتك. يشمل برنامجنا دعماً مستمراً من خلال الواتساب ومكالمات الفيديو وجلسات العلاج الجماعي.',
            icon: Heart
          },
          {
            title: 'اهدِ مستقبلاً صحياً',
            description: 'أظهر لشخص عزيز عليك أنك تهتم بإهدائه استشارة مهنية مع خبرائنا. إنها خطوة أولى قوية نحو حياة خالية من التدخين.',
            icon: Users
          }
        ]
      },
      process: {
        title: 'كيف يعمل',
        steps: [
          'خذ التقييم المجاني: ابدأ بتقييمنا المجاني والسري عبر الإنترنت لفهم مستوى إدمانك.',
          'احصل على خطتك الشخصية: سيحلل خبراؤنا نتائجك وينشئون خطة إقلاع مخصصة لك فقط.',
          'احصل على الدعم المستمر: سنكون معك في كل خطوة مع متابعات منتظمة واستشارات ومجتمع داعم.'
        ]
      },
      expert: {
        title: 'تعرف على خبيرنا',
        name: 'أحمد أبو شعلة',
        description: 'ممرض رئيسي بخبرة تزيد عن 35 عاماً في الرعاية الصحية، متخصص في الإقلاع عن التدخين. إنه شغوف بمساعدة الأفراد والعائلات على عيش حياة أكثر صحة وخالية من التدخين.'
      },
      form: {
        title: 'مستعد لبدء رحلتك؟',
        description: 'اتخذ الخطوة الأولى نحو حياة أكثر صحة وسعادة. احصل على تقييم الإدمان المجاني والشخصي اليوم.',
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        submit: 'ابدأ تقييمك المجاني',
        success: 'شكراً لك! سنتواصل معك خلال 24 ساعة عبر الواتساب مع نتائج التقييم والتوصيات الشخصية.'
      }
    },
    he: {
      hero: {
        title: 'קח שליטה על הבריאות שלך: הפסק לעשן עם פיטאם',
        subtitle: 'סוף סוף, דרך מוכחת לחיים ללא עישון. פיטאם מציעה תוכנית אישית ותומכת שתעזור לך להפסיק לעשן לתמיד.',
        cta: 'התחל את ההערכה החינמית שלך עכשיו'
      },
      services: {
        title: 'השתחרר מעישון עם ההדרכה המקצועית שלנו',
        description: 'הפסקת עישון היא אחת ההחלטות הטובות ביותר שאתה יכול לקבל עבור הבריאות שלך, אבל לא תמיד קל לעשות זאת לבד. פיטאם היא מרפאה מקצועית לגמילה מעישון המוקדשת לספק לך את הכלים, התמיכה וההדרכה המקצועית שאתה צריך כדי להצליח.',
        items: [
          {
            title: 'הערכת התמכרות חינם',
            description: 'הבן את הרגלי העישון הייחודיים שלך ואת רמת ההתמכרות עם ההערכה המקיפה שלנו ללא התחייבות. קבל משוב והמלצות אישיות בוואטסאפ תוך 24 שעות.',
            icon: Shield
          },
          {
            title: 'תוכנית גמילה אישית',
            description: 'קבל תוכנית מותאמת אישית למשך 3 חודשים שתוכננה במיוחד לצרכים שלך. התוכנית שלנו כוללת תמיכה מתמשכת דרך וואטסאפ, שיחות וידאו וסשנים של טיפול קבוצתי.',
            icon: Heart
          },
          {
            title: 'הענק עתיד בריא',
            description: 'הראה לאדם יקר לך שאכפת לך על ידי מתן ייעוץ מקצועי עם המומחים שלנו. זה צעד ראשון חזק לקראת חיים ללא עישון.',
            icon: Users
          }
        ]
      },
      process: {
        title: 'איך זה עובד',
        steps: [
          'קח את ההערכה החינמית: התחל עם ההערכה החינמית והסודית שלנו באינטרנט כדי להבין את רמת ההתמכרות שלך.',
          'קבל את התוכנית האישית שלך: המומחים שלנו ינתחו את התוצאות שלך ויצרו תוכנית גמילה מותאמת אישית רק עבורך.',
          'קבל תמיכה מתמשכת: נהיה איתך בכל צעד עם בדיקות קבועות, ייעוץ וקהילה תומכת.'
        ]
      },
      expert: {
        title: 'הכר את המומחה שלנו',
        name: 'אחמד אבו שעלה',
        description: 'אח ראשי עם למעלה מ-35 שנות ניסיון בבריאות, המתמחה בגמילה מעישון. הוא נלהב לעזור לאנשים ולמשפחות לחיות חיים בריאים יותר וללא עישון.'
      },
      form: {
        title: 'מוכן להתחיל את המסע שלך?',
        description: 'קח את הצעד הראשון לקראת חיים בריאים ומאושרים יותר. קבל את הערכת ההתמכרות החינמית והאישית שלך היום.',
        firstName: 'שם פרטי',
        lastName: 'שם משפחה',
        email: 'אימייל',
        phone: 'מספר טלפון',
        submit: 'התחל את ההערכה החינמית שלך',
        success: 'תודה לך! ניצור איתך קשר תוך 24 שעות בוואטסאפ עם תוצאות ההערכה וההמלצות האישיות.'
      }
    }
  }

  const currentContent = content[language]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => setLanguage('ar')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              language === 'ar' 
                ? 'bg-[#009b88] text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => setLanguage('he')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              language === 'he' 
                ? 'bg-[#009b88] text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            עברית
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#009b88] to-[#007a6b] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              {currentContent.hero.subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#009b88] hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              {currentContent.hero.cta}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {currentContent.services.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentContent.services.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentContent.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-[#d7f9f4] rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-[#009b88]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#d7f9f4]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              {currentContent.process.title}
            </h2>
            <div className="space-y-8">
              {currentContent.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-[#009b88] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed text-start">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {currentContent.expert.title}
            </h2>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-[#009b88] rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentContent.expert.name}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentContent.expert.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-[#009b88] to-[#007a6b] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {currentContent.form.title}
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                {currentContent.form.description}
              </p>
            </div>

            {!isSubmitted ? (
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-700 font-medium">
                          {currentContent.form.firstName}
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="mt-2 border-gray-300 focus:border-[#009b88] focus:ring-[#009b88]"
                          placeholder={currentContent.form.firstName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-700 font-medium">
                          {currentContent.form.lastName}
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="mt-2 border-gray-300 focus:border-[#009b88] focus:ring-[#009b88]"
                          placeholder={currentContent.form.lastName}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        {currentContent.form.email}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 border-gray-300 focus:border-[#009b88] focus:ring-[#009b88]"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        {currentContent.form.phone}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 border-gray-300 focus:border-[#009b88] focus:ring-[#009b88]"
                        placeholder="+972501234567"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#009b88] hover:bg-[#007a6b] text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {currentContent.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-[#009b88] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">شكراً لك!</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentContent.form.success}
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">فطام</h3>
          <p className="text-gray-400 mb-6">منصة مهنية للإقلاع عن التدخين</p>
          <div className="flex justify-center space-x-6 space-x-reverse">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+972-50-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@fitam.net</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
