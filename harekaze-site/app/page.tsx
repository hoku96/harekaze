import { Header } from '@/components/harekaze/header'
import { HeroSection } from '@/components/harekaze/hero-section'
import { MenuSection } from '@/components/harekaze/menu-section'
import { SakeSection } from '@/components/harekaze/sake-section'
import { AtmosphereSection } from '@/components/harekaze/atmosphere-section'
import { VoicesSection } from '@/components/harekaze/voices-section'
import { InfoSection } from '@/components/harekaze/info-section'
import { FooterSection } from '@/components/harekaze/footer-section'

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative z-[1]">
        <HeroSection />
        <MenuSection />
        <SakeSection />
        <AtmosphereSection />
        <VoicesSection />
        <InfoSection />
      </main>
      <FooterSection />
    </>
  )
}
