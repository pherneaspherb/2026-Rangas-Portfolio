import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

function Sidebar() {
    return (
        <aside className="h-fit rounded-2xl border border-white/10 bg-white/10 px-8 py-10 shadow-lg">
            <div className="flex flex-col items-center text-center">
                <div className="mb-6 h-28 w-28 overflow-hidden rounded-3xl border-4 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                    <img
                        src="/profile.jpg"
                        alt="John Rangas"
                        className="h-full w-full object-cover"
                    />
                </div>

                <h1 className="text-4xl font-extrabold leading-tight">
                    John Pher Loyd S.
                    <br />
                    Rangas
                </h1>

                <p className="mt-4 text-2xl font-medium text-cyan-400">
                    Software Developer
                </p>
            </div>

            {/* CONTACT */}
            <div className="mt-14">
                <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white/85">
                    Contact
                </h2>

                <div className="space-y-5 text-lg text-white/90">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-cyan-400" />
                        <p>johnpherloydrangas@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-cyan-400" />
                        <p>+63 945 104 8488</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                        <p>
                            Brgy. Tiring, Cabatuan,
                            <br />
                            Iloilo, Philippines
                        </p>
                    </div>
                </div>
            </div>

            {/* CONNECT */}
            <div className="mt-14">
                <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white/85">
                    Connect
                </h2>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/pherneaspherb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white/80 transition-all duration-200 hover:scale-110 hover:bg-cyan-400 hover:text-black"
                    >
                        <Github className="h-5 w-5" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/john-pher-loyd-rangas-31482934a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white/80 transition-all duration-200 hover:scale-110 hover:bg-cyan-400 hover:text-black"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;