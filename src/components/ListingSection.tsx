import { useLanguage } from "@/contexts/LanguageContext";

const ListingSection = () => {
  const { t } = useLanguage();

  const exchanges = [
    {
      name: "Binance",
      logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    },
    {
      name: "CoinGecko",
      logo: "https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png",
    },
    {
      name: "CoinMarketCap",
      logo: "https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_logo.svg",
    },
    {
      name: "MEXC",
      logo: "https://www.mexc.com/static/images/common/logo.svg",
    },
    {
      name: "Bitget",
      logo: "https://www.bitget.com/favicon.ico",
    },
    {
      name: "Raydium",
      logo: "https://raydium.io/logo/logo-only-icon.svg",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-glow mb-2">
              {t("listing.title")}
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        {/* Exchange Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
          {exchanges.map((exchange) => (
            <div
              key={exchange.name}
              className="group relative bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] flex flex-col items-center justify-center"
            >
              <div className="w-full h-16 flex items-center justify-center mb-3">
                <img
                  src={exchange.logo}
                  alt={`${exchange.name} logo`}
                  className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden text-center">
                  <p className="font-semibold text-foreground text-lg">{exchange.name}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-medium">{exchange.name}</p>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-200" />
      </div>
    </section>
  );
};

export default ListingSection;
