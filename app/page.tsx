import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, PinIcon as Pinterest } from "lucide-react"

export default function Home() {
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
              <Link
                href="/services"
                className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors py-2"
              >
                OUR SERVICES
              </Link>
              <div className="absolute left-0 top-full mt-2 w-60 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/services#consulting" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    On-Demand HR Consulting
                  </Link>
                  <Link href="/services#cultural" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Cultural Competency & Inclusion
                  </Link>
                  <Link href="/services#talent" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Talent Management & Leadership
                  </Link>
                  <Link href="/services#mediation" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Workplace Mediation & Conflict Resolution
                  </Link>
                  <Link href="/services#policy" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    HR Policy & Documentation
                  </Link>
                  <Link href="/services#change" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Change Management
                  </Link>
                  <Link href="/services#regulatory" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Regulatory Guidance
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link
                href="/story"
                className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors py-2"
              >
                OUR STORY
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/story#who-we-are" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Who We Are
                  </Link>
                  <Link href="/story#mission" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Our Mission
                  </Link>
                  <Link href="/story#values" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Our Values
                  </Link>
                  <Link href="/story#approach" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    Our Approach
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link
                href="/articles"
                className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors py-2"
              >
                ARTICLES
              </Link>
              <div className="absolute left-0 top-full mt-2 w-64 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/articles#cultural-hr" className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1">
                    The Power of Culturally-Informed HR
                  </Link>
                  <Link
                    href="/articles#building-teams"
                    className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1"
                  >
                    Building Better Teams: A Guide for Leaders
                  </Link>
                  <Link
                    href="/articles#navigating-change"
                    className="block text-sm text-[#41184a] hover:text-[#133b4c] py-1"
                  >
                    Navigating Change: HR Strategies
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors">
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
          src="/placeholder.svg?height=600&width=1920"
          alt="Anastasia's HR Contracting"
          width={1920}
          height={600}
          className="w-full object-cover"
          priority
        />
      </div>

      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#133b4c]">
                Designing Workplaces Where People Thrive
              </h1>
              <p className="text-lg text-[#41184a] leading-relaxed">
                At Anastasia's HR Contracting, we know that behind every successful business is a tapestry of unique
                individuals, cultures, and aspirations. We partner with you as architects of your employee experience,
                offering insight, strategy, and heart. Our contract HR solutions are built for organizations that want
                to nurture talent, champion inclusion, and create workplaces where everyone can succeed.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#133b4c]">Who We Are</h2>
                <div className="space-y-4 text-[#41184a]">
                  <p>
                    With roots in both Aboriginal communities and Canada's creative industries, our founder, Anastasia,
                    brings a rare blend of expertise and empathy to the table. Featured at leading Canadian universities
                    and celebrated for her innovative approach, Anastasia has supported organizations of every size—from
                    bold startups to established community leaders.
                  </p>
                  <p>
                    Our philosophy is simple: HR should be people-focused, adaptable, and deeply aligned with your
                    values and mission. We don't offer generic "one size fits all" answers. Instead, we take the time to
                    understand your organization and shape every engagement to fit your needs, your team, and your
                    goals.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Anastasia, HR Consultant"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-[#133b4c]">Our Mission</h2>
              <p className="text-lg text-[#41184a] italic">
                To empower organizations to build thriving, respectful, and resilient workplaces by providing tailored
                HR consulting rooted in cultural understanding, creativity, and proven best practices.
              </p>

              <h2 className="text-3xl font-bold text-[#133b4c] pt-8">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#f69358]">Respect</h3>
                  <p className="text-[#41184a]">We honor every individual's story and contribution.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#f69358]">Integrity</h3>
                  <p className="text-[#41184a]">Transparency, honesty, and ethical action guide every decision.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#f69358]">Inclusion</h3>
                  <p className="text-[#41184a]">Our work actively advances diversity, equity, and reconciliation.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#f69358]">Innovation</h3>
                  <p className="text-[#41184a]">We bring creativity and curiosity to every challenge.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#f69358]">Collaboration</h3>
                  <p className="text-[#41184a]">Success is built together, through genuine partnership.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#133b4c]">Our Services</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <h3 className="text-xl font-bold text-[#133b4c] mb-3">On-Demand HR Consulting</h3>
                <p className="text-[#41184a]">
                  Flexible contract support designed to adapt with your organization. Gain senior-level guidance when
                  and how you need it—without the commitment of a full-time executive.
                </p>
              </div>
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <h3 className="text-xl font-bold text-[#133b4c] mb-3">Cultural Competency & Inclusion</h3>
                <p className="text-[#41184a]">
                  Programs, workshops, and policies that help create workplaces where everyone belongs. With lived
                  Indigenous experience and a deep commitment to reconciliation, we guide you toward true inclusion.
                </p>
              </div>
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <h3 className="text-xl font-bold text-[#133b4c] mb-3">Talent Management & Leadership</h3>
                <p className="text-[#41184a]">
                  From recruitment and onboarding to career growth, retention, and succession planning, we help you
                  invest in your people and build strong leaders at every level.
                </p>
              </div>
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <h3 className="text-xl font-bold text-[#133b4c] mb-3">Workplace Mediation & Conflict Resolution</h3>
                <p className="text-[#41184a]">
                  Professional facilitation for challenging conversations, disputes, or transitions—helping you resolve
                  issues with empathy and skill.
                </p>
              </div>
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <h3 className="text-xl font-bold text-[#133b4c] mb-3">HR Policy & Documentation</h3>
                <p className="text-[#41184a]">
                  Branded, compliant, and easy-to-use handbooks, templates, and forms tailored to your needs, ensuring
                  your organization communicates clearly and operates smoothly.
                </p>
              </div>
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <h3 className="text-xl font-bold text-[#133b4c] mb-3">Change Management</h3>
                <p className="text-[#41184a]">
                  Support for navigating organizational shifts—expansion, mergers, restructuring, or seasonal
                  changes—while keeping your people informed and engaged.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/services">
                <Button className="bg-[#133b4c] hover:bg-[#4a7e1c] text-white">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#133b4c]">Our Approach</h2>
              <p className="text-xl font-medium text-[#f69358] mt-2">Listen. Learn. Design. Deliver.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-[#41184a] text-lg text-center">
                Every engagement begins with active listening—understanding your team, your context, and your
                aspirations. We collaborate closely to design HR solutions that don't just look good on paper, but truly
                work in your environment. Our process is hands-on, transparent, and focused on measurable results.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full relative">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Industries We Serve"
            width={1920}
            height={600}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
                <div>Creative Studios & Agencies</div>
                <div>Indigenous Organizations & Enterprises</div>
                <div>Technology & Startups</div>
                <div>Community Groups & Nonprofits</div>
                <div>Hospitality & Services</div>
                <div>Education & Academia</div>
                <div>Retail & Manufacturing</div>
              </div>
              <p className="mt-8 text-lg">
                No matter your field, we bring insights from a diversity of sectors—so you get ideas and solutions
                informed by a broad spectrum of experience.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#133b4c]">Client Stories & Testimonials</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <p className="text-[#41184a] italic mb-4">
                  "Anastasia's deep understanding of people and culture transformed our approach to HR. Her solutions
                  were practical, creative, and perfectly fit our team."
                </p>
                <p className="text-[#f69358] font-medium">— Managing Director, Design Agency</p>
              </div>
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <p className="text-[#41184a] italic mb-4">
                  "Her leadership and advocacy for Indigenous inclusion helped us build trust, communicate better, and
                  grow as an organization."
                </p>
                <p className="text-[#f69358] font-medium">— Executive Director, Community Initiative</p>
              </div>
              <div className="bg-[#e7a8b4] p-6 rounded-lg shadow-sm border border-[#bcb5aa]">
                <p className="text-[#41184a] italic mb-4">
                  "From onboarding to policy design, Anastasia made HR easy and approachable. We always felt supported
                  and understood."
                </p>
                <p className="text-[#f69358] font-medium">— Founder, Startup Collective</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#133b4c]">Resource Center</h2>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-[#133b4c] mb-6">Insights & Guides</h3>
                <p className="text-[#41184a] mb-4">
                  Explore articles, guides, and best practices on HR trends, workplace inclusion, leadership
                  development, and more.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span className="text-[#41184a]">The Power of Culturally-Informed HR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span className="text-[#41184a]">Building Better Teams: A Practical Guide for Leaders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span className="text-[#41184a]">Navigating Change: HR Strategies for Growth and Resilience</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/articles" className="text-[#133b4c] font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#133b4c] mb-6">Learning & Workshops</h3>
                <p className="text-[#41184a] mb-4">
                  Anastasia offers workshops and speaking engagements for organizations seeking to build stronger, more
                  inclusive workplaces. Popular topics include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span className="text-[#41184a]">Indigenous Perspectives in Modern HR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span className="text-[#41184a]">Creating a Culture of Respect and Accountability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#f69358]"></div>
                    <span className="text-[#41184a]">Managing Conflict with Empathy and Effectiveness</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="text-[#133b4c] font-medium hover:underline">
                    Request a Workshop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-[#133b4c]">Commitment to Reconciliation</h2>
              <p className="text-[#41184a]">
                We respectfully acknowledge the traditional territories where we live and work. As an Indigenous-owned
                business, we are dedicated to reconciliation—not just in words, but in daily action. Our practice
                uplifts Indigenous voices and champions economic opportunity, equity, and cultural understanding.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-[#133b4c]">Frequently Asked Questions</h2>
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-[#f69358]">Do you work with small businesses or startups?</h3>
                  <p className="text-[#41184a] mt-2">
                    Yes! We support organizations of all sizes with flexible, scalable solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f69358]">Can we book a one-time consultation?</h3>
                  <p className="text-[#41184a] mt-2">
                    Absolutely. We offer both project-based and ongoing partnerships.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f69358]">How do you approach confidentiality?</h3>
                  <p className="text-[#41184a] mt-2">
                    We treat all client information with the utmost discretion and care, always upholding privacy and
                    trust.
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <Link href="/contact">
                  <Button className="bg-[#133b4c] hover:bg-[#4a7e1c] text-white">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#133b4c] text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Get Started Today</h2>
              <p className="text-lg">
                Book a Free Discovery Call
                <br />
                Explore how Anastasia's HR Contracting can support your team.
              </p>
              <div>
                <Link href="/contact">
                  <Button className="bg-white text-[#133b4c] hover:bg-[#e7a8b4]">Book Now</Button>
                </Link>
              </div>
              <p className="text-sm pt-8">
                Anastasia's HR Contracting – Where people, purpose, and partnership come together for better workplaces.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="w-full">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Anastasia's HR Contracting"
          width={1920}
          height={400}
          className="w-full object-cover"
        />
      </div>

      <footer className="bg-[#039899] text-white">
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
                <p>Phone: (555) 123‑4567</p>
                <p>Location: Vancouver, Canada</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="text-white hover:text-[#f69358]">
                <Linkedin size={24} />
              </Link>
              <Link href="https://facebook.com" className="text-white hover:text-[#f69358]">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-[#f69358]">
                <Instagram size={24} />
              </Link>
              <Link href="https://pinterest.com" className="text-white hover:text-[#f69358]">
                <Pinterest size={24} />
              </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Anastasia's HR Contracting. All rights reserved.</p>
            <Link href="/privacy-policy" className="text-white hover:text-[#f69358]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
