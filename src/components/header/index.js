import { useTour } from '@reactour/tour';
import { ContainerHeader, SvgIcon } from './styles';
import { Dog } from '../../assets/img';

const Header = ({ homeRef, servicesRef, aboutRef }) => {
    const { setIsOpen } = useTour();

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <ContainerHeader>
            <SvgIcon src={Dog} alt={'logo'}/>
            <ul>
                <li onClick={() => scrollToSection(homeRef)}>Home</li>
                <li onClick={() => scrollToSection(servicesRef)}>Services</li>
                <li onClick={() => scrollToSection(aboutRef)}>About us</li>
                <li onClick={() => setIsOpen(true)}>Tour</li>
            </ul>
        </ContainerHeader>
    );
};

export default Header;