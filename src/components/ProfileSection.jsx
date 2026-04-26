import {
  BriefcaseBusiness,
  Brush,
  GraduationCap,
  Languages,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

function Block({ icon: Icon, title, children }) {
  return (
    <section className="rounded-[18px] border border-zinc-500/60 bg-[#f6f6f6] px-5 py-5">
      <div className="flex items-center gap-2.5">
        <Icon size={18} className="text-zinc-600" />
        <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
      </div>
      <div className="mt-4 border-t border-zinc-300/80 pt-4">{children}</div>
    </section>
  )
}

function SkillTag({ label }) {
  return (
    <span className="rounded-full border border-zinc-500/70 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700">
      {label}
    </span>
  )
}

function LanguageRow({ label, width }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-zinc-700">
        <span>{label}</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-200">
        <div className="h-2 rounded-full bg-zinc-600" style={{ width }} />
      </div>
    </div>
  )
}

function ProfileSection() {
  return (
    <section
      id="about"
      className="mt-6 scroll-mt-24 rounded-[28px] border border-zinc-500/70 bg-[#cfccf0] px-6 py-8 shadow-[0_10px_26px_rgba(32,32,32,0.08)] sm:px-8 lg:px-10"
    >
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">About Me</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] p-6 shadow-[0_8px_20px_rgba(30,30,30,0.05)]">
          <img
            src="https://i.postimg.cc/3J5Dvph9/preety-bs.jpg"
            alt="Boon Siew portrait"
            className="mx-auto h-32 w-32 rounded-full border border-zinc-500 object-cover"
          />
          <h2 className="mt-5 text-center text-3xl font-semibold text-zinc-900">Boon Siew</h2>
          <p className="mt-1 text-center text-sm font-medium tracking-wide text-zinc-600">
            Computer Science (Cybersecurity) Student | Student who loves UI/UX & Web Development
          </p>

          <div className="mt-6 space-y-3 text-sm text-zinc-700">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-zinc-600" />
              +60 16-327 6586
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-zinc-600" />
              fboonsiew@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-zinc-600" />
              selangor, Malaysia
            </p>
          </div>
        </aside>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Block icon={GraduationCap} title="EDUCATION">
            <p className="text-sm font-semibold text-zinc-800">SEGi University, Kota Damansara</p>
            <p className="mt-1 text-sm text-zinc-600">
              Bachelor of Computer Science (Hons) in Cybersecurity
            </p>
            <p className="mt-1 text-sm text-zinc-600">Sep 2023 - Sep 2026</p>
            <p className="mt-1 text-sm text-zinc-600">CGPA: 3.59</p>

            <p className="mt-3 text-sm font-semibold text-zinc-800">SEGi University Kota Damansara</p>
            <p className="mt-1 text-sm text-zinc-600">Foundation in Arts</p>
            <p className="mt-1 text-sm text-zinc-600">2022 - 2023</p>

            <p className="mt-3 text-sm font-semibold text-zinc-800">SMK Bandar Baru Sentul</p>
            <p className="mt-1 text-sm text-zinc-600">Secondary School</p>
            <p className="mt-1 text-sm text-zinc-600">2017 - 2021</p>

            <p className="mt-3 text-sm font-semibold text-zinc-800">SJKC Kelpin, Seremban</p>
            <p className="mt-1 text-sm text-zinc-600">Primary School</p>
            <p className="mt-1 text-sm text-zinc-600">2011 - 2016</p>
          </Block>

          <Block icon={BriefcaseBusiness} title="EXPERIENCE">
            <p className="text-sm font-semibold text-zinc-800">Community Service Volunteer</p>
            <p className="mt-1 text-sm text-zinc-600">
              Participated in community outreach and volunteer programs.
            </p>
            <p className="mt-3 text-sm font-semibold text-zinc-800">
              SEGi Entrepreneurship Business Club
            </p>
            <p className="mt-1 text-sm text-zinc-600">Committee Member (Media &amp; Marketing)</p>
            <p className="mt-1 text-sm text-zinc-600">- Created promotional content</p>
            <p className="mt-1 text-sm text-zinc-600">- Managed social media</p>
            <p className="mt-1 text-sm text-zinc-600">
              - Supported event marketing
            </p>
          </Block>

          <Block icon={Languages} title="LANGUAGES">
            <div className="space-y-4">
              <LanguageRow label="English (Intermediate)" width="65%" />
              <LanguageRow label="Malay (Intermediate)" width="65%" />
              <LanguageRow label="Chinese (Intermediate)" width="65%" />
            </div>
          </Block>

          <Block icon={Brush} title="SKILLS / TOOLS">
            <div className="flex flex-wrap gap-2">
              <SkillTag label="Figma" />
              <SkillTag label="WordPress" />
              <SkillTag label="HTML / CSS" />
              <SkillTag label="Tailwind CSS" />
              <SkillTag label="React (Basic)" />
              <SkillTag label="Android Studio" />
              <SkillTag label="VS Code" />
            </div>
          </Block>

          <div className="md:col-span-2">
            <Block icon={Lightbulb} title="INTERESTS & LEARNING">
              <div className="flex flex-wrap gap-2.5">
                <SkillTag label="UI/UX Design" />
                <SkillTag label="Web Development" />
                <SkillTag label="Responsive Design" />
                <SkillTag label="Mobile App UI Design" />
                <SkillTag label="Cybersecurity" />
                <SkillTag label="Machine Learning" />
              </div>
            </Block>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
