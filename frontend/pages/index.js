import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="hero">
        <h1>Welcome to Blood Bank</h1>
        <p>Donate blood, save lives.</p>
        <div className="buttons">
          <Link href="/donate"><button>Donate Blood</button></Link>
          <Link href="/request"><button>Request Blood</button></Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
