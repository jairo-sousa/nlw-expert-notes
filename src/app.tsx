import logo from "./assets/logo-nlw-expert.svg";

export function App() {
    return (
        <div className="mx-auto max-w-6xl my-12 space-y-6">
            <img src={logo} alt="logo-nlw-expert" />

            <form className="w-full">
                <input
                    type="text"
                    placeholder="Busque suas notas..."
                    className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
                />
            </form>

            <div className="h-px bg-slate-700" />

            <div className="grid grid-cols-3 gap-6 auto-rows-[250px] ">
                <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden relative ">
                    <span className="text-sm font-medium text-slate-200">
                        Adicionar nota
                    </span>
                    <p className="text-sm leading-6 text-slate-400">
                        Grave uma nota em áudio que será convertida para texto
                        automaticamente.
                    </p>
                </div>
                <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative ">
                    <span className="text-sm font-medium text-slate-300">
                        Há 2 dias
                    </span>
                    <p className="text-sm leading-6 text-slate-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Incidunt accusamus necessitatibus qui? Delectus
                        nulla in consectetur harum iure vitae temporibus odio.
                        Sunt commodi laboriosam facere maxime ipsa laborum
                        necessitatibus ratione! Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Incidunt accusamus
                        necessitatibus qui? Delectus nulla in consectetur harum
                        iure vitae temporibus odio. Sunt commodi laboriosam
                        facere maxime ipsa laborum necessitatibus ratione!
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
                </div>
                <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative ">
                    <span className="text-sm font-medium text-slate-300">
                        Há 4 dias
                    </span>
                    <p className="text-sm leading-6 text-slate-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Est, recusandae officiis libero cum dolorum
                        officia! Eligendi incidunt iste officia excepturi ullam
                        voluptatum necessitatibus, cupiditate veniam! Non ab
                        inventore unde quo?
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
                </div>
                <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative ">
                    <span className="text-sm font-medium text-slate-300">
                        Há 5 dias
                    </span>
                    <p className="text-sm leading-6 text-slate-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Est, recusandae officiis libero cum dolorum
                        officia! Eligendi incidunt iste officia excepturi ullam
                        voluptatum necessitatibus, cupiditate veniam! Non ab
                        inventore unde quo?
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
