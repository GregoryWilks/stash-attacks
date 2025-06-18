import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf8ed]">
      <header className="border-b sticky top-0 z-40 bg-[#fcf8ed]">
        <div className="container flex h-20 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="font-serif text-2xl font-bold text-[#569121]">
              Anastasia's <span className="text-[#605246]">HR Contracting</span>
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <Link
                href="/services"
                className="text-sm font-medium text-[#569121] transition-colors py-2 border-b-2 border-[#569121]"
              >
                OUR SERVICES
              </Link>
              <div className="absolute left-0 top-full mt-2 w-60 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="#consulting" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    On-Demand HR Consulting
                  </Link>
                  <Link href="#cultural" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Cultural Competency & Inclusion
                  </Link>
                  <Link href="#talent" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Talent Management & Leadership
                  </Link>
                  <Link href="#mediation" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Workplace Mediation & Conflict Resolution
                  </Link>
                  <Link href="#policy" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    HR Policy & Documentation
                  </Link>
                  <Link href="#change" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Change Management
                  </Link>
                  <Link href="#regulatory" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Regulatory Guidance
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link
                href="/story"
                className="text-sm font-medium text-[#605246] hover:text-[#569121] transition-colors py-2"
              >
                OUR STORY
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/story#who-we-are" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Who We Are
                  </Link>
                  <Link href="/story#mission" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Our Mission
                  </Link>
                  <Link href="/story#values" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Our Values
                  </Link>
                  <Link href="/story#approach" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    Our Approach
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link
                href="/articles"
                className="text-sm font-medium text-[#605246] hover:text-[#569121] transition-colors py-2"
              >
                ARTICLES
              </Link>
              <div className="absolute left-0 top-full mt-2 w-64 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/articles#cultural-hr" className="block text-sm text-[#605246] hover:text-[#569121] py-1">
                    The Power of Culturally-Informed HR
                  </Link>
                  <Link
                    href="/articles#building-teams"
                    className="block text-sm text-[#605246] hover:text-[#569121] py-1"
                  >
                    Building Better Teams: A Guide for Leaders
                  </Link>
                  <Link
                    href="/articles#navigating-change"
                    className="block text-sm text-[#605246] hover:text-[#569121] py-1"
                  >
                    Navigating Change: HR Strategies
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-sm font-medium text-[#605246] hover:text-[#569121] transition-colors">
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
          alt="Our Services"
          width={1920}
          height={400}
          className="w-full object-cover"
          priority
        />
      </div>

      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#569121]">Our Services</h1>
              <p className="text-lg text-[#605246]">
                Tailored HR solutions designed to meet the unique needs of your organization. We offer a comprehensive
                range of services to help you build a thriving workplace.
              </p>
            </div>
          </div>
        </section>

        <section id="consulting" className="w-full py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="On-Demand HR Consulting"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#569121]">On-Demand HR Consulting</h2>
                <p className="text-[#605246]">
                  Flexible contract support designed to adapt with your organization. Gain senior-level guidance when
                  and how you need it—without the commitment of a full-time executive.
                </p>
                <ul className="space-y-2 text-[#605246]">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span>Strategic HR planning and implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span>Organizational development and structure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span>HR audits and compliance reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span>Executive coaching and advisory</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cultural" className="w-full py-16 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h2 className="text-3xl font-bold text-[#569121]">Cultural Competency & Inclusion</h2>
                <p className="text-[#605246]">
                  Programs, workshops, and policies that help create workplaces where everyone belongs. With lived
                  Indigenous experience and a deep commitment to reconciliation, we guide you toward true inclusion.
                </p>
                <ul className="space-y-2 text-[#605246]">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span>Indigenous cultural awareness training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span>Diversity and inclusion strategy development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span>Inclusive recruitment and retention practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span>Workplace culture assessments</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cultural Competency & Inclusion"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional service sections would continue here */}

        <section className="w-full py-16 md:py-24 bg-[#569121] text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Transform Your HR Approach?</h2>
              <p className="text-lg">
                Schedule a consultation today and discover how our tailored HR solutions can benefit your organization.
              </p>
              <div>
                <Link href="/contact">
                  <Button className="bg-white text-[#569121] hover:bg-[#fcf8ed]">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#605246] text-white">
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
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="text-white hover:text-[#f69358]">
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="https://pinterest.com" className="text-white hover:text-[#f69358]">
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
                    <line x1="12" x2="12" y1="8" y2="16" />
                    <line x1="8" x2="16" y1="12" y2="12" />
                  </svg>
                </Link>
              </div>
              <div className="mt-8 md:mt-0">
                <Link href="/privacy-policy" className="text-white hover:text-[#f69358]">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Anastasia's HR Contracting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
