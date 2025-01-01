import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {heroImage} from "@/public/images";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-background mt-8 sm:mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                                <span className="block">Collaborate and</span>
                                <span className="block text-primary">achieve together</span>
                            </h1>
                            <p className="mt-3 text-base text-muted-foreground sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                ManageIt empowers teams to create projects, assign tasks, and communicate effectively. From private tasks to group discussions, we&#39;ve got your productivity covered.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Button size="lg" className="w-full px-8 py-3 md:px-10 md:py-4">
                                        Start collaborating
                                    </Button>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Button variant="outline" size="lg" className="w-full px-8 py-3 md:px-10 md:py-4">
                                        Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image
                    src={heroImage}
                    alt="Team collaboration illustration"
                    width={1920}
                    height={1080}
                    className="h-56 w-full object-contain sm:h-72 md:h-96 lg:h-full lg:w-full"
                    priority
                />
            </div>
        </div>
    )
}

