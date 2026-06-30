import { useParams } from "react-router-dom"
import { industries } from "../data/industries"

export default function IndustryDetails() {
  const { slug } = useParams()

  const industry = industries.find(i => i.slug === slug)

  if (!industry)
    return <h1 className="text-center mt-20 text-white">Not Found</h1>

  const Icon = industry.icon

  return (
    <section className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        <Icon className="w-16 h-16 text-blue-400 mx-auto mb-6" />

        <h1 className="text-4xl font-bold mb-6">
          {industry.title}
        </h1>

        <p className="text-gray-400 text-lg">
          {industry.description}
        </p>

      </div>
    </section>
  )
}