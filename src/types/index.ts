export interface Opportunity {
  company: string
  category: string
  title: string
  salary: string
  type: string
  location: string
  logo: string
}

export interface Testimonial {
  quote: string
  name: string
  company: string
  image: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FeatureCard {
  title: string
  description: string
  image?: string
}

export interface DashboardContent {
  title: string
  description: string
}

