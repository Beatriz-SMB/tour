import { useRef } from "react";
import { Container } from './styles';
import { Logo } from '../../assets/img'
import Header from '../../components/header';
import Footer from '../../components/footer';

const Main = () => {

    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const aboutRef = useRef(null);

    return(
        <Container>
            <Header homeRef={homeRef} servicesRef={servicesRef} aboutRef={aboutRef}/>
            <section className='home' ref={homeRef}>
                <h1 className='first-step'>A random title <br />for a <br />random site</h1>
                <img src={Logo} alt='logo' className='second-step'/>
            </section>
            <section className='services' ref={servicesRef}>
                <iframe className="third-step" width="560" height="315" src="https://www.youtube.com/embed/PRAMFqh49b0?si=e6sh2bJG2MXwwK2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <a className="fourth-step" href="https://www.youtube.com/watch?v=PRAMFqh49b0">FUNNIEST Pets of 2024!</a>
            </section>
            <section className='about-us' ref={aboutRef}>
                <h2>Who we are?</h2>
                <div className='content'>
                    <div className="fifth-step">
                        <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="sixth-step">
                        <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                </div>
            </section>
            <Footer />
        </Container>
    );
};

export default Main;