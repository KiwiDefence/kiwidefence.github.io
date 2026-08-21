export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  modified: string
  readingTime: string
  keywords: string[]
  sections: PostBlock[]
}

export const author = {
  name: 'Petre Radu-Catalin',
  url: 'https://petreraducatalin.com',
}

export const posts: BlogPost[] = [
  {
    slug: 'how-automated-penetration-testing-reduces-risk-by-60',
    title: 'How Automated Penetration Testing Reduces Risk by 60%',
    description:
      'Automated penetration testing cuts exploitable attack surface by shrinking detection windows, catching regressions, and prioritising what attackers actually use. Here is where the 60% comes from.',
    date: '2026-07-02',
    modified: '2026-08-10',
    readingTime: '7 min read',
    keywords: [
      'automated penetration testing',
      'risk reduction',
      'offensive security services',
      'MITRE ATT&CK assessment',
      'OWASP penetration testing',
    ],
    sections: [
      {
        type: 'p',
        text: 'Every security leader eventually asks the same question about automated penetration testing: what is it actually worth? Not in feature checklists or dashboard screenshots, but in measurably lower risk. When we scope and run continuous offensive assessments for clients, we track one number above all others — how much exploitable attack surface disappears after the first two quarters of testing. Across engagements, that number lands around 60%. This article breaks down exactly where that reduction comes from, so you can pressure-test the claim against your own environment.',
      },
      {
        type: 'h2',
        text: 'What "60% risk reduction" actually means',
      },
      {
        type: 'p',
        text: 'Risk is the product of likelihood and impact. You cannot change how attractive your industry is to attackers, but you can change two things: how long a vulnerability stays open, and how many viable paths an attacker has from the internet to your critical data. Automated penetration testing attacks both variables at once. It finds the same classes of flaws a manual tester would — broken access control, injection, misconfigured identity flows — but it finds them every week instead of once a year, and it re-tests them after every fix.',
      },
      {
        type: 'p',
        text: 'The 60% figure is not a magic constant. It is the compound effect of shorter exposure windows, regression coverage, and prioritisation that removes the small subset of findings attackers genuinely exploit. If your current programme is a single annual test followed by months of untracked remediation, your realistic reduction potential is even higher.',
      },
      {
        type: 'h2',
        text: 'Five mechanisms behind the reduction',
      },
      {
        type: 'h3',
        text: '1. Continuous coverage shrinks the exposure window',
      },
      {
        type: 'p',
        text: 'A vulnerability discovered in January by an annual test sits open for an average of six months before anyone looks again. Run assessments weekly and the average exposure window collapses to days. Since most breaches exploit issues that were discoverable in advance, cutting the window from months to days removes the majority of opportunistic attack opportunities before they mature.',
      },
      {
        type: 'h3',
        text: '2. Regression testing keeps fixes fixed',
      },
      {
        type: 'p',
        text: 'The dirty secret of traditional pentesting is that fixes decay. A patched endpoint regresses during a framework upgrade; a hardened CORS policy gets loosened "temporarily" during integration work. Automated penetration testing re-validates every historical finding on every run, so a regression surfaces within days — with evidence attached — instead of at next year\u2019s engagement.',
      },
      {
        type: 'h3',
        text: '3. Prioritisation targets what attackers actually use',
      },
      {
        type: 'p',
        text: 'Raw scanner output buries teams in thousands of low-value findings. Effective automated penetration testing validates exploitability before a human ever sees it, then maps each confirmed finding to MITRE ATT&CK techniques and OWASP categories. The result is a short list ordered by real-world impact. Teams stop drowning in noise and clear the dangerous 5% that drives nearly all incident risk.',
      },
      {
        type: 'h3',
        text: '4. Methodology consistency beats heroics',
      },
      {
        type: 'p',
        text: 'Manual tests vary with whoever runs them. Automation executes the same playbook — reconnaissance, authentication abuse, business-logic probes, privilege escalation — on every asset, every cycle. Coverage becomes provable rather than assumed, which also simplifies NIST CSF and ISO 27001 evidence collection when auditors ask how controls are verified.',
      },
      {
        type: 'h3',
        text: '5. Engineer-ready reports shorten remediation time',
      },
      {
        type: 'p',
        text: 'Risk falls only when things get fixed. Reports written for developers — reproduction steps, affected code paths, severity rationale, suggested fixes — cut mean-time-to-remediate dramatically compared to hundred-page PDFs. In our experience, remediation velocity improves more from report quality than from any scanning feature.',
      },
      {
        type: 'h2',
        text: 'Where automation stops and humans start',
      },
      {
        type: 'p',
        text: 'Automated penetration testing is not a replacement for expert red-teaming. Multi-stage intrusion chains, novel business-logic abuse, and social engineering still require creative human operators. The right model is layered: automation provides continuous breadth and regression coverage across everything you own, while periodic deep-dive engagements by offensive specialists probe the complex chains automation cannot yet reach. Organisations that combine both consistently outperform those that rely on either alone.',
      },
      {
        type: 'h2',
        text: 'How to capture the reduction in your organisation',
      },
      {
        type: 'ul',
        items: [
          'Baseline first: run a full assessment and count exploitable, externally reachable findings — that numerator is what you will drive down.',
          'Test on a schedule, not on a milestone: weekly or monthly cycles aligned to your release cadence.',
          'Demand validation: every finding should include reproduction evidence, not a theoretical CVSS score.',
          'Track time-to-fix per finding class and review it monthly with engineering leadership.',
          'Re-test after every remediation and treat reopened findings as process failures worth investigating.',
        ],
      },
      {
        type: 'p',
        text: 'Do this for two quarters and measure the same baseline again. That measurement — not a vendor slide — is what tells you whether your offensive security programme is working. If you want a second opinion on your starting point, our team offers a free initial security assessment and will happily benchmark your exposure against what we typically see.',
      },
    ],
  },
  {
    slug: 'nist-vs-mitre-attck-which-framework-fits-your-organisation',
    title: 'NIST vs MITRE ATT&CK: Which Framework Fits Your Organisation?',
    description:
      'NIST CSF tells you what good security governance looks like; MITRE ATT&CK tells you how attackers actually operate. Here is how to choose — and why mature programmes use both.',
    date: '2026-07-18',
    modified: '2026-08-05',
    readingTime: '6 min read',
    keywords: [
      'NIST compliance Romania',
      'MITRE ATT&CK assessment',
      'security frameworks',
      'cybersecurity consulting Brașov',
    ],
    sections: [
      {
        type: 'p',
        text: 'Boards ask for "framework alignment" the way they ask for insurance: nobody wants to read the policy, everyone wants the protection. Two names dominate the conversation — NIST Cybersecurity Framework and MITRE ATT&CK — and they are constantly confused. They are not competitors. One is a governance structure for organising controls; the other is a behavioural map of real adversaries. Choosing wrong wastes budget; combining them correctly compounds value. This guide gives you a decision path you can defend in front of a board.',
      },
      {
        type: 'h2',
        text: 'What NIST CSF gives you',
      },
      {
        type: 'p',
        text: 'The NIST CSF organises security outcomes into six functions — Govern, Identify, Protect, Detect, Respond, Recover. Its strength is communication: it gives CISOs a shared vocabulary with auditors, regulators, and insurers. If your driver is compliance pressure, customer questionnaires, or NIS2-adjacent obligations in the EU, NIST gives you a defensible structure for proving diligence. What it deliberately does not tell you is which specific adversary behaviours to expect or how to test against them.',
      },
      {
        type: 'h2',
        text: 'What MITRE ATT&CK gives you',
      },
      {
        type: 'p',
        text: 'MITRE ATT&CK is an empirically derived catalogue of attacker tactics and techniques observed in real intrusions. It answers operational questions: which techniques are plausible against our stack, do our detections fire on them, and can our penetration tests emulate them? If your driver is improving detection engineering, threat hunting, or making offensive testing realistic, ATT&CK is the tool. It says nothing about governance, asset management, or recovery planning.',
      },
      {
        type: 'h2',
        text: 'A decision path in four questions',
      },
      {
        type: 'ul',
        items: [
          'Is your primary driver regulatory or contractual assurance? Start with NIST CSF as the umbrella.',
          'Are you building or maturing detection and response capability? Adopt ATT&CK for technique-level coverage mapping.',
          'Do you run penetration tests or purple-team exercises? Require findings mapped to ATT&CK techniques so results are comparable over time.',
          'Do you need both? Almost every organisation past 50 employees eventually does — NIST for the "what", ATT&CK for the "how".',
        ],
      },
      {
        type: 'h2',
        text: 'How we combine them in practice',
      },
      {
        type: 'p',
        text: 'Our assessments use NIST CSF as the reporting skeleton so executives see programme-level gaps in familiar language, while every technical finding carries MITRE ATT&CK technique mappings and OWASP references so engineers get actionable detail. Web and API testing follows OWASP standards end to end. This dual mapping is what turns a pile of vulnerabilities into a roadmap: executives fund the NIST gaps, engineers burn down the ATT&CK techniques, and both sides finally read the same report.',
      },
      {
        type: 'h2',
        text: 'The bottom line',
      },
      {
        type: 'p',
        text: 'If you must pick one starting framework: regulated enterprises and organisations selling into enterprise customers start with NIST CSF; security-mature teams building detection and offensive capability start with ATT&CK. Plan to converge on both within eighteen months. And whichever you choose, insist that any assessment you buy produces evidence mapped to the framework — otherwise alignment exists only on paper.',
      },
    ],
  },
  {
    slug: 'hidden-cost-of-iam-misconfigurations-in-enterprise-cloud',
    title: 'The Hidden Cost of IAM Misconfigurations in Enterprise Cloud',
    description:
      'Over-privileged identities, stale tokens, and OIDC misconfigurations are the quiet drivers of cloud breaches. Here is what IAM sprawl really costs — and how to audit your way out.',
    date: '2026-08-05',
    modified: '2026-08-12',
    readingTime: '6 min read',
    keywords: [
      'IAM security services',
      'cloud IAM misconfigurations',
      'identity access management',
      'Keycloak security',
      'OIDC misconfiguration',
    ],
    sections: [
      {
        type: 'p',
        text: 'Firewalls stopped being the perimeter years ago. Identity is the new control plane — and in most enterprise clouds it is quietly misconfigured at scale. Over-privileged service accounts, OAuth applications nobody remembers approving, MFA bypasses hidden in OIDC flows: none of these trigger alerts, all of them appear in breach reports. The cost of IAM misconfiguration is not the finding itself; it is everything that becomes possible once an attacker holds a legitimate identity.',
      },
      {
        type: 'h2',
        text: 'Where the money actually leaks',
      },
      {
        type: 'h3',
        text: 'Privilege sprawl multiplies blast radius',
      },
      {
        type: 'p',
        text: 'In typical enterprise tenants we assess, a large share of active identities hold permissions far beyond their current function — inherited from projects that ended years ago. Each over-privileged account converts a low-value phishing target into a potential domain-wide compromise. The direct cost shows up later: forensic investigation, downtime, and notification obligations that dwarf the price of a quarterly entitlement review.',
      },
      {
        type: 'h3',
        text: 'Token and session hygiene erodes MFA',
      },
      {
        type: 'p',
        text: 'Organisations invest in MFA and then silently undo it: refresh tokens that never expire, session lifetimes measured in weeks, and SSO integrations that skip step-up authentication for sensitive operations. Attackers increasingly do not break authentication — they borrow it. Long-lived valid tokens turn a single endpoint compromise into persistent access that survives password resets.',
      },
      {
        type: 'h3',
        text: 'Misconfigured federation creates silent trust',
      },
      {
        type: 'p',
        text: 'OIDC and SAML misconfigurations are uniquely dangerous because they look healthy. Overly permissive redirect URIs, skipped signature validation, and audience confusion between environments can let an attacker mint tokens for systems they were never meant to touch. We routinely find these in Keycloak deployments and custom SSO integrations during IAM posture reviews — configurations that passed functional testing precisely because they were too permissive.',
      },
      {
        type: 'h2',
        text: 'The compounding compliance bill',
      },
      {
        type: 'p',
        text: 'Auditors have noticed. ISO 27001, SOC 2, NIS2, and NIST-aligned assessments all drill into access governance, and undocumented entitlements translate directly into findings, exceptions, and delayed sign-offs. Every quarter of deferred IAM cleanup makes the eventual project larger, because entitlement debt compounds exactly like technical debt — silently, and with interest.',
      },
      {
        type: 'h2',
        text: 'An audit path that fits in one quarter',
      },
      {
        type: 'ul',
        items: [
          'Inventory every identity and integration with access to production — human and machine.',
          'Right-size permissions against actual usage logs, not job titles.',
          'Enforce token lifetimes and step-up authentication for privileged operations.',
          'Validate federation configuration against OIDC/SAML best practices, including redirect and audience checks.',
          'Re-test quarterly and after every major integration — IAM drifts the moment you stop watching.',
        ],
      },
      {
        type: 'p',
        text: 'None of this requires replacing your identity provider. It requires treating identity posture as a continuously tested control rather than a setup task. Our IAM security services do exactly that: posture assessment, hardening, and audit-ready reporting for Keycloak, OIDC, SAML, and enterprise cloud estates. If you suspect your identity layer would not survive a focused review, that instinct is usually correct — and cheap to verify.',
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
