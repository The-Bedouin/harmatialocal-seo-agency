import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'HarmatiaLocal-SEO Agency',
  description: 'Local SEO Agency',
  icons: { icon: '/harmatialocal-seoagencylogo.svg' },
  themeColor: '#2563EB'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

