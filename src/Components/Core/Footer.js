const Footer = () => {
    const footerStyle = {
        background: '#5514b4',
        color: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '80px',
        lineHeight: '60px',
    }

    return (
        <footer style={footerStyle}>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        Footer
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;