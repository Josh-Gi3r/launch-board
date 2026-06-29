/**
 * Mock/seed data for all listing pages.
 *
 * Replace these arrays (or load them from your backend) to populate
 * the home carousel, library, builders roster, and partners page.
 */

// ── Home ──────────────────────────────────────────────────────────────────────

export const featuredProducts = [
  {
    id: 1,
    title: "NEURAL_SHIELD V2",
    desc: "Autonomous threat detection and response for edge computing protocols.",
    category: "SECURITY",
    color: "secondary",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&q=80",
  },
  {
    id: 2,
    title: "CORE_FLOW ENGINE",
    desc: "Next-gen asset management and orchestration for digital collectives.",
    category: "WEB3",
    color: "primary",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&q=80",
  },
  {
    id: 3,
    title: "VORTEX_OS",
    desc: "Decentralized operating environment built for the sovereign individual.",
    category: "SYSTEM",
    color: "tertiary",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&q=80",
  },
];

export const trendingProducts = [
  { id: 1, title: "GLITCH_SCANNER", votes: 2400, desc: "Real-time vulnerability scanner with AI-assisted patch generation.", hot: true },
  { id: 2, title: "ZENITH_DRIVE", votes: 1870, desc: "Adaptive cloud storage that scales with your data velocity.", hot: false },
  { id: 3, title: "NEON_PROXY", votes: 1540, desc: "Privacy-first network layer for the hyper-connected individual.", hot: false },
  { id: 4, title: "BIT_CRUSHER", votes: 1120, desc: "Audio synthesis engine for the next generation of sound design.", hot: false },
];

export const libraryPreview = [
  { id: 1, title: "HYPER_THREAD", desc: "Multi-core processing visualizer for high-end workstations.", icon: "verified", color: "primary", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&q=80" },
  { id: 2, title: "LIQUID_DASH", desc: "Real-time performance dashboard with sub-millisecond latency.", icon: "rocket_launch", color: "secondary", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80" },
  { id: 3, title: "KINETIC_GRID", desc: "Modular workspace engine for spatial audio and visual design.", icon: "grid_view", color: "tertiary", img: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=640&q=80" },
];

export const communityVotes = [
  { title: "AI_ETHICS_CORE", pct: 88, color: "secondary" },
  { title: "DECENTRAL_UI", pct: 64, color: "primary" },
  { title: "QUANTUM_ENCRYPT", pct: 42, color: "tertiary" },
];

export const ecosystemPartnerNames = ["POLYGON", "SOLANA", "CHAINLINK", "ALCHEMY", "INFURA"];

// ── Library ───────────────────────────────────────────────────────────────────

export const allProducts = [
  { id: 1, title: "ATLAS_ENGINE", category: "CREATIVE", downloads: "124K", rating: "4.9", color: "primary", verified: true, desc: "Generative design engine for next-generation visual systems.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80" },
  { id: 2, title: "NEURAL_SHIELD", category: "SECURITY", downloads: "89K", rating: "4.8", color: "secondary", verified: true, desc: "Autonomous threat detection and response for edge computing.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&q=80" },
  { id: 3, title: "VORTEX_OS", category: "SYSTEM", downloads: "56K", rating: "4.7", color: "tertiary", verified: true, desc: "Decentralized operating environment for the sovereign individual.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&q=80" },
  { id: 4, title: "LIQUID_DASH", category: "UTILITIES", downloads: "42K", rating: "4.6", color: "secondary", verified: false, desc: "Real-time performance dashboard with sub-millisecond latency.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80" },
  { id: 5, title: "KINETIC_GRID", category: "CREATIVE", downloads: "38K", rating: "4.5", color: "tertiary", verified: true, desc: "Modular workspace engine for spatial audio and visual design.", img: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=640&q=80" },
  { id: 6, title: "CORE_FLOW", category: "WEB3", downloads: "31K", rating: "4.4", color: "primary", verified: false, desc: "Next-gen asset management and orchestration for digital collectives.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&q=80" },
  { id: 7, title: "GLITCH_SCAN", category: "SECURITY", downloads: "28K", rating: "4.8", color: "primary", verified: true, desc: "Real-time vulnerability scanner with AI-assisted patch generation.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&q=80" },
  { id: 8, title: "ZENITH_DRIVE", category: "UTILITIES", downloads: "24K", rating: "4.3", color: "secondary", verified: false, desc: "Adaptive cloud storage that scales with your data velocity.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=640&q=80" },
  { id: 9, title: "BIT_CRUSHER", category: "CREATIVE", downloads: "21K", rating: "4.7", color: "tertiary", verified: true, desc: "Audio synthesis engine for the next generation of sound design.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=640&q=80" },
  { id: 10, title: "CHAIN_VAULT", category: "WEB3", downloads: "19K", rating: "4.6", color: "primary", verified: true, desc: "Non-custodial multi-chain wallet with hardware-grade security.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=640&q=80" },
  { id: 11, title: "HYPER_THREAD", category: "SYSTEM", downloads: "17K", rating: "4.5", color: "secondary", verified: false, desc: "Multi-core processing visualizer for high-end workstations.", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=640&q=80" },
  { id: 12, title: "NEON_PROXY", category: "UTILITIES", downloads: "15K", rating: "4.4", color: "tertiary", verified: true, desc: "Privacy-first network layer for the hyper-connected individual.", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=640&q=80" },
] as const;

// ── Builders ──────────────────────────────────────────────────────────────────

export const builders = [
  { handle: "AXIOM_DEV", name: "Kai Nakamura", product: "NEURAL_SHIELD V2", cohort: "COHORT_05", raised: "$1.2M", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", color: "secondary" },
  { handle: "VOID_RUNNER", name: "Zara Okonkwo", product: "VORTEX_OS", cohort: "COHORT_06", raised: "$800K", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", color: "primary" },
  { handle: "GHOST_PROTO", name: "Marcus Chen", product: "CORE_FLOW ENGINE", cohort: "COHORT_06", raised: "$2.4M", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", color: "tertiary" },
  { handle: "NEON_WITCH", name: "Priya Sharma", product: "LIQUID_DASH", cohort: "COHORT_07", raised: "SEED", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80", color: "secondary" },
  { handle: "BYTE_MONK", name: "Elias Torres", product: "ATLAS_ENGINE", cohort: "COHORT_05", raised: "$3.1M", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80", color: "primary" },
  { handle: "ZERO_SIGNAL", name: "Amara Diallo", product: "KINETIC_GRID", cohort: "COHORT_07", raised: "SEED", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80", color: "tertiary" },
];

// ── Partners ──────────────────────────────────────────────────────────────────

export const partners = [
  { name: "POLYGON", category: "BLOCKCHAIN INFRASTRUCTURE", desc: "Layer 2 scaling solution for on-chain product registry and voting.", url: "https://polygon.technology", tier: "CORE" },
  { name: "SOLANA", category: "HIGH-SPEED CHAIN", desc: "Ultra-fast settlement layer for sub-second transaction finality.", url: "https://solana.com", tier: "CORE" },
  { name: "CHAINLINK", category: "ORACLE NETWORK", desc: "Decentralized oracle network providing tamper-proof data feeds.", url: "https://chain.link", tier: "PROTOCOL" },
  { name: "ALCHEMY", category: "WEB3 DEVELOPER PLATFORM", desc: "Enterprise-grade node infrastructure for API endpoints.", url: "https://alchemy.com", tier: "PROTOCOL" },
  { name: "INFURA", category: "ETHEREUM GATEWAY", desc: "Redundant Ethereum access layer for smart contract interactions.", url: "https://infura.io", tier: "PROTOCOL" },
  { name: "IPFS", category: "DECENTRALIZED STORAGE", desc: "Distributed file system for product assets, metadata, and docs.", url: "https://ipfs.tech", tier: "INFRASTRUCTURE" },
];
