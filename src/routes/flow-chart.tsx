import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import "./flow-chart.css";

const title = "IT Project Flowchart Pakistan | WebHelp Pakistan";
const description = "WebHelp Pakistan project flowchart showing discovery, proposal, approval, design, development, testing, launch, support, and improvement steps.";

export const Route = createFileRoute("/flow-chart")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }] }),
  component: FlowChartPage,
});

function FlowChartPage() {
  return (
    <div className="bg-[#03070e] min-h-screen text-[#e2eeff] pt-[120px] pb-[100px] px-5">
      <Reveal className="max-w-[1000px] mx-auto page">
        <div className="hdr">
<div className="chip"><span className="chip-dot"></span>webhelp.pk \xA0·\xA0 project flowchart</div>
<h1>Our IT Project <em>Flowchart</em></h1>
<p>A real decision-based flowchart showing exactly how a project moves through our process — including Yes/No branches, loops, and every decision point.</p>
</div>
{/* FLOWCHART */}
<div className="fc-wrap">
<svg className="fc-svg" fontFamily="'Plus Jakarta Sans', sans-serif" viewBox="0 0 860 2580" xmlns="http://www.w3.org/2000/svg">
<defs>
{/* Glow filter */}
<filter height="160%" id="glow" width="160%" x="-30%" y="-30%">
<feGaussianBlur result="blur" stdDeviation="4" />
<feComposite in="SourceGraphic" in2="blur" operator="over" />
</filter>
<filter height="180%" id="glow-strong" width="180%" x="-40%" y="-40%">
<feGaussianBlur result="blur" stdDeviation="8" />
<feComposite in="SourceGraphic" in2="blur" operator="over" />
</filter>
{/* Arrow markers */}
<marker id="arr-cyan" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
<polygon fill="rgba(0,212,255,.7)" points="0 0, 10 3.5, 0 7" />
</marker>
<marker id="arr-green" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
<polygon fill="rgba(16,185,129,.8)" points="0 0, 10 3.5, 0 7" />
</marker>
<marker id="arr-red" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
<polygon fill="rgba(239,68,68,.8)" points="0 0, 10 3.5, 0 7" />
</marker>
<marker id="arr-orange" markerHeight="7" markerWidth="10" orient="auto" refX="9" refY="3.5">
<polygon fill="rgba(245,158,11,.8)" points="0 0, 10 3.5, 0 7" />
</marker>
{/* Gradients */}
<linearGradient id="g-start" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#00d4ff" stopOpacity=".25" />
<stop offset="100%" stopColor="#1a8fd1" stopOpacity=".15" />
</linearGradient>
<linearGradient id="g-process" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#0b1928" stopOpacity="1" />
<stop offset="100%" stopColor="#07111d" stopOpacity="1" />
</linearGradient>
<linearGradient id="g-decision" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#1a0f2e" stopOpacity="1" />
<stop offset="100%" stopColor="#0f0820" stopOpacity="1" />
</linearGradient>
<linearGradient id="g-end" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#0a2018" stopOpacity="1" />
<stop offset="100%" stopColor="#051510" stopOpacity="1" />
</linearGradient>
{/* Animated line */}

</defs>
{/* ════════════════════════════════
       BACKGROUND GRID DOTS
  ════════════════════════════════ */}
<rect fill="#03070e" height="2580" width="860" />
{/* ════════════════════════════════
       1. START
  ════════════════════════════════ */}
{/* Oval START */}
<g className="node-box" filter="url(#glow)">
<ellipse cx="430" cy="60" fill="url(#g-start)" rx="110" ry="38" stroke="rgba(0,212,255,.7)" strokeWidth="1.5" />
<ellipse cx="430" cy="60" fill="none" rx="110" ry="38" stroke="rgba(0,212,255,.25)" strokeWidth="6" />
<text fill="#00d4ff" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" letter-spacing="3" textAnchor="middle" x="430" y="55">START</text>
<text fill="rgba(0,212,255,.6)" fontSize="10" textAnchor="middle" x="430" y="72">Client Arrives</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="98" y2="128" />
{/* ════════════════════════════════
       2. PROCESS: Initial Contact
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="74" rx="10" stroke="rgba(0,212,255,.3)" strokeWidth="1.5" width="320" x="270" y="130" />
<rect fill="#00d4ff" height="74" rx="2" width="4" x="270" y="130" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="158">Initial Contact</text>
<text fill="rgba(100,180,220,.6)" fontFamily="'Fira Code'" fontSize="10" x="298" y="176">Client reaches via web / call / email</text>
<text fill="rgba(100,180,220,.5)" fontFamily="'Fira Code'" fontSize="10" x="298" y="192">→ Assigned to Sales Consultant</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="204" y2="234" />
{/* ════════════════════════════════
       3. DECISION: Is project viable?
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow)">
{/* Diamond */}
<polygon fill="url(#g-decision)" points="430,238  570,295  430,352  290,295" stroke="rgba(167,139,250,.5)" strokeWidth="1.5" />
<polygon fill="none" points="430,238  570,295  430,352  290,295" stroke="rgba(167,139,250,.15)" strokeWidth="7" />
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="287">Is Project</text>
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="304">Viable?</text>
</g>
{/* YES arrow DOWN */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.7)" strokeWidth="1.5" x1="430" x2="430" y1="352" y2="382" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="442" y="372">YES</text>
{/* NO arrow RIGHT → leads off to "Politely Decline" */}
<line markerEnd="url(#arr-red)" stroke="rgba(239,68,68,.7)" strokeWidth="1.5" x1="570" x2="700" y1="295" y2="295" />
<text fill="#ef4444" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="608" y="287">NO</text>
{/* Decline box */}
<g className="node-box">
<rect fill="#1a0505" height="62" rx="10" stroke="rgba(239,68,68,.35)" strokeWidth="1.5" width="150" x="700" y="264" />
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="289">Politely</text>
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="305">Decline</text>
<text fill="rgba(239,68,68,.5)" fontFamily="'Fira Code'" fontSize="9" textAnchor="middle" x="775" y="320">+ suggest alternatives</text>
</g>
{/* ════════════════════════════════
       4. PROCESS: Requirement Gathering
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(167,139,250,.3)" strokeWidth="1.5" width="320" x="270" y="384" />
<rect fill="#a78bfa" height="80" rx="2" width="4" x="270" y="384" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="412">Requirement Gathering</text>
<text fill="rgba(167,139,250,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="430">Discovery call · Feature list</text>
<text fill="rgba(167,139,250,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="447">Budget · Timeline · Tech needs</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="464" y2="494" />
{/* ════════════════════════════════
       5. DECISION: Requirements clear?
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow)">
<polygon fill="url(#g-decision)" points="430,498  570,558  430,618  290,558" stroke="rgba(167,139,250,.5)" strokeWidth="1.5" />
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="550">Requirements</text>
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="567">Clear?</text>
</g>
{/* YES arrow DOWN */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.7)" strokeWidth="1.5" x1="430" x2="430" y1="618" y2="648" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="442" y="638">YES</text>
{/* NO → loop back LEFT to requirement gathering */}
<line stroke="rgba(245,158,11,.7)" strokeWidth="1.5" x1="290" x2="220" y1="558" y2="558" />
<line stroke="rgba(245,158,11,.7)" strokeWidth="1.5" x1="220" x2="220" y1="558" y2="424" />
<line markerEnd="url(#arr-orange)" stroke="rgba(245,158,11,.7)" strokeWidth="1.5" x1="220" x2="270" y1="424" y2="424" />
<text fill="#f59e0b" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="192" y="492">NO</text>
<text fill="rgba(245,158,11,.5)" fontFamily="'Fira Code'" fontSize="9" x="155" y="508">Re-gather</text>
{/* ════════════════════════════════
       6. PROCESS: Analysis & Planning
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(245,158,11,.3)" strokeWidth="1.5" width="320" x="270" y="650" />
<rect fill="#f59e0b" height="80" rx="2" width="4" x="270" y="650" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="678">Analysis &amp; Planning</text>
<text fill="rgba(245,158,11,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="696">Tech stack · Architecture · Risks</text>
<text fill="rgba(245,158,11,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="713">Timeline estimation · Team assign</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="730" y2="760" />
{/* ════════════════════════════════
       7. PROCESS: Proposal & SLA
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(0,212,255,.3)" strokeWidth="1.5" width="320" x="270" y="762" />
<rect fill="#00d4ff" height="80" rx="2" width="4" x="270" y="762" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="790">Proposal &amp; SLA Agreement</text>
<text fill="rgba(0,212,255,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="808">Scope · Pricing · Milestones · SLA</text>
<text fill="rgba(0,212,255,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="826">Send to client for review</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="842" y2="872" />
{/* ════════════════════════════════
       8. DECISION: Client Approves?
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow)">
<polygon fill="url(#g-decision)" points="430,876  570,936  430,996  290,936" stroke="rgba(167,139,250,.5)" strokeWidth="1.5" />
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="928">Client</text>
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="945">Approves?</text>
</g>
{/* YES arrow DOWN */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.7)" strokeWidth="1.5" x1="430" x2="430" y1="996" y2="1026" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="442" y="1016">YES</text>
{/* NO → right → Revise Proposal */}
<line markerEnd="url(#arr-orange)" stroke="rgba(245,158,11,.7)" strokeWidth="1.5" x1="570" x2="700" y1="936" y2="936" />
<text fill="#f59e0b" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="608" y="927">NO</text>
<g className="node-box">
<rect fill="#1a1005" height="62" rx="10" stroke="rgba(245,158,11,.35)" strokeWidth="1.5" width="150" x="700" y="905" />
<text fill="#fcd34d" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="930">Revise</text>
<text fill="#fcd34d" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="946">Proposal</text>
<text fill="rgba(245,158,11,.5)" fontFamily="'Fira Code'" fontSize="9" textAnchor="middle" x="775" y="961">adjust scope/price</text>
</g>
{/* Loop back up to proposal */}
<line stroke="rgba(245,158,11,.5)" strokeWidth="1.5" x1="775" x2="775" y1="905" y2="802" />
<line markerEnd="url(#arr-orange)" stroke="rgba(245,158,11,.5)" strokeWidth="1.5" x1="775" x2="590" y1="802" y2="802" />
{/* ════════════════════════════════
       9. PROCESS: Design & Prototype
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(236,72,153,.3)" strokeWidth="1.5" width="320" x="270" y="1028" />
<rect fill="#ec4899" height="80" rx="2" width="4" x="270" y="1028" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="1056">UI/UX Design &amp; Prototype</text>
<text fill="rgba(236,72,153,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="1074">Wireframes · Mockups · Figma</text>
<text fill="rgba(236,72,153,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="1092">Send prototype to client</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="1108" y2="1138" />
{/* ════════════════════════════════
       10. DECISION: Design Approved?
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow)">
<polygon fill="url(#g-decision)" points="430,1142  570,1202  430,1262  290,1202" stroke="rgba(167,139,250,.5)" strokeWidth="1.5" />
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="1194">Design</text>
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="1211">Approved?</text>
</g>
{/* YES arrow DOWN */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.7)" strokeWidth="1.5" x1="430" x2="430" y1="1262" y2="1292" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="442" y="1282">YES</text>
{/* NO → loop back left to Design */}
<line stroke="rgba(245,158,11,.7)" strokeWidth="1.5" x1="290" x2="220" y1="1202" y2="1202" />
<line stroke="rgba(245,158,11,.7)" strokeWidth="1.5" x1="220" x2="220" y1="1202" y2="1068" />
<line markerEnd="url(#arr-orange)" stroke="rgba(245,158,11,.7)" strokeWidth="1.5" x1="220" x2="270" y1="1068" y2="1068" />
<text fill="#f59e0b" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="192" y="1140">NO</text>
<text fill="rgba(245,158,11,.5)" fontFamily="'Fira Code'" fontSize="9" x="152" y="1156">Redesign</text>
{/* ════════════════════════════════
       11. PROCESS: Development
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(26,143,209,.4)" strokeWidth="1.5" width="320" x="270" y="1294" />
<rect fill="#1a8fd1" height="80" rx="2" width="4" x="270" y="1294" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="1322">Development &amp; Coding</text>
<text fill="rgba(26,143,209,.7)" fontFamily="'Fira Code'" fontSize="10" x="298" y="1340">Frontend · Backend · API · DB</text>
<text fill="rgba(26,143,209,.7)" fontFamily="'Fira Code'" fontSize="10" x="298" y="1358">Agile sprints · Daily updates</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="1374" y2="1404" />
{/* ════════════════════════════════
       12. DECISION: Milestone Done?
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow)">
<polygon fill="url(#g-decision)" points="430,1408  570,1468  430,1528  290,1468" stroke="rgba(167,139,250,.5)" strokeWidth="1.5" />
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="1460">Milestone</text>
<text fill="#a78bfa" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="1477">Complete?</text>
</g>
{/* YES arrow DOWN */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.7)" strokeWidth="1.5" x1="430" x2="430" y1="1528" y2="1558" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="442" y="1548">YES</text>
{/* NO → right loop "Continue Dev" */}
<line markerEnd="url(#arr-orange)" stroke="rgba(245,158,11,.7)" strokeWidth="1.5" x1="570" x2="700" y1="1468" y2="1468" />
<text fill="#f59e0b" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="608" y="1458">NO</text>
<g className="node-box">
<rect fill="#1a1005" height="62" rx="10" stroke="rgba(245,158,11,.35)" strokeWidth="1.5" width="150" x="700" y="1437" />
<text fill="#fcd34d" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="1462">Continue</text>
<text fill="#fcd34d" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="1478">Dev Sprint</text>
<text fill="rgba(245,158,11,.5)" fontFamily="'Fira Code'" fontSize="9" textAnchor="middle" x="775" y="1493">next iteration</text>
</g>
{/* Loop back to Development */}
<line stroke="rgba(245,158,11,.5)" strokeWidth="1.5" x1="775" x2="775" y1="1437" y2="1334" />
<line markerEnd="url(#arr-orange)" stroke="rgba(245,158,11,.5)" strokeWidth="1.5" x1="775" x2="590" y1="1334" y2="1334" />
{/* ════════════════════════════════
       13. PROCESS: QA Testing
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(245,158,11,.35)" strokeWidth="1.5" width="320" x="270" y="1560" />
<rect fill="#f59e0b" height="80" rx="2" width="4" x="270" y="1560" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="1588">QA Testing</text>
<text fill="rgba(245,158,11,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="1606">Functional · Security · Performance</text>
<text fill="rgba(245,158,11,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="1624">Mobile · Cross-browser · Load test</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="1640" y2="1670" />
{/* ════════════════════════════════
       14. DECISION: Bugs Found?
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow)">
<polygon fill="url(#g-decision)" points="430,1674  570,1734  430,1794  290,1734" stroke="rgba(239,68,68,.5)" strokeWidth="1.5" />
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="1726">Bugs</text>
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="1743">Found?</text>
</g>
{/* NO (No bugs) arrow DOWN = go to UAT */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.7)" strokeWidth="1.5" x1="430" x2="430" y1="1794" y2="1824" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="440" y="1814">NO</text>
{/* YES → right → Fix Bugs loop */}
<line markerEnd="url(#arr-red)" stroke="rgba(239,68,68,.7)" strokeWidth="1.5" x1="570" x2="700" y1="1734" y2="1734" />
<text fill="#ef4444" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="608" y="1724">YES</text>
<g className="node-box">
<rect fill="#1a0505" height="62" rx="10" stroke="rgba(239,68,68,.35)" strokeWidth="1.5" width="150" x="700" y="1703" />
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="1728">Fix Bugs</text>
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="1744">&amp; Retest</text>
<text fill="rgba(239,68,68,.5)" fontFamily="'Fira Code'" fontSize="9" textAnchor="middle" x="775" y="1759">patch sprint</text>
</g>
{/* Loop back to QA */}
<line stroke="rgba(239,68,68,.5)" strokeWidth="1.5" x1="775" x2="775" y1="1703" y2="1600" />
<line markerEnd="url(#arr-red)" stroke="rgba(239,68,68,.5)" strokeWidth="1.5" x1="775" x2="590" y1="1600" y2="1600" />
{/* ════════════════════════════════
       15. PROCESS: UAT with Client
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(16,185,129,.3)" strokeWidth="1.5" width="320" x="270" y="1826" />
<rect fill="#10b981" height="80" rx="2" width="4" x="270" y="1826" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="1854">UAT — Client Testing</text>
<text fill="rgba(16,185,129,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="1872">Client validates all features</text>
<text fill="rgba(16,185,129,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="1890">Against original requirements</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="1906" y2="1936" />
{/* ════════════════════════════════
       16. DECISION: UAT Passed?
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow)">
<polygon fill="url(#g-decision)" points="430,1940  570,2000  430,2060  290,2000" stroke="rgba(16,185,129,.5)" strokeWidth="1.5" />
<text fill="#6ee7b7" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="1992">UAT</text>
<text fill="#6ee7b7" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="2009">Passed?</text>
</g>
{/* YES arrow DOWN */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.7)" strokeWidth="1.5" x1="430" x2="430" y1="2060" y2="2090" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="442" y="2080">YES</text>
{/* NO → left → fix and back to QA */}
<line stroke="rgba(239,68,68,.7)" strokeWidth="1.5" x1="290" x2="200" y1="2000" y2="2000" />
<line stroke="rgba(239,68,68,.5)" strokeWidth="1.5" x1="200" x2="200" y1="2000" y2="1600" />
<line markerEnd="url(#arr-red)" stroke="rgba(239,68,68,.5)" strokeWidth="1.5" x1="200" x2="270" y1="1600" y2="1600" />
<text fill="#ef4444" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="158" y="1800">NO</text>
<text fill="rgba(239,68,68,.5)" fontFamily="'Fira Code'" fontSize="9" x="120" y="1816">Back to QA</text>
{/* ════════════════════════════════
       17. PROCESS: Deployment
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(16,185,129,.4)" strokeWidth="1.5" width="320" x="270" y="2092" />
<rect fill="#10b981" height="80" rx="2" width="4" x="270" y="2092" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="2120">Deployment &amp; Go-Live 🚀</text>
<text fill="rgba(16,185,129,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="2138">SSL · DNS · CDN · Zero-downtime</text>
<text fill="rgba(16,185,129,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="2156">72hr intensive monitoring</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-cyan)" stroke="rgba(0,212,255,.5)" strokeWidth="1.5" x1="430" x2="430" y1="2172" y2="2202" />
{/* ════════════════════════════════
       18. DECISION: Any issues post-live?
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow)">
<polygon fill="url(#g-decision)" points="430,2206  570,2266  430,2326  290,2266" stroke="rgba(239,68,68,.45)" strokeWidth="1.5" />
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="2258">Post-Live</text>
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="2275">Issues?</text>
</g>
{/* NO arrow DOWN → Support */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.7)" strokeWidth="1.5" x1="430" x2="430" y1="2326" y2="2356" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="440" y="2346">NO</text>
{/* YES → right → hotfix */}
<line markerEnd="url(#arr-red)" stroke="rgba(239,68,68,.7)" strokeWidth="1.5" x1="570" x2="700" y1="2266" y2="2266" />
<text fill="#ef4444" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" x="606" y="2256">YES</text>
<g className="node-box">
<rect fill="#1a0505" height="62" rx="10" stroke="rgba(239,68,68,.35)" strokeWidth="1.5" width="150" x="700" y="2236" />
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="2261">Hotfix &amp;</text>
<text fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" x="775" y="2277">Redeploy</text>
<text fill="rgba(239,68,68,.5)" fontFamily="'Fira Code'" fontSize="9" textAnchor="middle" x="775" y="2292">emergency patch</text>
</g>
{/* Loop back to post-live decision */}
<line stroke="rgba(239,68,68,.4)" strokeWidth="1.5" x1="775" x2="775" y1="2236" y2="2180" />
<line stroke="rgba(239,68,68,.4)" strokeWidth="1.5" x1="775" x2="600" y1="2180" y2="2180" />
<line markerEnd="url(#arr-red)" stroke="rgba(239,68,68,.4)" strokeWidth="1.5" x1="600" x2="600" y1="2180" y2="2210" />
{/* ════════════════════════════════
       19. PROCESS: Ongoing Support
  ════════════════════════════════ */}
<g className="node-box">
<rect fill="url(#g-process)" height="80" rx="10" stroke="rgba(0,212,255,.3)" strokeWidth="1.5" width="320" x="270" y="2358" />
<rect fill="#00d4ff" height="80" rx="2" width="4" x="270" y="2358" />
<text fill="#e2eeff" fontSize="13" fontWeight="700" x="298" y="2386">24/7 Monitoring &amp; Support</text>
<text fill="rgba(0,212,255,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="2404">Uptime · Reports · SEO growth</text>
<text fill="rgba(0,212,255,.65)" fontFamily="'Fira Code'" fontSize="10" x="298" y="2422">Security patches · Feature updates</text>
</g>
{/* Arrow */}
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.6)" strokeWidth="1.5" x1="430" x2="430" y1="2438" y2="2468" />
{/* ════════════════════════════════
       20. END — Success
  ════════════════════════════════ */}
<g className="node-box" filter="url(#glow-strong)">
<ellipse cx="430" cy="2510" fill="url(#g-end)" rx="130" ry="48" stroke="rgba(16,185,129,.7)" strokeWidth="2" />
<ellipse cx="430" cy="2510" fill="none" rx="130" ry="48" stroke="rgba(16,185,129,.2)" strokeWidth="10" />
<text fill="#10b981" fontFamily="'Fira Code'" fontSize="11" fontWeight="600" letter-spacing="2" textAnchor="middle" x="430" y="2502">SUCCESS</text>
<text fill="#6ee7b7" fontSize="12" fontWeight="700" textAnchor="middle" x="430" y="2520">Project Complete ✓</text>
<text fill="rgba(16,185,129,.5)" fontFamily="'Fira Code'" fontSize="10" textAnchor="middle" x="430" y="2536">Client Growing &amp; Winning</text>
</g>
{/* STEP LABELS on left side */}
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="170">STEP 1</text>
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="430">STEP 2</text>
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="700">STEP 3</text>
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="800">STEP 4</text>
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="1070">STEP 5</text>
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="1340">STEP 6</text>
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="1590">STEP 7</text>
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="1860">STEP 8</text>
<text fill="rgba(0,212,255,.2)" fontFamily="'Fira Code'" fontSize="9" writing-mode="tb" x="18" y="2120">STEP 9</text>
</svg>
</div>
{/* LEGEND */}
<div className="legend">
<div className="leg">
<svg className="leg-shape" height="18" width="40"><ellipse cx="20" cy="9" fill="none" rx="19" ry="8" stroke="rgba(0,212,255,.6)" strokeWidth="1.5" /></svg>
    Start / End
  </div>
<div className="leg">
<svg className="leg-shape" height="18" width="40"><rect fill="none" height="12" rx="3" stroke="rgba(0,212,255,.4)" strokeWidth="1.5" width="36" x="2" y="3" /><rect fill="#00d4ff" height="12" rx="1" width="3" x="2" y="3" /></svg>
    Process Step
  </div>
<div className="leg">
<svg className="leg-shape" height="18" width="40"><polygon fill="none" points="20,2 38,9 20,16 2,9" stroke="rgba(167,139,250,.6)" strokeWidth="1.5" /></svg>
    Decision (Yes/No)
  </div>
<div className="leg">
<svg className="leg-shape" height="18" width="40">
<line markerEnd="url(#arr-green)" stroke="rgba(16,185,129,.8)" strokeWidth="1.5" x1="2" x2="30" y1="9" y2="9" />
</svg>
    YES Path
  </div>
<div className="leg">
<svg className="leg-shape" height="18" width="40">
<line stroke="rgba(245,158,11,.8)" strokeWidth="1.5" x1="2" x2="30" y1="9" y2="9" />
</svg>
    NO / Loop Back
  </div>
<div className="leg">
<svg className="leg-shape" height="18" width="40">
<line stroke="rgba(239,68,68,.8)" strokeWidth="1.5" x1="2" x2="30" y1="9" y2="9" />
</svg>
    Bug / Error Path
  </div>
</div>
{/* STATS */}
<div className="fstats">
<div className="fstat">
<span className="fstat-n">9<b> Steps</b></span>
<div className="fstat-l">Full Process</div>
</div>
<div className="fstat">
<span className="fstat-n">6<b> Decisions</b></span>
<div className="fstat-l">Yes/No Points</div>
</div>
<div className="fstat">
<span className="fstat-n">4<b> Loops</b></span>
<div className="fstat-l">Quality Loops</div>
</div>
<div className="fstat">
<span className="fstat-n">24<b>/7</b></span>
<div className="fstat-l">Support After</div>
</div>
</div>
<div className="cta-row">
<Link className="btn btn-fill" to="/contact">Start Your Project &rarr;</Link>
<Link className="btn btn-out" to="/about">Learn More</Link>



      </div>
      </Reveal>
    </div>
  );
}
