
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import ContactPage from "../contact/contact"
export function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <img src="/logo.png" alt="PERIER DEVELOPPEMENT" className="h-8 w-8" />
          <span className="text-lg font-bold">PERIER DEVELOPPEMENT</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#services" className="hover:underline" prefetch={false}>
            Services
          </Link>
          <Link href="#pricing" className="hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-full max-w-xs  p-6 backgroundCustom"
            side="right"
          >
            <div className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#services"
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#pricing"
                >
                  Pricing
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#testimonials"
                >
                  Témoignages
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#contact"
                >
                  Contact
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-20 px-6 md:px-10 text-center text-primary-foreground">
          <h1 className="text-4xl font-bold mb-4">Domiciliation d&apos;entreprises avec PERIER DEVELOPPEMENT</h1>
          <p className="text-lg mb-8">
            Profitez d&apos;une adresse commerciale prestigieuse et de services pratiques pour votre entreprise.
          </p>
          <Link href="#pricing" >
          <Button variant="outline" className="text-primary hover:bg-primary-foreground hover:text-primary">
            Découvrir nos offres
          </Button>
          </Link>
        </section>
        <section id="services" className="py-16 px-6 md:px-10">
          <h2 className="text-3xl font-bold mb-8 flex justify-center">Nos services de domiciliation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <BuildingIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Adresse commerciale</h3>
              <p className="text-muted-foreground mb-4">
                Bénéficiez d&apos;une adresse prestigieuse pour votre entreprise.
              </p>
              <Link href="#contact" >
              <Button variant="link" className="text-primary">
                En savoir plus
              </Button>
              </Link>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <BriefcaseIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Bureaux virtuels</h3>
              <p className="text-muted-foreground mb-4">Profitez d&apos;un espace de travail flexible et connecté.</p>
              <Link href="#contact" >
              <Button variant="link" className="text-primary">
                En savoir plus
              </Button>
              </Link>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <MailIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Réception du courrier</h3>
              <p className="text-muted-foreground mb-4">Faites suivre votre courrier où que vous soyez.</p>
              <Link href="#contact" >
              <Button variant="link" className="text-primary">
                En savoir plus
              </Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="pricing" className="bg-muted py-16 px-6 md:px-10">
          <h2 className="text-3xl font-bold mb-8 flex justify-center">Nos forfaits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Forfait Essentiel</h3>
              <p className="text-4xl font-bold mb-4">39€/mois</p>
              <ul className="text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Adresse commerciale
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Réception du courrier
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="w-4 h-4 text-muted-foreground" />
                  Bureaux virtuels
                </li>
              </ul>
              <Link href="#contact" >
              <Button>Souscrire</Button>
              </Link>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Forfait Premium</h3>
              <p className="text-4xl font-bold mb-4">69€/mois</p>
              <ul className="text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Adresse commerciale
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Réception du courrier
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Bureaux virtuels
                </li>
              </ul>
              <Link href="#contact" >
              <Button>Souscrire</Button>
              </Link>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Forfait Entreprise</h3>
              <p className="text-4xl font-bold mb-4">99€/mois</p>
              <ul className="text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Adresse commerciale
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Réception du courrier
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Bureaux virtuels
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Salle de réunion
                </li>
              </ul>
              <Link href="#contact" >
              <Button>Souscrire</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/about.jpeg"
                  alt="À propos de PERIER DEVELOPPEMENT"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">À propos de PERIER DEVELOPPEMENT</h2>
                <p className="text-muted-foreground mb-6">
                  Depuis plus de 10 ans, PERIER DEVELOPPEMENT accompagne les entrepreneurs dans la création et le
                  développement de leur entreprise. Nos valeurs de professionnalisme, de proximité et de flexibilité
                  sont au cœur de notre engagement auprès de nos clients.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium hover:bg-primary/90"
                  prefetch={false}
                >
                  En savoir plus
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="py-16 px-6 md:px-10">
          <h2 className="text-3xl font-bold mb-8 flex justify-center">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <AwardIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Expertise reconnue</h3>
              <p className="text-muted-foreground mb-4">
                Bénéficiez de l&apos;expertise de notre équipe pour vous accompagner au mieux.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <ClockIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Réactivité</h3>
              <p className="text-muted-foreground mb-4">
                Nos équipes sont à votre écoute pour répondre rapidement à vos besoins.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <ThumbsUpIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Satisfaction clients</h3>
              <p className="text-muted-foreground mb-4">
                Nos clients nous font confiance depuis des années, découvrez leurs témoignages.
              </p>
            </div>
          </div>
        </section>
        <section id="testimonials" className="bg-muted py-16 px-6 md:px-10">
          <h2 className="text-3xl font-bold mb-8 flex justify-center">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <blockquote className="mb-4">
                <p className="text-muted-foreground">
                &quot;L&apos;équipe de PERIER DEVELOPPEMENT a été très réactive et professionnelle. Nous sommes très satisfaits
                  de leurs services.&quot;
                </p>
              </blockquote>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>RD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Roger Damoiseau</p>
                  
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <blockquote className="mb-4">
                <p className="text-muted-foreground">
                &quot;Grâce à la domiciliation chez PERIER DEVELOPPEMENT, nous avons pu nous concentrer sur le
                  développement de notre activité.&quot;
                </p>
              </blockquote>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>DD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Damien Dupond</p>
                  
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <blockquote className="mb-4">
                <p className="text-muted-foreground">
                &quot;L&apos;équipe de PERIER DEVELOPPEMENT a été très à l&apos;écoute de nos besoins. Nous recommandons leurs
                  services sans hésitation.&quot;
                </p>
              </blockquote>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">Michel Darmo</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 px-6 md:px-10">
          <h2 className=" flex justify-center text-3xl font-bold mb-8">Contactez-nous</h2>
          <div className="bg-card p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <ContactPage />
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8 text-primary-foreground ">
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 PERIER DEVELOPPEMENT.</p>
          <p className="  "> Tous droits réservés.</p>
        </div>
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">13 RUE FONTANA</p>
          <p className="   "> 06200 NICE </p>
          <p className="  mt-4 ">contact@perier-developpement.fr</p>

          <p className="  mt-4 ">TEL: 04 22 13 02 97</p>
        </div>
      </footer>
    </div>
  )
}

function AwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ThumbsUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
