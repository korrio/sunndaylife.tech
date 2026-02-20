import type { PageContent, Testimonial } from '@/types';

export const homePage: PageContent = {
  id: "home",
  title: "Sunny Day 365 - Professional IT Services",
  titleTh: "Sunny Day 365 - บริการไอทีมืออาชีพ",
  metaDescription: "Professional IT & Smart Solutions with more than 10 years of experience in international organizations.",
  metaDescriptionTh: "โซลูชันไอทีและบริการอัจฉริยะ ด้วยประสบการณ์กว่า 10 ปีจากองค์กรระดับนานาชาติ",
  hero: {
    title: "Professional IT & Smart Solutions",
    titleTh: "บริการไอทีมืออาชีพและโซลูชันอัจฉริยะ",
    description: "Focus on your work, Let us deal with technology. Over 10 years of experience delivering value-driven IT solutions.",
    descriptionTh: "โฟกัสกับงานของคุณ เรื่องเทคโนโลยีให้เราดูแล ด้วยประสบการณ์กว่า 10 ปีในการส่งมอบโซลูชันไอทีที่สร้างคุณค่า"
  },
  sections: [
    {
      id: "who-we-are",
      type: "text",
      title: "Who We Are",
      titleTh: "เราคือใคร",
      content: {
        heading: "Your Trusted IT Partner",
        headingTh: "พาร์ทเนอร์ไอทีที่คุณวางใจได้",
        body: "Sunny Day 365 was founded to break away from traditional approaches to how businesses manage technology. Led by Phongsaphat Duma, a seasoned IT professional with over a decade of experience in international organizations including ICRC and UN ILO, we deliver value-driven, proactive, and tailored IT solutions. From managing IT operations in critical regions like Somalia, Kenya, and Myanmar to participating in international discussions in Egypt and Serbia, our expertise is rooted in real-world problem-solving and strategic thinking.",
        bodyTh: "Sunny Day 365 ก่อตั้งขึ้นด้วยความตั้งใจที่จะ 'เปลี่ยนวิธีคิด' ในการบริหารจัดการเทคโนโลยีขององค์กร เรามุ่งมั่นที่จะส่งมอบโซลูชัน IT ระดับคุณภาพ ขับเคลื่อนด้วยการทำงานเชิงรุก และออกแบบเฉพาะให้สอดรับกับบริบทของแต่ละธุรกิจอย่างแท้จริง การเดินทางของเราเริ่มต้นจากวิสัยทัศน์ที่ต้องการเชื่อม 'มาตรฐานระดับโลก' เข้ากับ 'ความต้องการของธุรกิจท้องถิ่น' อย่างลงตัว",
        stats: [
          { value: "10+", label: "Years of Experience", labelTh: "ปีประสบการณ์" },
          { value: "50+", label: "Clients Served", labelTh: "ลูกค้า" },
          { value: "5", label: "Countries Deployed", labelTh: "ประเทศ" }
        ]
      }
    },
    {
      id: "background",
      type: "text",
      title: "Background",
      titleTh: "ความเป็นมา",
      content: {
        heading: "The Journey of Sunny Day 365",
        headingTh: "ความเป็นมาของ Sunny Day 365",
        body: "Sunny Day 365 was founded with the intention of changing the way organizations manage technology. We are committed to delivering quality IT solutions, driven by proactive work and specifically designed to fit the context of each business. Our journey began with a vision to connect 'world-class standards' with 'local business needs' in a balanced way, with work experience in challenging IT environments including Somalia, Kenya, Myanmar, and participation in international forums in Egypt and Serbia. These experiences have forged our expertise on a foundation of real problem-solving and strategic thinking.",
        bodyTh: "เริ่มต้นจากวิสัยทัศน์... เชื่อมโลกถึงทุกพื้นที่ Sunny Day 365 ก่อตั้งขึ้นด้วยความตั้งใจที่จะ 'เปลี่ยนวิธีคิด' ในการบริหารจัดการเทคโนโลยีขององค์กร เรามุ่งมั่นที่จะส่งมอบโซลูชัน IT ระดับคุณภาพ ขับเคลื่อนด้วยการทำงานเชิงรุก และออกแบบเฉพาะให้สอดรับกับบริบทของแต่ละธุรกิจอย่างแท้จริง กว่า 10 ปี ในพื้นที่ท้าทาย อาทิ โซมาเลีย เคนยา เมียนมา ตลอดจนการมีส่วนร่วมในเวทีนานาชาติที่อยุ่ปีร์ต์ เปลี่ยนรูป และเซอร์เบีย"
      }
    },
    {
      id: "philosophy",
      type: "text",
      title: "Our Philosophy",
      titleTh: "ปรัชญาของเรา",
      content: {
        heading: "Business First, Technology Second",
        headingTh: "ธุรกิจก่อน เทคโนโลยีรอง",
        body: "We simply want to deliver our value to our customer in the form of service. We strive to eliminate recurring and chronic issues, whether caused by technical or process problems. IT department exists because we help drive the business further.",
        bodyTh: "เราเพียงต้องการส่งมอบคุณค่าของเราให้กับลูกค้าในรูปแบบของบริการ เราพยายามกำจัดปัญหาที่เกิดซ้ำและเรื้อรัง ไม่ว่าจะเกิดจากปัญหาทางเทคนิคหรือกระบวนการ แผนก IT มีอยู่เพราะเราช่วยขับเคลื่อนธุรกิจให้ก้าวไปข้างหน้า",
        values: [
          { title: "Owner Driven", titleTh: "ขับเคลื่อนโดยเจ้าของ", description: "Direct ownership and accountability", descriptionTh: "ความเป็นเจ้าของและความรับผิดชอบโดยตรง" },
          { title: "Expert Services", titleTh: "บริการจากผู้เชี่ยวชาญ", description: "Deep industry expertise", descriptionTh: "ความเชี่ยวชาญเชิงลึกในอุตสาหกรรม" },
          { title: "Cost Effective", titleTh: "คุ้มค่าคุ้มราคา", description: "Optimized solutions for your budget", descriptionTh: "โซลูชันที่เหมาะสมกับงบประมาณของคุณ" }
        ]
      }
    },
    {
      id: "approach",
      type: "text",
      title: "Our Approach",
      titleTh: "วิธีการทำงานของเรา",
      content: {
        heading: "The Proactive Teamwork",
        headingTh: "การทำงานร่วมกันเชิงรุก",
        body: "Led by seasoned IT professionals with over a decade of experience in international organizations. We bring world-class knowledge to drive your business forward with immediate results.",
        bodyTh: "เราขับเคลื่อนโดยทีมงานเชิงรุกระดับมืออาชีพ บริหารจัดการโดยผู้เชี่ยวชาญด้านเทคโนโลยีตัวจริง ด้วยประสบการณ์ทำงานจากองค์กรระดับนำนานาชาติมากกว่า 10 ปี พร้อมนำทักษะไอทีตามมาตรฐานสากล มาช่วยยกระดับธุรกิจของคุณ"
      }
    },
    {
      id: "services",
      type: "services",
      title: "Our Core Services",
      titleTh: "บริการหลักของเรา",
      content: {
        subtitle: "How We Help You",
        subtitleTh: "เราช่วยคุณได้อย่างไร",
        description: "Comprehensive IT solutions tailored to your business needs",
        descriptionTh: "โซลูชันไอทีครบวงจรที่ออกแบบมาเพื่อธุรกิจของคุณ"
      }
    },
    {
      id: "case-studies",
      type: "case-studies",
      title: "Our Work",
      titleTh: "ผลงานของเรา",
      content: {
        subtitle: "Our Latest Projects",
        subtitleTh: "โครงการล่าสุด",
        description: "Discover how we've helped businesses transform their IT operations",
        descriptionTh: "ค้นพบว่าเราช่วยให้ธุรกิจเปลี่ยนแปลงการดำเนินงานไอทีได้อย่างไร"
      }
    },
    {
      id: "why-choose-us",
      type: "text",
      title: "Why Choose Us",
      titleTh: "เหตุผลที่เลือกเรา",
      content: {
        heading: "Why Leading Organizations Trust Us",
        headingTh: "เหตุผลที่องค์กรชั้นนำไว้ใจเรา",
        body: "Responsible work by executives, hands-on work by professionals. Every baht is worth it. With the founder's commitment as an IT expert with extensive experience from world-class international organizations such as ICRC, UN, and leading technology companies, we pay attention to every detail based on responsibility, trust, and commitment, and place your success as the ultimate goal.",
        bodyTh: "รับผิดชอบงานโดยผู้บริหาร ลงมือทำงานโดยมืออาชีพ คุ้มค่าทุกเม็ดเงิน ด้วยปณิธานของผู้ก่อตั้งซึ่งเป็นผู้เชี่ยวชาญด้านไอทีมีงานมากประสบการณ์จากองค์กรระดับโซมาเลีย เคนยา ทีี่ต้องการส่งมอบสิ่งที่ดีที่สุด จึงใส่ใจทุกรายละเอียดบนความรับผิดชอบ ความเชื่อมั่น ตั้งใจ ชั้นนำ พร้อมนำความรู้ระดับโลกมาขับเคลื่อนธุรกิจของคุณ"
      }
    },
    {
      id: "cta",
      type: "cta",
      title: "Ready to Get Started?",
      titleTh: "พร้อมเริ่มต้น?",
      content: {
        heading: "Let's build something different",
        headingTh: "มาสร้างสิ่งที่แตกต่างไปด้วยกัน",
        description: "Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.",
        descriptionTh: "ก้าวแรกสู่อนาคตที่สดใส และเพิ่มพลังให้ธุรกิจของคุณด้วยเทคโนโลยีล้ำสมัย คำแนะนำจากผู้เชี่ยวชาญ และการสนับสนุนที่ไร้คู่แข่ง",
        buttonText: "Get in Touch",
        buttonTextTh: "ติดต่อเรา",
        buttonLink: "/contact"
      }
    }
  ],
  updatedAt: "2026-02-20T00:00:00.000Z"
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Sunny Day 365 transformed our IT infrastructure completely. Their expertise in international deployments saved us months of work.",
    quoteTh: "Sunny Day 365 ปรับโครงสร้างพื้นฐานไอทีของเราอย่างสมบูรณ์ ความเชี่ยวชาญในการดำเนินงานระหว่างประเทศของพวกเขาช่วยประหยัดเวลาเป็นเดือน",
    author: "Kaylynn Westervelt",
    role: "Operations Director",
    roleTh: "ผู้อำนวยการฝ่ายปฏิบัติการ",
    company: "Global Logistics Co.",
    rating: 5
  },
  {
    id: "2",
    quote: "Professional, responsive, and incredibly knowledgeable. They helped us scale from startup to enterprise seamlessly.",
    quoteTh: "เป็นมืออาชีพ ตอบสนองรวดเร็ว และมีความรู้ลึกซึ้ง พวกเขาช่วยให้เราขยายตัวจากสตาร์ทอัพสู่องค์กรได้อย่างราบรื่น",
    author: "Sophia Jackson",
    role: "CEO",
    roleTh: "ประธานเจ้าหน้าที่บริหาร",
    company: "TechStart Inc.",
    rating: 5
  },
  {
    id: "3",
    quote: "The ISO certification process was daunting, but Sunny Day made it straightforward. Certified in just 6 months!",
    quoteTh: "กระบวนการรับรอง ISO ดูน่ากลัว แต่ Sunny Day ทำให้มันง่ายขึ้น ได้รับการรับรองในเวลาเพียง 6 เดือน!",
    author: "William Harris",
    role: "Compliance Officer",
    roleTh: "เจ้าหน้าที่ความปฏิบัติตามกฎระเบียบ",
    company: "SecureData Ltd.",
    rating: 5
  },
  {
    id: "4",
    quote: "Their interim IT service during our transition was a lifesaver. Zero downtime, full professionalism.",
    quoteTh: "บริการไอทีชั่วคราวในช่วงเปลี่ยนผ่านของพวกเขาเป็นเหมือนอุปกรณ์ช่วยชีวิต ไม่มี downtime เต็มไปด้วยความเป็นมืออาชีพ",
    author: "Mia Lee",
    role: "Managing Partner",
    roleTh: "หุ้นส่วนผู้จัดการ",
    company: "Lawson & Associates",
    rating: 5
  }
];
