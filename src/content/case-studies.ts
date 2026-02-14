import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: "timor-leste-server-deployment",
    title: "Server Hardware/Software Installation",
    subtitle: "Successfully Implemented IT Project in Challenging Environment",
    description: "Complete IT infrastructure deployment in Timor Leste, including server hardware and software installation in a challenging international environment.",
    challenge: "Deploy complete IT infrastructure in a remote location with limited local technical resources and challenging logistics.",
    solution: "Managed end-to-end project including planning, hardware acquisition, shipping, delivery, onsite installation, and local staff training.",
    results: [
      "Successful onsite installation in Timor Leste",
      "Local staff trained and empowered",
      "Complete documentation and project closure",
      "Hardware and software fully operational"
    ],
    image: "/images/timor-leste.jpg",
    tags: ["Overseas Project", "Server Installation", "IT Infrastructure", "Training"],
    order: 1,
    published: true
  },
  {
    id: "rapid-deployment-debt-collection",
    title: "Rapid Deployment for Debt Collection Company",
    subtitle: "Ready for Business in Just 1 Month",
    description: "Helped a new debt collection company become fully operational with complete IT infrastructure within just one month.",
    challenge: "New debt collection company needed complete IT setup urgently to meet business launch deadline.",
    solution: "Rapid deployment of IT systems, network infrastructure, and compliance setup tailored for debt collection operations.",
    results: [
      "Fully operational IT department in 1 month",
      "Complete debt collection system setup",
      "Network and security infrastructure deployed",
      "Ready for business on schedule"
    ],
    image: "/images/it-digital.jpg",
    tags: ["Debt Collection", "Rapid Deployment", "IT Setup", "Compliance"],
    order: 2,
    published: true
  },
  {
    id: "debt-collection-growth",
    title: "Debt Collection IT Environment Growth",
    subtitle: "Scaling from 6 to 100 Employees",
    description: "The All-in-One solution for debt collection that helped a customer grow from 6 people to 100 with minimum IT concerns.",
    challenge: "Support rapid business growth while maintaining stable IT operations and data security for sensitive financial operations.",
    solution: "Implemented comprehensive IT environment with partners including AEON, Easy Buy, Toyota Leasing, AIRA, Thai Credit, and AMC.",
    results: [
      "Scaled from 6 to 100 employees seamlessly",
      "Maintained data security and compliance",
      "Integrated with major financial partners",
      "Zero downtime during expansion"
    ],
    image: "/images/debt-collection.jpg",
    tags: ["Debt Collection", "Business Growth", "Enterprise IT", "Financial Services"],
    order: 3,
    published: true
  },
  {
    id: "interim-it-law-firm",
    title: "Interim IT Department for Law Firm",
    subtitle: "Navigating Through IT Team Strike",
    description: "When a law firm's IT team went on strike, we provided immediate interim IT department services to ensure business continuity.",
    challenge: "Law firm faced critical IT operations disruption due to team strike, requiring immediate support to maintain client services.",
    solution: "Deployed interim IT department with experienced professionals who maintained all systems and operations without disruption.",
    results: [
      "Zero downtime during transition",
      "All client services maintained",
      "Smooth handover after strike resolution",
      "Business continuity ensured"
    ],
    image: "/images/technology-business.jpg",
    tags: ["Interim IT", "Law Firm", "Business Continuity", "Crisis Management"],
    order: 4,
    published: true
  },
  {
    id: "iso-compliance-certification",
    title: "ISO Compliance Certification",
    subtitle: "ISO27001 & ISO9001 Certified in 6 Months",
    description: "Achieved ISO27001:2022 and ISO9001 certification through automation and streamlined processes.",
    challenge: "Meet international standards for information security and quality management within a tight timeline.",
    solution: "Created automation systems and processes that organized and simplified all procedures into an understandable task list.",
    results: [
      "ISO27001:2022 Certified",
      "ISO9001 Certified",
      "Certification achieved in only 6 months",
      "Automated compliance processes",
      "Simplified task management system"
    ],
    image: "/images/data-analytics.jpg",
    tags: ["ISO27001", "ISO9001", "Compliance", "Security", "Quality Management"],
    order: 5,
    published: true
  }
];
