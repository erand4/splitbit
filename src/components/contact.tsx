import config from "@/config";

export default function Contact() {
    return (
        <section className="w-full pt-4 md:pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.contact?.methods.map((method, index) => (
                    <a
                        href={method.href}
                        key={`contact_method_${index}`}
                        className="flex items-center gap-4 rounded-lg p-4 cursor-pointer hover:scale-[98%] hover:bg-muted transition-all"
                    >
                        <span>{method.icon}</span>
                        <div>
                            <p className="text-sm font-medium">{method.title}</p>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
