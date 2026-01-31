export type Language = 'th' | 'en'

export interface Translations {
  header: {
    features: string
    pricing: string
    faq: string
    contact: string
    requestDemo: string
  }
  hero: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  trust: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
    }>
  }
  modules: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
    }>
  }
  workflow: {
    title: string
    subtitle: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  testimonials: {
    title: string
    subtitle: string
    items: Array<{
      name: string
      role: string
      clinic: string
      content: string
    }>
  }
  pricing: {
    title: string
    subtitle: string
    monthly: string
    annually: string
    perMonth: string
    contactSales: string
    getStarted: string
    plans: Array<{
      name: string
      description: string
      price: string
      features: string[]
    }>
  }
  faq: {
    title: string
    subtitle: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      phone: string
      clinic: string
      message: string
      submit: string
      submitting: string
      success: string
    }
  }
  footer: {
    tagline: string
    product: string
    company: string
    support: string
    followUs: string
    rights: string
    links: {
      features: string
      pricing: string
      demo: string
      about: string
      blog: string
      careers: string
      docs: string
      help: string
      contact: string
    }
  }
}

export const translations: Record<Language, Translations> = {
  th: {
    header: {
      features: 'ฟีเจอร์',
      pricing: 'แพ็กเกจ',
      faq: 'คำถามที่พบบ่อย',
      contact: 'ติดต่อเรา',
      requestDemo: 'ขอทดลองใช้',
    },
    hero: {
      title: 'ระบบบริหารจัดการคลินิกทันตกรรมที่ออกแบบมาเพื่อคุณ',
      subtitle:
        'เพิ่มประสิทธิภาพการทำงาน ลดภาระงานเอกสาร และมอบประสบการณ์ที่ดีที่สุดให้กับผู้ป่วย ด้วยระบบที่ครบครันและใช้งานง่าย',
      ctaPrimary: 'ขอทดลองใช้ฟรี',
      ctaSecondary: 'ติดต่อฝ่ายขาย',
    },
    trust: {
      title: 'ทำไมต้องเลือก Dentsis',
      subtitle: 'ระบบที่ออกแบบมาเพื่อตอบโจทย์การทำงานของคลินิกทันตกรรมโดยเฉพาะ',
      items: [
        {
          title: 'เริ่มใช้งานได้ทันที',
          description: 'ติดตั้งและปรับแต่งระบบได้ง่ายภายในไม่กี่วัน ไม่ต้องรอนาน',
        },
        {
          title: 'ตรงตามเวิร์กโฟลว์จริง',
          description: 'ออกแบบโดยทีมที่เข้าใจการทำงานของคลินิกทันตกรรมอย่างลึกซึ้ง',
        },
        {
          title: 'ข้อมูลชัดเจน ตัดสินใจง่าย',
          description: 'รายงานและแดชบอร์ดที่ช่วยให้คุณเห็นภาพรวมและวิเคราะห์ได้ทันที',
        },
        {
          title: 'ทีมซัพพอร์ตพร้อมช่วย',
          description: 'ทีมงานคอยให้คำปรึกษาและแก้ไขปัญหา ตั้งแต่เริ่มต้นจนถึงการใช้งานจริง',
        },
      ],
    },
    modules: {
      title: 'ฟีเจอร์หลักที่ครอบคลุมทุกการทำงาน',
      subtitle: 'ระบบบูรณาการที่ช่วยให้คลินิกของคุณทำงานได้อย่างราบรื่น',
      items: [
        {
          title: 'ระบบ OPD',
          description:
            'บันทึกข้อมูลผู้ป่วย ประวัติการรักษา และติดตามแผนการรักษาได้อย่างครบถ้วน',
        },
        {
          title: 'ระบบนัดหมาย',
          description:
            'จัดการตารางนัดหมาย ส่งการแจ้งเตือนอัตโนมัติ และลดปัญหาการนัดซ้อน',
        },
        {
          title: 'ระบบบิลและการเงิน',
          description: 'ออกบิล จัดการค่ารักษา สต็อกสินค้า และสรุปรายรับรายจ่ายอย่างแม่นยำ',
        },
      ],
    },
    workflow: {
      title: 'กระบวนการทำงานร่วมกับเรา',
      subtitle: '4 ขั้นตอนสู่ความสำเร็จ',
      steps: [
        {
          title: 'ค้นพบความต้องการ',
          description: 'ปรึกษาและวิเคราะห์ความต้องการของคลินิกคุณ',
        },
        {
          title: 'ออกแบบระบบ',
          description: 'ปรับแต่งฟีเจอร์ให้ตรงกับเวิร์กโฟลว์ของคุณ',
        },
        {
          title: 'ติดตั้งและฝึกอบรม',
          description: 'ติดตั้งระบบและอบรมทีมให้ใช้งานได้อย่างมั่นใจ',
        },
        {
          title: 'ดูแลต่อเนื่อง',
          description: 'ซัพพอร์ตและพัฒนาระบบให้ดียิ่งขึ้นเรื่อยๆ',
        },
      ],
    },
    testimonials: {
      title: 'ความไว้วางใจจากคลินิกชั้นนำ',
      subtitle: 'เสียงจากลูกค้าที่ใช้บริการจริง',
      items: [
        {
          name: 'ทพญ. สุดารัตน์ วงศ์ไพศาล',
          role: 'เจ้าของคลินิก',
          clinic: 'Smile Bright Dental',
          content:
            'ระบบ Dentsis ช่วยให้คลินิกของเราทำงานได้คล่องตัวขึ้นมาก ไม่ต้องกังวลเรื่องเอกสารหาย หรือนัดซ้อนอีกต่อไป ทีมงานก็ชอบมาก',
        },
        {
          name: 'ดร. พิชัย สมบูรณ์',
          role: 'ผู้อำนวยการ',
          clinic: 'Bangkok Dental Center',
          content:
            'การรายงานทางการเงินที่ชัดเจนทำให้เราตัดสินใจเรื่องธุรกิจได้รวดเร็วขึ้น ทีมซัพพอร์ตก็ตอบเร็วและช่วยเหลือดีมาก',
        },
        {
          name: 'ทพ. อนุชา เจริญสุข',
          role: 'ทันตแพทย์เจ้าของคลินิก',
          clinic: 'Happy Teeth Clinic',
          content:
            'เราใช้ Dentsis มา 2 ปีแล้ว ระบบมีอัปเดตบ่อย และทีมงานพัฒนาฟีเจอร์ใหม่ๆ ตามความต้องการของเราด้วย ประทับใจมาก',
        },
      ],
    },
    pricing: {
      title: 'แพ็กเกจที่เหมาะกับทุกขนาดคลินิก',
      subtitle: 'เลือกแพ็กเกจที่ตรงกับความต้องการของคุณ',
      monthly: 'รายเดือน',
      annually: 'รายปี',
      perMonth: '/ เดือน',
      contactSales: 'ติดต่อสอบถาม',
      getStarted: 'เริ่มต้นใช้งาน',
      plans: [
        {
          name: 'Starter',
          description: 'เหมาะสำหรับคลินิกขนาดเล็ก',
          price: '3,900',
          features: [
            'ผู้ใช้งาน 1-3 คน',
            'ข้อมูลผู้ป่วยไม่จำกัด',
            'ระบบนัดหมายพื้นฐาน',
            'ระบบบิลและใบเสร็จ',
            'รายงานมาตรฐาน',
            'ซัพพอร์ตทาง Email',
          ],
        },
        {
          name: 'Clinic',
          description: 'เหมาะสำหรับคลินิกขนาดกลาง',
          price: '7,900',
          features: [
            'ผู้ใช้งาน 4-10 คน',
            'ฟีเจอร์ครบทุกอย่าง',
            'ระบบนัดหมายขั้นสูง + SMS',
            'การจัดการสต็อกและคลัง',
            'รายงานขั้นสูงและแดชบอร์ด',
            'ซัพพอร์ต 24/7',
            'อบรมเชิงลึก',
          ],
        },
        {
          name: 'Enterprise',
          description: 'สำหรับเครือคลินิกและโรงพยาบาล',
          price: 'ติดต่อเรา',
          features: [
            'ผู้ใช้งานไม่จำกัด',
            'หลายสาขา (Multi-branch)',
            'ปรับแต่งตามความต้องการ',
            'API Integration',
            'Dedicated Account Manager',
            'On-premise หรือ Cloud',
            'SLA รับประกัน',
          ],
        },
      ],
    },
    faq: {
      title: 'คำถามที่พบบ่อย',
      subtitle: 'คำตอบสำหรับคำถามทั่วไปเกี่ยวกับ Dentsis',
      items: [
        {
          question: 'ใช้เวลานานแค่ไหนในการติดตั้งและเริ่มใช้งาน?',
          answer:
            'โดยปกติใช้เวลา 3-5 วันทำการสำหรับการติดตั้ง ปรับแต่ง และอบรมพื้นฐาน คุณสามารถเริ่มใช้งานได้ทันทีหลังจากนั้น ทีมงานจะคอยช่วยเหลือตลอดกระบวนการ',
        },
        {
          question: 'ข้อมูลผู้ป่วยปลอดภัยแค่ไหน?',
          answer:
            'เราใช้มาตรฐานความปลอดภัยระดับสากล เข้ารหัสข้อมูลทั้งในการส่งและจัดเก็บ มีการสำรองข้อมูลอัตโนมัติทุกวัน และปฏิบัติตามกฎหมาย PDPA อย่างเคร่งครัด',
        },
        {
          question: 'ต้องใช้อุปกรณ์พิเศษหรือไม่?',
          answer:
            'ไม่จำเป็น Dentsis ทำงานบนเว็บเบราว์เซอร์ทั่วไป (Chrome, Safari, Edge) ใช้งานได้ทั้งคอมพิวเตอร์และแท็บเล็ต ไม่ต้องติดตั้งโปรแกรม',
        },
        {
          question: 'สามารถย้ายข้อมูลจากระบบเก่ามาได้ไหม?',
          answer:
            'ได้ครับ ทีมงานจะช่วยคุณย้ายข้อมูลผู้ป่วย ประวัติการรักษา และข้อมูลสำคัญอื่นๆ จากระบบเก่า โดยไม่มีค่าใช้จ่ายเพิ่มเติม',
        },
        {
          question: 'มีการอบรมการใช้งานหรือไม่?',
          answer:
            'มีครับ เรามีโปรแกรมอบรมแบบ Step-by-step ทั้งแบบ On-site และ Online รวมถึงวิดีโอสอนและเอกสารประกอบที่ครบถ้วน',
        },
        {
          question: 'สามารถยกเลิกหรือเปลี่ยนแพ็กเกจได้ไหม?',
          answer:
            'สามารถเปลี่ยนแพ็กเกจได้ทุกเมื่อตามความต้องการ สำหรับการยกเลิก เราขอให้แจ้งล่วงหน้า 30 วัน และจะส่งมอบข้อมูลทั้งหมดของคุณอย่างครบถ้วน',
        },
      ],
    },
    contact: {
      title: 'พร้อมเริ่มต้นแล้วหรือยัง?',
      subtitle: 'ติดต่อเราเพื่อปรึกษาและขอทดลองใช้ฟรี',
      form: {
        name: 'ชื่อ-นามสกุล',
        email: 'อีเมล',
        phone: 'เบอร์โทรศัพท์',
        clinic: 'ชื่อคลินิก',
        message: 'ข้อความ (ถ้ามี)',
        submit: 'ส่งข้อความ',
        submitting: 'กำลังส่ง...',
        success: 'ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด',
      },
    },
    footer: {
      tagline: 'ระบบบริหารจัดการคลินิกทันตกรรม ที่ออกแบบมาเพื่อคุณ',
      product: 'ผลิตภัณฑ์',
      company: 'บริษัท',
      support: 'ช่วยเหลือ',
      followUs: 'ติดตามเรา',
      rights: '© 2026 Dentsis. สงวนลิขสิทธิ์.',
      links: {
        features: 'ฟีเจอร์',
        pricing: 'แพ็กเกจ',
        demo: 'ทดลองใช้',
        about: 'เกี่ยวกับเรา',
        blog: 'บล็อก',
        careers: 'ร่วมงานกับเรา',
        docs: 'เอกสาร',
        help: 'ศูนย์ช่วยเหลือ',
        contact: 'ติดต่อเรา',
      },
    },
  },
  en: {
    header: {
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      requestDemo: 'Request Demo',
    },
    hero: {
      title: 'Dental Clinic Management System Designed for You',
      subtitle:
        'Boost efficiency, reduce paperwork, and deliver the best patient experience with our comprehensive and user-friendly system',
      ctaPrimary: 'Try for Free',
      ctaSecondary: 'Contact Sales',
    },
    trust: {
      title: 'Why Choose Dentsis',
      subtitle: 'A system specifically designed to meet the needs of dental clinics',
      items: [
        {
          title: 'Quick to Start',
          description: 'Easy setup and customization within a few days, no long wait',
        },
        {
          title: 'Fits Real Workflows',
          description: 'Designed by a team with deep understanding of dental clinic operations',
        },
        {
          title: 'Clear Data, Easy Decisions',
          description: 'Reports and dashboards for instant overview and analysis',
        },
        {
          title: 'Support Team Ready',
          description: 'Our team provides consultation and support from start to deployment',
        },
      ],
    },
    modules: {
      title: 'Core Features That Cover All Operations',
      subtitle: 'Integrated system for smooth clinic management',
      items: [
        {
          title: 'OPD System',
          description:
            'Record patient data, treatment history, and track treatment plans comprehensively',
        },
        {
          title: 'Appointment System',
          description:
            'Manage appointment schedules, send automatic reminders, and reduce double bookings',
        },
        {
          title: 'Billing & Finance',
          description:
            'Issue invoices, manage treatment fees, inventory, and summarize revenue accurately',
        },
      ],
    },
    workflow: {
      title: 'Working Process with Us',
      subtitle: '4 Steps to Success',
      steps: [
        {
          title: 'Discover Needs',
          description: 'Consult and analyze your clinic requirements',
        },
        {
          title: 'Design System',
          description: 'Customize features to match your workflow',
        },
        {
          title: 'Implement & Train',
          description: 'Install system and train your team confidently',
        },
        {
          title: 'Ongoing Support',
          description: 'Continuous support and system improvement',
        },
      ],
    },
    testimonials: {
      title: 'Trusted by Leading Clinics',
      subtitle: 'Real voices from our customers',
      items: [
        {
          name: 'Dr. Sudarat Wongpaisan',
          role: 'Clinic Owner',
          clinic: 'Smile Bright Dental',
          content:
            'Dentsis helps our clinic operate much more smoothly. No more worries about lost documents or double bookings. Our team loves it.',
        },
        {
          name: 'Dr. Pichai Somboon',
          role: 'Director',
          clinic: 'Bangkok Dental Center',
          content:
            'Clear financial reporting enables us to make business decisions faster. Support team is very responsive and helpful.',
        },
        {
          name: 'Dr. Anucha Charoensuk',
          role: 'Dentist & Clinic Owner',
          clinic: 'Happy Teeth Clinic',
          content:
            "We've been using Dentsis for 2 years. The system updates frequently, and the team develops new features based on our needs. Very impressed.",
        },
      ],
    },
    pricing: {
      title: 'Packages for Every Clinic Size',
      subtitle: 'Choose the package that fits your needs',
      monthly: 'Monthly',
      annually: 'Annually',
      perMonth: '/ month',
      contactSales: 'Contact Sales',
      getStarted: 'Get Started',
      plans: [
        {
          name: 'Starter',
          description: 'Perfect for small clinics',
          price: '$99',
          features: [
            '1-3 Users',
            'Unlimited Patients',
            'Basic Appointment System',
            'Billing & Receipts',
            'Standard Reports',
            'Email Support',
          ],
        },
        {
          name: 'Clinic',
          description: 'Perfect for medium-sized clinics',
          price: '$199',
          features: [
            '4-10 Users',
            'All Features Included',
            'Advanced Appointments + SMS',
            'Inventory Management',
            'Advanced Reports & Dashboard',
            '24/7 Support',
            'In-depth Training',
          ],
        },
        {
          name: 'Enterprise',
          description: 'For clinic chains and hospitals',
          price: 'Contact Us',
          features: [
            'Unlimited Users',
            'Multi-branch Support',
            'Custom Configuration',
            'API Integration',
            'Dedicated Account Manager',
            'On-premise or Cloud',
            'SLA Guarantee',
          ],
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to common questions about Dentsis',
      items: [
        {
          question: 'How long does it take to install and start using?',
          answer:
            'Typically 3-5 business days for installation, customization, and basic training. You can start using immediately after. Our team will assist throughout the process.',
        },
        {
          question: 'How secure is patient data?',
          answer:
            'We use international security standards, encrypt data in transit and at rest, automated daily backups, and strictly comply with PDPA regulations.',
        },
        {
          question: 'Do I need special equipment?',
          answer:
            'No. Dentsis runs on standard web browsers (Chrome, Safari, Edge) on both computers and tablets. No software installation required.',
        },
        {
          question: 'Can I migrate data from my old system?',
          answer:
            'Yes. Our team will help you migrate patient data, treatment history, and other important information from your old system at no extra charge.',
        },
        {
          question: 'Is training provided?',
          answer:
            'Yes. We offer step-by-step training programs both on-site and online, including tutorial videos and comprehensive documentation.',
        },
        {
          question: 'Can I cancel or change my package?',
          answer:
            'You can change packages anytime. For cancellation, we require 30 days notice and will provide all your data completely.',
        },
      ],
    },
    contact: {
      title: 'Ready to Get Started?',
      subtitle: 'Contact us for consultation and free trial',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        clinic: 'Clinic Name',
        message: 'Message (optional)',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Message sent successfully! We will contact you soon.',
      },
    },
    footer: {
      tagline: 'Dental clinic management system designed for you',
      product: 'Product',
      company: 'Company',
      support: 'Support',
      followUs: 'Follow Us',
      rights: '© 2026 Dentsis. All rights reserved.',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        demo: 'Demo',
        about: 'About Us',
        blog: 'Blog',
        careers: 'Careers',
        docs: 'Documentation',
        help: 'Help Center',
        contact: 'Contact Us',
      },
    },
  },
}
