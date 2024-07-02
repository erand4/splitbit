import { Logo } from "./logo";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="container flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center justify-between">
                <p className="text-xs text-muted-foreground">
                    &copy; {year} Splitbit AB (org. 559203-0299). All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground">
                    The source code is available on{" "}
                    <a className="underline" href="https://github.com/erand4/splitbit">
                        GitHub
                    </a>
                    .
                </p>
            </footer>
        </div>
    );
}
