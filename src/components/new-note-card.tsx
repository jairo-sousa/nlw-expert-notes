import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NewNoteCardProps {
    onNoteCreated: (content: string) => void;
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    const [content, setContent] = useState("");

    function handleStartEditor() {
        setShouldShowOnboarding(false);
    }

    function handleEndEditor() {
        setContent("");
        setShouldShowOnboarding(true);
    }

    function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        if (event.target.value == "") {
            handleEndEditor();
        }
        setContent(event.target.value);
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault();

        if (content == "") {
            return;
        }

        onNoteCreated(content);
        toast.success("Nota criada com sucesso!");

        setContent("");
        setShouldShowOnboarding(true);
    }

    function handleStartRecording() {
        const isSpeechRecognitionAPIAvaaliable =
            "SpeechRecognition" in window ||
            "webkitSpeechRecognition" in window;

        if (!isSpeechRecognitionAPIAvaaliable) {
            toast.error("API de gravação não suportado pelo navegador");
        }

        setIsRecording(true);
        setShouldShowOnboarding(false);

        const SpeechRecognitionAPI =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        const SpeechRecognition = new SpeechRecognitionAPI();
        SpeechRecognition.lang = "pt-BR";
        SpeechRecognition.continuous = true;
        SpeechRecognition.maxAlternatives = 1;
        SpeechRecognition.interimResults = true;

        SpeechRecognition.onresult = (event) => {
            const transcription = Array.from(event.results).reduce(
                (text, result) => {
                    return text.concat(result[0].transcript);
                },
                ""
            );
            setContent(transcription);
        };

        SpeechRecognition.onerror = (event) => {
            console.error(event);
        };
        SpeechRecognition.start();
    }
    function handleStopRecording() {
        setIsRecording(false);
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md flex flex-col gap-3 text-left bg-slate-700 p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
                <span className="text-sm font-medium text-slate-200">
                    Adicionar nota
                </span>
                <p className="text-sm leading-6 text-slate-400">
                    Grave uma nota em áudio que será convertida para texto
                    automaticamente.
                </p>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                <Dialog.Content className="overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
                    <Dialog.DialogClose
                        className="absolute right-0 top-0 bg bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100"
                        onClick={handleEndEditor}>
                        <X className="size-5" />
                    </Dialog.DialogClose>

                    <form
                        // onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col flex-1">
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className="text-sm font-medium text-slate-300">
                                Adidicionar nota
                            </span>
                            {shouldShowOnboarding ? (
                                <p className="text-sm leading-6 text-slate-400">
                                    Comece{" "}
                                    <button
                                        type="button"
                                        className="font-md text-lime-400 hover:underline"
                                        onClick={handleStartRecording}>
                                        gravando uma nota
                                    </button>{" "}
                                    em áudio ou se preferir{" "}
                                    <button
                                        type="button"
                                        className="font-md text-lime-400 hover:underline"
                                        onClick={handleStartEditor}>
                                        utilize apenas texto
                                    </button>
                                    .
                                </p>
                            ) : (
                                <textarea
                                    autoFocus
                                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                                    onChange={handleContentChanged}
                                    value={content}
                                />
                            )}
                        </div>

                        {isRecording ? (
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 bg bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font font-medium hover:teext-slate-100"
                                onClick={handleStopRecording}>
                                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                                Gravando! (clique p/ interromper)
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleSaveNote}
                                className="w-full bg bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font font-medium hover:bg-lime-500">
                                Salvar nota
                            </button>
                        )}
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
