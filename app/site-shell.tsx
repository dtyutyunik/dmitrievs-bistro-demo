import { Clock3, MapPin, Menu, Phone, ShoppingBag } from "lucide-react";
import { BASE_PATH, DIRECTIONS, DOORDASH, FACEBOOK, GRUBHUB, INSTAGRAM, LOGO, PHONE, SEAMLESS } from "./site-data";

export function SiteHeader({ active }: { active?: "home" | "menu" | "contact" }) {
  return <><div className="design-switch" aria-label="Choose site design"><a href={`${BASE_PATH}/concept/`}>1</a><a className="active" href={`${BASE_PATH}/`}>2</a></div><header className="site-header">
    <a className="brand" href={`${BASE_PATH}/`} aria-label="Dmitriev's Bistro home"><img src={LOGO} alt="Dmitriev's Bistro"/></a>
    <nav className="desktop-nav" aria-label="Main navigation"><a className={active === "home" ? "active" : ""} href={`${BASE_PATH}/`}>Home</a><a className={active === "menu" ? "active" : ""} href={`${BASE_PATH}/our-menu/`}>Our Menu</a><a className={active === "contact" ? "active" : ""} href={`${BASE_PATH}/contact-us/`}>Contact Us</a></nav>
    <div className="header-actions"><a className="call-link" href={PHONE}><Phone size={16}/> Call</a><a className="order-link" href={DOORDASH} target="_blank" rel="noreferrer"><ShoppingBag size={16}/> DoorDash</a></div>
    <details className="mobile-nav"><summary aria-label="Open navigation"><Menu/></summary><div><a href={`${BASE_PATH}/`}>Home</a><a href={`${BASE_PATH}/our-menu/`}>Our Menu</a><a href={`${BASE_PATH}/contact-us/`}>Contact Us</a><a href={PHONE}>Call (347) 365-7552</a><a href={DOORDASH} target="_blank" rel="noreferrer">DoorDash</a><a href={GRUBHUB} target="_blank" rel="noreferrer">Grubhub</a><a href={SEAMLESS} target="_blank" rel="noreferrer">Seamless</a></div></details>
  </header></>;
}

export function SiteFooter() {
  return <><section className="visit-band">
    <div><MapPin/><span><b>1212 Avenue Z</b>Brooklyn, NY 11235</span><a href={DIRECTIONS} target="_blank" rel="noreferrer">Directions</a></div>
    <div><Clock3/><span><b>Mon–Fri: 7am–9pm</b>Sat–Sun: 9am–9pm</span></div>
    <div><Phone/><span><b>(347) 365-7552</b>Dine-in · Takeout · Delivery</span><a href={PHONE}>Call us</a></div>
  </section><footer><img src={LOGO} alt="Dmitriev's Bistro"/><p>Traditional family recipes and warm hospitality in Sheepshead Bay.</p><nav><a href={`${BASE_PATH}/`}>Home</a><a href={`${BASE_PATH}/our-menu/`}>Our Menu</a><a href={`${BASE_PATH}/contact-us/`}>Contact Us</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a><a href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a></nav><small>© {new Date().getFullYear()} Dmitriev&apos;s Bistro</small></footer><div className="mobile-actions"><a href={PHONE}><Phone size={18}/> Call</a><details className="mobile-order-menu"><summary><ShoppingBag size={18}/> Order online</summary><div><a href={DOORDASH} target="_blank" rel="noreferrer">DoorDash</a><a href={GRUBHUB} target="_blank" rel="noreferrer">Grubhub</a><a href={SEAMLESS} target="_blank" rel="noreferrer">Seamless</a></div></details></div></>;
}
