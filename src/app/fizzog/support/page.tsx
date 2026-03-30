"use client";

import Link from "next/link";
import BackButton from "@/components/BackButton";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  User,
  Building2,
  Camera,
  Video,
  FileText,
  CheckCircle,
  Eye,
  Heart,
  Bell,
  Unlock,
  ArrowRight,
} from "lucide-react";

// ── FAQ Accordion Item ──────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string | React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-sm sm:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#f5a623] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm text-white/60 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

// ── Shortlist Flow Step ─────────────────────────────────────────────────────

function FlowStep({
  icon: Icon,
  step,
  title,
  desc,
  last,
}: {
  icon: React.ElementType;
  step: string;
  title: string;
  desc: string;
  last?: boolean;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-2xl bg-[#f5a623]/15 border border-[#f5a623]/30 flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-[#f5a623]" />
        </div>
        {!last && <div className="w-px flex-1 bg-white/10 mt-2" />}
      </div>
      <div className={`pb-8 ${last ? "" : ""}`}>
        <p className="text-xs text-[#f5a623] font-bold uppercase tracking-widest mb-1">{step}</p>
        <p className="font-bold mb-1">{title}</p>
        <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function FizzogSupportPage() {
  const [activeTab, setActiveTab] = useState<"candidate" | "employer">("candidate");

  const candidateFaqs = [
    // Account setup
    {
      section: "Setting Up Your Account",
      items: [
        {
          q: "How do I create a Fizzog account?",
          a: "Open the app and tap 'Get Started'. Select 'Candidate' from the dropdown, enter your email address and create a password (minimum 8 characters, must include uppercase, lowercase and a number). Tap 'Create Account', accept the usage policy, and your account is ready.",
        },
        {
          q: "What information do I need to complete my profile?",
          a: "Your profile includes: Full Name, Job Title, Industry, Province, Years of Experience, Age Range, Qualification level, Contract Type preference, and a Pro Summary (up to 40 words). A complete profile significantly increases your chances of being discovered.",
        },
        {
          q: "Is Fizzog free for candidates?",
          a: "Yes. Fizzog is completely free for candidates. You can create your profile, upload your photo, record your ProPitch video, and upload your CV at no cost.",
        },
        {
          q: "Can I change my role from Candidate to Employer?",
          a: "No. Your role is set at registration. If you need an Employer account, please create a separate account using a company email address.",
        },
      ],
    },
    // Photo
    {
      section: "Uploading Your Profile Photo",
      items: [
        {
          q: "How do I add my profile photo?",
          a: "From your home screen tap the photo area or navigate to the 'Photo' tab at the bottom. You can take a new photo with your camera, choose one from your gallery, or upload from cloud storage. Supported formats: JPG, PNG, HEIC. Maximum size: 10MB. Recommended ratio: 4:5.",
        },
        {
          q: "What makes a good profile photo?",
          a: "Use a clear, professional headshot with good lighting. A plain or blurred background works best. Face the camera directly and dress as you would for a professional meeting. Avoid group photos, sunglasses, or cropped images.",
        },
        {
          q: "What is the Enhance Photo feature?",
          a: "The Enhance Photo feature uses AI to improve lighting, sharpness and overall quality of your uploaded image. It's optional but recommended for the best first impression.",
        },
      ],
    },
    // ProPitch
    {
      section: "Recording Your ProPitch Video",
      items: [
        {
          q: "What is a ProPitch video?",
          a: "A ProPitch is your 45-second video introduction. It's your chance to show your personality, communication skills, and professionalism — things a written profile simply cannot convey. Organisations can watch your ProPitch before deciding to view your CV.",
        },
        {
          q: "How do I upload my ProPitch?",
          a: "Tap the 'Pitch' tab at the bottom of your home screen. Select your video file (MP4, MOV or M4V), or record directly. Maximum duration: 45 seconds. Maximum file size: 25MB. Recommended ratio: 9:16 (portrait).",
        },
        {
          q: "What should I say in my ProPitch?",
          a: "Keep it professional and natural. Introduce yourself, mention your current role and industry, highlight your key strength or achievement, and close with what kind of opportunity you are open to. Speak clearly, make eye contact with the camera, and keep it under 45 seconds.",
        },
        {
          q: "Can organisations watch my ProPitch without unlocking my CV?",
          a: "Yes. Your ProPitch video is visible to organisations when they discover your profile. They only need to pay to unlock your full CV — your video and summary are always visible.",
        },
      ],
    },
    // CV
    {
      section: "Uploading Your CV",
      items: [
        {
          q: "How do I upload my CV?",
          a: "Tap the 'CV' tab at the bottom of your home screen. Select your file in PDF, DOC or DOCX format (maximum 2MB) and upload it. Your CV is only accessible to organisations that choose to unlock it — it is never publicly visible.",
        },
        {
          q: "What is the Enhance CV feature?",
          a: "The Enhance CV feature uses AI to improve your CV's structure, language and presentation. It is optional and does not alter your core information — it simply helps your CV make a stronger impression.",
        },
        {
          q: "Who can see my CV?",
          a: "Only employers who specifically choose to unlock your CV can view it. This is a paid action — your CV is protected and never freely accessible.",
        },
      ],
    },
    // Publishing
    {
      section: "Publishing Your Profile",
      items: [
        {
          q: "How do I publish my profile so I can be discovered?",
          a: "Once your profile is complete, tap 'Update Profile' to save your information. Your profile is then visible to organisations actively searching for talent. You will see a 'Congratulations — your profile is now live' screen confirming you are discoverable.",
        },
        {
          q: "Does my profile need to be 100% complete to go live?",
          a: "Your profile can go live with basic information, but a fully completed profile — including photo, ProPitch video and CV — significantly increases the likelihood of being shortlisted. Profiles with all three elements receive priority in discovery results.",
        },
        {
          q: "Can I hide my profile temporarily?",
          a: "Yes. You can unpublish your profile at any time from your profile settings. This removes you from discovery results without deleting your account or any of your uploaded content.",
        },
        {
          q: "What is Boost Profile?",
          a: "Boost Profile is a paid feature that elevates your profile to the top of discovery results for 30 days. Boosted profiles appear first when organisations search for talent matching your skills and location.",
        },
      ],
    },
  ];

  const employerFaqs = [
    {
      section: "Setting Up Your Account",
      items: [
        {
          q: "How do I create an Employer account?",
          a: "Open the app and tap 'Get Started'. Select 'Employer' from the dropdown. You must register with a company email address — free providers such as Gmail, Yahoo, Hotmail and Outlook are not accepted. Complete email verification before you can sign in.",
        },
        {
          q: "Why can't I use a Gmail or Yahoo address?",
          a: "Fizzog requires employers to register with a verified company email address. This is a security measure to ensure candidates are only discovered by legitimate organisations.",
        },
        {
          q: "How do I complete my company profile?",
          a: "After signing in, navigate to 'Profile'. Upload your company logo, add a Company Summary (up to 80 words), your Company Name, Industry, Province, and website URL. Tap 'Update Profile' to save.",
        },
      ],
    },
    {
      section: "Creating Shortlists",
      items: [
        {
          q: "What is a Shortlist?",
          a: "A Shortlist is a role you are actively looking to fill. Each shortlist has a Job Title, Department, Salary range, Contract Type, and a Job Description. You can create multiple shortlists for different roles simultaneously.",
        },
        {
          q: "How do I create a Shortlist?",
          a: "From your home screen, tap the '+' (Discover) tab. You will be prompted to create a shortlist file. Fill in the role details and tap 'Create File'. This shortlist is now ready to receive discovered candidates.",
        },
        {
          q: "How many shortlists can I have active at once?",
          a: "There is no limit on the number of active shortlists. You can run multiple searches for different roles at the same time.",
        },
      ],
    },
    {
      section: "Discovering Talent",
      items: [
        {
          q: "How does the Discover feature work?",
          a: "Tap the Discover tab and describe your ideal candidate in plain language — for example, 'seeking a qualified graduate with 8+ years experience in hotels for a fulltime contract in Pretoria'. Fizzog's AI will surface the most relevant candidate profiles matching your description.",
        },
        {
          q: "What can I see before unlocking a CV?",
          a: "You can view the candidate's full profile — name, title, industry, province, pro summary, star rating, and their ProPitch video. You only pay to unlock the full CV.",
        },
        {
          q: "How do I unlock a candidate's CV?",
          a: "When viewing a candidate profile, tap 'Unlock CV'. This is a once-off payment per candidate. Once unlocked, you have ongoing access to their CV within your shortlist.",
        },
        {
          q: "What does the star rating mean?",
          a: "The star rating reflects a candidate's profile completeness — 1 star (basic info), 2 stars (photo added), 3 stars (ProPitch video and CV uploaded). A 3-star profile gives you the most complete picture of a candidate.",
        },
      ],
    },
    {
      section: "Managing Your Shortlists",
      items: [
        {
          q: "How do I add a candidate to my shortlist?",
          a: "While viewing a discovered candidate, tap the heart icon to shortlist them. They are added to the relevant shortlist file on your home screen.",
        },
        {
          q: "Can candidates see that they have been shortlisted?",
          a: "Candidates can see that their profile has been viewed and that activity is occurring on their profile — but they are not told which specific organisation has shortlisted them.",
        },
        {
          q: "How do I contact a candidate?",
          a: "Once you have unlocked a candidate's CV, their contact details are available. You can then reach out directly via email or phone — there is no in-app messaging system.",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#0a1220] text-white min-h-screen">

      {/* ── HEADER ── */}
      <div className="relative border-b border-white/5 pb-16 pt-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#f5a623]/8 rounded-full blur-[80px] -z-0" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-8"><BackButton /></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0">
              <Image src="/Fizzog.png" alt="Fizzog" width={56} height={56} className="object-contain p-1 w-full h-full" />
            </div>
            <div>
              <h1 className="text-3xl font-black">Support Centre</h1>
              <p className="text-white/50 mt-1">Everything you need to get the most out of Fizzog.</p>
            </div>
          </div>

          {/* Tab Toggle */}
          <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1 gap-1">
            <button
              onClick={() => setActiveTab("candidate")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
                activeTab === "candidate"
                  ? "bg-[#f5a623] text-[#0a1220]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <User size={15} />
              Candidates
            </button>
            <button
              onClick={() => setActiveTab("employer")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
                activeTab === "employer"
                  ? "bg-[#f5a623] text-[#0a1220]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Building2 size={15} />
              Organisations
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* ── CANDIDATE FAQs ── */}
        {activeTab === "candidate" && (
          <div className="space-y-14">
            {candidateFaqs.map((section) => (
              <div key={section.section}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-[#f5a623] rounded-full" />
                  <h2 className="text-lg font-black text-[#f5a623]">{section.section}</h2>
                </div>
                <div>
                  {section.items.map((faq) => (
                    <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}

            {/* ── SHORTLIST FLOW ── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-[#f5a623] rounded-full" />
                <h2 className="text-lg font-black text-[#f5a623]">What Happens When You're Shortlisted?</h2>
              </div>
              <p className="text-white/50 text-sm mb-10">
                Understanding the journey from discovery to opportunity.
              </p>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
                <FlowStep
                  icon={Eye}
                  step="Step 1"
                  title="Your Profile is Discovered"
                  desc="An organisation uses Fizzog's AI-powered discovery and your profile appears in their results. They can see your photo, pro summary, star rating and watch your ProPitch video — all before making any decision."
                />
                <FlowStep
                  icon={Heart}
                  step="Step 2"
                  title="You're Added to a Shortlist"
                  desc="The organisation taps the heart icon on your profile. You are added to one of their active shortlist files — for example, 'Finance Manager' or 'Executive Chef'. You can see increased activity on your profile stats."
                />
                <FlowStep
                  icon={Unlock}
                  step="Step 3"
                  title="Your CV is Unlocked"
                  desc="If the organisation decides you are a strong match, they pay to unlock your CV. Your full professional credentials, experience and contact details are now visible to them. Your CV remains protected from everyone else."
                />
                <FlowStep
                  icon={Bell}
                  step="Step 4"
                  title="You Receive Notification Activity"
                  desc="Fizzog shows you profile view counts and shortlist engagement in your stats. You will know your profile is gaining traction — even before any direct contact is made."
                />
                <FlowStep
                  icon={CheckCircle}
                  step="Step 5"
                  title="Direct Contact"
                  desc="The organisation reaches out to you directly using the contact details from your unlocked CV — by email or phone. No middleman. No automated messages. A real conversation with the right person."
                  last
                />
              </div>

              <div className="mt-6 p-5 rounded-xl bg-[#f5a623]/5 border border-[#f5a623]/20">
                <p className="text-sm text-white/70 leading-relaxed">
                  <span className="text-[#f5a623] font-bold">Pro Tip:</span> Profiles with a ProPitch video, professional photo, and uploaded CV are 3× more likely to be shortlisted. Keep your profile complete and your Boost active for maximum visibility.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── EMPLOYER FAQs ── */}
        {activeTab === "employer" && (
          <div className="space-y-14">
            {employerFaqs.map((section) => (
              <div key={section.section}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-[#f5a623] rounded-full" />
                  <h2 className="text-lg font-black text-[#f5a623]">{section.section}</h2>
                </div>
                <div>
                  {section.items.map((faq) => (
                    <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── STILL NEED HELP ── */}
        <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold mb-1">Still need help?</p>
            <p className="text-sm text-white/50">Our support team is ready to assist you.</p>
          </div>
          <a
            href="mailto:support@tenbucks-mobile.co.za"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f5a623] text-[#0a1220] font-bold text-sm hover:bg-[#e8962a] transition flex-shrink-0"
          >
            Email Support <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
