export interface SiteConfig {
    title: string;
    description: string;
    company: {
        name: string;
        orgNr?: string;
    };
    developer: {
        name: string;
        role: string;
        description: string;
    };
    contact?: {
        title: string;
        description?: string;
        methods: {
            title: string;
            description: string;
            icon: React.ReactNode;
        }[];
    };
}
