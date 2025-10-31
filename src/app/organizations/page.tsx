"use client"

import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import PricingSection from "@/components/features/pricing/pricing-section"
import { HeroSection } from "@/components/features/hero/hero-section"
import { GridSection } from "@/components/features/showcase/grid-section"
import { SocialProofSection } from "@/components/features/organizations/social-proof-section"
import { FlexibleCTASection } from "@/components/features/cta/flexible-cta-section"
import { APP_TEXT } from "@/lib/config"

export default function OrganizationsPage() {
  const featuresItems = APP_TEXT.organizations.features.items.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
  }))

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <Header />

      <PageContainer>
        <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
          {/* Hero Section */}
          <HeroSection
            title={APP_TEXT.organizations.hero.title}
            description={APP_TEXT.organizations.hero.description}
            showVolunteerSearch={false}
          />

          {/* Features Grid Section */}
          <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center mt-16 sm:mt-20 md:mt-24 lg:mt-32">
            <GridSection
              badge={{
                icon: (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                    <rect x="7" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                    <rect x="1" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                    <rect x="7" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                  </svg>
                ),
                text: APP_TEXT.organizations.features.badge,
              }}
              title={APP_TEXT.organizations.features.title}
              description={APP_TEXT.organizations.features.description}
              items={featuresItems}
            />
          </div>

          {/* Social Proof Section */}
          <SocialProofSection
            stat={APP_TEXT.organizations.socialProof.stat}
            description={APP_TEXT.organizations.socialProof.description}
          />

          {/* Pricing Section */}
          <PricingSection />

          {/* CTA Section */}
          <FlexibleCTASection
            title={APP_TEXT.organizations.cta.title}
            primaryButton={{
              text: APP_TEXT.organizations.cta.primaryButton,
            }}
            secondaryButton={{
              text: APP_TEXT.organizations.cta.secondaryButton,
              href: APP_TEXT.organizations.cta.secondaryButtonHref,
            }}
          />
        </div>
      </PageContainer>
    </div>
  )
}
