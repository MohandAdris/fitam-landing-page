import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Heart, Shield, Users, CheckCircle, Phone, Mail, User, Star, Award, Clock, ArrowLeft, ArrowRight, Sparkles, Zap, Target } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import images
import fitamLogo from './assets/fitam-logo-official.png'
import heroBackground from './assets/hero-background.png'
import expertPortrait from './assets/expert-portrait.png'
import successJourney from './assets/success-journey.png'
import wellnessIcons from './assets/wellness-icons.png'

function App() {
  const [language, setLanguage] = useState('ar')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const content = {
    ar: {
      hero: {
        title: 'تحكم في صحتك',
        subtitle: 'أقلع عن التدخين مع فطام',
        description: 'رحلة تحويلية نحو حياة خالية من التدخين مع أحدث الطرق العلمية والدعم المتخصص',
        cta: 'ابدأ رحلتك المجانية',
        stats: [
          { number: '95%', label: 'معدل النجاح' },
          { number: '1000+', label: 'حالة شفاء' },
          { number: '35+', label: 'سنة خبرة' }
        ]
      },
      services: {
        title: 'برامج متخصصة للإقلاع عن التدخين',
        description: 'نقدم حلولاً شاملة ومبتكرة تناسب احتياجاتك الفردية مع ضمان المتابعة والدعم المستمر',
        items: [
          {
            title: 'تقييم شامل مجاني',
            description: 'تحليل علمي دقيق لحالتك مع وضع خطة شخصية مناسبة لظروفك ونمط حياتك',
            icon: Shield,
            color: 'from-emerald-400 to-teal-600',
            features: ['تقييم طبي شامل', 'خطة شخصية', 'استشارة مجانية']
          },
          {
            title: 'برنامج الإقلاع المتدرج',
            description: 'منهجية علمية مثبتة لمدة 3 أشهر مع متابعة يومية ودعم نفسي متخصص',
            icon: Heart,
            color: 'from-rose-400 to-pink-600',
            features: ['متابعة يومية', 'دعم نفسي', 'جلسات جماعية']
          },
          {
            title: 'برنامج الهدايا العلاجية',
            description: 'أهدِ من تحب فرصة حياة صحية جديدة مع باقات علاجية متكاملة',
            icon: Users,
            color: 'from-violet-400 to-purple-600',
            features: ['باقات متنوعة', 'متابعة عائلية', 'ضمان النتائج']
          }
        ]
      },
      process: {
        title: 'رحلتك نحو الحرية',
        subtitle: 'خطوات بسيطة وفعالة للوصول لهدفك',
        steps: [
          {
            title: 'التقييم الأولي',
            description: 'تقييم شامل لحالتك الصحية وعادات التدخين مع وضع خطة مخصصة',
            icon: Target,
            duration: '30 دقيقة'
          },
          {
            title: 'بداية البرنامج',
            description: 'تطبيق الخطة العلاجية مع المتابعة اليومية والدعم المستمر',
            icon: Zap,
            duration: '3 أشهر'
          },
          {
            title: 'النجاح والمتابعة',
            description: 'تحقيق الهدف مع متابعة دورية لضمان عدم العودة للتدخين',
            icon: Award,
            duration: 'مدى الحياة'
          }
        ]
      },
      testimonials: [
        {
          name: 'أحمد محمد',
          text: 'بعد 20 سنة من التدخين، نجحت في الإقلاع خلال شهرين فقط. الدعم كان رائعاً والنتائج مذهلة.',
          rating: 5,
          location: 'الرياض'
        },
        {
          name: 'فاطمة علي',
          text: 'البرنامج غير حياتي تماماً. الآن أشعر بصحة أفضل وطاقة أكبر. شكراً لفريق فطام.',
          rating: 5,
          location: 'جدة'
        },
        {
          name: 'محمد السعيد',
          text: 'طريقة علمية ومدروسة. المتابعة المستمرة ساعدتني كثيراً في تجاوز الصعوبات.',
          rating: 5,
          location: 'الدمام'
        }
      ],
      expert: {
        title: 'خبير معتمد في الإقلاع عن التدخين',
        name: 'أحمد أبو شعلة',
        title_expert: 'ممرض رئيسي - أخصائي الإقلاع عن التدخين',
        description: 'خبرة تزيد عن 35 عاماً في الرعاية الصحية مع تخصص دقيق في برامج الإقلاع عن التدخين. ساعد أكثر من 1000 شخص في تحقيق حلم الحياة الخالية من التدخين.',
        achievements: [
          'شهادة معتمدة في علاج إدمان التبغ',
          'عضو الجمعية الدولية لمكافحة التدخين',
          'مؤلف كتاب "الطريق إلى الحرية"'
        ]
      },
      form: {
        title: 'ابدأ رحلتك اليوم',
        description: 'احصل على استشارة مجانية وخطة شخصية للإقلاع عن التدخين خلال 24 ساعة',
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        submit: 'احصل على استشارتك المجانية',
        success: 'تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة عبر الواتساب مع خطتك الشخصية.',
        guarantee: 'ضمان الخصوصية التامة'
      }
    },
    he: {
      hero: {
        title: 'קח שליטה על הבריאות שלך',
        subtitle: 'הפסק לעשן עם פיטאם',
        description: 'מסע טרנספורמטיבי לחיים ללא עישון עם השיטות המדעיות החדישות והתמיכה המקצועית',
        cta: 'התחל את המסע החינמי שלך',
        stats: [
          { number: '95%', label: 'שיעור הצלחה' },
          { number: '1000+', label: 'מקרי החלמה' },
          { number: '35+', label: 'שנות ניסיון' }
        ]
      },
      services: {
        title: 'תוכניות מתخסות להפסקת עישון',
        description: 'אנו מציעים פתרונות מקיפים וחדשניים המתאימים לצרכים האישיים שלך עם הבטחת מעקב ותמיכה מתמשכת',
        items: [
          {
            title: 'הערכה מקיפה חינם',
            description: 'ניתוח מדעי מדויק של המצב שלך עם הכנת תוכנית אישית המתאימה לנסיבות ואורח החיים שלך',
            icon: Shield,
            color: 'from-emerald-400 to-teal-600',
            features: ['הערכה רפואית מקיפה', 'תוכנית אישית', 'ייעוץ חינם']
          },
          {
            title: 'תוכנית גמילה הדרגתית',
            description: 'מתודולוגיה מדעית מוכחת למשך 3 חודשים עם מעקב יומי ותמיכה פסיכולוגית מקצועית',
            icon: Heart,
            color: 'from-rose-400 to-pink-600',
            features: ['מעקב יומי', 'תמיכה פסיכולוגית', 'סשנים קבוצתיים']
          },
          {
            title: 'תוכנית מתנות טיפוליות',
            description: 'הענק לאדם שאתה אוהב הזדמנות לחיים בריאים חדשים עם חבילות טיפול מקיפות',
            icon: Users,
            color: 'from-violet-400 to-purple-600',
            features: ['חבילות מגוונות', 'מעקב משפחתי', 'הבטחת תוצאות']
          }
        ]
      },
      process: {
        title: 'המסע שלך לחופש',
        subtitle: 'צעדים פשוטים ויעילים להגיע ליעד שלך',
        steps: [
          {
            title: 'הערכה ראשונית',
            description: 'הערכה מקיפה של המצב הבריאותי שלך והרגלי העישון עם הכנת תוכנית מותאמת',
            icon: Target,
            duration: '30 דקות'
          },
          {
            title: 'תחילת התוכנית',
            description: 'יישום התוכנית הטיפולית עם מעקב יומי ותמיכה מתמשכת',
            icon: Zap,
            duration: '3 חודשים'
          },
          {
            title: 'הצלחה ומעקב',
            description: 'השגת המטרה עם מעקב תקופתי להבטחת אי חזרה לעישון',
            icon: Award,
            duration: 'לכל החיים'
          }
        ]
      },
      testimonials: [
        {
          name: 'אחמד מוחמד',
          text: 'אחרי 20 שנה של עישון, הצלחתי להפסיק תוך חודשיים בלבד. התמיכה הייתה נפלאה והתוצאות מדהימות.',
          rating: 5,
          location: 'תל אביב'
        },
        {
          name: 'פאטמה עלי',
          text: 'התוכנית שינתה את החיים שלי לחלוטין. עכשיו אני מרגישה בריאה יותר ועם יותר אנרגיה. תודה לצוות פיטאם.',
          rating: 5,
          location: 'חיפה'
        },
        {
          name: 'מוחמד אלסעיד',
          text: 'שיטה מדעית ומחושבת. המעקב המתמשך עזר לי מאוד להתגבר על הקשיים.',
          rating: 5,
          location: 'ירושלים'
        }
      ],
      expert: {
        title: 'מומחה מוסמך בהפסקת עישון',
        name: 'אחמד אבו שעלה',
        title_expert: 'אח ראשי - מומחה בהפסקת עישון',
        description: 'ניסיון של למעלה מ-35 שנה בבריאות עם התמחות מדויקת בתוכניות הפסקת עישון. עזר ליותר מ-1000 אנשים להגשים את החלום של חיים ללא עישון.',
        achievements: [
          'תעודה מוסמכת בטיפול בהתמכרות לטבק',
          'חבר באגודה הבינלאומית למלחמה בעישון',
          'מחבר הספר "הדרך לחופש"'
        ]
      },
      form: {
        title: 'התחל את המסע שלך היום',
        description: 'קבל ייעוץ חינם ותוכנית אישית להפסקת עישון תוך 24 שעות',
        firstName: 'שם פרטי',
        lastName: 'שם משפחה',
        email: 'אימייל',
        phone: 'מספר טלפון',
        submit: 'קבל את הייעוץ החינמי שלך',
        success: 'הבקשה שלך נשלחה בהצלחה! ניצור איתך קשר תוך 24 שעות בוואטסאפ עם התוכנית האישית שלך.',
        guarantee: 'הבטחת פרטיות מלאה'
      }
    }
  }

  const currentContent = content[language]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % currentContent.testimonials.length
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [currentContent.testimonials.length])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-x-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-violet-200/25 to-purple-200/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Language Toggle */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <div className="flex bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <button
            onClick={() => setLanguage('ar')}
            className={`px-6 py-3 text-sm font-bold transition-all duration-300 ${
              language === 'ar' 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => setLanguage('he')}
            className={`px-6 py-3 text-sm font-bold transition-all duration-300 ${
              language === 'he' 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            עברית
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/30"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDliODgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 text-center text-gray-900">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Logo */}
            <motion.div variants={itemVariants} className="mb-8">
              <img 
                src={fitamLogo} 
                alt="فطام.نت" 
                className="w-80 h-auto mx-auto mb-6 drop-shadow-2xl"
              />
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-6xl lg:text-8xl font-black mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-900 bg-clip-text text-transparent">
                  {currentContent.hero.title}
                </span>
                <span className="block text-4xl lg:text-6xl font-bold text-emerald-600 mt-2">
                  {currentContent.hero.subtitle}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium"
            >
              {currentContent.hero.description}
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
            >
              {currentContent.hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100"
                >
                  <div className="text-4xl lg:text-5xl font-black text-emerald-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800 text-xl px-12 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="w-6 h-6 mr-3" />
                {currentContent.hero.cta}
                {language === 'ar' ? <ArrowLeft className="w-6 h-6 ml-3" /> : <ArrowRight className="w-6 h-6 ml-3" />}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-600/60"
        >
          <div className="w-6 h-10 border-2 border-emerald-600/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-600/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {currentContent.services.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentContent.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardHeader className="text-center pb-6 pt-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-black text-gray-900 mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Success Journey Image */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzA1OTY2OSIgZmlsbC1vcGFjaXR5PSIwLjAzIj48cG9seWdvbiBwb2ludHM9IjUwIDAgNjAgNDAgMTAwIDUwIDYwIDYwIDUwIDEwMCA0MCA2MCA0MCA1MCA0MCA0MCIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {currentContent.process.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              {currentContent.process.subtitle}
            </p>
            
            {/* Success Journey Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <img 
                src={successJourney} 
                alt="رحلة النجاح" 
                className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {currentContent.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 mb-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-gray-900 mb-1">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-2 text-emerald-600 font-bold">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTMwIDMwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwcy0yMCA4Ljk1NC0yMCAyMCA4Ljk1NCAyMCAyMCAyMCAyMC04Ljk1NCAyMC0yMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              قصص نجاح ملهمة
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              اكتشف كيف غيّر برنامج فطام حياة المئات من الأشخاص
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md text-white">
                  <CardContent className="p-12 text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8 italic">
                      "{currentContent.testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div className="text-xl font-bold text-emerald-300">
                      {currentContent.testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-lg opacity-70">
                      {currentContent.testimonials[currentTestimonial].location}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {currentContent.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-emerald-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section with Portrait */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                {currentContent.expert.title}
              </h2>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-emerald-50">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-12 lg:p-16">
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                      {currentContent.expert.name}
                    </h3>
                    <p className="text-xl text-emerald-600 font-bold mb-6">
                      {currentContent.expert.title_expert}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {currentContent.expert.description}
                    </p>
                    
                    <div className="space-y-4">
                      {currentContent.expert.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Award className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={expertPortrait} 
                      alt="أحمد أبو شعلة" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-center text-white">
                      <div className="text-4xl font-black mb-2">35+</div>
                      <div className="text-lg font-bold mb-4">سنة خبرة</div>
                      <div className="text-3xl font-black mb-2">1000+</div>
                      <div className="text-lg font-bold">حالة نجاح</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIj48cGF0aCBkPSJNNTAgNTBjMC0yNy42MTQtMjIuMzg2LTUwLTUwLTUwcy01MCAyMi4zODYtNTAgNTAgMjIuMzg2IDUwIDUwIDUwIDUwLTIyLjM4NiA1MC01MHoiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black mb-6">
                {currentContent.form.title}
              </h2>
              <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                {currentContent.form.description}
              </p>
            </div>

            {!isSubmitted ? (
              <Card className="border-0 shadow-3xl bg-white/95 backdrop-blur-md">
                <CardContent className="p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-gray-800 font-bold text-lg">
                          {currentContent.form.firstName}
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                          placeholder={currentContent.form.firstName}
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-gray-800 font-bold text-lg">
                          {currentContent.form.lastName}
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                          placeholder={currentContent.form.lastName}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-gray-800 font-bold text-lg">
                        {currentContent.form.email}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-gray-800 font-bold text-lg">
                        {currentContent.form.phone}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                        placeholder="+972501234567"
                      />
                    </div>
                    
                    <div className="text-center pt-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                      >
                        <Sparkles className="w-6 h-6 mr-3" />
                        {currentContent.form.submit}
                        {language === 'ar' ? <ArrowLeft className="w-6 h-6 ml-3" /> : <ArrowRight className="w-6 h-6 ml-3" />}
                      </Button>
                      
                      <div className="flex items-center justify-center gap-2 mt-6 text-gray-600">
                        <Shield className="w-5 h-5" />
                        <span className="text-sm font-medium">{currentContent.form.guarantee}</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-0 shadow-3xl bg-white/95 backdrop-blur-md">
                  <CardContent className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-24 h-24 text-emerald-500 mx-auto mb-8" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-gray-900 mb-6">تم بنجاح!</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {currentContent.form.success}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={fitamLogo} 
                alt="فطام.نت" 
                className="w-48 h-auto opacity-80"
              />
            </div>
            <p className="text-xl text-gray-400 mb-8">تنفس حياة جديدة - منصة مهنية للإقلاع عن التدخين</p>
            <div className="flex justify-center items-center gap-8 text-lg">
              <div className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <Phone className="w-6 h-6" />
                <span>+972-50-123-4567</span>
              </div>
              <div className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span>info@fitam.net</span>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500">
              <p>&copy; 2025 فطام. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
