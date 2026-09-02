import { Clock3, MapPin, Menu as MenuIcon, Phone, ShoppingBag, Star } from "lucide-react";

const doordash = "https://www.doordash.com/en/store/dmitrievs-bistro-brooklyn-35715419/";
const directions = "https://www.google.com/maps/dir/?api=1&destination=1212+Avenue+Z+Brooklyn+NY+11235";
const instagram = "https://www.instagram.com/dmitrievsbistro?igsh=MWNlOHVxOWY5bnN3Ng==";
const logo = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/t27M2NJYTqkEpfqz/logo-gCdWqsP9TKNpNRzL.jpg";

type MenuItem = { name: string; price: string; note?: string };
type MenuGroup = { id: string; title: string; kicker: string; items: MenuItem[] };

const groups: MenuGroup[] = [
  { id: "breakfast", title: "Breakfast / Завтраки", kicker: "Start the day well", items: [
    { name: "Turkish / Турецкий", price: "$11.99", note: "Eggs with vegetables, toast, cheese, butter, tea or coffee" },
    { name: "American / Американский", price: "$11.99", note: "Eggs or omelette, toast, cheese, vegetables, butter, tea or coffee" },
    { name: "Continental / Континентальный", price: "$11.99", note: "Oatmeal, eggs, toast, cheese, vegetables, butter, tea or coffee" },
  ]},
  { id: "lunch", title: "Special Lunch / Комплексный обед", kicker: "A complete weekday meal", items: [
    { name: "Business Lunch / Комплексный обед", price: "$15.99", note: "Soup, main course, salad and drink / суп, основное блюдо, салат и напиток" },
  ]},
  { id: "hot", title: "Hot Dishes / Горячие блюда", kicker: "Fresh from the kitchen", items: [
    { name: "Chicken Tabaka / Цыплёнок табака", price: "$17.99" },
    { name: "Meatball / Тефтели", price: "$6.00" },
    { name: "Dumplings with Meat / Пельмени", price: "$15.99" },
    { name: "Chicken in Sauce / Курица в соусе", price: "$6.00" },
    { name: "Jarovnya / Жаровня", price: "$19.99", note: "Beef, chicken or fish / говядина, курица или рыба" },
    { name: "Beefsteak / Бифштекс", price: "$6.00" },
    { name: "Chicken Chops / Куриные отбивные", price: "$19.99" },
    { name: "Vareniki / Вареники", price: "$15.99", note: "Cherry, cottage cheese or potato / вишня, творог или картофель" },
    { name: "Cutlets / Котлеты", price: "$6.00" },
  ]},
  { id: "pizza", title: "Pizza / Пицца", kicker: "Made for sharing", items: [
    { name: "Cheese Pizza", price: "$12.99" }, { name: "Pepperoni Pizza", price: "$12.99" },
    { name: "Caesar Pizza", price: "$14.99" }, { name: "Vegetable Pizza", price: "$12.99" },
  ]},
  { id: "cold", title: "Cold Appetizers / Холодные закуски", kicker: "For the table", items: [
    { name: "Assorted Meat Platter / Мясное ассорти", price: "$24.99" },
    { name: "Pickles / Соленья", price: "$14.99" }, { name: "Herring / Селёдка", price: "$14.99" },
  ]},
  { id: "sides", title: "Side Dishes / Гарниры", kicker: "Complete the meal", items: [
    { name: "Rice / Рис", price: "$6.00" }, { name: "Basic Side Dish / Гарнир", price: "$6.00" },
    { name: "Homemade Fried Potatoes / Картофель по-домашнему", price: "$9.99" },
    { name: "French Fries / Картофель фри", price: "$6.00" },
    { name: "Mashed Potatoes / Картофельное пюре", price: "$6.00" },
    { name: "Fried Potatoes with Mushrooms / Картофель с грибами", price: "$11.99" },
    { name: "Buckwheat / Гречка", price: "$6.00" },
  ]},
  { id: "salads", title: "Salads / Салаты", kicker: "Bright and fresh", items: [
    { name: "Greek Salad / Греческий салат", price: "$6.99 / $12.99" },
    { name: "Olivier Salad / Оливье", price: "$6.99 / $12.99" },
    { name: "Fresh Vegetable Salad / Свежий овощной салат", price: "$5.99 / $9.99" },
  ]},
  { id: "soups", title: "Soups / Супы", kicker: "Slow-simmered comfort", items: [
    { name: "Green Borshch / Зелёный борщ", price: "$4.99" }, { name: "Kharcho / Харчо", price: "$6.99" },
    { name: "Chicken Noodle Soup / Куриный суп с лапшой", price: "$6.99" }, { name: "Red Borshch / Красный борщ", price: "$4.99" },
  ]},
  { id: "drinks", title: "Coffee & Drinks / Кофе и напитки", kicker: "Stay for one more", items: [
    { name: "Hot Coffee / Кофе", price: "$1.50–$2.50", note: "Small, medium or large" },
    { name: "Cappuccino / Капучино", price: "$3.50–$4.50", note: "Small, medium or large" },
    { name: "Iced Coffee / Айс-кофе", price: "$4.00–$5.00", note: "Medium or large" },
    { name: "Hot Tea / Чай", price: "$2.00" }, { name: "Compote / Компот", price: "$3.00" },
    { name: "Lemonade / Лимонад", price: "$3.00" },
  ]},
];

const menuLabels: Record<string, string> = { breakfast: "Breakfast", lunch: "Lunch", hot: "Hot Dishes", pizza: "Pizza", cold: "Cold Plates", sides: "Sides", salads: "Salads", soups: "Soups", drinks: "Drinks" };
const menuLinks = groups.map(({id}) => ({id, label: menuLabels[id]}));

export default function Home() {
  return <main><div className="design-switch" aria-label="Choose site design"><a className="active" href="/concept">1</a><a href="/">2</a></div>
    <div className="announcement"><span>Traditional family recipes · warm hospitality</span><span className="announcement-details">Mon–Fri 7am–9pm · Sat–Sun 9am–9pm</span></div>
    <header className="site-header">
      <a className="logo brand-logo" href="#home" aria-label="Dmitriev's Bistro home"><img src={logo} alt="Dmitriev's Bistro"/></a>
      <nav className="main-nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#menu">Our Menu</a><a href="#story">Our Kitchen</a><a href="#visit">Contact & Visit</a></nav>
      <a className="order-button small" href={doordash} target="_blank" rel="noreferrer"><ShoppingBag size={18}/> Order online</a>
      <details className="mobile-menu"><summary aria-label="Open navigation"><MenuIcon/></summary><div className="mobile-panel"><a href="#menu">Full Menu</a>{menuLinks.map(link=><a href={`#${link.id}`} key={link.id}>{link.label}</a>)}<a href="#story">Our Kitchen</a><a href="#visit">Hours & Location</a><a href={doordash}>Order Online</a></div></details>
    </header>
    <nav className="category-nav" aria-label="Menu categories"><span>Jump to:</span>{menuLinks.map(link=><a href={`#${link.id}`} key={link.id}>{link.label}</a>)}</nav>

    <section id="home" className="hero live-hero">
      <div className="hero-copy"><p className="script-label">Traditional family recipes · warm hospitality</p><h1>Dmitriev&apos;s<br/><em>Bistro</em></h1><p>Authentic homemade Eastern European dishes prepared with fresh, high-quality ingredients and time-honored cooking.</p><div className="hero-actions"><a className="order-button" href={doordash} target="_blank" rel="noreferrer"><ShoppingBag size={20}/> Order on DoorDash</a><a className="underlined call-hero" href="tel:+13473657552"><Phone size={18}/> Call (347) 365-7552</a></div></div>
    </section>

    <section className="signature-dishes" aria-labelledby="signature-heading">
      <div className="signature-copy"><p className="script-label">Always fresh. Always delicious.</p><h2 id="signature-heading">Homemade favorites</h2><p>From crispy Chicken Tabaka to hand-folded vareniki and the complete weekday lunch, these are the dishes neighbors come back for.</p><a className="underlined" href="#menu">Explore the full menu →</a></div>
      <div className="hero-collage" aria-label="Dmitriev's Bistro Chicken Tabaka, vareniki, and business lunch">
        <div className="hero-dish hero-main"><span className="steam steam-one"/><span className="steam steam-two"/><span className="steam steam-three"/></div>
        <div className="hero-dish hero-side-one"><span className="dish-label">Hand-folded vareniki</span></div>
        <div className="hero-dish hero-side-two"><span className="lunch-promo"><em>Weekday favorite</em><strong>Lunch Special · $15.99</strong><small>Soup · salad · main</small></span></div>
        <div className="handmade-stamp"><Star size={16} fill="currentColor"/><strong>Made Fresh</strong><span>Every Day</span></div>
      </div>
    </section>

    <section className="feature-strip"><div><strong>Hand-folded</strong><span>Pierogi & dumplings</span></div><i/><div><strong>Slow-simmered</strong><span>Soups & borscht</span></div><i/><div><strong>Neighborhood favorite</strong><span>Breakfast through dinner</span></div></section>

    <section id="menu" className="menu-section">
      <div className="menu-title"><p className="script-label">What&apos;s cooking</p><h2>Our Menu</h2><p>Familiar dishes, generous plates, and the comfort of something freshly made.</p></div>
      <div className="menu-layout">
        <aside><strong>Menu</strong>{menuLinks.map(link=><a href={`#${link.id}`} key={link.id}>{link.label}</a>)}<a className="aside-order" href={doordash}>Order online →</a></aside>
        <div className="menu-groups">{groups.map((group,index)=><section id={group.id} className={`menu-group ${index===0?"featured-group":""}`} key={group.id}><div className="group-heading"><div><span>{group.kicker}</span><h3>{group.title}</h3></div><b>{String(index+1).padStart(2,"0")}</b></div><div className="items-grid">{group.items.map(item=><article className="menu-item" key={item.name}><div><h4>{item.name}</h4>{item.note&&<p>{item.note}</p>}</div><strong>{item.price}</strong></article>)}</div></section>)}</div>
      </div>
      <p className="price-note">Prices are subject to change. Please confirm current pricing when ordering.</p>
    </section>

    <section id="story" className="story-section"><div className="storefront-wrap"><img src="/storefront.jpeg" alt="The welcoming storefront of Dmitriev's Bistro on Avenue Z"/><span>1212 Avenue Z</span></div><div className="story-copy"><p className="script-label">Where every guest feels like family</p><h2>Authentic food.<br/>Warm hospitality.</h2><p>Dmitriev&apos;s Bistro brings traditional family recipes to Sheepshead Bay, from borshch and hand-folded vareniki to Chicken Tabaka and a complete weekday lunch.</p><div className="quote">“Always fresh. Always delicious.”</div><div className="story-actions"><a className="outline-button" href={directions} target="_blank" rel="noreferrer"><MapPin size={19}/> Get directions</a><a className="outline-button call-outline" href="tel:+13473657552"><Phone size={19}/> Call us</a></div></div></section>

    <section className="order-callout"><p className="script-label">Dinner is ready</p><h2>Homemade comfort,<br/>delivered to your door.</h2><a className="order-button light" href={doordash} target="_blank" rel="noreferrer">Order on DoorDash <span>→</span></a></section>

    <section id="visit" className="visit-section">
      <div className="visit-heading"><p className="script-label">Visit us</p><h2>Dmitriev&apos;s Bistro</h2></div>
      <div className="visit-details">
        <div className="visit-card"><MapPin/><div className="visit-card-copy"><strong>1212 Avenue Z</strong><span>Brooklyn, NY 11235</span><a href={directions} target="_blank" rel="noreferrer">Directions →</a></div></div>
        <div className="visit-card"><Clock3/><div className="visit-card-copy"><strong>Mon–Fri: 7am–9pm</strong><span>Sat–Sun: 9am–9pm</span></div></div>
        <div className="visit-card"><Phone/><div className="visit-card-copy"><strong>(347) 365-7552</strong><span>Dine-in · Takeout · Delivery</span><a href="tel:+13473657552">Call us →</a></div></div>
      </div>
      <div className="visit-map"><iframe title="Map showing Dmitriev's Bistro at 1212 Avenue Z, Brooklyn" src="https://www.google.com/maps?q=1212+Avenue+Z,+Brooklyn,+NY+11235&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
    </section>
    <footer><a className="logo brand-logo footer-brand" href="#home" aria-label="Dmitriev's Bistro home"><img src={logo} alt="Dmitriev's Bistro"/></a><p>Authentic homemade Eastern European food in Sheepshead Bay.</p><div><a href="#menu">Menu</a><a href="#visit">Visit</a><a href={doordash} target="_blank" rel="noreferrer">Order</a><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div><small>© {new Date().getFullYear()} Dmitriev&apos;s Bistro · 1212 Avenue Z, Brooklyn, New York</small></footer>
    <div className="mobile-actions"><a href="tel:+13473657552"><Phone size={18}/> Call</a><a href={doordash} target="_blank" rel="noreferrer"><ShoppingBag size={18}/> Order online</a></div>
  </main>;
}

