import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-semibold">3legant.</h2>
                    <p className="mt-4">More than just a game. Its a lifestyle.</p>
                    <div className="mt-6 flex space-x-4">
                        {/* Social Media Icons */}
                        <Link href="#">
                        {/* <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /> */}
                        </Link>
                        <Link href="#">
                        {/* <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /> */}
                        </Link>
                        <Link href="#">
                        {/* <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" /> */}
                        </Link>
                    </div>
                </div>

                {/* Page Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Page</h3>
                    <ul className="space-y-2">
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/product">Product</Link></li>
                        <li><Link href="/articles">Articles</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Info and Office Section */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Info</h3>
                        <ul className="space-y-2">
                            <li><Link href="/shipping-policy">Shipping Policy</Link></li>
                            <li><Link href="/return-refund">Return & Refund</Link></li>
                            <li><Link href="/support">Support</Link></li>
                            <li><Link href="/faqs">FAQs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Office</h3>
                        <p>43111 Hai Trieu street,</p>
                        <p>District 1, HCMC</p>
                        <p>Vietnam</p>
                        <p>847-766-3237</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 text-sm flex justify-between items-center">
                <p>&copy; 2023 3legant. All rights reserved.</p>
                <div className="flex space-x-4">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                </div>
                {/* Payment Icons */}
                <div className="flex space-x-2">
                    {/* <img src="/payment-icons/visa.svg" alt="Visa" className="h-6" />
                    <img src="/payment-icons/mastercard.svg" alt="Mastercard" className="h-6" />
                    <img src="/payment-icons/stripe.svg" alt="Stripe" className="h-6" />
                    <img src="/payment-icons/paypal.svg" alt="Paypal" className="h-6" />
                    <img src="/payment-icons/applepay.svg" alt="Apple Pay" className="h-6" /> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
