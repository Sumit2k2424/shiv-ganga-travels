'use client';

import { useRef } from 'react';

// ── shadcn/ui ──
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from '@/components/ui/sheet';
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@/components/ui/select';
import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
} from '@/components/ui/carousel';

// ── MagicUI ──
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedBeam } from '@/components/magicui/animated-beam';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';

const DHAMS = ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'];

const REVIEWS = [
  { name: 'Anita R.',  city: 'Bengaluru', text: 'Every transfer was on time. Zero surprises on price.' },
  { name: 'Suresh M.', city: 'Kolkata',   text: 'Driver knew the Kedarnath route inside out.' },
  { name: 'Farah K.',  city: 'Noida',     text: 'Booked for my parents — they were looked after.' },
  { name: 'Vikram T.', city: 'Pune',      text: 'Helicopter slot confirmed exactly as promised.' },
];

function Section({ title, note, children }) {
  return (
    <section className="mb-14">
      <div className="mb-5 border-b border-border pb-2">
        <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
        {note ? <p className="mt-1 text-sm text-muted-foreground">{note}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function UiKitDemo() {
  const beamContainer = useRef(null);
  const beamFrom = useRef(null);
  const beamTo = useRef(null);

  return (
    <main className="mx-auto max-w-5xl px-5 py-14">
      <BlurFade inView>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
          Internal reference — not indexed
        </p>
        <h1 className="font-display text-4xl font-bold text-navy">
          UI Kit
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Every component from shadcn/ui and MagicUI installed in this project,
          rendered with the Shiv Ganga palette. <code>primary</code> resolves to
          navy, <code>secondary</code> to gold, <code>accent</code> to navy-light.
        </p>
      </BlurFade>

      <div className="my-10 h-px bg-border" />

      <Section title="Button" note="variant × size — primary is navy, secondary is gold.">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Book now</Button>
          <Button variant="secondary">Get a quote</Button>
          <Button variant="outline">View itinerary</Button>
          <Button variant="ghost">Compare</Button>
          <Button variant="link">Read the guide</Button>
          <Button variant="destructive">Cancel booking</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Badge">
        <div className="flex flex-wrap gap-3">
          <Badge>Direct operator</Badge>
          <Badge variant="secondary">Zero commission</Badge>
          <Badge variant="outline">2026 dates open</Badge>
          <Badge variant="destructive">Sold out</Badge>
        </div>
      </Section>

      <Section title="Card + Input + Select">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Char Dham — 11 nights</CardTitle>
              <CardDescription>
                Haridwar round trip, all four dhams, hotels and transfers included.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Your name" />
              <Input type="tel" placeholder="Phone number" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Starting dham" />
                </SelectTrigger>
                <SelectContent>
                  {DHAMS.map((d) => (
                    <SelectItem key={d} value={d.toLowerCase()}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-2xl font-bold text-navy">₹18,500</span>
              <Button variant="secondary">Enquire</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pilgrims served since 2010</CardTitle>
              <CardDescription>MagicUI NumberTicker, counts on scroll-in.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-navy">
                <NumberTicker value={50000} className="text-navy" />+
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Across Char Dham, Do Dham and helicopter packages.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="road">
          <TabsList>
            <TabsTrigger value="road">By road</TabsTrigger>
            <TabsTrigger value="heli">Helicopter</TabsTrigger>
            <TabsTrigger value="mixed">Mixed</TabsTrigger>
          </TabsList>
          <TabsContent value="road" className="pt-4 text-muted-foreground">
            11 nights from Haridwar, Innova or Tempo Traveller.
          </TabsContent>
          <TabsContent value="heli" className="pt-4 text-muted-foreground">
            2 nights, Dehradun departure, all four dhams by air.
          </TabsContent>
          <TabsContent value="mixed" className="pt-4 text-muted-foreground">
            Road to Gangotri and Yamunotri, helicopter for Kedarnath.
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Accordion">
        <Accordion type="single" collapsible>
          <AccordionItem value="a">
            <AccordionTrigger>When does Char Dham open in 2026?</AccordionTrigger>
            <AccordionContent>
              Portals open on Akshaya Tritiya for Yamunotri and Gangotri; Kedarnath
              and Badrinath follow within the same week.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Is registration mandatory?</AccordionTrigger>
            <AccordionContent>
              Yes — every pilgrim needs a Uttarakhand tourism registration before
              travelling. We complete it for you after booking.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section title="Dialog + Sheet">
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request a callback</DialogTitle>
                <DialogDescription>
                  We call back within 30 minutes, 7am–10pm IST.
                </DialogDescription>
              </DialogHeader>
              <Input placeholder="Phone number" />
              <Button variant="secondary">Request callback</Button>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter packages</SheetTitle>
                <SheetDescription>Narrow by duration and budget.</SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-3">
                <Input placeholder="Max budget" />
                <Button className="w-full">Apply</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Section>

      <Section title="Carousel">
        <Carousel className="mx-auto w-full max-w-md">
          <CarouselContent>
            {DHAMS.map((d) => (
              <CarouselItem key={d}>
                <Card>
                  <CardContent className="flex h-40 items-center justify-center">
                    <span className="font-display text-3xl font-bold text-navy">{d}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Section>

      <Section title="MagicUI — Marquee" note="Pauses on hover.">
        <Marquee pauseOnHover className="[--duration:25s]">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="w-64 rounded-lg border border-border bg-card p-4 shadow-card"
            >
              <blockquote className="text-sm text-foreground">{r.text}</blockquote>
              <figcaption className="mt-2 text-xs text-muted-foreground">
                {r.name} — {r.city}
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </Section>

      <Section title="MagicUI — ShimmerButton">
        <ShimmerButton background="#0F2B5B" shimmerColor="#E8920A">
          <span className="text-sm font-semibold">Plan my yatra</span>
        </ShimmerButton>
      </Section>

      <Section title="MagicUI — AnimatedBeam">
        <div
          ref={beamContainer}
          className="relative flex h-40 items-center justify-between rounded-lg border border-border bg-card px-12"
        >
          <div
            ref={beamFrom}
            className="z-10 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white"
          >
            Haridwar
          </div>
          <div
            ref={beamTo}
            className="z-10 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-navy"
          >
            Kedarnath
          </div>
          <AnimatedBeam
            containerRef={beamContainer}
            fromRef={beamFrom}
            toRef={beamTo}
            curvature={40}
            gradientStartColor="#0B7B8B"
            gradientStopColor="#E8920A"
          />
        </div>
      </Section>

      <Section title="MagicUI — BentoGrid">
        <BentoGrid>
          <BentoCard
            name="Direct operator"
            className="col-span-3 lg:col-span-1"
            Icon={() => <span className="text-3xl">🛕</span>}
            description="No middlemen. You book with the people driving the vehicle."
            href="/packages"
            cta="See packages"
            background={<div className="absolute inset-0 bg-navy-light" />}
          />
          <BentoCard
            name="Fixed pricing"
            className="col-span-3 lg:col-span-1"
            Icon={() => <span className="text-3xl">₹</span>}
            description="The quote you get is the amount you pay."
            href="/packages"
            cta="Check rates"
            background={<div className="absolute inset-0 bg-gold-light" />}
          />
          <BentoCard
            name="16 years running"
            className="col-span-3 lg:col-span-1"
            Icon={() => <span className="text-3xl">⛰️</span>}
            description="Operating the Char Dham circuit since 2010."
            href="/about"
            cta="Our story"
            background={<div className="absolute inset-0 bg-teal-light" />}
          />
        </BentoGrid>
      </Section>
    </main>
  );
}
