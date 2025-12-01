'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Rocket } from 'lucide-react';

export default function LiveDemoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className="fixed bottom-6 right-6 rounded-full shadow-2xl transition-transform hover:scale-105"
        >
          <Rocket className="mr-2 h-5 w-5" />
          Ready for a Live Demo?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Live Demo</DialogTitle>
          <DialogDescription>
            Fill in your details below and one of our experts will contact you shortly to schedule a live demo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" placeholder="john.doe@company.com" className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input id="company" placeholder="Your Company Inc." className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Request Demo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
