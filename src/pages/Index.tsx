import { useState } from "react";

const PAGES = [
  { title: "Before the Storm", url: "/before/", tags: "prepare supplies checklist evacuation shutters generator insurance planning kit water food radio batteries documents cash" },
  { title: "During the Storm", url: "/during/", tags: "shelter surge warning watch flood wind generator carbon monoxide eye wall safety rip currents forecast cone tropical" },
  { title: "After the Storm", url: "/after/", tags: "cleanup mold food safety water boil debris scam contractor damage insurance all-clear neighbors elderly" },
  { title: "Emergency Contacts", url: "/contacts/", tags: "phone call hospital police fire basra drm ambulance 911 919 utilities bpl water btc crisis centre" },
  { title: "Hurricane Shelter List", url: "/shelters/", tags: "shelter abaco andros nassau grand bahama exuma eleuthera bimini cat island long island inagua capacity 2025" },
  { title: "Printable Checklist", url: "/checklist/", tags: "print checklist water food medical documents tools communication home prep pets supplies" },
  { title: "Supply Kit Guide", url: "/supply-kit/", tags: "supplies go bag water food flashlight radio batteries medications documents cash first aid kit pack" },
  { title: "Family Emergency Plan", url: "/family-plan/", tags: "family plan evacuation contacts shelter room drills practice household emergency" },
  { title: "First Aid & Medications", url: "/first-aid/", tags: "first aid wound cut infection carbon monoxide CO poisoning dehydration heat stroke heat exhaustion medication insulin 919" },
  { title: "Mental Health Support", url: "#", tags: "mental health stress anxiety grief counselling wellbeing crisis support post-disaster" },
  { title: "Generator Safety", url: "/during/", tags: "generator carbon monoxide CO danger indoor safety" },
  { title: "Food Safety After Storm", url: "/after/", tags: "refrigerator food 4 hours power outage discard spoiled" },
  { title: "Boil Water Advisory", url: "/after/", tags: "boil water advisory tap water safe drinking" },
  { title: "Mold Prevention", url: "/after/", tags: "mold mildew cleanup dry bleach ventilate" },
  { title: "Contractor Scams", url: "/after/", tags: "scam contractor fraud price gouging unlicensed" },
];

type Tab = "before" | "during" | "after";

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: "hsl(var(--primary))",
  margin: "0.75rem 0 0.5rem",
};

const warnBoxStyle: React.CSSProperties = {
  background: "hsl(38 90% 40% / 0.12)",
  border: "1px solid hsl(38 90% 50% / 0.35)",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  lineHeight: 1.55,
  color: "hsl(var(--foreground))",
};

const infoBoxStyle: React.CSSProperties = {
  background: "hsl(var(--primary) / 0.10)",
  border: "1px solid hsl(var(--primary) / 0.30)",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  lineHeight: 1.55,
  color: "hsl(var(--foreground))",
};

const stepListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
};

const stepItemStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  lineHeight: 1.5,
  color: "hsl(var(--foreground))",
  paddingLeft: "1rem",
  position: "relative",
};

function StepList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={stepListStyle}>
      {items.map((item, i) => (
        <li key={i} style={stepItemStyle}>
          <span style={{ position: "absolute", left: 0, color: "hsl(var(--primary))" }}>›</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function GuideLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        marginTop: "1rem",
        fontSize: "0.9rem",
        fontWeight: 600,
        color: "hsl(var(--primary))",
        textDecoration: "none",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
      {label}
    </a>
  );
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("before");
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showMentalHealth, setShowMentalHealth] = useState(false);

  const results = query.trim().length >= 2
    ? PAGES.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.includes(query.toLowerCase())
      )
    : [];

  const cardStyle: React.CSSProperties = {
    background: "hsl(var(--card))",
    border: "1px solid hsl(var(--border))",
    borderRadius: "0.75rem",
    boxShadow: "var(--shadow-card)",
  };

  return (
    <div style={{ maxWidth: "32rem", margin: "0 auto", padding: "1.5rem 1rem 2rem" }}>

      {/* Header */}
      <header style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
        <div style={{
          width: "3rem", height: "3rem",
          background: "hsl(var(--primary) / 0.15)",
          border: "1px solid hsl(var(--primary) / 0.30)",
          borderRadius: "0.75rem",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "var(--shadow-glow)",
        }}>
          <svg viewBox="0 0 48 48" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.75rem", height: "1.75rem" }}>
            <circle cx="24" cy="24" r="4" />
            <path d="M24 8a16 16 0 0 1 11.3 4.7" />
            <path d="M35.3 12.7A16 16 0 0 1 40 24" />
            <path d="M40 24a16 16 0 0 1-4.7 11.3" />
            <path d="M35.3 35.3A16 16 0 0 1 24 40" />
            <path d="M24 40a16 16 0 0 1-11.3-4.7" />
            <path d="M12.7 35.3A16 16 0 0 1 8 24" />
          </svg>
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.02em", color: "hsl(var(--foreground))" }}>CariPrep</h1>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "hsl(var(--muted-foreground))" }}>Offline Caribbean Hurricane Resource Hub</p>
        </div>
      </header>

      {/* Platform Description + Search */}
      <div style={{
        background: "hsl(var(--primary) / 0.06)",
        border: "1px solid hsl(var(--primary) / 0.18)",
        borderRadius: "0.75rem",
        padding: "1rem 1.25rem",
        marginBottom: "1.25rem",
      }}>
        <h2 style={{ margin: "0 0 0.75rem", fontSize: "0.9rem", fontWeight: 700, color: "hsl(var(--primary))" }}>Welcome to CariPrep</h2>
        <p style={{ margin: "0 0 0.6rem", fontSize: "0.875rem", lineHeight: 1.65, color: "hsl(var(--muted-foreground))" }}>
          CariPrep is an offline hurricane resource hub designed for the Caribbean. It provides clear, actionable safety information before, during, and after a storm — even when the internet is down.
        </p>
        <p style={{ margin: "0 0 0.85rem", fontSize: "0.875rem", lineHeight: 1.65, color: "hsl(var(--muted-foreground))" }}>
          Built to run on a small local device, CariPrep creates its own WiFi network so multiple phones, tablets, and laptops can connect at the same time. No data plan. No signal. No problem.
        </p>

        {/* Search — tucked inside the description card */}
        <div style={{ position: "relative" }}>
          <svg style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "1rem", height: "1rem", color: "hsl(var(--muted-foreground))", pointerEvents: "none" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Search topics, e.g. generator safety…"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowResults(true); }}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "0.6rem 0.75rem 0.6rem 2.4rem",
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              color: "hsl(var(--foreground))",
              fontSize: "0.875rem",
              outline: "none",
            }}
          />
          {showResults && results.length > 0 && (
            <div style={{
              position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50,
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.6rem",
              boxShadow: "var(--shadow-card)",
              overflow: "hidden",
            }}>
              {results.map(r => (
                <a key={r.url + r.title} href={r.url} style={{ display: "block", padding: "0.6rem 1rem", fontSize: "0.875rem", color: "hsl(var(--foreground))", textDecoration: "none", borderBottom: "1px solid hsl(var(--border))" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "hsl(var(--primary) / 0.10)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "")}>
                  {r.title}
                </a>
              ))}
            </div>
          )}
          {showResults && query.trim().length >= 2 && results.length === 0 && (
            <div style={{
              position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 50,
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.6rem",
              padding: "0.6rem 1rem",
              fontSize: "0.875rem",
              color: "hsl(var(--muted-foreground))",
            }}>No results found. Try: generator, shelter, mold, food safety</div>
          )}
        </div>
      </div>

      {/* Tabs Panel */}
      <div style={{ marginBottom: "1.25rem" }}>
        <p style={{ fontSize: "0.8125rem", color: "hsl(var(--muted-foreground))", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Preparedness Guides</p>
        {/* Tab bar */}
        <div role="tablist" style={{
          display: "flex",
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          borderBottom: "none",
          borderRadius: "0.75rem 0.75rem 0 0",
          overflow: "hidden",
        }}>
          {(["before", "during", "after"] as Tab[]).map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1, minHeight: "44px",
                background: "none", border: "none", borderBottom: activeTab === tab ? "2px solid hsl(var(--primary))" : "2px solid transparent",
                color: activeTab === tab ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                fontWeight: activeTab === tab ? 700 : 500,
                fontSize: "0.875rem",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "color 0.15s",
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Panel body */}
        <div style={{
          ...cardStyle,
          borderRadius: "0 0 0.75rem 0.75rem",
          padding: "1rem",
        }}>
          {activeTab === "before" && (
            <div>
              <div style={warnBoxStyle}>
                <strong>⚠ Know your evacuation zone BEFORE the storm hits</strong>
                <p style={{ margin: "0.35rem 0 0" }}>Don't wait for a warning. Find your zone now at NEMA.gov.bs and plan your route.</p>
              </div>
              <h3 style={sectionHeadingStyle}>Top Supplies</h3>
              <StepList items={[
                <><strong>Water:</strong> 1 gallon per person per day (2-week supply)</>,
                <><strong>Food:</strong> Non-perishable items for 2 weeks minimum</>,
                <><strong>Documents:</strong> IDs, insurance, medical records in waterproof bag</>,
                <><strong>Radio:</strong> Battery or hand-crank — your lifeline when power fails</>,
                <><strong>Medications:</strong> 30-day supply; keep a written list</>,
              ]} />
              <h3 style={sectionHeadingStyle}>Home Prep</h3>
              <StepList items={[
                "Install or close hurricane shutters; board up if needed",
                "Secure boats, outdoor furniture, and loose objects",
                "Review and photograph your insurance policy",
              ]} />
              <GuideLink href="/before/" label="View full Before the Storm guide" />
            </div>
          )}

          {activeTab === "during" && (
            <div>
              <div style={warnBoxStyle}>
                <strong>⚠ Storm surge is the #1 killer in hurricanes</strong>
                <p style={{ margin: "0.35rem 0 0" }}>A surge of just 2 feet of fast-moving water can knock you off your feet. Get to high ground early.</p>
              </div>
              <h3 style={sectionHeadingStyle}>Watch vs. Warning</h3>
              <StepList items={[
                <><strong>Hurricane Watch:</strong> Conditions possible within 48 hours — prepare now</>,
                <><strong>Hurricane Warning:</strong> Conditions expected within 36 hours — act immediately</>,
              ]} />
              <h3 style={sectionHeadingStyle}>Shelter-in-Place</h3>
              <StepList items={[
                "Go to an interior room away from windows",
                "Stay low; protect your head during the eyewall",
                "Do NOT go outside during the calm eye — the storm returns",
              ]} />
              <div style={{ ...warnBoxStyle, marginTop: "0.75rem" }}>
                <strong>🚫 Generator Safety</strong>
                <p style={{ margin: "0.35rem 0 0" }}>NEVER run a generator indoors or in a garage. Carbon monoxide kills silently. Keep it 20+ feet from windows.</p>
              </div>
              <GuideLink href="/during/" label="View full During the Storm guide" />
            </div>
          )}

          {activeTab === "after" && (
            <div>
              <div style={warnBoxStyle}>
                <strong>⚠ Wait for the official all-clear before going outside</strong>
                <p style={{ margin: "0.35rem 0 0" }}>Downed power lines, contaminated water, and unstable structures remain deadly after the storm passes.</p>
              </div>
              <h3 style={sectionHeadingStyle}>First Steps</h3>
              <StepList items={[
                "Check household members for injuries; call for help if needed",
                "Inspect for structural damage before re-entering your home",
                "Stay away from downed power lines — treat all as live",
                "Smell for gas; if detected, leave immediately and call BPL",
              ]} />
              <div style={{ ...infoBoxStyle, marginTop: "0.75rem" }}>
                <strong>🍽 Food Safety</strong>
                <p style={{ margin: "0.35rem 0 0" }}>Discard refrigerated food after 4 hours without power. "When in doubt, throw it out."</p>
              </div>
              <div style={{ ...warnBoxStyle, marginTop: "0.5rem" }}>
                <strong>🚨 Watch for Contractor Fraud</strong>
                <p style={{ margin: "0.35rem 0 0" }}>Unlicensed contractors often appear after disasters. Never pay upfront; verify licences at BERQ.bs.</p>
              </div>
              <GuideLink href="/after/" label="View full After the Storm guide" />
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.8125rem", color: "hsl(var(--muted-foreground))", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Quick Links</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
          {/* Emergency Contacts */}
          <a href="/contacts/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem 0.5rem", ...cardStyle, textDecoration: "none", textAlign: "center", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
            <span style={{ color: "hsl(var(--primary))" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" /></svg></span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.3 }}>Emergency Contacts</span>
          </a>

          {/* Shelter List */}
          <a href="/shelters/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem 0.5rem", ...cardStyle, textDecoration: "none", textAlign: "center", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
            <span style={{ color: "hsl(var(--primary))" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.3 }}>Shelter List</span>
          </a>

          {/* Printable Checklist */}
          <a href="/checklist/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem 0.5rem", ...cardStyle, textDecoration: "none", textAlign: "center", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
            <span style={{ color: "hsl(var(--primary))" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.3 }}>Printable Checklist</span>
          </a>

          {/* Supply Kit */}
          <a href="/supply-kit/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem 0.5rem", ...cardStyle, textDecoration: "none", textAlign: "center", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
            <span style={{ color: "hsl(var(--primary))" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.3 }}>Supply Kit</span>
          </a>

          {/* Family Plan */}
          <a href="/family-plan/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem 0.5rem", ...cardStyle, textDecoration: "none", textAlign: "center", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
            <span style={{ color: "hsl(var(--primary))" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.3 }}>Family Plan</span>
          </a>

          {/* First Aid & Medications */}
          <a href="/first-aid/" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem 0.5rem", ...cardStyle, textDecoration: "none", textAlign: "center", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
            <span style={{ color: "hsl(var(--primary))" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}><path d="M12 5v14M5 12h14" /></svg></span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.3 }}>First Aid &amp; Meds</span>
          </a>

          {/* Mental Health Support — Coming Soon (spans full width) */}
          <button
            onClick={() => setShowMentalHealth(true)}
            style={{
              gridColumn: "span 2",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: "0.4rem", padding: "0.75rem 0.5rem",
              ...cardStyle,
              background: cardStyle.background,
              cursor: "pointer",
              textAlign: "center",
              transition: "border-color 0.15s",
              width: "100%",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(var(--border))")}>
            <span style={{ color: "hsl(var(--primary))" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.3 }}>Mental Health Support <span style={{ color: "hsl(var(--muted-foreground))", fontWeight: 500 }}>(Coming Soon)</span></span>
          </button>
        </div>
      </div>

      {/* Mental Health Coming Soon Modal */}
      {showMentalHealth && (
        <div
          onClick={() => setShowMentalHealth(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "hsla(195, 50%, 4%, 0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.75rem",
              boxShadow: "var(--shadow-card)",
              padding: "1.5rem",
              maxWidth: "22rem",
              width: "100%",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowMentalHealth(false)}
              style={{
                position: "absolute", top: "0.75rem", right: "0.75rem",
                background: "none", border: "none", cursor: "pointer",
                color: "hsl(var(--muted-foreground))", fontSize: "1.125rem",
                lineHeight: 1, padding: "0.25rem",
              }}
              aria-label="Close"
            >✕</button>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
              <span style={{ color: "hsl(var(--primary))" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </span>
              <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "hsl(var(--foreground))" }}>Mental Health Support</h2>
            </div>

            <p style={{ margin: "0 0 0.5rem", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "hsl(var(--primary))" }}>Coming Soon</p>

            <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.65, color: "hsl(var(--muted-foreground))" }}>
              We are working with local health agencies to bring you crisis support contacts, stress management guides, and post-disaster wellbeing resources. This section will be available in a future update.
            </p>

            <button
              onClick={() => setShowMentalHealth(false)}
              style={{
                marginTop: "1.25rem",
                display: "block", width: "100%",
                padding: "0.6rem 1rem",
                background: "hsl(var(--primary) / 0.15)",
                border: "1px solid hsl(var(--primary) / 0.3)",
                borderRadius: "0.5rem",
                color: "hsl(var(--primary))",
                fontWeight: 600, fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >Got it</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ textAlign: "center", fontSize: "0.8rem", color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
        CariPrep works offline · Built for Caribbean hurricane resilience
        <br /><br />
        <span style={{ display: "block", maxWidth: "34rem", margin: "0 auto", fontSize: "0.75rem", color: "hsl(195 15% 45%)" }}>
          Content sourced from NOAA and Caribbean emergency management agencies.<br />
          CariPrep is an independent resource, not affiliated with or endorsed by these agencies.
        </span>
      </footer>

    </div>
  );
};

export default Index;
