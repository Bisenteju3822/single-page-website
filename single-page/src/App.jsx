// App.jsx
import Head from './assets/Header';
import './App.css';
import Hero from './assets/Hero';
import Features from './assets/Features';
import Services from './assets/Services';
import Footer from './assets/Footer';
const App = () => {
    return (
        <div>
            <Head />
            <main>
                <Hero />
                <Features/>
                <Services/>
                <Footer/>
            </main>
        </div>
    );
};

export default App;
