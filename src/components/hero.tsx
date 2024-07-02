import Image from "next/image";
import config from "@/config";

export default function Hero() {
    return (
        <main className="flex-1 pt-4 pb-12 lg:py-32">
            <div className="container md:px-6">
                <div className="grid gap-6 sm:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                    <div className="flex flex-col justify-start space-y-4">
                        <div className="space-y-1">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter lg:text-5xl xl:text-6xl/none">
                                {config.developer.name}
                            </h1>
                            <div className="space-y-4">
                                <h2 className="text-xl font-medium text-muted-foreground">{config.developer.role}</h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    {config.developer.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/profile.jpg"
                        width="1024"
                        height="1024"
                        alt={`${config.developer.name} profile picture`}
                        className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full order-first sm:order-last lg:aspect-square"
                    />
                </div>
            </div>
        </main>
    );
}
