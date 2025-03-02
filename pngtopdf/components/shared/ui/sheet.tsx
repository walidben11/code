'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Extend DialogContentProps to include a side prop
interface SheetContentProps extends DialogPrimitive.DialogContentProps {
  side?: 'left' | 'right' | 'top' | 'bottom';
}

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;
const SheetOverlay = DialogPrimitive.Overlay;

const SheetContent = ({
  className,
  children,
  side = 'right', // Default to 'right'
  ...props
}: SheetContentProps) => {
  // Define styles based on the side prop
  const positionStyles = {
    left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
    top: 'inset-x-0 top-0 w-full h-3/4 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top sm:max-h-sm',
    bottom: 'inset-x-0 bottom-0 w-full h-3/4 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom sm:max-h-sm',
  };

  return (
    <SheetPortal>
      <SheetOverlay
        className={cn(
          'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
        )}
      />
      <DialogPrimitive.Content
        className={cn(
          'fixed z-50 gap-4 p-6 bg-white shadow-lg transition-all duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300',
          positionStyles[side],
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
};

export { Sheet, SheetTrigger, SheetClose, SheetContent };