import { Fragment } from "react";
import { Transition } from "@headlessui/react";

type ConfirmModalProps = {
    open: boolean;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    loading?: boolean;
};

export default function ConfirmModal({
    open,
    title = "Confirm action",
    description = "Are you sure? This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    loading = false
}: ConfirmModalProps) {
    return (
        <Transition show={open} as={Fragment}>
            <div className="fixed inset-0 z-50 flex items-center justify-center">

                {/* Overlay */}
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={onCancel}
                    />
                </Transition.Child>

                {/* Modal */}
                <Transition.Child
                    as={Fragment}
                    enter="transition-all duration-200"
                    enterFrom="opacity-0 scale-95 translate-y-2"
                    enterTo="opacity-100 scale-100 translate-y-0"
                    leave="transition-all duration-150"
                    leaveFrom="opacity-100 scale-100 translate-y-0"
                    leaveTo="opacity-0 scale-95 translate-y-2"
                >
                    <div className="bg-[--bg-panel] relative z-10 w-full max-w-md rounded-2xl p-6 shadow-xl border border-[--border-panel]">

                        {/* Title */}
                        <h2 className="text-lg font-semibold text-[--text-primary]">
                            {title}
                        </h2>

                        {/* Description */}
                        <p className="mt-2 text-sm text-[--text-secundary]">
                            {description}
                        </p>

                        {/* Actions */}
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={onCancel}
                                className="px-4 py-2 text-sm font-medium btn-edit rounded-lg cursor-pointer"
                            >
                                {cancelText}
                            </button>

                            <button
                                onClick={onConfirm}
                                disabled={loading}
                                className="px-4 py-2 text-sm font-medium rounded-lg disabled:opacity-50 btn-delete cursor-pointer"
                            >
                                {loading ? "Processing..." : confirmText}
                            </button>
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Transition>
    );
}