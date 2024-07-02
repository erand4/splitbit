import { SiteConfig } from "@/lib/interfaces";
import { Github, LinkedinIcon, MailIcon } from "lucide-react";

const config: SiteConfig = {
    title: "Splitbit AB",
    description: "Splitbit AB is a software development company based in Påarp, Sweden.",
    company: {
        name: "Splitbit AB",
        orgNr: "559203-0299"
    },
    developer: {
        name: "Erik Andersson",
        role: "Senior Software Engineer",
        description:
            "I'm a skilled full-stack developer with expertise in modern web technologies. I specialize in building high-performance, scalable applications that deliver exceptional user experiences."
    },
    contact: {
        title: "Contact",
        description:
            "If you have any questions or would like to get in touch, please don't hesitate to reach out to me.",
        methods: [
            {
                title: "Email",
                description: "erik@splitbit.se",
                href: "mailto:erik@splitbit.se",
                icon: <MailIcon className="h-8 w-8 text-primary" />
            },
            {
                title: "LinkedIn",
                description: "linkedin.com/in/erik-andersson-a702725",
                href: "https://www.linkedin.com/in/erik-andersson-a702725",
                icon: <LinkedinIcon className="h-8 w-8 text-primary" />
            },
            {
                title: "GitHub",
                description: "github.com/erand4",
                href: "https://www.github.com/erand4",
                icon: <Github className="h-8 w-8 text-primary" />
            }
        ]
    }
};

export default config;
