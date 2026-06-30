import ContactMVPSection from './MVPWebsiteSections/ContactMVPSection'
import HeroMVPSection from './MVPWebsiteSections/HeroMVPSection'
import MVPProtocolSection from './MVPWebsiteSections/MVPProtocolSection'
import TechStackMarquee from './MVPWebsiteSections/TechStackMarquee'

export default function MVPWebsite() {
  return (
    <>
    <HeroMVPSection/>
    <MVPProtocolSection/>
    <TechStackMarquee/>
    <ContactMVPSection/>
      
    </>
  )
}
