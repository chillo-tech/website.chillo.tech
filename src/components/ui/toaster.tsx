'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            className="bg-light-gray border border-dark-gray p-2 px-4"
            {...props}>
            <div className="grid gap-1 text-black">
              {title && <ToastTitle className="text-blue">{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-red-600/50 hover:text-red-800" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
