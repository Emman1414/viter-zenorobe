import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-20 !text-black">
      <div className="container">
        <div className="grid md:grid-cols-[1.5fr,_1fr,_1fr,_.8fr] gap-5">
          <div className="footer-box max-w-[400px]">
            <h6 className="mb-5">Our Story</h6>
            <p>
              Our origin story is more of an origin statement. We wanted to
              design what we wanted to wear – so we did.
            </p>
            <p>
              Since then, that philosophy has become more about the guy we
              design for and the impact he is looking to make. Our signature
              pieces, like the Sureshot Jogger and the Flintlock Tee, have come
              to stand for ingenuity, creativity and a constant drive to move
              forward and beyond expectations.
            </p>
            <p>
              We keep our impact on the environment low and our standards of
              craftsmanship and customer service high.
            </p>
            <p>
              We’re for good times and even greater design. And we create what
              you want to wear because we wear it too. We are Zanerobe.
            </p>
          </div>

          <div className="footer-box">
            <h6 className="mb-5">Online Store</h6>
            <ul>
              <li>
                <Link to="/">Sureshot Jogger</Link>
              </li>
              <li>
                <Link to="/">Flintlock Tees</Link>
              </li>
              <li>
                <Link to="/">Sustainable Products</Link>
              </li>
              <li>
                <Link to="/">ZANEROBE Pants</Link>
              </li>
              <li>
                <Link to="/">ZANEROBE Tee Shirts</Link>
              </li>
              <li>
                <Link to="/">ZANEROBE Jackets</Link>
              </li>
              <li>
                <Link to="/">ZANEROBE Shorts</Link>
              </li>
              <li>
                <Link to="/">ZANEROBE Sale</Link>
              </li>
              <li>
                <Link to="/">Chinos</Link>
              </li>
              <li>
                <Link to="/">Denim</Link>
              </li>
              <li>
                <Link to="/">Joggers</Link>
              </li>
              <li>
                <Link to="/">Hoodies</Link>
              </li>
              <li>
                <Link to="/">REC GEN</Link>
              </li>
              <li>
                <Link to="/">Gift Cards</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h6 className="mb-5">More Info</h6>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Help & FAQ</Link>
              </li>
              <li>
                <Link to="/">Returns Policy</Link>
              </li>
              <li>
                <Link to="/">Submit a Return Request</Link>
              </li>
              <li>
                <Link to="/">Shipping Info</Link>
              </li>
              <li>
                <Link to="/">Technical & Privacy</Link>
              </li>
              <li>
                <Link to="/">Mobile App</Link>
              </li>
              <li>
                <Link to="/">Site Reviews</Link>
              </li>
              <li>
                <Link to="/">Promotions</Link>
              </li>
              <li>
                <Link to="/">ZANEROBE Loyalty</Link>
              </li>
              <li>
                <Link to="/">Refer a Friend</Link>
              </li>
              <li>
                <Link to="/">Those Who Wear</Link>
              </li>
              <li>
                <Link to="/">Bundles</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h6 className="mb-15">Unlock 15% Off Your Order</h6>
            <p className="mb-12">
              Sign up to our newsletter to unlock 15% off your order and to be
              first to hear about new drops plus get VIP access to exclusive
              releases, re-stocks, sales & more.
            </p>

            <Link to="/" className="p-4 pb-5 bg-black text-white">
              Sign Up
            </Link>

            <ul className="flex gap-5 pt-10 pb-10">
              <li>
                <Link to="/">
                  <Facebook strokeWidth={1} size={18} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Twitter strokeWidth={1} size={18} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Instagram strokeWidth={1} size={18} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Youtube strokeWidth={1} size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center py-1 text-xs mb-0">
          © 2024 ZANEROBE. Designed in Sydney, Australia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
