import Logo from '../../assets/images/logo-2018.svg';
import './header.css';

const Header = () => {
    return (
        <header className="bt-header">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-6">
                        <img src={Logo} alt="BT Logo" className="mr-auto bt-logo" />
                    </div>
                    <div className="col-6 text-end">
                        <p><strong><a href="#">Login</a> | <a href="#">Register</a></strong></p>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;