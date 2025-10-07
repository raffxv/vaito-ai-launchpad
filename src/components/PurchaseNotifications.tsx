import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const PurchaseNotifications = () => {
  const { toast } = useToast();

  const solAmounts = [0.4, 0.21, 0.76, 1.4, 2.2, 0.55, 0.89, 1.1, 0.33, 1.8];
  
  const generateWalletAddress = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789';
    let address = '';
    for (let i = 0; i < 44; i++) {
      address += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return address;
  };

  const formatWallet = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const calculateVaito = (sol: number) => {
    const exchangeRate = 122781872;
    return (sol * exchangeRate).toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  const showPurchaseNotification = () => {
    const wallet = generateWalletAddress();
    const solAmount = solAmounts[Math.floor(Math.random() * solAmounts.length)];
    const vaitoAmount = calculateVaito(solAmount);

    toast({
      title: "🚀 New Purchase!",
      description: (
        <div className="space-y-1 mt-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Wallet:</span>
            <span className="font-mono text-primary">{formatWallet(wallet)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Amount:</span>
            <span className="font-bold text-foreground">{solAmount} SOL</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Received:</span>
            <span className="font-bold text-primary">{vaitoAmount} VAITO</span>
          </div>
        </div>
      ),
      duration: 5000,
    });
  };

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(() => {
      showPurchaseNotification();
    }, 5000);

    // Then show every 60 seconds
    const interval = setInterval(() => {
      showPurchaseNotification();
    }, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default PurchaseNotifications;
