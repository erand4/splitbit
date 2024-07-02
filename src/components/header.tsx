import config from "@/config";
import { Logo } from "./logo";
import { ThemeButton } from "./theme-button";

export default function Header() {
    return (
        <header className="container py-12 md:px-6 lg:px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Logo />
                <span className="text-m font-bold">{config.company.name}</span>
            </div>
            <ThemeButton />
        </header>
    );
}
