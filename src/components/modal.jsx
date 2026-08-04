import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <DialogTitle className="text-black text-xl font-bold">
            Welcome!
          </DialogTitle>

          <p className="mt-4 text-gray-600">
            You're getting a sneak peek at my portfolio while it's still under
            development.
          </p>

          <p className="mt-4 text-gray-600">
            I'm actively adding new projects, polishing the design, and
            improving the overall experience. Some sections may not be fully
            functional yet.
          </p>

          <p className="mt-4 text-gray-600">
            Thanks for visiting, and I appreciate your patience while I build
            something I'm proud to share.
          </p>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              Continue
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
