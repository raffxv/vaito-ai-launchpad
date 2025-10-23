import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "id" | "zh" | "ko" | "ru" | "ar";

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
    "hero.joinAirdrop": "Join Airdrop Phase 2",
    
    // Presale Dialog
    "presale.title": "VAITO.AI Presale",
    "presale.description": "Send SOL to participate in the presale",
    "presale.address": "Presale Address",
    "presale.calculator": "Presale Calculator",
    "presale.enterAmount": "Enter SOL Amount",
    "presale.willReceive": "You Will Receive",
    "presale.exchangeRate": "Exchange Rate",
    "presale.minBuy": "Min Buy",
    "presale.instructions": "Send SOL to presale address and get your $VAITO in 3 minutes",
    "presale.endsIn": "Presale Ends In",
    "presale.days": "Days",
    "presale.hours": "Hours",
    "presale.minutes": "Minutes",
    "presale.seconds": "Seconds",
    "presale.raised": "Raised",
    "presale.complete": "Complete",
    "presale.remaining": "Remaining",
    "presale.warning": "⚠️ Always verify the contract address before sending funds. Do not send from exchanges.",
    
    // Airdrop
    "airdrop.title": "Join VAITO Airdrop Phase 2",
    "airdrop.description": "Submit your SOL address to participate in the airdrop",
    "airdrop.addressLabel": "Your SOL Address",
    "airdrop.addressPlaceholder": "Enter your Solana wallet address",
    "airdrop.submit": "Submit",
    "airdrop.success": "Successfully registered for airdrop!",
    "airdrop.successDesc": "You will receive your VAITO tokens when the airdrop is distributed.",
    "airdrop.invalidAddress": "Please enter a valid Solana address",
    "airdrop.endsOn": "Registration ends on October 23, 2024",
    
    // Listing
    "listing.title": "VAITO LISTING 28 OCT",
    
    // Special Price
    "specialPrice.title": "Special Price",
    "specialPrice.bonus": "BONUS",
    "specialPrice.dates": "17 Oct - 20 Oct",
    "specialPrice.description": "Minimum purchase of 4 SOL will get extra 5x bonus",
    
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
    "hero.joinAirdrop": "Gabung Airdrop Fase 2",
    
    // Presale Dialog
    "presale.title": "Presale VAITO.AI",
    "presale.description": "Kirim SOL untuk berpartisipasi dalam presale",
    "presale.address": "Alamat Presale",
    "presale.calculator": "Kalkulator Presale",
    "presale.enterAmount": "Masukkan Jumlah SOL",
    "presale.willReceive": "Anda Akan Menerima",
    "presale.exchangeRate": "Nilai Tukar",
    "presale.minBuy": "Pembelian Min",
    "presale.instructions": "Kirim SOL ke alamat presale dan dapatkan $VAITO Anda dalam 3 menit",
    "presale.endsIn": "Presale Berakhir Dalam",
    "presale.days": "Hari",
    "presale.hours": "Jam",
    "presale.minutes": "Menit",
    "presale.seconds": "Detik",
    "presale.raised": "Terkumpul",
    "presale.complete": "Selesai",
    "presale.remaining": "Tersisa",
    "presale.warning": "⚠️ Selalu verifikasi alamat kontrak sebelum mengirim dana. Jangan kirim dari exchange.",
    
    // Airdrop
    "airdrop.title": "Gabung Airdrop VAITO Fase 2",
    "airdrop.description": "Kirimkan alamat SOL Anda untuk berpartisipasi dalam airdrop",
    "airdrop.addressLabel": "Alamat SOL Anda",
    "airdrop.addressPlaceholder": "Masukkan alamat wallet Solana Anda",
    "airdrop.submit": "Kirim",
    "airdrop.success": "Berhasil terdaftar untuk airdrop!",
    "airdrop.successDesc": "Anda akan menerima token VAITO ketika airdrop didistribusikan.",
    "airdrop.invalidAddress": "Silakan masukkan alamat Solana yang valid",
    "airdrop.endsOn": "Pendaftaran berakhir pada 23 Oktober 2024",
    
    // Listing
    "listing.title": "VAITO LISTING 28 OKT",
    
    // Special Price
    "specialPrice.title": "Harga Spesial",
    "specialPrice.bonus": "BONUS",
    "specialPrice.dates": "17 Okt - 20 Okt",
    "specialPrice.description": "Pembelian minimal 4 SOL akan dapat extra bonus 5x",
    
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
  },
  zh: {
    // Header
    "nav.about": "关于",
    "nav.tokenomics": "代币经济",
    "nav.roadmap": "路线图",
    
    // Hero
    "hero.subtitle": "加入我们的",
    "hero.community": "社区",
    "hero.description": "成为加密运动的一部分，随时了解并与一切保持联系。",
    "hero.buyNow": "立即购买",
    "hero.learnMore": "了解更多",
    "hero.joinAirdrop": "加入第二阶段空投",
    
    // Presale Dialog
    "presale.title": "VAITO.AI 预售",
    "presale.description": "发送 SOL 参与预售",
    "presale.address": "预售地址",
    "presale.calculator": "预售计算器",
    "presale.enterAmount": "输入 SOL 数量",
    "presale.willReceive": "您将收到",
    "presale.exchangeRate": "汇率",
    "presale.minBuy": "最小购买",
    "presale.instructions": "将 SOL 发送到预售地址，3 分钟内获得您的 $VAITO",
    "presale.endsIn": "预售结束倒计时",
    "presale.days": "天",
    "presale.hours": "小时",
    "presale.minutes": "分钟",
    "presale.seconds": "秒",
    "presale.raised": "已筹集",
    "presale.complete": "完成",
    "presale.remaining": "剩余",
    "presale.warning": "⚠️ 发送资金前请务必验证合约地址。请勿从交易所发送。",
    
    // Airdrop
    "airdrop.title": "加入VAITO第二阶段空投",
    "airdrop.description": "提交您的SOL地址以参与空投",
    "airdrop.addressLabel": "您的SOL地址",
    "airdrop.addressPlaceholder": "输入您的Solana钱包地址",
    "airdrop.submit": "提交",
    "airdrop.success": "成功注册空投！",
    "airdrop.successDesc": "空投分发时您将收到VAITO代币。",
    "airdrop.invalidAddress": "请输入有效的Solana地址",
    "airdrop.endsOn": "注册截止日期：2024年10月23日",
    
    // Listing
    "listing.title": "VAITO上市 10月28日",
    
    // Special Price
    "specialPrice.title": "特价优惠",
    "specialPrice.bonus": "奖励",
    "specialPrice.dates": "10月17日 - 10月20日",
    "specialPrice.description": "最低购买4 SOL将获得额外5倍奖励",
    
    // About
    "about.title": "关于 VAITO.AI",
    "about.description1": "VAITO.AI 是一个革命性的加密货币项目，将尖端人工智能与区块链技术相结合。",
    "about.description2": "我们的使命是创建一个去中心化的生态系统，人工智能驱动的解决方案与区块链的透明度和安全性相结合。",
    "about.card1.title": "人工智能驱动",
    "about.card1.description": "先进的人工智能算法驱动创新",
    "about.card2.title": "区块链安全",
    "about.card2.description": "基于 Solana 构建，实现快速安全的交易",
    "about.card3.title": "社区驱动",
    "about.card3.description": "由全球加密货币爱好者社区提供支持",
    
    // Tokenomics
    "tokenomics.title": "代币经济",
    "tokenomics.total": "总供应量",
    "tokenomics.liquidity": "流动性池",
    "tokenomics.presale": "预售",
    "tokenomics.marketing": "营销",
    "tokenomics.team": "团队",
    "tokenomics.rewards": "社区奖励",
    "tokenomics.info.title": "代币分配",
    "tokenomics.info.point1": "公平启动，无团队分配",
    "tokenomics.info.point2": "流动性锁定 1 年",
    "tokenomics.info.point3": "反鲸机制到位",
    "tokenomics.info.point4": "持有者自动 LP 奖励",
    
    // Roadmap
    "roadmap.title": "路线图",
    "roadmap.phase1.title": "第一阶段：启动",
    "roadmap.phase1.item1": "网站启动",
    "roadmap.phase1.item2": "社区建设",
    "roadmap.phase1.item3": "预售活动",
    "roadmap.phase1.item4": "社交媒体存在",
    "roadmap.phase2.title": "第二阶段：增长",
    "roadmap.phase2.item1": "DEX 上市",
    "roadmap.phase2.item2": "营销活动",
    "roadmap.phase2.item3": "合作伙伴公告",
    "roadmap.phase2.item4": "审计完成",
    "roadmap.phase3.title": "第三阶段：扩展",
    "roadmap.phase3.item1": "CEX 上市",
    "roadmap.phase3.item2": "AI 平台测试版",
    "roadmap.phase3.item3": "全球营销",
    "roadmap.phase3.item4": "社区治理",
    "roadmap.phase4.title": "第四阶段：创新",
    "roadmap.phase4.item1": "AI 产品发布",
    "roadmap.phase4.item2": "跨链桥",
    "roadmap.phase4.item3": "移动应用发布",
    "roadmap.phase4.item4": "生态系统扩展",
    
    // Footer
    "footer.rights": "版权所有。",
    "footer.community": "社区",
    "footer.resources": "资源",
    "footer.whitepaper": "白皮书",
    "footer.audit": "审计",
    "footer.docs": "文档"
  },
  ko: {
    // Header
    "nav.about": "소개",
    "nav.tokenomics": "토크노믹스",
    "nav.roadmap": "로드맵",
    
    // Hero
    "hero.subtitle": "우리의",
    "hero.community": "커뮤니티에 참여하세요",
    "hero.description": "암호화폐 운동의 일원이 되어 모든 것에 대한 정보를 받고 연결을 유지하세요.",
    "hero.buyNow": "지금 구매",
    "hero.learnMore": "더 알아보기",
    "hero.joinAirdrop": "2단계 에어드랍 참여",
    
    // Presale Dialog
    "presale.title": "VAITO.AI 프리세일",
    "presale.description": "프리세일에 참여하려면 SOL을 보내세요",
    "presale.address": "프리세일 주소",
    "presale.calculator": "프리세일 계산기",
    "presale.enterAmount": "SOL 금액 입력",
    "presale.willReceive": "받으실 금액",
    "presale.exchangeRate": "환율",
    "presale.minBuy": "최소 구매",
    "presale.instructions": "사전 판매 주소로 SOL을 보내고 3분 안에 $VAITO를 받으세요",
    "presale.endsIn": "프리세일 종료까지",
    "presale.days": "일",
    "presale.hours": "시간",
    "presale.minutes": "분",
    "presale.seconds": "초",
    "presale.raised": "모금액",
    "presale.complete": "완료",
    "presale.remaining": "남은",
    "presale.warning": "⚠️ 자금을 보내기 전에 항상 컨트랙트 주소를 확인하세요. 거래소에서 보내지 마세요.",
    
    // Airdrop
    "airdrop.title": "VAITO 2단계 에어드랍 참여",
    "airdrop.description": "에어드랍에 참여하려면 SOL 주소를 제출하세요",
    "airdrop.addressLabel": "귀하의 SOL 주소",
    "airdrop.addressPlaceholder": "솔라나 지갑 주소를 입력하세요",
    "airdrop.submit": "제출",
    "airdrop.success": "에어드랍 등록 완료!",
    "airdrop.successDesc": "에어드랍 배포 시 VAITO 토큰을 받게 됩니다.",
    "airdrop.invalidAddress": "유효한 솔라나 주소를 입력하세요",
    "airdrop.endsOn": "등록 마감: 2024년 10월 23일",
    
    // Listing
    "listing.title": "VAITO 상장 10월 28일",
    
    // Special Price
    "specialPrice.title": "특별 가격",
    "specialPrice.bonus": "보너스",
    "specialPrice.dates": "10월 17일 - 10월 20일",
    "specialPrice.description": "최소 4 SOL 구매 시 추가 5배 보너스 제공",
    
    // About
    "about.title": "VAITO.AI 소개",
    "about.description1": "VAITO.AI는 최첨단 인공지능과 블록체인 기술을 결합한 혁신적인 암호화폐 프로젝트입니다.",
    "about.description2": "우리의 임무는 AI 기반 솔루션이 블록체인의 투명성과 보안을 만나는 탈중앙화 생태계를 만드는 것입니다.",
    "about.card1.title": "AI 기반",
    "about.card1.description": "혁신을 주도하는 고급 인공지능 알고리즘",
    "about.card2.title": "블록체인 보안",
    "about.card2.description": "빠르고 안전한 거래를 위해 Solana에 구축됨",
    "about.card3.title": "커뮤니티 주도",
    "about.card3.description": "전 세계 암호화폐 애호가 커뮤니티가 지원",
    
    // Tokenomics
    "tokenomics.title": "토크노믹스",
    "tokenomics.total": "총 공급량",
    "tokenomics.liquidity": "유동성 풀",
    "tokenomics.presale": "프리세일",
    "tokenomics.marketing": "마케팅",
    "tokenomics.team": "팀",
    "tokenomics.rewards": "커뮤니티 보상",
    "tokenomics.info.title": "토큰 분배",
    "tokenomics.info.point1": "팀 할당 없이 공정한 출시",
    "tokenomics.info.point2": "1년간 유동성 잠금",
    "tokenomics.info.point3": "고래 방지 메커니즘 적용",
    "tokenomics.info.point4": "홀더를 위한 자동 LP 보상",
    
    // Roadmap
    "roadmap.title": "로드맵",
    "roadmap.phase1.title": "1단계: 출시",
    "roadmap.phase1.item1": "웹사이트 출시",
    "roadmap.phase1.item2": "커뮤니티 구축",
    "roadmap.phase1.item3": "프리세일 캠페인",
    "roadmap.phase1.item4": "소셜 미디어 활동",
    "roadmap.phase2.title": "2단계: 성장",
    "roadmap.phase2.item1": "DEX 상장",
    "roadmap.phase2.item2": "마케팅 캠페인",
    "roadmap.phase2.item3": "파트너십 발표",
    "roadmap.phase2.item4": "감사 완료",
    "roadmap.phase3.title": "3단계: 확장",
    "roadmap.phase3.item1": "CEX 상장",
    "roadmap.phase3.item2": "AI 플랫폼 베타",
    "roadmap.phase3.item3": "글로벌 마케팅",
    "roadmap.phase3.item4": "커뮤니티 거버넌스",
    "roadmap.phase4.title": "4단계: 혁신",
    "roadmap.phase4.item1": "AI 제품 출시",
    "roadmap.phase4.item2": "크로스체인 브릿지",
    "roadmap.phase4.item3": "모바일 앱 출시",
    "roadmap.phase4.item4": "생태계 확장",
    
    // Footer
    "footer.rights": "모든 권리 보유.",
    "footer.community": "커뮤니티",
    "footer.resources": "리소스",
    "footer.whitepaper": "백서",
    "footer.audit": "감사",
    "footer.docs": "문서"
  },
  ru: {
    // Header
    "nav.about": "О нас",
    "nav.tokenomics": "Токеномика",
    "nav.roadmap": "Дорожная карта",
    
    // Hero
    "hero.subtitle": "ПРИСОЕДИНЯЙТЕСЬ К НАШЕМУ",
    "hero.community": "СООБЩЕСТВУ",
    "hero.description": "Станьте частью криптовалютного движения, будьте в курсе и на связи со всем.",
    "hero.buyNow": "КУПИТЬ СЕЙЧАС",
    "hero.learnMore": "УЗНАТЬ БОЛЬШЕ",
    "hero.joinAirdrop": "Присоединиться к раздаче 2 этапа",
    
    // Presale Dialog
    "presale.title": "Предпродажа VAITO.AI",
    "presale.description": "Отправьте SOL для участия в предпродаже",
    "presale.address": "Адрес предпродажи",
    "presale.calculator": "Калькулятор предпродажи",
    "presale.enterAmount": "Введите количество SOL",
    "presale.willReceive": "Вы получите",
    "presale.exchangeRate": "Обменный курс",
    "presale.minBuy": "Мин. покупка",
    "presale.instructions": "Отправьте SOL на адрес предпродажи и получите свои $VAITO через 3 минуты",
    "presale.endsIn": "Предпродажа заканчивается через",
    "presale.days": "Дней",
    "presale.hours": "Часов",
    "presale.minutes": "Минут",
    "presale.seconds": "Секунд",
    "presale.raised": "Собрано",
    "presale.complete": "Завершено",
    "presale.remaining": "Осталось",
    "presale.warning": "⚠️ Всегда проверяйте адрес контракта перед отправкой средств. Не отправляйте с бирж.",
    
    // Airdrop
    "airdrop.title": "Присоединиться к раздаче VAITO 2 этапа",
    "airdrop.description": "Отправьте свой адрес SOL для участия в раздаче",
    "airdrop.addressLabel": "Ваш адрес SOL",
    "airdrop.addressPlaceholder": "Введите адрес вашего кошелька Solana",
    "airdrop.submit": "Отправить",
    "airdrop.success": "Успешная регистрация на раздачу!",
    "airdrop.successDesc": "Вы получите токены VAITO при распределении раздачи.",
    "airdrop.invalidAddress": "Пожалуйста, введите действительный адрес Solana",
    "airdrop.endsOn": "Регистрация до 23 октября 2024 г.",
    
    // Listing
    "listing.title": "ЛИСТИНГ VAITO 28 ОКТ",
    
    // Special Price
    "specialPrice.title": "Специальная цена",
    "specialPrice.bonus": "БОНУС",
    "specialPrice.dates": "17 окт - 20 окт",
    "specialPrice.description": "При покупке минимум 4 SOL получите дополнительный бонус x5",
    
    // About
    "about.title": "О VAITO.AI",
    "about.description1": "VAITO.AI - это революционный криптовалютный проект, который сочетает передовой искусственный интеллект с технологией блокчейн.",
    "about.description2": "Наша миссия - создать децентрализованную экосистему, где решения на базе ИИ встречаются с прозрачностью и безопасностью блокчейна.",
    "about.card1.title": "На базе ИИ",
    "about.card1.description": "Передовые алгоритмы искусственного интеллекта, стимулирующие инновации",
    "about.card2.title": "Безопасность блокчейна",
    "about.card2.description": "Построен на Solana для быстрых и безопасных транзакций",
    "about.card3.title": "Сообщество",
    "about.card3.description": "Поддерживается глобальным сообществом криптоэнтузиастов",
    
    // Tokenomics
    "tokenomics.title": "Токеномика",
    "tokenomics.total": "Общее предложение",
    "tokenomics.liquidity": "Пул ликвидности",
    "tokenomics.presale": "Предпродажа",
    "tokenomics.marketing": "Маркетинг",
    "tokenomics.team": "Команда",
    "tokenomics.rewards": "Награды сообщества",
    "tokenomics.info.title": "Распределение токенов",
    "tokenomics.info.point1": "Честный запуск без выделения команде",
    "tokenomics.info.point2": "Ликвидность заблокирована на 1 год",
    "tokenomics.info.point3": "Механизмы против китов",
    "tokenomics.info.point4": "Автоматические награды LP для держателей",
    
    // Roadmap
    "roadmap.title": "Дорожная карта",
    "roadmap.phase1.title": "Фаза 1: Запуск",
    "roadmap.phase1.item1": "Запуск сайта",
    "roadmap.phase1.item2": "Создание сообщества",
    "roadmap.phase1.item3": "Кампания предпродажи",
    "roadmap.phase1.item4": "Присутствие в соцсетях",
    "roadmap.phase2.title": "Фаза 2: Рост",
    "roadmap.phase2.item1": "Листинг на DEX",
    "roadmap.phase2.item2": "Маркетинговая кампания",
    "roadmap.phase2.item3": "Объявления о партнерстве",
    "roadmap.phase2.item4": "Завершение аудита",
    "roadmap.phase3.title": "Фаза 3: Расширение",
    "roadmap.phase3.item1": "Листинги на CEX",
    "roadmap.phase3.item2": "Бета-версия ИИ платформы",
    "roadmap.phase3.item3": "Глобальный маркетинг",
    "roadmap.phase3.item4": "Управление сообществом",
    "roadmap.phase4.title": "Фаза 4: Инновации",
    "roadmap.phase4.item1": "Запуск продуктов ИИ",
    "roadmap.phase4.item2": "Кросс-чейн мост",
    "roadmap.phase4.item3": "Релиз мобильного приложения",
    "roadmap.phase4.item4": "Расширение экосистемы",
    
    // Footer
    "footer.rights": "Все права защищены.",
    "footer.community": "Сообщество",
    "footer.resources": "Ресурсы",
    "footer.whitepaper": "Whitepaper",
    "footer.audit": "Аудит",
    "footer.docs": "Документация"
  },
  ar: {
    // Header
    "nav.about": "حول",
    "nav.tokenomics": "اقتصاديات الرمز",
    "nav.roadmap": "خارطة الطريق",
    
    // Hero
    "hero.subtitle": "انضم إلى",
    "hero.community": "مجتمعنا",
    "hero.description": "كن جزءًا من حركة العملات المشفرة، وابق على اطلاع ومتصلاً بكل شيء.",
    "hero.buyNow": "اشتر الآن",
    "hero.learnMore": "اعرف المزيد",
    "hero.joinAirdrop": "انضم إلى المرحلة الثانية من الإسقاط الجوي",
    
    // Presale Dialog
    "presale.title": "VAITO.AI البيع المسبق",
    "presale.description": "أرسل SOL للمشاركة في البيع المسبق",
    "presale.address": "عنوان البيع المسبق",
    "presale.calculator": "حاسبة البيع المسبق",
    "presale.enterAmount": "أدخل مبلغ SOL",
    "presale.willReceive": "سوف تستلم",
    "presale.exchangeRate": "سعر الصرف",
    "presale.minBuy": "الحد الأدنى للشراء",
    "presale.instructions": "أرسل SOL إلى عنوان البيع المسبق واحصل على $VAITO الخاص بك خلال 3 دقائق",
    "presale.endsIn": "البيع المسبق ينتهي في",
    "presale.days": "أيام",
    "presale.hours": "ساعات",
    "presale.minutes": "دقائق",
    "presale.seconds": "ثواني",
    "presale.raised": "تم جمع",
    "presale.complete": "مكتمل",
    "presale.remaining": "المتبقي",
    "presale.warning": "⚠️ تحقق دائمًا من عنوان العقد قبل إرسال الأموال. لا ترسل من البورصات.",
    
    // Airdrop
    "airdrop.title": "انضم إلى الإسقاط الجوي لـ VAITO المرحلة الثانية",
    "airdrop.description": "قدم عنوان SOL الخاص بك للمشاركة في الإسقاط الجوي",
    "airdrop.addressLabel": "عنوان SOL الخاص بك",
    "airdrop.addressPlaceholder": "أدخل عنوان محفظة Solana الخاصة بك",
    "airdrop.submit": "إرسال",
    "airdrop.success": "تم التسجيل بنجاح في الإسقاط الجوي!",
    "airdrop.successDesc": "ستتلقى رموز VAITO عند توزيع الإسقاط الجوي.",
    "airdrop.invalidAddress": "يرجى إدخال عنوان Solana صالح",
    "airdrop.endsOn": "ينتهي التسجيل في 23 أكتوبر 2024",
    
    // Listing
    "listing.title": "إدراج VAITO 28 أكتوبر",
    
    // Special Price
    "specialPrice.title": "سعر خاص",
    "specialPrice.bonus": "مكافأة",
    "specialPrice.dates": "17 أكتوبر - 20 أكتوبر",
    "specialPrice.description": "الحد الأدنى للشراء 4 SOL سيحصل على مكافأة إضافية 5x",
    
    // About
    "about.title": "حول VAITO.AI",
    "about.description1": "VAITO.AI هو مشروع عملة مشفرة ثوري يجمع بين الذكاء الاصطناعي المتطور وتقنية البلوكشين.",
    "about.description2": "مهمتنا هي إنشاء نظام بيئي لامركزي حيث تلتقي الحلول المدعومة بالذكاء الاصطناعي مع شفافية وأمان البلوكشين.",
    "about.card1.title": "مدعوم بالذكاء الاصطناعي",
    "about.card1.description": "خوارزميات ذكاء اصطناعي متقدمة تدفع الابتكار",
    "about.card2.title": "أمان البلوكشين",
    "about.card2.description": "مبني على Solana للمعاملات السريعة والآمنة",
    "about.card3.title": "مدفوع بالمجتمع",
    "about.card3.description": "مدعوم من مجتمع عالمي من عشاق العملات المشفرة",
    
    // Tokenomics
    "tokenomics.title": "اقتصاديات الرمز",
    "tokenomics.total": "إجمالي العرض",
    "tokenomics.liquidity": "مجمع السيولة",
    "tokenomics.presale": "البيع المسبق",
    "tokenomics.marketing": "التسويق",
    "tokenomics.team": "الفريق",
    "tokenomics.rewards": "مكافآت المجتمع",
    "tokenomics.info.title": "توزيع الرموز",
    "tokenomics.info.point1": "إطلاق عادل بدون تخصيص للفريق",
    "tokenomics.info.point2": "السيولة مقفلة لمدة سنة واحدة",
    "tokenomics.info.point3": "آليات مضادة للحيتان",
    "tokenomics.info.point4": "مكافآت LP تلقائية للحاملين",
    
    // Roadmap
    "roadmap.title": "خارطة الطريق",
    "roadmap.phase1.title": "المرحلة 1: الإطلاق",
    "roadmap.phase1.item1": "إطلاق الموقع",
    "roadmap.phase1.item2": "بناء المجتمع",
    "roadmap.phase1.item3": "حملة البيع المسبق",
    "roadmap.phase1.item4": "التواجد على وسائل التواصل الاجتماعي",
    "roadmap.phase2.title": "المرحلة 2: النمو",
    "roadmap.phase2.item1": "الإدراج في DEX",
    "roadmap.phase2.item2": "الحملة التسويقية",
    "roadmap.phase2.item3": "إعلانات الشراكة",
    "roadmap.phase2.item4": "إتمام التدقيق",
    "roadmap.phase3.title": "المرحلة 3: التوسع",
    "roadmap.phase3.item1": "الإدراج في CEX",
    "roadmap.phase3.item2": "النسخة التجريبية لمنصة الذكاء الاصطناعي",
    "roadmap.phase3.item3": "التسويق العالمي",
    "roadmap.phase3.item4": "حوكمة المجتمع",
    "roadmap.phase4.title": "المرحلة 4: الابتكار",
    "roadmap.phase4.item1": "إطلاق منتجات الذكاء الاصطناعي",
    "roadmap.phase4.item2": "جسر عبر السلاسل",
    "roadmap.phase4.item3": "إصدار تطبيق الجوال",
    "roadmap.phase4.item4": "توسيع النظام البيئي",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.community": "المجتمع",
    "footer.resources": "الموارد",
    "footer.whitepaper": "الورقة البيضاء",
    "footer.audit": "التدقيق",
    "footer.docs": "التوثيق"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "en" || saved === "id" || saved === "zh" || saved === "ko" || saved === "ru" || saved === "ar") ? saved : "en";
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
