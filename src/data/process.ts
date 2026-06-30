export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your vision and goals."
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting the visual identity and UX."
  },
  {
    number: "03",
    title: "Build",
    description: "Clean, scalable code development."
  },
  {
    number: "04",
    title: "Launch",
    description: "Deployment and post-launch support."
  }
]