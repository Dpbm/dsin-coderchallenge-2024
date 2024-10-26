import {Roboto} from 'next/font/google'
import "./globals.css";

export const metadata = {
  title: 'DSIN Coder Challenge 2024',
  description: 'Resolução da Etapa Bônus do DSIN Coder Challenge 2024',
}

const roboto = Roboto({weight:['700', '400'], subsets:['latin']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
