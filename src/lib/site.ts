export const site = {
  name: "Webhelp Pakistan",
  tagline: "Practical technology solutions for growing businesses",
  description:
    "Webhelp Pakistan provides web development, managed IT support, hosting, ecommerce, integrations and dedicated remote teams for businesses in Pakistan and worldwide.",
  email: "inquire@webhelp.pk",
  phone: "051 2156459",
  secondaryPhone: "0512899685",
  address: "Gulberg Greens Block A, Islamabad, Pakistan",
  hours: "Mon-Sun 24/7 Support",
  social: [] as { label: string; href: string }[],
} as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  homeSummary: string;
  outcomes: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "cloud-managed-vps-hosting",
    title: "Business VPS & Managed Hosting",
    summary:
      "Business VPS hosting with fast and secure servers, website deployment, SSL, DNS setup, CDN integration, regular backups, performance monitoring, and ongoing server maintenance based on your business needs.",
    homeSummary:
      "Managed VPS hosting with deployment, security, CDN, backups, monitoring, and expert maintenance.",
    outcomes: [
      "USA-based data centers with advanced CDNs",
      "Resource isolation and high-level firewall security",
      "Server redundancy and automated daily data backups",
    ],
    deliverables: [
      "Cloud-first deployment",
      "Managed VPS hosting",
      "Firewall security",
      "Daily backups",
    ],
  },
  {
    slug: "dedicated-remote-it-teams",
    title: "Dedicated Remote IT Teams",
    summary:
      "Extend internal capacity with agreed developers, designers, support specialists, infrastructure resources, or other technical roles, with responsibilities and working arrangements defined before work begins.",
    homeSummary:
      "Dedicated developers, designers, support, and cloud specialists who scale with your business needs.",
    outcomes: [
      "Scalable monthly technology outsourcing",
      "Specialized software development and graphic UI/UX talent",
      "Cloud infrastructure and 24/7 technical operations expertise",
    ],
    deliverables: [
      "Software developers",
      "Graphic UI/UX designers",
      "Cloud specialists",
      "24/7 technical operations",
    ],
  },
  {
    slug: "e-commerce-web-portals",
    title: "Ecommerce & Web Portal Development",
    summary:
      "WooCommerce, Shopify, custom commerce, and secure customer, employee, vendor, membership, or operational portals shaped around users, transactions, accounts, and integrations.",
    homeSummary:
      "Secure ecommerce stores and web portals tailored to users, transactions, accounts, and integrations.",
    outcomes: [
      "Responsive and conversion-optimized storefronts",
      "Secure transaction workflows and admin controls",
      "Integrated analytics, payment gateways, and webhooks",
    ],
    deliverables: [
      "Online store architecture",
      "Custom web portal",
      "Payment gateway integration",
      "Secure administration",
    ],
  },
  {
    slug: "web-development",
    title: "Business Website Development",
    summary:
      "Responsive, fast, secure, and search-friendly websites for corporate, professional-service, WordPress, React/Next.js, landing-page, and redesign requirements.",
    homeSummary:
      "Fast, secure, search-friendly websites built to strengthen your brand and convert visitors.",
    outcomes: [
      "Clear structure around business goals and user journeys",
      "Responsive implementation, performance, and accessibility",
      "Search-friendly technical foundations and maintainable handover",
    ],
    deliverables: [
      "Discovery and content planning",
      "Responsive interface",
      "Development and QA",
      "Controlled launch and handover",
    ],
  },
  {
    slug: "website-management-maintenance",
    title: "Website Management & Maintenance",
    summary:
      "24/7 dedicated support operations driven by robust SLAs (Service Level Agreements). Covers Helpdesk ticketing, incident mitigation, plugin troubleshooting, core framework updates, and proactive site monitoring.",
    homeSummary:
      "24/7 SLA-backed monitoring, updates, troubleshooting, and helpdesk support that keeps websites reliable.",
    outcomes: [
      "Security Management with malware protection",
      "Performance Optimization with speed assurance",
      "Content Updates and Infrastructure Control",
    ],
    deliverables: [
      "24/7 SLA support",
      "Helpdesk ticketing",
      "Incident mitigation",
      "Proactive site monitoring",
    ],
  },
  {
    slug: "brand-building",
    title: "Brand Development",
    summary: "Build a recognizable brand with a clear strategy, distinctive logo, visual identity, marketing designs, and realistic mockups for digital and print.",
    homeSummary: "Brand strategy, logos, visual identities, creative designs, and mockups that bring your business to life.",
    outcomes: ["A clear identity shaped around your audience", "Consistent design across digital and print", "Practical brand assets your team can use"],
    deliverables: ["Brand discovery and creative direction", "Logo and visual identity design", "Marketing designs and mockups", "Brand guidelines and asset handover"],
  },
];

export type Product = {
  slug: string;
  name: string;
  detailTitle?: string;
  category: string;
  pitch: string;
  description: string;
  features: { title: string; body: string }[];
  stats: { label: string; value: string }[];
  status: string;
};

export const products: Product[] = [
  {
    slug: "business-vps-hosting",
    name: "Business VPS Hosting",
    category: "Hosting & infrastructure",
    pitch: "Managed VPS hosting for business websites and applications.",
    description:
      "Business VPS hosting with setup, deployment, SSL, backups, monitoring, and support for websites and applications needing more control.",
    features: [
      {
        title: "Deployment",
        body: "Prepare environments and deploy supported websites or applications.",
      },
      {
        title: "Security basics",
        body: "Coordinate SSL, access, firewall, and update requirements.",
      },
      { title: "Backups", body: "Define backup scope, retention, and restoration procedures." },
      {
        title: "Monitoring",
        body: "Monitor agreed services and respond according to the support plan.",
      },
      {
        title: "24/7 Support",
        body: "Get round-the-clock technical assistance whenever your business needs it.",
      },
      {
        title: "Scalability & Resources",
        body: "Scale CPU, RAM, storage, and resources as your business grows.",
      },
    ],
    stats: [
      { label: "Environment", value: "VPS" },
      { label: "Backups", value: "Agreed" },
      { label: "Support", value: "Managed" },
    ],
    status: "Available",
  },
  {
    slug: "custom-erp",
    name: "Weblify (E-commerce Store management System)",
    detailTitle: "Weblify: Custom E-commerce Management Software",
    category: "Custom business software",
    pitch: "Software built around your business, bringing store operations into one digital workflow.",
    description:
      "We build custom software and solutions around the way your business works. Weblify can connect orders, stock, customers, payments and reporting in one place, replacing repetitive manual work and helping your team save time and reduce operating costs.",
    features: [
      {
        title: "Built for your workflow",
        body: "We map how your team works and shape the software around your actual processes, users and goals.",
      },
      {
        title: "Store and order management",
        body: "Manage products, orders and fulfilment through a connected digital process designed for your store.",
      },
      {
        title: "Inventory visibility",
        body: "Keep stock records organized and make it easier to see what is available and what needs attention.",
      },
      {
        title: "Customer information",
        body: "Bring customer details and order history together so your team can respond with better context.",
      },
      {
        title: "Payments and invoicing",
        body: "Connect payment and invoice workflows to the systems your business uses where integrations are needed.",
      },
      {
        title: "Reporting that matters",
        body: "See useful sales, order and stock information without compiling the same reports by hand.",
      },
      {
        title: "Less repetitive work",
        body: "Digitize routine steps and reduce duplicate data entry, saving staff time and avoiding preventable errors.",
      },
      {
        title: "Room to grow",
        body: "Add the features and integrations your business needs as your operations change.",
      },
    ],
    stats: [
      { label: "Approach", value: "Custom" },
      { label: "Workflows", value: "Digital" },
      { label: "Focus", value: "Efficiency" },
    ],
    status: "Available",
  },
  {
    slug: "fuel-station-automation",
    name: "Fuel Station Configuration",
    category: "Operational automation",
    pitch: "Improve fuel station visibility with connected operational workflows.",
    description:
      "Fuel station automation for billing, inventory visibility, operational records, reporting, and suitable RFID or integration workflows.",
    features: [
      {
        title: "Billing workflows",
        body: "Structure transactions and related operational records.",
      },
      {
        title: "Inventory visibility",
        body: "Improve visibility across stock movement and reconciliation.",
      },
      {
        title: "Operational reporting",
        body: "Create useful reports for management and daily oversight.",
      },
      {
        title: "Suitable integrations",
        body: "Plan RFID, payment, or third-party connections where appropriate.",
      },
    ],
    stats: [
      { label: "Focus", value: "Visibility" },
      { label: "Model", value: "Custom" },
      { label: "Support", value: "Available" },
    ],
    status: "Available",
  },
  {
    slug: "school-management-system",
    name: "School Management System",
    category: "Education technology",
    pitch: "Connect admissions, students, staff, attendance, fees, and academic records.",
    description:
      "A school management platform for admissions, student profiles, classes, attendance, fees, examinations, communication, and administrative reporting.",
    features: [
      { title: "Admissions", body: "Manage enquiries, applications, and student onboarding." },
      { title: "Academic records", body: "Organize classes, attendance, and examination results." },
      { title: "Fees", body: "Track fee structures, payments, and outstanding balances." },
      { title: "Communication", body: "Support notices and appropriate parent or student access." },
    ],
    stats: [
      { label: "Focus", value: "Education" },
      { label: "Access", value: "Role-based" },
      { label: "Model", value: "Custom" },
    ],
    status: "Available",
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    category: "Healthcare operations",
    pitch: "Coordinate patient, appointment, billing, staff, and operational workflows.",
    description:
      "A controlled hospital management system designed around patient registration, appointments, clinical operations, billing, staff access, records, and reporting requirements.",
    features: [
      {
        title: "Patient workflows",
        body: "Support registration, appointments, and service records.",
      },
      { title: "Billing", body: "Coordinate suitable billing and payment processes." },
      {
        title: "Controlled access",
        body: "Define permissions around staff roles and responsibilities.",
      },
      { title: "Operational reports", body: "Improve visibility for authorized management users." },
    ],
    stats: [
      { label: "Sector", value: "Healthcare" },
      { label: "Access", value: "Controlled" },
      { label: "Model", value: "Custom" },
    ],
    status: "Available",
  },
  {
    slug: "office-management-system",
    name: "Office Management System",
    category: "Workplace operations",
    pitch: "Bring everyday office workflows, records, requests, and approvals together.",
    description:
      "A centralized office management system for staff records, attendance, documents, tasks, requests, assets, approvals, and management reporting.",
    features: [
      { title: "Employee records", body: "Keep staff and department information organized." },
      { title: "Requests & approvals", body: "Manage repeatable internal approval workflows." },
      { title: "Assets & documents", body: "Track office resources and important records." },
      { title: "Reporting", body: "Give management a clear operational overview." },
    ],
    stats: [
      { label: "Users", value: "Role-based" },
      { label: "Access", value: "Secure" },
      { label: "Model", value: "Custom" },
    ],
    status: "Available",
  },
  {
    slug: "restaurant-management-system",
    name: "Restaurant Management System",
    category: "Hospitality operations",
    pitch: "Connect menus, orders, tables, kitchen workflows, inventory, and reporting.",
    description:
      "A restaurant management system for menu administration, orders, table service, kitchen coordination, stock visibility, billing, and management reporting.",
    features: [
      { title: "Menu management", body: "Maintain items, categories, availability, and pricing." },
      {
        title: "Orders & tables",
        body: "Coordinate dine-in, takeaway, and appropriate delivery workflows.",
      },
      { title: "Kitchen coordination", body: "Route orders clearly through preparation stages." },
      { title: "Stock & reporting", body: "Track key inventory and operational performance." },
    ],
    stats: [
      { label: "Sector", value: "Hospitality" },
      { label: "Workflow", value: "Connected" },
      { label: "Model", value: "Custom" },
    ],
    status: "Available",
  },
  {
    slug: "business-automation-erp",
    name: "Business Automation & Custom Software",
    category: "Custom business software",
    pitch: "Simplify everyday work with software built around your business.",
    description: "Connect your teams, records, approvals, and reporting with tailored software, integrations, and business automation.",
    features: [
      { title: "Process mapping", body: "Understand your current workflows and identify repetitive tasks." },
      { title: "Custom development", body: "Build the screens, permissions, reports, and automation your team needs." },
      { title: "Connected systems", body: "Integrate suitable existing tools and plan data migration." },
      { title: "Training and support", body: "Help your team adopt the software and keep improving it." },
    ],
    stats: [{ label: "Approach", value: "Custom" }, { label: "Workflows", value: "Connected" }, { label: "Support", value: "Available" }],
    status: "Available",
  },
  {
    slug: "inventory-warehouse-management",
    name: "Inventory & Warehouse Management System",
    category: "Inventory operations",
    pitch: "Track stock, warehouses, suppliers, purchases, transfers, and inventory movements from one system.",
    description:
      "Track stock, warehouses, suppliers, purchases, transfers, and inventory movements from one system.",
    features: [
      { title: "Stock tracking", body: "Organize product quantities and inventory movement records." },
      { title: "Warehouse management", body: "Maintain warehouse records and transfers between locations." },
      { title: "Purchases & suppliers", body: "Keep purchase and supplier information connected with inventory workflows." },
      { title: "Inventory visibility", body: "Review stock information and movement records from a central system." },
    ],
    stats: [
      { label: "Focus", value: "Inventory" },
      { label: "Locations", value: "Warehouses" },
      { label: "Workflow", value: "Connected" },
    ],
    status: "Available",
  },
  {
    slug: "pos-retail-management",
    name: "POS & Retail Management System",
    category: "Retail operations",
    pitch: "Manage sales, billing, products, stock, customers, and daily retail operations.",
    description:
      "Manage sales, billing, products, stock, customers, and daily retail operations.",
    features: [
      { title: "Sales & billing", body: "Manage point-of-sale transactions and billing workflows." },
      { title: "Product management", body: "Keep retail products and related information organized." },
      { title: "Stock visibility", body: "Connect sales activity with relevant stock records." },
      { title: "Customer records", body: "Maintain customer information alongside retail operations." },
    ],
    stats: [
      { label: "Focus", value: "Retail" },
      { label: "Operations", value: "Daily sales" },
      { label: "Workflow", value: "Connected" },
    ],
    status: "Available",
  },
  {
    slug: "real-estate-management",
    name: "Real Estate Management System",
    category: "Property operations",
    pitch: "Manage properties, listings, leads, agents, enquiries, bookings, and client records.",
    description:
      "Manage properties, listings, leads, agents, enquiries, bookings, and client records.",
    features: [
      { title: "Properties & listings", body: "Organize property information and active listings." },
      { title: "Leads & enquiries", body: "Keep prospective client enquiries and lead information together." },
      { title: "Agent coordination", body: "Maintain agent records and related property workflows." },
      { title: "Bookings & clients", body: "Connect booking details with relevant client records." },
    ],
    stats: [
      { label: "Focus", value: "Property" },
      { label: "Records", value: "Centralized" },
      { label: "Workflow", value: "Configurable" },
    ],
    status: "Available",
  },
  {
    slug: "clinic-management",
    name: "Clinic Management System",
    category: "Healthcare operations",
    pitch: "Manage appointments, patients, doctors, billing, treatment records, and daily clinic operations.",
    description:
      "Manage appointments, patients, doctors, billing, treatment records, and daily clinic operations.",
    features: [
      { title: "Appointments", body: "Organize appointment scheduling and related clinic workflows." },
      { title: "Patient records", body: "Maintain relevant patient and treatment records." },
      { title: "Doctors & services", body: "Connect doctor information with appropriate clinic services." },
      { title: "Billing & operations", body: "Manage billing records and other daily operational information." },
    ],
    stats: [
      { label: "Focus", value: "Clinics" },
      { label: "Access", value: "Role-based" },
      { label: "Workflow", value: "Configurable" },
    ],
    status: "Available",
  },
  {
    slug: "vehicle-dealership-management",
    name: "Vehicle Dealership Management System",
    category: "Automotive operations",
    pitch: "Manage vehicle inventory, enquiries, customers, sales, finance leads, and dealership workflows.",
    description:
      "Manage vehicle inventory, enquiries, customers, sales, finance leads, and dealership workflows.",
    features: [
      { title: "Vehicle inventory", body: "Organize vehicle records and dealership inventory information." },
      { title: "Enquiries & customers", body: "Maintain prospective buyer enquiries and customer records." },
      { title: "Sales workflows", body: "Manage vehicle sales information through a structured workflow." },
      { title: "Finance leads", body: "Keep finance lead details connected with relevant dealership records." },
    ],
    stats: [
      { label: "Focus", value: "Dealerships" },
      { label: "Records", value: "Vehicles" },
      { label: "Workflow", value: "Connected" },
    ],
    status: "Available",
  },
  {
    slug: "customer-support-ticketing",
    name: "Customer Support & Ticketing System",
    category: "Customer support",
    pitch: "Manage customer issues, support tickets, priorities, departments, replies, and resolution tracking.",
    description:
      "Manage customer issues, support tickets, priorities, departments, replies, and resolution tracking.",
    features: [
      { title: "Support tickets", body: "Record customer issues and keep related replies together." },
      { title: "Priorities & departments", body: "Organize tickets by priority and responsible department." },
      { title: "Resolution tracking", body: "Follow ticket progress through to resolution." },
      { title: "Customer communication", body: "Maintain a clearer record of support conversations and responses." },
    ],
    stats: [
      { label: "Focus", value: "Support" },
      { label: "Tracking", value: "Tickets" },
      { label: "Workflow", value: "Resolution" },
    ],
    status: "Available",
  },
  {
    slug: "ai-chatbot-call-centers",
    name: "AI Chatbot for Call Centers",
    category: "AI CUSTOMER SERVICE",
    pitch: "Automate customer conversations, answer common questions, assist agents, and handle high-volume support across voice and chat channels.",
    description:
      "Automate customer conversations, answer common questions, assist agents, and handle high-volume support across voice and chat channels.",
    features: [
      { title: "Customer conversations", body: "Automate customer conversations across voice and chat channels." },
      { title: "Common questions", body: "Help answer common customer questions." },
      { title: "Agent assistance", body: "Assist call center agents during customer support workflows." },
      { title: "High-volume support", body: "Support high-volume customer service conversations across voice and chat." },
    ],
    stats: [
      { label: "Focus", value: "Customer Assistance" },
      { label: "Tracking", value: "Calls & Chats" },
      { label: "Workflow", value: "Smart Routing" },
    ],
    status: "Available",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We collect requirements, business goals, user needs, technical constraints, priorities, and risks.",
  },
  {
    step: "02",
    title: "Define & Plan",
    body: "We define the scope, recommended technology, architecture, milestones, resources, timeline, and support model.",
  },
  {
    step: "03",
    title: "Design",
    body: "We plan the user experience, interface structure, page flows, and visual direction before development begins.",
  },
  {
    step: "04",
    title: "Build",
    body: "We develop the approved solution, configure required systems, integrations, infrastructure, and functionality.",
  },
  {
    step: "05",
    title: "Test & Review",
    body: "We validate functionality, usability, responsiveness, accessibility, performance, security, and reliability before release.",
  },
  {
    step: "06",
    title: "Optimize",
    body: "We refine the product based on testing results, feedback, performance data, and final quality checks.",
  },
  {
    step: "07",
    title: "Launch & Support",
    body: "We deploy carefully, monitor the live system, resolve post-launch issues, and provide ongoing maintenance, improvements, SEO support, reporting, or future features.",
  },
];
export const team = [
  {
    number: "01",
    group: "leadership",
    name: "Saqib Rasheed",
    role: "CEO & FOUNDER",
    image: "/images/team/saqib-rasheed.webp",
    profile: "/saqib-rasheed",
  },
  {
    number: "02",
    group: "leadership",
    name: "Umaira Ashfaq",
    role: "MANAGING DIRECTOR",
    image: "/images/team/umaira-ashfaq.webp",
    profile: "/umaira-ashfaq",
  },
  {
    number: "03",
    group: "leadership",
    name: "Muhammad Bilal Raja",
    role: "DIRECTOR BUSINESS DEVELOPMENT",
    image: "/images/team/muhammad-bilal-raja.jpg",
    profile: "/Muhammad-Bilal",
  },
  {
    number: "04",
    group: "leadership",
    name: "Sumayya Rasheed",
    role: "ODOO & FINANCE MANAGER",
    image: "/images/team/sumayya-rasheed.webp",
    profile: "/sumayya-rasheed",
  },
  {
    number: "05",
    group: "leadership",
    name: "Hamza Malik",
    role: "IT MANAGER",
    image: "/images/team/hamza-malik.webp",
    profile: "/Hamza",
  },
  {
    number: "06",
    group: "leadership",
    name: "Riaz Ali Shah",
    role: "DIRECTOR SALES & MARKETING",
    image: "/images/team/riaz-shah.jpeg",
    profile: "/riaz-shah",
  },
  {
    number: "07",
    group: "leadership",
    name: "Raja Jahangir",
    role: "BUSINESS DEVELOPMENT MANAGER - UAE",
    image: "/images/team/raja-jahangir.png",
    profile: "/raja-jahangir",
  },
  {
    number: "08",
    group: "leadership",
    name: "Raja Muhammad Imran",
    role: "BUSINESS DEVELOPMENT MANAGER - QATAR",
    image: "/images/team/raja-muhammad-imran.png",
    profile: "/raja-muhammad-imran",
  },
  {
    number: "09",
    group: "leadership",
    name: "Umer Shahbaz",
    role: "BUSINESS DEVELOPMENT EXECUTIVE - KSA (KINGDOM OF SAUDI ARABIA)",
    image: "/images/team/umer-shahbaz.jpeg",
    profile: "/umer-shahbaz",
  },
  {
    number: "10",
    group: "leadership",
    name: "Hasnat Ali",
    role: "SENIOR WEB DEVELOPER",
    image: "/images/team/hasnat-ali.webp",
    profile: "/hasnat-ali",
  },
  {
    number: "11",
    group: "creative",
    name: "Ihtisham Jabar",
    role: "SEO DEVELOPER AND CONTENT CREATOR",
    image: "/images/team/ihtisham-jabar.png",
  },
  {
    number: "12",
    group: "creative",
    name: "Haider",
    role: "VIDEO EDITOR",
    image: "/images/team/haider.webp",
  },
  {
    number: "13",
    group: "creative",
    name: "Rehan Shah",
    role: "FRONT-END DEVELOPER",
    image: "/images/team/rehan-shah.webp",
  },
  {
    number: "14",
    group: "creative",
    name: "Haseeb Ali",
    role: "SOCIAL MEDIA MANAGER",
    image: "/images/team/haseeb-ali.webp",
  },
  {
    number: "15",
    group: "creative",
    name: "Hassan Abbasi",
    role: "GRAPHIC DESIGNER",
    image: "/images/team/hassan-abbasi.webp",
  },
  {
    number: "16",
    group: "creative",
    name: "Shayan Abbasi",
    role: "DIGITAL SOLUTIONS SPECIALIST",
    image: "/images/team/muhammad-shayan-new.png",
  },
];

export const partners = ["Islamabad, Pakistan", "U.A.E", "Canada", "England", "Ireland"];

export const faqs = [
  {
    q: "What services does Webhelp Pakistan provide?",
    a: "Web development, ecommerce, portals, web applications, website maintenance, hosting, VPS and dedicated server support, payment and API integrations, IT consultancy, infrastructure, digital marketing support, automation, business systems, and dedicated remote resources.",
  },
  {
    q: "Can you work with international clients?",
    a: "Yes. Discovery, documentation, communication, development, QA, deployment, and ongoing support can all be delivered remotely.",
  },
  {
    q: "Can you take over an existing website or system?",
    a: "Yes, after a technical review of the stack, hosting, code quality, access, integrations, backups, security risks, and outstanding issues.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. Ongoing options can include maintenance, hosting support, updates, backups, monitoring, performance, SEO support, content changes, helpdesk coordination, and dedicated resources.",
  },
  {
    q: "How does a project begin?",
    a: "Share the business goal, current situation, users, required integrations, timing, and budget context. We then identify whether discovery, an audit, a fixed project, or recurring support is the right next step.",
  },
  {
    q: "Do you offer fixed packages?",
    a: "Some repeatable services can be packaged, but custom websites, applications, infrastructure, and integrations are scoped around actual requirements and dependencies.",
  },
];
