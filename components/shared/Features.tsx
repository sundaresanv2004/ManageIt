import { CheckCircle, Users, MessageSquare, Lock, Zap, PieChart } from 'lucide-react'

const features = [
  {
    name: 'Project Collaboration',
    description: 'Create projects, invite team members, and work together seamlessly.',
    icon: Users,
  },
  {
    name: 'Task Assignment',
    description: 'Assign tasks to team members and track progress effortlessly.',
    icon: CheckCircle,
  },
  {
    name: 'Group Discussions',
    description: 'Facilitate team communication with built-in group chat and comments.',
    icon: MessageSquare,
  },
  {
    name: 'Private Tasks',
    description: 'Keep personal tasks private while collaborating on team projects.',
    icon: Lock,
  },
  {
    name: 'Real-time Updates',
    description: 'Stay informed with instant notifications on task and project changes.',
    icon: Zap,
  },
  {
    name: 'Performance Analytics',
    description: 'Gain insights into team productivity and project progress.',
    icon: PieChart,
  },
]

export default function Features() {
  return (
      <div className="py-24 bg-background" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Empower your team&#39;s productivity
            </p>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
              ManageIt provides powerful features to help your team collaborate, communicate, and achieve goals together.
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-muted-foreground">{feature.description}</dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
  )
}

