import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogImage,
    DialogSubtitle,
    DialogClose,
    DialogDescription,
    DialogContainer,
} from '@/components/ui/Dialog';
import { PlusIcon } from 'lucide-react';

export function PorductDialog({
    heading,
    subheading,
    img,
}: {
    heading: string;
    subheading: string;
    img: string;
}) {
    return (
        <Dialog
            transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
            }}

        >
            <DialogTrigger
                style={{
                    borderRadius: '12px',
                }}
                className='flex  shadow-md flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
            >
                <DialogImage
                    src={img}
                    alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                    className='h-72 w-full object-cover'
                />
                <div className='flex flex-grow flex-row items-end justify-between p-2'>
                    <div>
                        <DialogTitle className='text-zinc-950 dark:text-zinc-50'>
                            {heading}
                        </DialogTitle>

                    </div>
                    <button
                        type='button'
                        className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                        aria-label='Open dialog'
                    >
                        <PlusIcon size={12} />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContainer>
                <DialogContent
                    style={{
                        borderRadius: '24px',
                    }}
                    className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                >
                    <DialogImage
                        src={img}
                        alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                        className='h-96  w-full object-cover'
                    />
                    <div className='p-6'>
                        <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                            {heading}
                        </DialogTitle>
                        <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                            {subheading}
                        </DialogSubtitle>
                    </div>
                    <DialogClose className='text-zinc-50' />
                </DialogContent>
            </DialogContainer>
        </Dialog>
    );
}
