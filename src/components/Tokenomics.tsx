const Tokenomics = () => {
  const tokenData = [
    { label: "Total Supply", value: "6,823,901,732", subtext: "VAITO" },
    { label: "Presale", value: "10%", subtext: "682M tokens" },
    { label: "Liquidity Pool", value: "35%", subtext: "2.39B tokens" },
    { label: "Community Rewards", value: "20%", subtext: "1.36B tokens" },
    { label: "Development", value: "15%", subtext: "1.02B tokens" },
    { label: "Marketing", value: "10%", subtext: "682M tokens" },
    { label: "Team & Advisors", value: "10%", subtext: "682M tokens (vested)" },
  ];

  return (
    <section className="py-24 px-4 relative" id="tokenomics">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-glow">
            TOKENOMICS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-muted-foreground text-lg">
            Fair distribution for sustainable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokenData.map((item, index) => (
            <div 
              key={index}
              className="neon-border rounded-xl p-6 backdrop-blur-sm bg-card/30 hover:bg-card/50 transition-all hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.3)] group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm font-medium">{item.label}</span>
                  <div className="w-8 h-8 border border-primary/50 rounded-full flex items-center justify-center group-hover:border-primary transition-all">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
                
                <div className="font-orbitron font-bold text-3xl text-primary text-glow">
                  {item.value}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 neon-border rounded-xl p-8 backdrop-blur-sm bg-card/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-orbitron font-bold text-xl mb-4 text-primary">Token Utility</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Governance voting rights for platform decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Staking rewards for long-term holders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Access to premium AI trading features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Reduced transaction fees on platform</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron font-bold text-xl mb-4 text-primary">Vesting Schedule</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Team tokens: 24-month vesting with 6-month cliff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Advisor tokens: 18-month vesting with 3-month cliff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Development fund: Quarterly releases over 3 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Community rewards: Monthly distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
