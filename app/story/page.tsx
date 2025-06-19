import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CurrentYear from "@/components/current-year"

export default function StoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e7a8b4]">
      <header
        className="border-b sticky top-0 z-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/website-navbar.svg')" }}
      >
        <div className="container flex h-20 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/anastasias-hr-contracting-logo.svg"
              alt="Anastasia's HR Contracting"
              width={48}
              height={48}
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <Link href="/services" className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors py-2">
                OUR SERVICES
              </Link>
              <div className="absolute left-0 top-full mt-2 w-60 rounded-md bg-[#fcf8ed] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/services#consulting" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Comprehensive HR Consulting</Link>
                  <Link href="/services#recruitment" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Full-Cycle Recruitment</Link>
                  <Link href="/services#policy" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">HR Policy & Process Development</Link>
                  <Link href="/services#hris" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">HRIS Implementation</Link>
                  <Link href="/services#culture" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">People & Culture Consulting</Link>
                  <Link href="/services#employee-relations" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Employee Relations</Link>
                  <Link href="/services#training" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Training & Development</Link>
                  <Link href="/services#individual-support" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Support for Individuals</Link>
                  <Link href="/services#resume-support" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Resume, Cover Letter & Networking Support</Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="/story" className="text-sm font-medium text-[#133b4c] transition-colors py-2 border-b-2 border-[#133b4c]">
                OUR STORY
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-[#fcf8ed] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
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
              <div className="absolute left-0 top-full mt-2 w-64 rounded-md bg-[#fcf8ed] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/articles#cultural-hr" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">The Power of Culturally-Informed HR</Link>
                  <Link href="/articles#building-teams" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Building Better Teams: A Guide for Leaders</Link>
                  <Link href="/articles#navigating-change" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">Navigating Change: HR Strategies</Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors">
              CONTACT US
            </Link>
          </nav>
          <Button
            variant="outline"
            size="icon"
            aria-label="Open navigation menu"
            className="md:hidden"
          >
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
          src="/anastasias-hr-contracting-logo.png"
          alt="Our Story"
          width={1920}
          height={80}
          className="w-full object-cover"
          priority
        />
      </div>

      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#133b4c]">Our Story</h1>
            </div>
          </div>
        </section>

        <section id="who-we-are" className="w-full py-16 md:py-24 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Who We Are</h2>
              <p className="text-[#41184a]">
                Anastasia’s HR Consulting is an Indigenous-owned and woman-led human resources firm based in Nanaimo, British Columbia. We specialize in supporting small to medium-sized organizations across Indigenous Nations, video game development studios, tech companies, and the restaurant and hospitality industries.
              </p>
              <p className="text-[#41184a]">
                Rooted in lived experience and driven by a deep understanding of the unique challenges facing modern workplaces, our consulting practice is grounded in empathy, accountability, and cultural integrity. As proud members of the Lax Kw’alaams and Kitsumkalum communities, we are committed to building respectful, reciprocal relationships with all Indigenous Nations and organizations we work alongside.
              </p>
            </div>
          </div>
        </section>

        <section id="mission" className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Our Mission</h2>
              <p className="text-[#41184a]">
                We are committed to creating workplaces where people feel valued, understood, and able to contribute fully. Our mission is to empower individuals and organizations to be their authentic selves by removing workplace obstacles, fostering cultures of transparency and inclusion, and streamlining HR processes that support your team in doing their best work.
              </p>
              <p className="text-[#41184a]">We don’t just “do HR”—we build people-first systems that make your workplace stronger, more resilient, and more human.</p>
            </div>
          </div>
        </section>

        <section id="values" className="w-full py-16 md:py-24 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Our Values</h2>
              <ul className="list-disc list-inside space-y-2 text-[#41184a]">
                <li><strong>Respect</strong> – We honor every individual's story and contribution.</li>
                <li><strong>Integrity</strong> – Transparency, honesty, and ethical action guide every decision.</li>
                <li><strong>Inclusion</strong> – Our work actively advances diversity, equity, and reconciliation.</li>
                <li><strong>Innovation</strong> – We bring creativity and curiosity to every challenge.</li>
                <li><strong>Collaboration</strong> – Success is built together, through genuine partnership.</li>
                <li><strong>Empowerment</strong> – We uplift others by fostering confidence, growth, and shared leadership.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="approach" className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Our Approach</h2>
              <p className="text-[#41184a]">
                Our consulting services are deeply informed by hands-on experience and cultural knowledge. We understand the real-world challenges faced by today’s organizations—whether they operate in fast-paced digital environments or community-based settings.
              </p>
              <p className="text-[#41184a]">
                We provide comprehensive HR services including full-cycle recruitment and onboarding, employee relations and conflict resolution, workplace investigations and policy development, leadership and employee training, diversity and inclusion strategy, HRIS implementation, and individual services like resume support and interview coaching.
              </p>
              <p className="text-[#41184a]">We operate with a culturally informed lens and a commitment to undoing harmful systemic structures. With the flexibility to support remote, hybrid, and in-person teams, our approach meets you where you are—and grows with you.</p>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/website-footer.svg')" }}
      >
        <div className="container py-12 px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Land Acknowledgement</h2>
              <p>
                I recognize the sovereignty and am eternally grateful to my ancestry from Lax
                Kw’alaams and Kitsumkalum, the Lhoosk'uz Dené Nation who we are privileged to
                support, and the Snuneymuxw, Quw’utsun’, Tla’amin, Snaw-naw-as, and Xwkwa’luxwum
                people, lands, and ancestors on whose traditional and unceded lands I live, work, and
                learn. Our work is only made possible through respectful and reciprocal relationships
                with all Indigenous Nations by working together to undo harmful systemic structures.
              </p>
            </div>
            <div className="md:text-right">
              <h2 className="text-2xl font-bold mb-4">Anastasia's HR Contracting</h2>
              <p className="mb-6">Designing Workplaces Where People Thrive</p>
              <div className="space-y-2">
                <p>Email: info@yourdomain.com</p>
                <p>Phone: 1-(778)-773-55213</p>
                <p>
                  Location:
                  <br />4724 Uplands Drive
                  <br />Nanaimo, BC
                  <br />Canada
                  <br />V9T 4S8
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-[#f69358]">
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
              <Link href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-[#f69358]">
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
              <Link href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-[#f69358]">
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
              <Link href="https://pinterest.com" aria-label="Pinterest" className="text-white hover:text-[#f69358]">
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
            <p>&copy; <CurrentYear /> Anastasia's HR Contracting. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-white hover:text-[#f69358]">
                Privacy Policy
              </Link>
              <Link href="/faq" className="text-white hover:text-[#f69358]">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
