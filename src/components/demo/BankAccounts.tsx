import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface BankAccount {
    bank: string
    number: string
    logo: string
}

export function BankAccounts() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

    const accounts: BankAccount[] = [
        { bank: 'BCA', number: '1234567890', logo: 'https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg' },
        { bank: 'BRI', number: '0987654321', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/BRI_2020.svg' },
        { bank: 'MANDIRI', number: '1122334455', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5i2DTq_zcdUSaJtpoAu3Pb4hxxtNUkPyMQ&s' },
    ]

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedIndex(index)
            setTimeout(() => setCopiedIndex(null), 2000)
        })
    }

    return (
        <section className="pb-20">
            <h2 className="text-3xl font-bold text-center mb-6">Bank Accounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {accounts.map((account, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {account.bank}
                            </CardTitle>
                            <img src={account.logo} alt={`${account.bank} logo`} className="h-5 w-15" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-mono">{account.number}</p>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => copyToClipboard(account.number, index)}
                                    className={cn(
                                        "transition-all duration-200",
                                        copiedIndex === index && "bg-green-500 text-white hover:bg-green-600"
                                    )}
                                >
                                    {copiedIndex === index ? (
                                        <Check className="h-4 w-4" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}