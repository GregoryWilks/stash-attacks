import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CurrentYear from "@/components/current-year"

export default function ServicesPage() {
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
              <Link href="/services" className="text-sm font-medium text-[#133b4c] transition-colors py-2 border-b-2 border-[#133b4c]">
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
              <Link href="/story" className="text-sm font-medium text-[#41184a] hover:text-[#133b4c] transition-colors py-2">
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
          alt="Our Services"
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
              <h1 className="text-4xl md:text-5xl font-bold text-[#133b4c]">Our Services</h1>
              <p className="text-lg text-[#41184a]">
                At Anastasia’s HR Consulting, we offer a full range of human resources services tailored to the evolving needs of Indigenous Nations, video game studios, tech startups, and businesses in the restaurant and hospitality sectors. Our approach is honest, empathetic, and rooted in lived experience, ensuring your organization receives guidance that is as culturally aware as it is operationally effective.
              </p>
            </div>
          </div>
        </section>

        <section id="consulting" className="w-full py-16 md:py-24 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Comprehensive HR Consulting</h2>
              <p className="text-[#41184a]">
                We deliver end-to-end HR services customized to address the unique challenges and goals of our clients. Whether you're launching a startup, managing an established business, or supporting a Nation, our consulting covers the full HR lifecycle—from strategy and planning to implementation and refinement. Our comprehensive services are particularly suited for organizations that need expert support across People and Culture functions without building a large internal HR department.
              </p>
            </div>
          </div>
        </section>

        <section id="recruitment" className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Full-Cycle Recruitment & Talent Acquisition</h2>
              <p className="text-[#41184a]">
                Hiring is more than filling a role—it’s about finding someone who shares your values and enhances your culture. We manage the entire recruitment process for both technical and non-technical roles, from writing inclusive job descriptions and sourcing talent to screening, interviewing, negotiating offers, and facilitating smooth onboarding.
              </p>
              <p className="text-[#41184a]">Our goal is to ensure that your team grows with people who are genuinely passionate about your mission and vision.</p>
            </div>
          </div>
        </section>

        <section id="policy" className="w-full py-16 md:py-24 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">HR Policy & Process Development</h2>
              <p className="text-[#41184a]">
                Clear, compliant documentation builds trust and protects both your organization and your team. We support you in building and maintaining a solid HR foundation by creating or updating agreements, employee handbooks, and internal policies that align with your workplace culture while meeting or exceeding BC’s Employment Standards.
              </p>
              <p className="text-[#41184a]">Whether you’re starting from scratch or refining an existing structure, we’ll make sure your policies support your long-term success.</p>
            </div>
          </div>
        </section>

        <section id="hris" className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">HRIS Implementation</h2>
              <p className="text-[#41184a]">
                Choosing the right Human Resources Information System (HRIS) can be overwhelming. We simplify the process by assessing your needs, researching platforms, supporting setup and customization, and ensuring seamless integration into your workflows.
              </p>
              <p className="text-[#41184a]">Our implementation services reduce the stress and technical friction of introducing new HR tech into your organization.</p>
            </div>
          </div>
        </section>

        <section id="culture" className="w-full py-16 md:py-24 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">People & Culture Consulting</h2>
              <p className="text-[#41184a]">
                Culture isn’t something you write—it’s something you build. We help organizations foster workplaces where diversity, equity, inclusion, and belonging aren’t buzzwords, but part of everyday life. Our consulting covers inclusive strategy design, DEIB-focused programs, employee engagement, and creating psychologically safe environments.
              </p>
              <p className="text-[#41184a]">Grounded in Indigenous knowledge and values, our approach is inclusive, honest, and sustainable.</p>
            </div>
          </div>
        </section>

        <section id="employee-relations" className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Employee Relations & Workplace Investigations</h2>
              <p className="text-[#41184a]">
                We bring clarity, compassion, and professionalism to complex and sensitive workplace situations. Our expertise covers conflict resolution, performance management, layoffs and terminations, and conducting fair and discreet workplace investigations.
              </p>
              <p className="text-[#41184a]">We create a safe and confidential space for resolution—ensuring that issues are addressed with care and accountability.</p>
            </div>
          </div>
        </section>

        <section id="training" className="w-full py-16 md:py-24 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Training & Development Programs</h2>
              <p className="text-[#41184a]">Investing in your people is the key to long-term success. We support leadership development and team growth with customized learning opportunities.</p>
              <ul className="list-disc list-inside space-y-2 text-[#41184a]">
                <li>Onboarding and Orientation – tailored programs that welcome new hires from day one.</li>
                <li>Manager and Leadership Training – solutions to prepare your managers for effective supervision and team motivation.</li>
                <li>Specialized Workshops – engaging sessions like “Lunch and Learns” or employee empowerment workshops designed around your goals.</li>
              </ul>
              <p className="text-[#41184a]">We’re committed to making learning approachable, relevant, and impactful.</p>
            </div>
          </div>
        </section>

        <section id="resume-support" className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Resume, Cover Letter & Networking Support</h2>
              <p className="text-[#41184a]">A strong first impression can open the door to career-changing opportunities. Whether you're entering the workforce, transitioning industries, or aiming for the next level in your career, we offer personalized support to help you stand out—on paper and in person.</p>
              <p className="text-[#41184a]">We work closely with individuals to develop professional tools that reflect their authentic voice and unique value:</p>
              <ul className="list-disc list-inside space-y-2 text-[#41184a]">
                <li><strong>Resume Writing & Optimization</strong> – From entry-level to executive, we help you craft resumes that are clear, tailored, and aligned with industry standards—highlighting your strengths and relevant experience.</li>
                <li><strong>Cover Letter Development</strong> – We guide you in writing thoughtful, engaging cover letters that connect your personal story to the role you're applying for—helping you go beyond templates and generic intros.</li>
                <li><strong>Networking & Outreach Coaching</strong> – Building the right connections can be just as important as submitting the perfect application. We offer guidance on how to network with confidence—online, in person, and within your industry—so you can access the opportunities that don’t always get posted.</li>
              </ul>
              <p className="text-[#41184a]">Our approach is empathetic, practical, and grounded in the belief that everyone deserves support in building their career with confidence and clarity.</p>
            </div>
          </div>
        </section>

        <section id="individual-support" className="w-full py-16 md:py-24 bg-[#e7a8b4]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-[#133b4c]">Support for Individuals</h2>
              <p className="text-[#41184a]">We recognize that HR isn’t just for organizations—individuals need support, too. Whether you’re entering the workforce, changing careers, or navigating a challenging job situation, we offer resume and cover letter assistance, mock interview coaching, and personalized HR advice.</p>
              <p className="text-[#41184a]">Our goal is to provide empathetic, empowering support that helps individuals show up as their authentic selves and succeed.</p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#fcf8ed]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <h2 className="text-3xl font-bold text-[#133b4c]">Let’s Build Together</h2>
              <p className="text-[#41184a]">Our services are designed to grow with you. Whether you're building a team, navigating change, or rethinking your workplace culture, Anastasia’s HR Consulting is here to support your journey with heart, skill, and experience.</p>
              <p className="text-[#41184a]">
                <Link href="/contact" className="underline">Ready to connect? Contact us</Link> for a consultation or to learn more about how we can support your organization.
              </p>
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
                <p>Phone: (555) 123‑4567</p>
                <p>Location: Vancouver, Canada</p>
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
