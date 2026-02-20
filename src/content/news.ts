export interface NewsItem {
  id: string;
  title: string;
  titleTh: string;
  excerpt: string;
  excerptTh: string;
  content: string;
  contentTh: string;
  image: string;
  category: string;
  categoryTh: string;
  date: string;
  featured: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: "iso-certification-achievement",
    title: "Sunny Day 365 Achieves ISO 27001 & ISO 9001 Certification in Record Time",
    titleTh: "Sunny Day 365 ได้รับการรับรอง ISO 27001 และ ISO 9001 ในเวลาอันสั้น",
    excerpt: "Our commitment to quality and security has been recognized with dual ISO certification, achieved in just 6 months through our streamlined process.",
    excerptTh: "ความมุ่งมั่นด้านคุณภาพและความปลอดภัยของเราได้รับการยอมรับด้วยการรับรอง ISO คู่ สำเร็จในเวลาเพียง 6 เดือนผ่านกระบวนการที่มีประสิทธิภาพของเรา",
    content: `We are proud to announce that Sunny Day 365 has successfully achieved both ISO 27001:2022 (Information Security Management) and ISO 9001 (Quality Management) certifications in just 6 months.

This achievement demonstrates our commitment to:
- Maintaining the highest standards of information security
- Delivering consistent, quality services to our clients
- Continuous improvement in all aspects of our operations

Our unique approach to compliance, combining automation with expert guidance, allowed us to achieve what typically takes 12-18 months in just half the time.`,
    contentTh: `เรายินดีที่จะประกาศว่า Sunny Day 365 ได้รับการรับรอง ISO 27001:2022 (การบริหารความปลอดภัยของข้อมูล) และ ISO 9001 (การบริหารคุณภาพ) สำเร็จในเวลาเพียง 6 เดือน

ความสำเร็จนี้แสดงให้เห็นถึงความมุ่งมั่นของเราใน:
- การรักษามาตรฐานความปลอดภัยของข้อมูลในระดับสูงสุด
- การส่งมอบบริการที่มีคุณภาพสม่ำเสมอให้กับลูกค้า
- การปรับปรุงอย่างต่อเนื่องในทุกด้านของการดำเนินงาน

วิธีการที่เป็นเอกลักษณ์ของเราในการปฏิบัติตามกฎระเบียบ โดยผสมผสานระบบอัตโนมัติกับคำแนะนำจากผู้เชี่ยวชาญ ทำให้เราสามารถทำสิ่งที่ปกติใช้เวลา 12-18 เดือนให้สำเร็จในเวลาครึ่งหนึ่ง`,
    image: "/images/data-analytics.jpg",
    category: "Company News",
    categoryTh: "ข่าวบริษัท",
    date: "2026-02-15",
    featured: true,
  },
  {
    id: "timor-leste-project-completion",
    title: "Successfully Completed Server Deployment Project in Timor Leste",
    titleTh: "เสร็จสิ้นโครงการติดตั้งเซิร์ฟเวอร์ในติมอร์-เลสเต สำเร็จ",
    excerpt: "Our team has successfully deployed complete IT infrastructure in Timor Leste, including server installation and local staff training.",
    excerptTh: "ทีมของเราได้ติดตั้งโครงสร้างพื้นฐานไอทีแบบครบวงจรในติมอร์-เลสเต สำเร็จ รวมถึงการติดตั้งเซิร์ฟเวอร์และการอบรมพนักงานท้องถิ่น",
    content: `Sunny Day 365 is proud to announce the successful completion of our server deployment project in Timor Leste. Despite challenging logistics and limited local technical resources, our team delivered:

- Complete server hardware and software installation
- Network infrastructure setup
- Comprehensive local staff training
- Full documentation and knowledge transfer

The project was completed on schedule, demonstrating our capability to deliver IT solutions in challenging international environments.`,
    contentTh: `Sunny Day 365 ภูมิใจที่จะประกาศการเสร็จสิ้นโครงการติดตั้งเซิร์ฟเวอร์ของเราในติมอร์-เลสเต สำเร็จ แม้จะมีโลจิสติกส์ที่ท้าทายและทรัพยากรเทคนิคท้องถิ่นที่มีจำกัด ทีมของเราส่งมอบ:

- การติดตั้งฮาร์ดแวร์และซอฟต์แวร์เซิร์ฟเวอร์ครบถ้วน
- การตั้งค่าโครงสร้างพื้นฐานเครือข่าย
- การอบรมพนักงานท้องถิ่นอย่างครอบคลุม
- เอกสารและการถ่ายทอดความรู้อย่างสมบูรณ์

โครงการเสร็จสมบูรณ์ตามกำหนดเวลา แสดงให้เห็นถึงความสามารถของเราในการส่งมอบโซลูชันไอทีในสภาพแวดล้อมระหว่างประเทศที่ท้าทาย`,
    image: "/images/timor-leste.jpg",
    category: "Project Update",
    categoryTh: "อัปเดตโครงการ",
    date: "2026-01-20",
    featured: true,
  },
  {
    id: "debt-collection-growth-success",
    title: "Debt Collection Client Scales from 6 to 100 Employees with Our IT Solutions",
    titleTh: "ลูกค้าธุรกิจบริหารหนี้ขยายจาก 6 เป็น 100 พนักงานด้วยโซลูชันไอทีของเรา",
    excerpt: "Our All-in-One IT solution helped a debt collection company grow rapidly while maintaining operational stability.",
    excerptTh: "โซลูชันไอที All-in-One ของเราช่วยให้บริษัทบริหารหนี้เติบโตอย่างรวดเร็วในขณะที่รักษาเสถียรภาพการดำเนินงาน",
    content: `We're excited to share the success story of one of our debt collection clients who has grown from just 6 employees to over 100 in just two years, with our IT infrastructure supporting them every step of the way.

Our comprehensive solution included:
- Scalable IT infrastructure that grows with the business
- Integration with major financial partners (AEON, Toyota Leasing, etc.)
- Zero downtime during the expansion phase
- Maintained data security and compliance throughout

This demonstrates the power of having the right IT foundation for rapid business growth.`,
    contentTh: `เรายินดีที่จะแบ่งปันเรื่องราวความสำเร็จของลูกค้าธุรกิจบริหารหนี้รายหนึ่งที่เติบโตจากพนักงานเพียง 6 คนเป็นกว่า 100 คนในเวลาเพียงสองปี โดยมีโครงสร้างพื้นฐานไอทีของเราสนับสนุนในทุกขั้นตอน

โซลูชันครบวงจรของเรารวมถึง:
- โครงสร้างพื้นฐานไอทีที่ขยายได้ตามการเติบโตของธุรกิจ
- การเชื่อมต่อกับพันธมิตรทางการเงินรายใหญ่ (AEON, Toyota Leasing, ฯลฯ)
- ไม่มี downtime ระหว่างช่วงขยายตัว
- รักษาความปลอดภัยของข้อมูลและการปฏิบัติตามกฎระเบียบตลอดเวลา

สิ่งนี้แสดงให้เห็นถึงพลังของการมีรากฐานไอทีที่ถูกต้องสำหรับการเติบโตทางธุรกิจอย่างรวดเร็ว`,
    image: "/images/debt-collection.jpg",
    category: "Success Story",
    categoryTh: "เรื่องราวความสำเร็จ",
    date: "2026-01-10",
    featured: false,
  },
  {
    id: "interim-it-law-firm",
    title: "Interim IT Services Save Law Firm During Critical Transition",
    titleTh: "บริการไอทีชั่วคราวช่วยสำนักงานกฎหมายในช่วงเปลี่ยนผ่านที่สำคัญ",
    excerpt: "When a law firm's IT team went on strike, we stepped in with zero downtime and maintained full client services.",
    excerptTh: "เมื่อทีมไอทีของสำนักงานกฎหมายหยุดงาน เราเข้ามาช่วยโดยไม่มี downtime และรักษาบริการลูกค้าได้เต็มรูปแบบ",
    content: `A recent engagement highlights the importance of having reliable IT support during critical transitions. When our client, a mid-sized law firm, faced an unexpected IT team strike, they turned to Sunny Day 365 for interim support.

We deployed our team within 24 hours and achieved:
- Zero downtime during the transition
- All client services maintained without disruption
- Smooth handover after the strike resolution
- Complete business continuity throughout the crisis

This case demonstrates our capability to provide immediate, professional IT support when businesses need it most.`,
    contentTh: `การเข้าร่วมล่าสุดเน้นย้ำถึงความสำคัญของการมีการสนับสนุนไอทีที่เชื่อถือได้ในช่วงการเปลี่ยนผ่านที่สำคัญ เมื่อลูกค้าของเรา สำนักงานกฎหมายขนาดกลาง เผชิญกับการหยุดงานของทีมไอทีอย่างไม่คาดคิด พวกเขาหันมาหา Sunny Day 365 เพื่อการสนับสนุนชั่วคราว

เราส่งทีมของเราภายใน 24 ชั่วโมงและบรรลุ:
- ไม่มี downtime ระหว่างการเปลี่ยนผ่าน
- รักษาบริการลูกค้าทั้งหมดโดยไม่มีการหยุดชะงัก
- ส่งมอบงานอย่างราบรื่นหลังจากการแก้ไขการหยุดงาน
- ความต่อเนื่องทางธุรกิจอย่างสมบูรณ์ตลอดวิกฤต

กรณีนี้แสดงให้เห็นถึงความสามารถของเราในการให้การสนับสนุนไอทีที่ทันท่วงทีและเป็นมืออาชีพเมื่อธุรกิจต้องการมากที่สุด`,
    image: "/images/technology-business.jpg",
    category: "Case Study",
    categoryTh: "กรณีศึกษา",
    date: "2025-12-15",
    featured: false,
  },
  {
    id: "rapid-deployment-record",
    title: "New Record: IT Department Ready in Just 1 Month",
    titleTh: "สถิติใหม่: แผนก IT พร้อมใช้งานในเวลาเพียง 1 เดือน",
    excerpt: "Our rapid deployment solution helped a new debt collection company meet their aggressive launch timeline.",
    excerptTh: "โซลูชันการติดตั้งอย่างรวดเร็วของเราช่วยให้บริษัทบริหารหนี้ใหม่บรรลุตามกำหนดเวลาเปิดตัวที่ท้าทาย",
    content: `Setting a new benchmark in IT deployment speed, Sunny Day 365 recently helped a new debt collection company become fully operational with complete IT infrastructure within just one month.

This rapid deployment included:
- Complete IT systems setup
- Network and security infrastructure
- Compliance-ready configuration
- Staff training and documentation

The client was able to meet their business launch deadline and start operations on day one with a fully functional IT department.`,
    contentTh: `การกำหนดมาตรฐานใหม่ในความเร็วการติดตั้งไอที Sunny Day 365 ได้ช่วยให้บริษัทบริหารหนี้ใหม่ดำเนินงานได้เต็มรูปแบบด้วยโครงสร้างพื้นฐานไอทีครบถ้วนภายในเวลาเพียงหนึ่งเดือน

การติดตั้งอย่างรวดเร็วนี้รวมถึง:
- การตั้งค่าระบบไอทีครบถ้วน
- โครงสร้างพื้นฐานเครือข่ายและความปลอดภัย
- การกำหนดค่าที่พร้อมสำหรับการปฏิบัติตามกฎระเบียบ
- การอบรมพนักงานและเอกสาร

ลูกค้าสามารถบรรลุตามกำหนดเวลาเปิดตัวธุรกิจและเริ่มดำเนินงานในวันแรกด้วยแผนกไอทีที่ใช้งานได้เต็มรูปแบบ`,
    image: "/images/it-digital.jpg",
    category: "Company News",
    categoryTh: "ข่าวบริษัท",
    date: "2025-11-28",
    featured: false,
  },
];

export const getFeaturedNews = () => newsItems.filter(item => item.featured);

export const getLatestNews = (count: number = 3) => 
  newsItems
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

export const getNewsByCategory = (category: string) => 
  newsItems.filter(item => item.category === category);

export const getNewsById = (id: string) => 
  newsItems.find(item => item.id === id);
