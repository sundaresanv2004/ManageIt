import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {heroImage} from "@/public/images";

export default function Hero() {
    return (
        <div className="relative min-h-screen bg-background overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-[64px] font-normal leading-tight tracking-tight">
            <span className="block text-foreground">
              Collaborate and
            </span>
                        <span className="block text-primary">
              achieve together
            </span>
                    </h1>
                    <p className="mt-6 text-xl text-muted-foreground max-w-xl">
                        ManageIt empowers teams to create projects, assign tasks, and communicate effectively. From private tasks to group discussions, we&#39;ve got your productivity covered.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="h-12 px-8 text-base bg-primary hover:bg-primary/90"
                        >
                            Start collaborating
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-12 px-8 text-base"
                        >
                            Learn more
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-3/4 h-full">
                <Image
                    src={heroImage}
                    alt="Team collaboration illustration"
                    fill
                    className="object-contain"
                    priority
                    style={{
                        objectPosition: 'right center'
                    }}
                />
            </div>
        </div>
    )
}

