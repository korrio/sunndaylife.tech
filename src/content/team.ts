import type { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: "phongsaphat-duma",
    name: "Phongsaphat Duma",
    nameTh: "พงศพัศ ดุมา",
    role: "Managing Director & Client Service",
    roleTh: "กรรมการผู้จัดการและฝ่ายบริการลูกค้า",
    bio: "A seasoned IT professional with over a decade of experience in international organizations. Led IT operations in critical regions including Somalia, Kenya, and Myanmar, and participated in international discussions in Egypt and Serbia. Passionate about bridging global best practices with local business needs.",
    bioTh: "ผู้นำด้านเทคนิคที่มีประสบการณ์ด้านไอทีในองค์กรระดับนำนานาชาติกว่า 10 ปี ในพื้นที่ท้าทาย เชี่ยวชาญด้านการดำเนินงาน Data Center วิศวกรรมระบบ และการบริหารโครงสร้างพื้นฐาน ด้วยประสบการณ์หารือระดับนำนานาชาติที่อยุ่ปีร์ต์และเซอร์เบีย รวมถึงประสบการณ์จากบริษัทชั้นนำของไทย พร้อมขับเคลื่อนโซลูชันด้านระบบไอทีจากสนามงานที่หลากหลาย เทคนิคที่รองรับประสิทธิภาพ ยืดหยุ่น และรองรับการเติบโตขององค์กรในระยะยาว",
    image: "/images/phongsaphat-duma.jpg",
    specializations: [
      "Service Management",
      "IT Management", 
      "Service Desk Management",
      "International IT Operations",
      "Data Center Operations",
      "Systems Engineering"
    ],
    specializationsTh: [
      "การบริหารศูนย์ข้อมูล",
      "การบริหารบริการอย่างมืออาชีพ",
      "วิศวกรรมระบบ",
      "การบริหาร IT เชิงกลยุทธ์",
      "ระบบปฏิบัติการเชิงเทคนิค",
      "ศูนย์บริการ IT แบบครบวงจร"
    ],
    experiences: [
      {
        organization: "International Committee of the Red Cross (ICRC)",
        organizationTh: "คณะกรรมการกาชาดสากล (ICRC)",
        role: "Service Desk | Service Manager",
        roleTh: "ผู้จัดการฝ่ายบริการและ Service Desk",
        scope: "APAC Region"
      },
      {
        organization: "United Nations ILO",
        organizationTh: "องค์การแรงงานระหว่างประเทศแห่งสหประชาชาติ (ILO)",
        role: "Assistant Manager",
        roleTh: "ผู้ช่วยผู้จัดการ"
      }
    ],
    order: 1
  },
  {
    id: "sawee",
    name: "Sawee Kagaban",
    nameTh: "เสวี กากบัญ",
    role: "Technical Manager",
    roleTh: "ผู้จัดการฝ่ายเทคนิค",
    bio: "Experienced technical leader specializing in data center operations and system engineering. Proven track record in managing complex IT infrastructure and leading technical teams.",
    bioTh: "บริหารโดยผู้เชี่ยวชาญดูแลตั้งแต่วางระบบโครงสร้าง โดยเฉพาะและครอบคลุมรอบด้าน ได้รับความไว้วางใจจาก AEON, Toyota Leasing, ธนาคารไทยเครดิต และองค์กรชั้นนำอื่นๆ ให้คุณขับเคลื่อนธุรกิจได้อย่างมั่นคง",
    image: "/images/sawee.jpg",
    specializations: [
      "Data Center Operations",
      "System Engineering",
      "IT Infrastructure",
      "Team Leadership"
    ],
    specializationsTh: [
      "การบริหารศูนย์ข้อมูล",
      "วิศวกรรมระบบ",
      "โครงสร้างพื้นฐานไอที",
      "การเป็นผู้นำทีม"
    ],
    experiences: [
      {
        organization: "Homepro",
        organizationTh: "โฮมโปร",
        role: "System Engineer Manager",
        roleTh: "ผู้จัดการวิศวกรระบบ"
      },
      {
        organization: "Media Plus",
        organizationTh: "มีเดีย พลัส",
        role: "System Analyst",
        roleTh: "นักวิเคราะห์ระบบ"
      }
    ],
    order: 2
  }
];
