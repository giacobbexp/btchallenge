const Footer = () => {
    const footerStyle = {
        background: '#5514b4',
        color: '#fff',
        width: '100%',
        height: '80px',
        lineHeight: '60px',
    }

    return (
        <footer className="mt-auto" style={footerStyle}>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <p>BT React Code Test - by Jake Malkin - 19/05/2021</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;