'use client';

// Client island — the new shadcn primitives that genuinely need state or a
// portal. Kept separate from RegistryDemo so the server components there stay
// server components.

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription,
} from '@/components/ui/drawer';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/sonner';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  phone: z.string().regex(/^[+\d][\d\s-]{7,}$/, 'Enter a reachable phone number.'),
});

const FARES = [
  { route: 'Haridwar → Barkot', vehicle: 'Dzire', fare: '₹6,500' },
  { route: 'Haridwar → Guptkashi', vehicle: 'Innova', fare: '₹11,200' },
  { route: 'Dehradun → Phata', vehicle: 'Tempo 12str', fare: '₹15,800' },
];

function Row({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.13em] text-[color:var(--text-muted,#64748B)]">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function ShadcnIsland() {
  const [date, setDate] = React.useState();
  const form = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: '', phone: '' },
  });

  return (
    <TooltipProvider>
      <Toaster position="bottom-right" />

      <Row title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/packages">Packages</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Char Dham 11N/12D</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Row>

      <Row title="Alert">
        <Alert>
          <AlertTitle>Kedarnath route advisory</AlertTitle>
          <AlertDescription>
            Gaurikund–Kedarnath is open. Ponies are running to schedule.
          </AlertDescription>
        </Alert>
      </Row>

      <Row title="Navigation menu">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Yatras</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-56 p-2">
                  <li><NavigationMenuLink href="/char-dham-yatra">Char Dham</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="/do-dham-yatra">Do Dham</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Row>

      <Row title="Dropdown · Popover · Tooltip · Drawer">
        <div className="flex flex-wrap items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="outline">Sort by</Button></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Price, low to high</DropdownMenuItem>
              <DropdownMenuItem>Duration</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Popover>
            <PopoverTrigger asChild><Button variant="outline">Pick a date</Button></PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>

          <Tooltip>
            <TooltipTrigger asChild><Button variant="ghost">Why book direct?</Button></TooltipTrigger>
            <TooltipContent>No aggregator commission.</TooltipContent>
          </Tooltip>

          <Drawer>
            <DrawerTrigger asChild><Button variant="secondary">Enquire</Button></DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Send an enquiry</DrawerTitle>
                <DrawerDescription>We reply within a working day.</DrawerDescription>
              </DrawerHeader>
              <div className="space-y-3 px-4 pb-8">
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" placeholder="Dates, group size, starting city…" />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </Row>

      <Separator className="my-8" />

      <Row title="Form (react-hook-form + zod)">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((v) => toast.success(`Thanks ${v.name}, we'll call you.`))}
            className="max-w-sm space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl><Input placeholder="+91…" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Request callback</Button>
          </form>
        </Form>
      </Row>

      <Row title="Table">
        <Table>
          <TableCaption>Indicative one-way cab fares.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Route</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead className="text-right">Fare</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {FARES.map((f) => (
              <TableRow key={f.route}>
                <TableCell>{f.route}</TableCell>
                <TableCell>{f.vehicle}</TableCell>
                <TableCell className="text-right tabular-nums">{f.fare}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Row>

      <Row title="Skeleton">
        <div className="max-w-sm space-y-2">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </Row>
    </TooltipProvider>
  );
}
