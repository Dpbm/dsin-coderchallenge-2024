export const metadata = {
  title: 'DSIN Coder Challenge 2024',
  description: 'Resolução da Etapa Bônus do DSIN Coder Challenge 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
