export interface ProcessStep {
  number: string
  title: string
  description: string
  deliverable: string
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We define the goal, users, scope, and priorities.",
    deliverable: "Scope & proposal",
  },
  {
    number: "02",
    title: "Design",
    description: "We map the experience and agree on the visual direction.",
    deliverable: "Approved prototype",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop the approved solution in clear stages.",
    deliverable: "Progress demos",
  },
  {
    number: "04",
    title: "Launch",
    description: "We test, deploy, and provide the agreed follow-up.",
    deliverable: "Deployment & support",
  }
]
