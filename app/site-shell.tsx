import { Clock3, MapPin, Menu, Phone, ShoppingBag } from "lucide-react";
import { DIRECTIONS, DOORDASH, INSTAGRAM, LOGO, PHONE } from "./site-data";

export function SiteHeader({ active }: { active?: "home" | "menu" | "contact" }) {
  return <><div className="design-switch" aria-label="Choose site design"><a href="/concept">1</a><a className="active" href="/">2</a></div><header className="site-header">
    <a className="brand" href="/" aria-label="Dmitriev's Bistro home"><img src={LOGO} alt="Dmitriev's Bistro"/></a>
    <nav className="desktop-nav" aria-label="Main navigation"><a className={active === "home" ? "active" : ""} href="/">Home</a><a className={active === "menu" ? "active" : ""} href="/our-menu">Our Menu</a><a className={active === "contact" ? "active" : ""} href="/contact-us">Contact Us</a></nav>
    <div className="header-actions"><a className="call-link" href={PHONE}><Phone size={16}/> Call</a><a className="order-link" href={DOORDASH} target="_blank" rel="noreferrer"><ShoppingBag size={16}/> DoorDash</a></div>
    <details className="mobile-nav"><summary aria-label="Open navigation"><Menu/></summary><div><a href="/">Home</a><a href="/our-menu">Our Menu</a><a href="/contact-us">Contact Us</a><a href={PHONE}>Call (347) 365-7552</a><a href={DOORDASH}>Order on DoorDash</a></div></details>
  </header></>;
}

export function SiteFooter() {
  return <><section className="visit-band">
    <div><MapPin/><span><b>1212 Avenue Z</b>Brooklyn, NY 11235</span><a href={DIRECTIONS} target="_blank" rel="noreferrer">Directions</a></div>
    <div><Clock3/><span><b>Mon–Fri: 7am–9pm</b>Sat–Sun: 9am–9pm</span></div>
    <div><Phone/><span><b>(347) 365-7552</b>Dine-in · Takeout · Delivery</span><a href={PHONE}>Call us</a></div>
  </section><footer><img src={LOGO} alt="Dmitriev's Bistro"/><p>Traditional family recipes and warm hospitality in Sheepshead Bay.</p><nav><a href="/">Home</a><a href="/our-menu">Our Menu</a><a href="/contact-us">Contact Us</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a></nav><small>© {new Date().getFullYear()} Dmitriev&apos;s Bistro</small></footer><div className="mobile-actions"><a href={PHONE}><Phone size={18}/> Call</a><a href={DOORDASH} target="_blank" rel="noreferrer"><ShoppingBag size={18}/> Order on DoorDash</a></div></>;
}
