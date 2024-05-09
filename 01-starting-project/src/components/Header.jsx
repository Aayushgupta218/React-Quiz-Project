import logoImg from '../assets/cricket.png';

export default function Header(){
    return (
    <header>
    <img src={logoImg} alt='Cricket logo'/>
    <h1>Quiz</h1>
    </header>
    );
}