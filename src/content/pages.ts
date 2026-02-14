import type { PageContent, Testimonial } from '@/types';

export const homePage: PageContent = {
  id: "home",
  title: "Sunny Day 365 - Professional IT Services",
  metaDescription: "Professional IT & Smart Solutions with more than 10 years of experience in international organizations.",
  hero: {
    title: "Professional IT & Smart Solutions",
    description: "Focus on your work, Let us deal with technology. Over 10 years of experience delivering value-driven IT solutions.",
  },
  sections: [
    {
      id: "who-we-are",
      type: "text",
      title: "Who We Are",
      content: {
        heading: "Your Trusted IT Partner",
        body: "Sunny Day 365 was founded to break away from traditional approaches to how businesses manage technology. Led by Phongsaphat Duma, a seasoned IT professional with over a decade of experience in international organizations including ICRC and UN ILO, we deliver value-driven, proactive, and tailored IT solutions. From managing IT operations in critical regions like Somalia, Kenya, and Myanmar to participating in international discussions in Egypt and Serbia, our expertise is rooted in real-world problem-solving and strategic thinking.",
        stats: [
          { value: "10+", label: "Years of Experience" },
          { value: "50+", label: "Clients Served" },
          { value: "5", label: "Countries Deployed" }
        ]
      }
    },
    {
      id: "services",
      type: "services",
      title: "Our Core Services",
      content: {
        subtitle: "How We Help You",
        description: "Comprehensive IT solutions tailored to your business needs"
      }
    },
    {
      id: "philosophy",
      type: "text",
      title: "Our Philosophy",
      content: {
        heading: "Business First, Technology Second",
        body: "We simply want to deliver our value to our customer in the form of service. We strive to eliminate recurring and chronic issues, whether caused by technical or process problems. IT department exists because we help drive the business further.",
        values: [
          { title: "Owner Driven", description: "Direct ownership and accountability" },
          { title: "Expert Services", description: "Deep industry expertise" },
          { title: "Cost Effective", description: "Optimized solutions for your budget" }
        ]
      }
    },
    {
      id: "case-studies",
      type: "case-studies",
      title: "Our Work",
      content: {
        subtitle: "Our Latest Projects",
        description: "Discover how we've helped businesses transform their IT operations"
      }
    },
    {
      id: "cta",
      type: "cta",
      title: "Ready to Get Started?",
      content: {
        heading: "Let's build something different",
        description: "Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.",
        buttonText: "Get in Touch",
        buttonLink: "/contact"
      }
    }
  ],
  updatedAt: "2026-02-13T00:00:00.000Z"
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Sunny Day 365 transformed our IT infrastructure completely. Their expertise in international deployments saved us months of work.",
    author: "Kaylynn Westervelt",
    role: "Operations Director",
    company: "Global Logistics Co.",
    rating: 5
  },
  {
    id: "2",
    quote: "Professional, responsive, and incredibly knowledgeable. They helped us scale from startup to enterprise seamlessly.",
    author: "Sophia Jackson",
    role: "CEO",
    company: "TechStart Inc.",
    rating: 5
  },
  {
    id: "3",
    quote: "The ISO certification process was daunting, but Sunny Day made it straightforward. Certified in just 6 months!",
    author: "William Harris",
    role: "Compliance Officer",
    company: "SecureData Ltd.",
    rating: 5
  },
  {
    id: "4",
    quote: "Their interim IT service during our transition was a lifesaver. Zero downtime, full professionalism.",
    author: "Mia Lee",
    role: "Managing Partner",
    company: "Lawson & Associates",
    rating: 5
  }
];
