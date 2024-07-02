import config from "@/config";

export default function Contact() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-start space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{config.contact?.title}</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {config.contact?.description}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        {config.contact?.methods.map((method, index) => (
                            <div
                                key={`contact_method_${index}`}
                                className="flex items-center gap-4 rounded-lg bg-background p-4"
                            >
                                {method.icon}
                                <div>
                                    <p className="text-sm font-medium">{method.title}</p>
                                    <a
                                        href="mailto:erik@splitbit.se"
                                        className="text-sm text-muted-foreground hover:underline"
                                    >
                                        {method.description}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
