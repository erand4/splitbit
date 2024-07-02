import Image from "next/image";
import config from "@/config";
import Contact from "./contact";

export default function Hero() {
    return (
        <main className="flex-1 pt-4 pb-12 lg:py-32">
            <div className="container md:px-6">
                <div className="grid gap-6 sm:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                    <div className="flex flex-col justify-start py-4 sm:pt-0 space-y-4">
                        <div className="space-y-1">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter lg:text-5xl xl:text-6xl/none">
                                {config.developer.name}
                            </h1>
                            <div className="space-y-4">
                                <h2 className="text-xl font-medium">{config.developer.role}</h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                                    {config.developer.description}
                                </p>
                            </div>
                        </div>
                        <Contact />
                    </div>
                    <div className="mx-auto overflow-hidden rounded-xl h-[400px] md:h-full w-full order-first sm:order-last lg:aspect-square sm:sticky sm:top-12">
                        <div className="w-full h-full bg-[url('/profile.jpg')] hover:bg-[url('/profile_hover.jpg')] bg-center bg-cover transition-all duration-200"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
