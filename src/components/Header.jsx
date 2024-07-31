import invLogo from '../assets/investment-calculator-logo.png';

export default function Header(){
    return(
        <div id="header">
            <img src={invLogo} alt="" />
            <h1>Investment Calculator</h1>
        </div>
        
    )
}