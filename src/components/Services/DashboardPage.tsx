import DashboardSection from './DashboardPage/DashboardSection'
import DataDashboard from './DashboardPage/DataDashboard'
import DashboardContactSection from './DashboardPage/DashboardContactSection'
import DashboardFeaturesGrid from './DashboardPage/DashboardFeaturesGrid'

export default function DashboardPage() {
  return (
    <main>
    <DashboardSection/>
    <DataDashboard/>
    <DashboardFeaturesGrid/>
    <DashboardContactSection/>
      
    </main>
  )
}
