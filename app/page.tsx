'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, PinIcon as Pinterest } from "lucide-react"
import CurrentYear from "@/components/current-year"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
              <Link
                href="/services"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {t('our_services')}
              </Link>
              <div className="absolute left-0 top-full mt-2 w-60 rounded-md bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/services#consulting" className="block text-sm text-foreground hover:text-primary py-1">Comprehensive HR Consulting</Link>
                  <Link href="/services#recruitment" className="block text-sm text-foreground hover:text-primary py-1">Full-Cycle Recruitment</Link>
                  <Link href="/services#policy" className="block text-sm text-foreground hover:text-primary py-1">HR Policy & Process Development</Link>
                  <Link href="/services#hris" className="block text-sm text-foreground hover:text-primary py-1">HRIS Implementation</Link>
                  <Link href="/services#culture" className="block text-sm text-foreground hover:text-primary py-1">People & Culture Consulting</Link>
                  <Link href="/services#employee-relations" className="block text-sm text-foreground hover:text-primary py-1">Employee Relations</Link>
                  <Link href="/services#training" className="block text-sm text-foreground hover:text-primary py-1">Training & Development</Link>
                  <Link href="/services#individual-support" className="block text-sm text-foreground hover:text-primary py-1">Support for Individuals</Link>
                  <Link href="/services#resume-support" className="block text-sm text-foreground hover:text-primary py-1">Resume, Cover Letter & Networking Support</Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link
                href="/story"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {t('our_story')}
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/story#who-we-are" className="block text-sm text-foreground hover:text-primary py-1">
                    Who We Are
                  </Link>
                  <Link href="/story#mission" className="block text-sm text-foreground hover:text-primary py-1">
                    Our Mission
                  </Link>
                  <Link href="/story#values" className="block text-sm text-foreground hover:text-primary py-1">
                    Our Values
                  </Link>
                  <Link href="/story#approach" className="block text-sm text-foreground hover:text-primary py-1">
                    Our Approach
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link
                href="/articles"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {t('articles')}
              </Link>
              <div className="absolute left-0 top-full mt-2 w-64 rounded-md bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-4 space-y-2">
                  <Link href="/articles#cultural-hr" className="block text-sm text-foreground hover:text-primary py-1">
                    The Power of Culturally-Informed HR
                  </Link>
                  <Link
                    href="/articles#building-teams"
                    className="block text-sm text-foreground hover:text-primary py-1"
                  >
                    Building Better Teams: A Guide for Leaders
                  </Link>
                  <Link
                    href="/articles#navigating-change"
                    className="block text-sm text-foreground hover:text-primary py-1"
                  >
                    Navigating Change: HR Strategies
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors">
              {t('contact_us')}
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
          alt="Anastasia's HR Contracting"
          width={1920}
          height={80}
          className="w-full object-cover"
          priority
        />
      </div>

      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#133b4c]">
                {t('designing_workplaces')}
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                At Anastasia's HR Contracting, we know that behind every successful business is a tapestry of unique
                individuals, cultures, and aspirations. We partner with you as architects of your employee experience,
                offering insight, strategy, and heart. Our contract HR solutions are built for organizations that want
                to nurture talent, champion inclusion, and create workplaces where everyone can succeed.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Who We Are</h2>
                <div className="space-y-4 text-foreground">
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

        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-foreground italic">
                Anastasia’s HR Consulting is committed to creating environments where employees feel valued,
                understood, and able to contribute fully. We empower individuals and organizations to be their
                authentic selves by removing workplace obstacles, fostering a culture of transparency and inclusion,
                and streamlining HR processes that support your team in doing their best work.
              </p>

              <h2 className="text-3xl font-bold text-primary pt-8">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Respect</h3>
                  <p className="text-foreground">We honor every individual's story and contribution.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Integrity</h3>
                  <p className="text-foreground">Transparency, honesty, and ethical action guide every decision.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Inclusion</h3>
                  <p className="text-foreground">Our work actively advances diversity, equity, and reconciliation.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Innovation</h3>
                  <p className="text-foreground">We bring creativity and curiosity to every challenge.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Collaboration</h3>
                  <p className="text-foreground">Success is built together, through genuine partnership.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Empowerment</h3>
                  <p className="text-foreground">We uplift others by fostering confidence, growth, and shared leadership.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Our Services</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Comprehensive HR Consulting</h3>
                <p className="text-foreground">
                  Full-spectrum HR solutions tailored to Indigenous Nations, game development, tech, and hospitality. We
                  cover the entire HR lifecycle with empathy, strategy, and industry-specific insight.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Recruitment & Talent Acquisition</h3>
                <p className="text-foreground">
                  From job descriptions and sourcing to interviews and onboarding—we help you attract passionate,
                  qualified candidates who fit your culture and contribute meaningfully.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Policy & Process Development</h3>
                <p className="text-foreground">
                  We create and revise contracts, handbooks, and HR policies aligned with BC’s Employment Standards—ensuring
                  compliance, clarity, and operational efficiency.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">HRIS Implementation</h3>
                <p className="text-foreground">
                  Need help choosing or launching an HR software system? We support you through the research, selection,
                  and integration process—making HR tech less overwhelming.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">People & Culture Consulting</h3>
                <p className="text-foreground">
                  Build authentic, inclusive workplaces through strategic DEIB planning, employee engagement, and
                  values-driven cultural alignment. Respect and belonging are our foundation.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Employee Relations & Investigations</h3>
                <p className="text-foreground">
                  We manage conflict resolution, performance issues, and offboarding with care. Our discreet, professional
                  approach to investigations protects your people and your workplace.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Training & Development Programs</h3>
                <p className="text-foreground">
                  We deliver customized onboarding, leadership training, and skill-building sessions—equipping your team
                  for continuous growth, accountability, and leadership success.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Support for Individuals</h3>
                <p className="text-foreground">
                  Whether you need resume guidance, mock interviews, or personalized HR advice—we’re here for individuals
                  navigating job transitions and workplace challenges.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">Resume, Cover Letter & Networking Support</h3>
                <p className="text-foreground">
                  Craft compelling career documents and build the confidence to connect. We help individuals create tailored resumes,
                  write impactful cover letters, and develop effective networking strategies—whether you’re entering the workforce,
                  making a career shift, or preparing for a new opportunity.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/services">
                <Button className="bg-primary hover:bg-primary/80 text-white">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Our Approach</h2>
              <p className="text-xl font-medium text-primary mt-2">Listen. Learn. Design. Deliver.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-foreground text-lg text-center">
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
              <p className="mb-6 text-lg">
                At Anastasia’s HR Consulting, we specialize in supporting small to medium-sized businesses with an
                honest and empathetic approach to HR. We empower authenticity in every workplace we touch—especially
                within the video gaming industry, restaurants, and Indigenous Nations.
              </p>
              <p className="mb-6 text-lg">Our expertise also extends across a wide range of sectors, including:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
                <div>Creative Studios & Agencies</div>
                <div>Indigenous Organizations & Enterprises</div>
                <div>Technology & Startups</div>
                <div>Education & Academia</div>
                <div>Restaurants</div>
              </div>
              <p className="mt-8 text-lg">
                No matter your field, we bring insight from a diverse spectrum of industries—delivering HR strategies
                that are not only compliant but also culturally aware, practical, and people-first.
              </p>
            </div>
          </div>
        </section>


        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Resource Center</h2>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Insights & Guides</h3>
                <p className="text-foreground mb-4">
                  Explore articles, guides, and best practices on HR trends, workplace inclusion, leadership
                  development, and more.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">The Power of Culturally-Informed HR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Building Better Teams: A Practical Guide for Leaders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Navigating Change: HR Strategies for Growth and Resilience</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/articles" className="text-primary font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Learning & Workshops</h3>
                <p className="text-foreground mb-4">
                  Anastasia offers workshops and speaking engagements for organizations seeking to build stronger, more
                  inclusive workplaces. Popular topics include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Indigenous Perspectives in Modern HR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Creating a Culture of Respect and Accountability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Managing Conflict with Empathy and Effectiveness</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="text-primary font-medium hover:underline">
                    Request a Workshop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-primary">Commitment to Reconciliation</h2>
              <p className="text-foreground">
                We respectfully acknowledge the traditional territories where we live and work. As an Indigenous-owned
                business, we are dedicated to reconciliation—not just in words, but in daily action. Our practice
                uplifts Indigenous voices and champions economic opportunity, equity, and cultural understanding.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-primary">Why Choose Us?</h2>
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-primary">Deep Industry Expertise:</h3>
                  <p className="text-foreground mt-2">
                    Our extensive background spans video game development, tech, Indigenous Nations, and the
                    restaurant/hospitality sectors, enabling us to deliver highly specialized HR solutions. Whether it’s
                    full-cycle recruitment, employee training programs, or DEIB initiatives, our hands-on experience
                    ensures effective and practical HR support.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Culturally Informed Approach:</h3>
                  <p className="text-foreground mt-2">
                    As a 100% Indigenous-owned and woman-led business, we bring a culturally informed perspective to HR
                    practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Adaptability to Remote & Hybrid Models:</h3>
                  <p className="text-foreground mt-2">
                    With the ongoing rise of remote and hybrid work environments, our consulting services are designed
                    to meet the security and operational challenges of these models.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Comprehensive Service Offering:</h3>
                  <p className="text-foreground mt-2">
                    We offer multi process outsourcing that encompasses recruitment, training, benefits administration,
                    policy development, and more. This all-in-one approach reduces
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/80 text-white">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Get Started Today</h2>
              <p className="text-lg">
                Book a Free Discovery Call
                <br />
                Explore how Anastasia's HR Contracting can support your team.
              </p>
              <div>
                <Link href="https://calendly.com/anastasias-hr/consultation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-card text-primary hover:bg-background">Book Now</Button>
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
              <p className="mb-6">{t('designing_workplaces')}</p>
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
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-primary">
                <Linkedin size={24} />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-primary">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-primary">
                <Instagram size={24} />
              </Link>
              <Link href="https://pinterest.com" aria-label="Pinterest" className="text-white hover:text-primary">
                <Pinterest size={24} />
              </Link>
            </div>
            <p>&copy; <CurrentYear /> Anastasia's HR Contracting. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-white hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/faq" className="text-white hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
