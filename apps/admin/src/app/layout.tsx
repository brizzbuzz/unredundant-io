import './../styles/tailwind.css';

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <title>Next.js</title>
      </head>
      <body className="h-full">{children}</body>
    </html>
  )
}
