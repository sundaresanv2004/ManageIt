import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Users, MessageSquare } from 'lucide-react'

const steps = [
  {
    title: 'Create a Project',
    description: 'Start by creating a project and inviting your team members to collaborate.',
    icon: Users,
  },
  {
    title: 'Assign Tasks',
    description: 'Break down your project into tasks and assign them to team members.',
    icon: CheckCircle,
  },
  {
    title: 'Collaborate',
    description: 'Use group discussions and task comments to communicate effectively.',
    icon: MessageSquare,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            How ManageIt Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Streamline your team's workflow in three simple steps
          </p>
        </div>
        <div className="mt-20">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary text-primary-foreground">
                      {index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="mt-4 flex justify-center">
                    <step.icon className="h-12 w-12 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

