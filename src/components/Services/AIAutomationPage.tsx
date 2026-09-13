import AiAutomationServicesPage from './AiAutomationServicesPage/AiAutomationHeroSection'
import BottleneckSolutionSection from './AiAutomationServicesPage/AiManualProcess'
import WhatCanWeAutomateSection from './AiAutomationServicesPage/AiAutomateGrid'
import AutomationCapabilitiesSection from './AiAutomationServicesPage/AutomationCapabilitiesSection'
import IntegrationProcessSection from './AiAutomationServicesPage/IntegrationProcessSection'
import RealImpactSection from './AiAutomationServicesPage/RealImpactSection'
import TheCommandCenter from './AiAutomationServicesPage/TheCommandCenter'
import SystemPreviewSection from './AiAutomationServicesPage/SystemPreviewSection'
import AutomationForm from '../AutomationForm'

export default function AIAutomationPage() {
  return (
    <main>
    <AiAutomationServicesPage/>
    <BottleneckSolutionSection/>
    <WhatCanWeAutomateSection/>
    <AutomationCapabilitiesSection/>
    <IntegrationProcessSection/>
    <RealImpactSection/>
    <TheCommandCenter/>
    <SystemPreviewSection/>
    <AutomationForm/>
      
    </main>
  )
}
