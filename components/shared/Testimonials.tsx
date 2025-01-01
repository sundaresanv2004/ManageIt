import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    image: '/placeholder.svg',
    quote: 'ManageIt has revolutionized the way our team handles tasks. It\'s intuitive, powerful, and has significantly boosted our productivity.',
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    image: '/placeholder.svg',
    quote: 'As a freelancer, keeping track of multiple projects used to be a nightmare. ManageIt has made it a breeze. I couldn\'t imagine working without it now.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    image: '/placeholder.svg',
    quote: 'ManageIt has been a game-changer for our startup. It\'s helped us stay organized and focused on what really matters as we scale our business.',
  },
]

export default function Testimonials() {
  return (
      <div className="bg-background py-24" id="testimonials">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Loved by teams everywhere
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Here&#39;s what some of our users have to say about ManageIt
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Image
                          className="h-12 w-12 rounded-full"
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                      />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground italic">&#34;{testimonial.quote}&#34;</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </div>
  )
}

