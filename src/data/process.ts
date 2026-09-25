export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We define the goal, users, scope, and priorities."
  },
  {
    number: "02",
    title: "Design",
    description: "We map the experience and agree on the visual direction."
  },
  {
    number: "03",
    title: "Build",
    description: "We develop the approved solution in clear stages."
  },
  {
    number: "04",
    title: "Launch",
    description: "We test, deploy, and provide the agreed follow-up."
  }
]
