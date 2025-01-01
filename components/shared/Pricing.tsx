import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['Up to 10 tasks', 'Basic task management', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$9.99/month',
    features: ['Unlimited tasks', 'Advanced task management', 'Team collaboration', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['All Pro features', 'Custom integrations', 'Dedicated account manager', '24/7 phone support'],
  },
]

export default function Pricing() {
  return (
      <div className="bg-gray-50 dark:bg-gray-900 py-24" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose the plan that best fits your needs
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
                <Card key={plan.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-4xl font-extrabold">{plan.price}</p>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                            <span className="ml-3 text-base text-muted-foreground">{feature}</span>
                          </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="mt-8 px-6 pb-6">
                    <Button className="w-full">Get started</Button>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </div>
  )
}

