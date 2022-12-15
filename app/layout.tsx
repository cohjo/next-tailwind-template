// import '../output.css' // needed when using turbopack
import Navbar from './components/client/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="box-border h-full p-2 sm:p-4" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="w-full h-fit">
        <Navbar />
        <div className="flex flex-col items-center justify-start w-full h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
