import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e7a8b4]">
      <header className="border-b sticky top-0 z-40 bg-[#c54a71]">
        <div className="container flex h-20 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="font-serif text-2xl font-bold text-[#133b4c]">
              Anastasia's <span className="text-[#41184a]">HR Contracting</span>
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <Link href="/services" className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors py-2">
                OUR SERVICES
              </Link>
              <div className="absolute left-0 top-full mt-2 w-60 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/services#consulting" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">On-Demand HR Consulting</Link>
                  <Link href="/services#cultural" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Cultural Competency & Inclusion</Link>
                  <Link href="/services#talent" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Talent Management & Leadership</Link>
                  <Link href="/services#mediation" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Workplace Mediation & Conflict Resolution</Link>
                  <Link href="/services#policy" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">HR Policy & Documentation</Link>
                  <Link href="/services#change" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Change Management</Link>
                  <Link href="/services#regulatory" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Regulatory Guidance</Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="/story" className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors py-2">
                OUR STORY
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/story#who-we-are" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Who We Are</Link>
                  <Link href="/story#mission" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Our Mission</Link>
                  <Link href="/story#values" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Our Values</Link>
                  <Link href="/story#approach" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Our Approach</Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="/articles" className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors py-2">
                ARTICLES
              </Link>
              <div className="absolute left-0 top-full mt-2 w-64 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/articles#cultural-hr" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">The Power of Culturally-Informed HR</Link>
                  <Link href="/articles#building-teams" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Building Better Teams: A Guide for Leaders</Link>
                  <Link href="/articles#navigating-change" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Navigating Change: HR Strategies</Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-sm font-medium text-[#133b4c] transition-colors border-b-2 border-[#133b4c]">
              CONTACT US
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <div className="w-full">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Contact Us"
          width={1920}
          height={400}
          className="w-full object-cover"
          priority
        />
      </div>

      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#133b4c]">Contact Us</h1>
              <p className="text-lg text-[#41184a]">
                Ready to reimagine your workplace? Let's start the conversation. Whether you have a quick question or a complex challenge, we're here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#133b4c] mb-6">Get In Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#e7a8b4] p-3 text-[#133b4c]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#41184a]">Email</h3>
                        <p className="text-[#41184a]">info@yourdomain.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#e7a8b4] p-3 text-[#133b4c]">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#41184a]">Phone</h3>
                        <p className="text-[#41184a]">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#e7a8b4] p-3 text-[#133b4c]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#41184a]">Location</h3>
                        <p className="text-[#41184a]">Vancouver, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#133b4c] mb-6">Office Hours</h2>
                  <div className="space-y-2 text-[#41184a]">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Our Office"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
              <div>
                <div className="bg-[#e7a8b4] p-8 rounded-lg shadow-sm border border-[#bcb5aa]">
                  <h2 className="text-2xl font-bold text-[#133b4c] mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium text-[#41184a]"
                        >
                          First name
                        </label>
                        <Input id="first-name" placeholder="Enter your first name" className="bg-white" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium text-[#41184a]"
                        >
                          Last name
                        </label>
                        <Input id="last-name" placeholder="Enter your last name" className="bg-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#41184a]"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-[#41184a]"
                      >
                        Phone
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-[#41184a]"
                      >
                        Subject
                      </label>
                      <Input id="subject" placeholder="What is this regarding?" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-[#41184a]"
                      >
                        Message
                      </label>
                      <Textarea id="message" placeholder="Enter your message" className="min-h-[120px] bg-white" />
                    </div>
                    <Button className="w-full bg-[#133b4c] hover:bg-[#4a7e1c] text-white">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-[#133b4c]">Book a Discovery Call</h2>
              <p className="text-lg text-[#41184a]">
                Schedule a free 30-minute discovery call to discuss your HR needs and explore how we can support your organization.
              </p>
              <div>
                <Button className="bg-[#133b4c] hover:bg-[#4a7e1c] text-white">Book Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#039899] text-white">
        <div className="container py-12 px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Anastasia's HR Contracting</h2>
              <p className="mb-6">Designing Workplaces Where People Thrive</p>
              <div className="space-y-2">
                <p>Email: info@yourdomain.com</p>
                <p>Phone: (555) 123‑4567</p>
                <p>Location: Vancouver, Canada</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end justify-between">
              <div className="flex space-x-4">
                <Link href="https://linkedin.com" className="text-white hover:text-[#f69358]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="https://facebook.com" className="text-white hover:text-[#f69358]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24\
