import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaGift } from "react-icons/fa";
import { bg_abu } from "@/assets";

export function BankAccounts() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <section
      className="pb-20 py-10 px-6"
      style={{
        backgroundImage: `url(${bg_abu})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-primary font-rouge">
        Hadiah
      </h2>

      <h3 className="text-sm text-center">
        Bagi yang ingin memberikan hadiah, kami sangat berterima kasih atas
        perhatiannya. Berikut alternatif yang dapat Anda pilih.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">BNI</CardTitle>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/6/6d/BNI_%28Bureau_of_National_Investigations%29_Logo.png"
              }
              alt={`BNI logo`}
              className="h-5 w-15"
            />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-xl font-mono">{1060372313}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard("1060372313", 1)}
                className={cn(
                  "transition-all duration-200",
                  copiedIndex === 1 &&
                    "bg-green-500 text-white hover:bg-green-600"
                )}
              >
                {copiedIndex === 1 ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-primary/100 ">
              a/n Lintang Pandu Kusuma
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Kirim Gift</CardTitle>

            <FaGift className="h-5 w-15" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p className="text-md ">
                RT 02/Rw 01 Desa Adiwarno, Buayan, Kebumen
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard(
                    "RT 02/Rw 01 Desa Adiwarno, Buayan, Kebumen",
                    2
                  )
                }
                className={cn(
                  "transition-all duration-200",
                  copiedIndex === 2 &&
                    "bg-green-500 text-white hover:bg-green-600"
                )}
              >
                {copiedIndex === 2 ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
