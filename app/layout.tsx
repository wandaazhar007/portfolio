import './styles/globals.scss';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import SearchBlogProvider from './context/SearchBlogContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SearchBlogProvider>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </SearchBlogProvider>
    </html>
  )
}
