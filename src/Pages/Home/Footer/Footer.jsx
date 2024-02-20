import locationImg from '../../../assets/icons/map-pin-2-fill.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer max-w-7xl mx-auto p-10 text-white">
                <div className='flex gap-4 items-center'>
                    <img className='w-8' src={locationImg} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <nav>
                    <h6 className="text-sm font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-sm font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-sm font-bold">About Us</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;