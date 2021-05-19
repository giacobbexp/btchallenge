import Logo from '../../assets/images/logo-2018.svg';
import './header.css';

const Header = () => {
    return (
        <div className="container-fluid bt-header">
            <div className="row h-100 align-items-center">
                <div className="col-sm-3 col-6 offset-sm-3">
                    <img src={Logo} className="mr-auto bt-logo" />
                </div>
                <div className="col-sm-3 col-6 text-end">
                    <p><strong><a href="#">Login</a> | <a href="#">Register</a></strong></p>
                </div>
            </div>
        </div>
    );
}

export default Header;