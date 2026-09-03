export const DOORDASH = "https://www.doordash.com/en/store/dmitrievs-bistro-brooklyn-35715419/";
export const GRUBHUB = "https://www.grubhub.com/restaurant/dmitrievs-bistro-1212-avenue-z-brooklyn/13460872";
export const SEAMLESS = "https://www.seamless.com/menu/dmitrievs-bistro-1212-avenue-z-brooklyn/13460872";
export const PHONE = "tel:+13473657552";
export const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=1212+Avenue+Z+Brooklyn+NY+11235";
export const INSTAGRAM = "https://www.instagram.com/dmitrievsbistro?igsh=MWNlOHVxOWY5bnN3Ng==";
export const FACEBOOK = "https://www.facebook.com/dmitrievsbistro/";
export const LOGO = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/t27M2NJYTqkEpfqz/logo-gCdWqsP9TKNpNRzL.jpg";
export const HERO = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/t27M2NJYTqkEpfqz/d-bistro-vt9F5yUa6TkwM5pI.jpg";
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const asset = (name: string) => `https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/t27M2NJYTqkEpfqz/${name}`;
export type Dish = { name: string; price: string; description?: string; image?: string };
export type MenuSection = { id: string; title: string; dishes: Dish[] };

export const menuSections: MenuSection[] = [
  { id: "breakfast", title: "BREAKFAST / ЗАВТРАКИ", dishes: [
    { name: "American / Американский", price: "$11.99", description: "Eggs or omelette, toast, cheese, vegetables, butter, tea or coffee / Яичница или омлет, тост, сыр, овощи, масло, чай или кофе", image: asset("american-x-OBppmcJSIn7GLDhZ.png") },
    { name: "Continental / Континентальный", price: "$11.99", description: "Oatmeal, eggs, toast, cheese, vegetables, butter, tea or coffee / овсяная каша, яйца, тост, сыр, овощи, масло, чай или кофе", image: asset("cont-x-NUZCCWzbApiiyqt4.png") },
    { name: "Turkish / Турецкий", price: "$11.99", description: "Eggs with vegetables, toast, cheese, vegetables, butter, tea or coffee / яичница с овощами, тост, сыр, овощи, масло, чай или кофе", image: asset("turkish-x-FKLd4kVNnZz8ZBEq.png") },
  ]},
  { id: "lunch", title: "SPECIAL LUNCH / КОМПЛЕКСНЫЙ ОБЕД", dishes: [
    { name: "Business Lunch / Комплексный обед", price: "$15.99", description: "Soup, main course, salad and drink / суп, основное блюдо, салат и напиток", image: asset("business-lanch-i1e9SqipZ67CKr1e.png") },
  ]},
  { id: "hot", title: "HOT DISHES / ГОРЯЧИЕ БЛЮДА", dishes: [
    { name: "Chicken Tabaka / Цыплёнок табака", price: "$17.99", image: asset("tabaka-ONTtEjwdz504oPBT.png") },
    { name: "Meatball / Тефтели", price: "$6.00", image: asset("tftl-7aTwEUj4FETq8aZK.png") },
    { name: "Dumplings with Meat / Пельмени", price: "$15.99", image: asset("pelmen-TwWXxMwKzzCHfc8N.png") },
    { name: "Chicken in Sauce / Курица в соусе", price: "$6.00", image: asset("kur-souce-osbvf1QIMps6AHoO.png") },
    { name: "Jarovnya / Жаровня", price: "$19.99", description: "Beef, chicken or fish / говядина, курица или рыба", image: asset("xer-9SFZf4oacbHdhRSH.png") },
    { name: "Beefsteak / Бифштекс", price: "$6.00", image: asset("bftsx-vwEH3qUveXDyiHwN.png") },
    { name: "Chicken Chops / Куриные отбивные", price: "$19.99", image: `${BASE_PATH}/chicken-chops.webp` },
    { name: "Vareniki / Вареники", price: "$15.99", description: "Cherry, cottage cheese or potato / вишня, творог или картофель", image: `${BASE_PATH}/vareniki-menu.webp` },
    { name: "Chicken Cutlets / Куриные котлеты", price: "$6.00", image: `${BASE_PATH}/chicken-cutlets.webp` },
  ]},
  { id: "pizza", title: "PIZZA / ПИЦЦА", dishes: [
    { name: "Cheese Pizza", price: "$12.99", image: asset("ppptz-chz-QYyyJetibAmOVhDg.png") },
    { name: "Pepperoni Pizza", price: "$12.99", image: asset("pizza-67l2YUCleqPRG5wY.png") },
    { name: "Caesar Pizza", price: "$14.99", image: asset("ppptz-csr-x-Niysic5cZS45fwUa.png") },
    { name: "Vegetable Pizza", price: "$12.99", image: asset("ppptz-vgtbl-x-mq7v5wBJ7T4zQlz3.png") },
  ]},
  { id: "cold", title: "COLD APPETIZERS / ХОЛОДНЫЕ ЗАКУСКИ", dishes: [
    { name: "Assorted Meat Platter / Мясное ассорти", price: "$24.99", image: asset("meat-assorty-8ss6UKpCZ6uq8CbX.png") },
    { name: "Pickles / Соленья", price: "$14.99", image: asset("pickles-IHwoBhXoKAYTumgy.png") },
    { name: "Herring / Селёдка", price: "$14.99", image: asset("seledka-x-cqA3WPr2Jmsfh0BQ.png") },
  ]},
  { id: "sides", title: "SIDE DISHES / ГАРНИРЫ", dishes: [
    { name: "Rice / Рис", price: "$6.00", image: asset("ris-qzQhk42JNDdvQ0xi.png") },
    { name: "French Fries / Картофель фри", price: "$6.00", image: asset("fri-8pqdnBToOX8ZnrZe.png") },
    { name: "Mashed Potatoes / Картофельное пюре", price: "$6.00", image: asset("mashed-p-b6Uuj4qKO3QK1smb.png") },
    { name: "Homemade Fried Potatoes", price: "$9.99", image: `${BASE_PATH}/homemade-fried-potatoes.webp` },
    { name: "Fried Potatoes with Mushrooms", price: "$11.99", image: asset("papa-musr-zamguMyTPNyq1PAL.png") },
    { name: "Buckwheat / Гречка", price: "$6.00", image: `${BASE_PATH}/buckwheat.webp` },
  ]},
  { id: "salads", title: "SALADS / САЛАТЫ", dishes: [
    { name: "Greek Salad / Греческий салат", price: "$6.99 / $12.99", image: asset("greek-salad-UMq3YbM85W8O6Gko.png") },
    { name: "Olivier Salad / Оливье", price: "$6.99 / $12.99", image: asset("salad-copy-of2C2bPwnuym8U1w.png") },
    { name: "Fresh Vegetable Salad", price: "$5.99 / $9.99", image: asset("csr-2iUIVKkBJB7l1U9r.png") },
  ]},
  { id: "soups", title: "SOUPS / СУПЫ", dishes: [
    { name: "Green Borshch / Зелёный борщ", price: "$4.99", image: asset("gr-brsch-copy-yRzXMyqAcoEZU40v.png") },
    { name: "Kharcho / Харчо", price: "$6.99", image: asset("kharcho-TjD4qiHLnGQETFEc.png") },
    { name: "Chicken Noodle Soup", price: "$6.99", image: asset("kur-soup-6eQu2ijvr5wgKYJJ.png") },
    { name: "Red Borshch / Красный борщ", price: "$4.99", image: asset("borsch-eKkLBhqfKm545b8Q.png") },
  ]},
  { id: "drinks", title: "COFFEE & DRINKS / КОФЕ И НАПИТКИ", dishes: [
    { name: "Hot Coffee / Кофе", price: "$1.50–$2.50", image: asset("cafe-alDjB4VFUgEEXUBH.png") },
    { name: "Cappuccino / Капучино", price: "$3.50–$4.50", image: asset("capuch-G1yo2rLgWB1B9J3y.png") },
    { name: "Iced Coffee / Айс-кофе", price: "$4.00–$5.00", image: asset("iced-b3pwbf7vAdExo61A.png") },
    { name: "Hot Tea / Чай", price: "$2.00", image: asset("tea-UXd5TfhNE04h753y.png") },
    { name: "Compote / Компот", price: "$3.00", image: asset("kompot-JaPpRsfmC8pbpC0u.png") },
    { name: "Lemonade / Лимонад", price: "$3.00", image: asset("lemon-8B5TBfMXvaHScqNF.png") },
  ]},
];
