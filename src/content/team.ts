import type { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: "phongsaphat-duma",
    name: "Phongsaphat Duma",
    role: "Managing Director & Client Service",
    bio: "A seasoned IT professional with over a decade of experience in international organizations. Led IT operations in critical regions including Somalia, Kenya, and Myanmar, and participated in international discussions in Egypt and Serbia. Passionate about bridging global best practices with local business needs.",
    image: "/images/phongsaphat-duma.jpg",
    specializations: [
      "Service Management",
      "IT Management",
      "Service Desk Management",
      "International IT Operations"
    ],
    experiences: [
      {
        organization: "International Committee of the Red Cross (ICRC)",
        role: "Service Desk | Service Manager",
        scope: "APAC Region"
      },
      {
        organization: "United Nations ILO",
        role: "Assistant Manager"
      }
    ],
    order: 1
  },
  {
    id: "sawee",
    name: "Sawee",
    role: "Technical Manager",
    bio: "Experienced technical leader specializing in data center operations and system engineering. Proven track record in managing complex IT infrastructure and leading technical teams.",
    image: "/images/sawee.jpg",
    specializations: [
      "Data Center Operations",
      "System Engineering",
      "IT Infrastructure",
      "Team Leadership"
    ],
    experiences: [
      {
        organization: "Homepro",
        role: "System Engineer Manager"
      },
      {
        organization: "Media Plus",
        role: "System Analyst"
      }
    ],
    order: 2
  }
];
