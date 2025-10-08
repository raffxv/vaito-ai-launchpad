import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.about": "About",
    "nav.tokenomics": "Tokenomics",
    "nav.roadmap": "Roadmap",
    
    // Hero
    "hero.subtitle": "JOIN OUR",
    "hero.community": "COMMUNITY",
    "hero.description": "Be part of the crypto movement, stay informed and connected with everything.",
    "hero.buyNow": "BUY NOW",
    "hero.learnMore": "LEARN MORE",
    
    // Presale Dialog
    "presale.title": "VAITO.AI Presale",
    "presale.description": "Send SOL to participate in the presale",
    "presale.address": "Presale Address",
    "presale.calculator": "Presale Calculator",
    "presale.enterAmount": "Enter SOL Amount",
    "presale.willReceive": "You Will Receive",
    "presale.exchangeRate": "Exchange Rate",
    "presale.minBuy": "Min Buy",
    "presale.raised": "Raised",
    "presale.complete": "Complete",
    "presale.remaining": "Remaining",
    "presale.warning": "⚠️ Always verify the contract address before sending funds. Do not send from exchanges.",
    
    // About
    "about.title": "About VAITO.AI",
    "about.description1": "VAITO.AI is a revolutionary cryptocurrency project that combines cutting-edge artificial intelligence with blockchain technology.",
    "about.description2": "Our mission is to create a decentralized ecosystem where AI-powered solutions meet the transparency and security of blockchain.",
    "about.card1.title": "AI-Powered",
    "about.card1.description": "Advanced artificial intelligence algorithms driving innovation",
    "about.card2.title": "Blockchain Security",
    "about.card2.description": "Built on Solana for fast and secure transactions",
    "about.card3.title": "Community Driven",
    "about.card3.description": "Powered by a global community of crypto enthusiasts",
    
    // Tokenomics
    "tokenomics.title": "Tokenomics",
    "tokenomics.total": "Total Supply",
    "tokenomics.liquidity": "Liquidity Pool",
    "tokenomics.presale": "Presale",
    "tokenomics.marketing": "Marketing",
    "tokenomics.team": "Team",
    "tokenomics.rewards": "Community Rewards",
    "tokenomics.info.title": "Token Distribution",
    "tokenomics.info.point1": "Fair launch with no team allocation",
    "tokenomics.info.point2": "Liquidity locked for 1 year",
    "tokenomics.info.point3": "Anti-whale mechanisms in place",
    "tokenomics.info.point4": "Automatic LP rewards for holders",
    
    // Roadmap
    "roadmap.title": "Roadmap",
    "roadmap.phase1.title": "Phase 1: Launch",
    "roadmap.phase1.item1": "Website Launch",
    "roadmap.phase1.item2": "Community Building",
    "roadmap.phase1.item3": "Presale Campaign",
    "roadmap.phase1.item4": "Social Media Presence",
    "roadmap.phase2.title": "Phase 2: Growth",
    "roadmap.phase2.item1": "DEX Listing",
    "roadmap.phase2.item2": "Marketing Campaign",
    "roadmap.phase2.item3": "Partnership Announcements",
    "roadmap.phase2.item4": "Audit Completion",
    "roadmap.phase3.title": "Phase 3: Expansion",
    "roadmap.phase3.item1": "CEX Listings",
    "roadmap.phase3.item2": "AI Platform Beta",
    "roadmap.phase3.item3": "Global Marketing",
    "roadmap.phase3.item4": "Community Governance",
    "roadmap.phase4.title": "Phase 4: Innovation",
    "roadmap.phase4.item1": "AI Products Launch",
    "roadmap.phase4.item2": "Cross-chain Bridge",
    "roadmap.phase4.item3": "Mobile App Release",
    "roadmap.phase4.item4": "Ecosystem Expansion",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.community": "Community",
    "footer.resources": "Resources",
    "footer.whitepaper": "Whitepaper",
    "footer.audit": "Audit",
    "footer.docs": "Documentation"
  },
  id: {
    // Header
    "nav.about": "Tentang",
    "nav.tokenomics": "Tokenomik",
    "nav.roadmap": "Peta Jalan",
    
    // Hero
    "hero.subtitle": "BERGABUNG DENGAN",
    "hero.community": "KOMUNITAS KAMI",
    "hero.description": "Jadilah bagian dari gerakan kripto, tetap terinformasi dan terhubung dengan segalanya.",
    "hero.buyNow": "BELI SEKARANG",
    "hero.learnMore": "PELAJARI LEBIH LANJUT",
    
    // Presale Dialog
    "presale.title": "Presale VAITO.AI",
    "presale.description": "Kirim SOL untuk berpartisipasi dalam presale",
    "presale.address": "Alamat Presale",
    "presale.calculator": "Kalkulator Presale",
    "presale.enterAmount": "Masukkan Jumlah SOL",
    "presale.willReceive": "Anda Akan Menerima",
    "presale.exchangeRate": "Nilai Tukar",
    "presale.minBuy": "Pembelian Min",
    "presale.raised": "Terkumpul",
    "presale.complete": "Selesai",
    "presale.remaining": "Tersisa",
    "presale.warning": "⚠️ Selalu verifikasi alamat kontrak sebelum mengirim dana. Jangan kirim dari exchange.",
    
    // About
    "about.title": "Tentang VAITO.AI",
    "about.description1": "VAITO.AI adalah proyek cryptocurrency revolusioner yang menggabungkan kecerdasan buatan canggih dengan teknologi blockchain.",
    "about.description2": "Misi kami adalah menciptakan ekosistem terdesentralisasi di mana solusi bertenaga AI bertemu dengan transparansi dan keamanan blockchain.",
    "about.card1.title": "Bertenaga AI",
    "about.card1.description": "Algoritma kecerdasan buatan canggih mendorong inovasi",
    "about.card2.title": "Keamanan Blockchain",
    "about.card2.description": "Dibangun di Solana untuk transaksi cepat dan aman",
    "about.card3.title": "Didorong Komunitas",
    "about.card3.description": "Didukung oleh komunitas global penggemar kripto",
    
    // Tokenomics
    "tokenomics.title": "Tokenomik",
    "tokenomics.total": "Total Pasokan",
    "tokenomics.liquidity": "Pool Likuiditas",
    "tokenomics.presale": "Presale",
    "tokenomics.marketing": "Pemasaran",
    "tokenomics.team": "Tim",
    "tokenomics.rewards": "Hadiah Komunitas",
    "tokenomics.info.title": "Distribusi Token",
    "tokenomics.info.point1": "Peluncuran adil tanpa alokasi tim",
    "tokenomics.info.point2": "Likuiditas terkunci selama 1 tahun",
    "tokenomics.info.point3": "Mekanisme anti-whale diterapkan",
    "tokenomics.info.point4": "Hadiah LP otomatis untuk pemegang",
    
    // Roadmap
    "roadmap.title": "Peta Jalan",
    "roadmap.phase1.title": "Fase 1: Peluncuran",
    "roadmap.phase1.item1": "Peluncuran Website",
    "roadmap.phase1.item2": "Membangun Komunitas",
    "roadmap.phase1.item3": "Kampanye Presale",
    "roadmap.phase1.item4": "Kehadiran Media Sosial",
    "roadmap.phase2.title": "Fase 2: Pertumbuhan",
    "roadmap.phase2.item1": "Listing DEX",
    "roadmap.phase2.item2": "Kampanye Pemasaran",
    "roadmap.phase2.item3": "Pengumuman Kemitraan",
    "roadmap.phase2.item4": "Penyelesaian Audit",
    "roadmap.phase3.title": "Fase 3: Ekspansi",
    "roadmap.phase3.item1": "Listing CEX",
    "roadmap.phase3.item2": "Beta Platform AI",
    "roadmap.phase3.item3": "Pemasaran Global",
    "roadmap.phase3.item4": "Tata Kelola Komunitas",
    "roadmap.phase4.title": "Fase 4: Inovasi",
    "roadmap.phase4.item1": "Peluncuran Produk AI",
    "roadmap.phase4.item2": "Jembatan Cross-chain",
    "roadmap.phase4.item3": "Rilis Aplikasi Mobile",
    "roadmap.phase4.item4": "Ekspansi Ekosistem",
    
    // Footer
    "footer.rights": "Hak cipta dilindungi.",
    "footer.community": "Komunitas",
    "footer.resources": "Sumber Daya",
    "footer.whitepaper": "Whitepaper",
    "footer.audit": "Audit",
    "footer.docs": "Dokumentasi"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "en" || saved === "id") ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
