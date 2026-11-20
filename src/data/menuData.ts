import { MenuItem, MenuCategory, BranchContact, TakeAwayItem, ExtraItem } from '../types';

export const categories: MenuCategory[] = [
  {
    id: 'smoothies-special',
    nameAm: 'ስሙዚ እና ልዩ ጁሶች',
    nameEn: 'Smooties & Special Juice',
    iconName: 'GlassWater',
    themeColor: 'red',
    side: 2,
    description: 'Fresh power blends, smoothies, and refreshing mojitos',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'seasonal-juice',
    nameAm: 'ወቅታዊ ጁሶች',
    nameEn: 'Seasonal Juice',
    iconName: 'Citrus',
    themeColor: 'red',
    side: 2,
    description: '100% natural freshly squeezed fruit juices and fruit salads',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'burgers',
    nameAm: 'በርገርና ሳንድዊች',
    nameEn: 'Burger & Sandwiches',
    iconName: 'Sandwich',
    themeColor: 'red',
    side: 1,
    description: 'Freshly grilled beef burgers, club sandwiches, and crispy french fries',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pizza',
    nameAm: 'ፒዛ',
    nameEn: 'PIZZA',
    iconName: 'Pizza',
    themeColor: 'red',
    side: 1,
    description: 'Oven-baked pizzas with generous toppings and mozzarella',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'fried-chicken',
    nameAm: 'የተጠበሰ ዶሮ',
    nameEn: 'Fried Chicken',
    iconName: 'Drumstick',
    themeColor: 'red',
    side: 1,
    description: 'Crispy fried drumsticks, wings, nuggets, and chicken sandwiches',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'wraps',
    nameAm: 'ሻወርማ',
    nameEn: 'Wraps',
    iconName: 'Salad',
    themeColor: 'teal',
    side: 2,
    description: 'Rolled tortillas packed with seasoned fillings and cheese',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'traditional-dishes',
    nameAm: 'የባህል ምግቦች',
    nameEn: 'Traditional Dishes',
    iconName: 'Utensils',
    themeColor: 'red',
    side: 1,
    description: 'Authentic Ethiopian firfir, shiro, tegabino, and whole fish',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'vegitable',
    nameAm: 'አትክልት',
    nameEn: 'Vegitable',
    iconName: 'Carrot',
    themeColor: 'green',
    side: 2,
    description: 'Healthy fasting vegetable platters, salad medleys, and tuna bowls',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'spaghetti-rice',
    nameAm: 'ፓስታ እና ሩዝ',
    nameEn: 'Spaghetti & Rice',
    iconName: 'Soup',
    themeColor: 'green',
    side: 2,
    description: 'Classic pasta dishes, rice specialties, and Wina Trio combinations',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'kids-menu',
    nameAm: 'የህፃናት ማእድ',
    nameEn: 'Kids menu',
    iconName: 'Smile',
    themeColor: 'green',
    side: 1,
    description: 'Kid-portioned mini burgers and pizzas made specially for children',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'extra-takeaway',
    nameAm: 'ተጨማሪ እና ማሸጊያ',
    nameEn: 'Extra & Takeaway',
    iconName: 'PackageCheck',
    themeColor: 'green',
    side: 1,
    description: 'Add-on cheeses, sauces, injera, and hygienic takeaway packaging',
    image: '/images/extra-takeaway.jpg'
  }
];

export const menuItems: MenuItem[] = [
  // --- BURGER & SANDWICHES (Side 1) ---
  {
    id: 'b1',
    nameAm: 'ስጋ በርገር',
    nameEn: 'Beef Burger',
    price: 460,
    categoryId: 'burgers',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ሽንኩርት ፣ ስጋ ፣ ማዮኔዝ',
    descriptionEn: 'Lettuce, tomato, onion, grilled beef patty, mayonnaise',
    dietary: ['beef']
  },
  {
    id: 'b2',
    nameAm: 'ስጋ እና ቺዝ በርገር',
    nameEn: 'Beef & Chees Burger',
    price: 560,
    categoryId: 'burgers',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ሽንኩርት ፣ ስጋ ፣ ቺዝ ፣ ማዮኔዝ',
    descriptionEn: 'Lettuce, tomato, onion, beef patty, melted cheese, mayonnaise',
    dietary: ['beef']
  },
  {
    id: 'b3',
    nameAm: 'ዊና በርገር',
    nameEn: 'Wina Burger',
    price: 620,
    categoryId: 'burgers',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ሽንኩርት ፣ ስጋ ፣ ቺዝ ፣ እንቁላል ፣ የተጠበሰ ድንች',
    descriptionEn: 'Lettuce, tomato, onion, beef patty, cheese, fried egg, french fries',
    dietary: ['beef'],
    featured: true
  },
  {
    id: 'b4',
    nameAm: 'ቱና ሳንድዊች',
    nameEn: 'Tuna Sandwich',
    price: 580,
    categoryId: 'burgers',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ቃሪያ ፣ ሽንኩርት ፣ ቱና',
    descriptionEn: 'Lettuce, tomato, green pepper, onion, flaked tuna',
    dietary: ['fish']
  },
  {
    id: 'b5',
    nameAm: 'ክላብ ሳንድዊች',
    nameEn: 'Club Sandwich',
    price: 650,
    priceNote: 'Menu printed as 6850 (typographical artifact for ~650)',
    categoryId: 'burgers',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ቃሪያ ፣ ሽንኩርት ፣ ስጋ ፣ እንቁላል ፣ ማዮኔዝ',
    descriptionEn: 'Lettuce, tomato, green pepper, onion, meat, egg, mayonnaise',
    dietary: ['beef']
  },
  {
    id: 'b6',
    nameAm: 'ክላብ ሳንድዊች በቱና',
    nameEn: 'Club Sandwich With Tuna',
    price: 720,
    categoryId: 'burgers',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ቃሪያ ፣ ሽንኩርት ፣ ቱና ፣ እንቁላል ፣ ማዮኔዝ',
    descriptionEn: 'Lettuce, tomato, green pepper, onion, tuna, egg, mayonnaise',
    dietary: ['fish']
  },
  {
    id: 'b7',
    nameAm: 'ክላብ ሳንድዊች በዶሮ',
    nameEn: 'Club Sandwich With Chicken',
    price: 590,
    categoryId: 'burgers',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ቃሪያ ፣ ሽንኩርት ፣ ዶሮ ፣ እንቁላል ፣ ማዮኔዝ',
    descriptionEn: 'Lettuce, tomato, green pepper, onion, chicken, egg, mayonnaise',
    dietary: ['chicken']
  },
  {
    id: 'b8',
    nameAm: 'ዊና ደብል ስፔሻል በርገር',
    nameEn: 'Wina Double Special Burger',
    price: 950,
    categoryId: 'burgers',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ቃሪያ ፣ ሽንኩርት ፣ ደብል ስጋ ፣ እንቁላል ፣ ደብል የተጠበሰ ድንች ፣ ደብል ቺዝ ፣ ማዮኔዝ',
    descriptionEn: 'Lettuce, tomato, pepper, onion, double beef patties, egg, double fries, double cheese, mayonnaise',
    dietary: ['beef'],
    featured: true
  },
  {
    id: 'b9',
    nameAm: 'ቺፕስ',
    nameEn: 'French Frice',
    price: 350,
    categoryId: 'burgers',
    descriptionAm: 'ጥርት ያለ ትኩስ የተጠበሰ ድንች',
    descriptionEn: 'Crispy golden freshly fried potatoes',
    dietary: ['vegetarian', 'fasting']
  },

  // --- FRIED CHICKEN (Side 1) ---
  {
    id: 'fc1',
    nameAm: 'የዶሮ እግር',
    nameEn: 'Chicken Drum Stick',
    price: 910,
    categoryId: 'fried-chicken',
    descriptionAm: 'በጥንቃቄ የተጠበሰ የዶሮ እግር',
    descriptionEn: 'Crisp seasoned chicken drumstick',
    dietary: ['chicken'],
    featured: true
  },
  {
    id: 'fc2',
    nameAm: 'የዶሮ ክንፍ',
    nameEn: 'Chicken Wing',
    price: 820,
    categoryId: 'fried-chicken',
    descriptionAm: 'የተጠበሰ የዶሮ ክንፎች',
    descriptionEn: 'Golden crispy fried chicken wings',
    dietary: ['chicken']
  },
  {
    id: 'fc3',
    nameAm: 'የተቆራረጠ ዶሮ',
    nameEn: 'Chicken Nugget',
    price: 880,
    categoryId: 'fried-chicken',
    descriptionAm: 'ጥሩ ተደርጎ የተዘጋጀ የዶሮ ነጌት',
    descriptionEn: 'Bite-sized seasoned chicken nuggets',
    dietary: ['chicken']
  },
  {
    id: 'fc4',
    nameAm: 'ስቴክ ዶሮ ሳንድዊች',
    nameEn: 'Chicken Steak Sandwich',
    price: 890,
    categoryId: 'fried-chicken',
    descriptionAm: 'የተጠበሰ የዶሮ ስቴክ በዳቦ ውስጥ',
    descriptionEn: 'Tender chicken breast steak sandwich',
    dietary: ['chicken']
  },
  {
    id: 'fc5',
    nameAm: 'ፔስቶ ቺክን ሳንድዊች',
    nameEn: 'Pesto Chicken Sandwich',
    price: 660,
    categoryId: 'fried-chicken',
    descriptionAm: 'በፔስቶ ቅመም የተዘጋጀ የዶሮ ሳንድዊች',
    descriptionEn: 'Savory pesto seasoned chicken sandwich',
    dietary: ['chicken']
  },
  {
    id: 'fc6',
    nameAm: 'የተጠበሰ ዶሮ',
    nameEn: 'Chicken Driay Sandwich',
    price: 780,
    categoryId: 'fried-chicken',
    descriptionAm: 'የተጠበሰ ደረቅ የዶሮ ሳንድዊች',
    descriptionEn: 'Crispy dry fried chicken sandwich',
    dietary: ['chicken']
  },

  // --- PIZZA (Side 1) ---
  {
    id: 'pz1',
    nameAm: 'የስጋ ፒዛ',
    nameEn: 'Beef Lover Pizza',
    price: 1080,
    categoryId: 'pizza',
    descriptionAm: 'ቺዝ ፣ ስጋ ፣ መከላከያ ፣ አሊቭ ፣ የወይራ ዘይት',
    descriptionEn: 'Mozzarella cheese, minced beef, olives, olive oil',
    dietary: ['beef'],
    featured: true
  },
  {
    id: 'pz2',
    nameAm: 'የዶሮ ፒዛ',
    nameEn: 'Chicken lover Pizza',
    price: 1020,
    categoryId: 'pizza',
    descriptionAm: 'ዶሮ ፣ ቺዝ ፣ መከላከያ ፣ አሊቭ ፣ የወይራ ዘይት',
    descriptionEn: 'Tender chicken pieces, melted cheese, olives, olive oil',
    dietary: ['chicken']
  },
  {
    id: 'pz3',
    nameAm: 'ቱና ፒዛ',
    nameEn: 'Tuna Pizza',
    price: 1070,
    categoryId: 'pizza',
    descriptionAm: 'ቱና ፣ የወይራ ዘይት ፣ ቺዝ (ያለ ቺዝም ይቻላል)',
    descriptionEn: 'Flaked tuna, mozzarella cheese, olive oil (can be ordered without cheese)',
    dietary: ['fish']
  },
  {
    id: 'pz4',
    nameAm: 'ማርጋሪታ ፒዛ',
    nameEn: 'Margaritta Pizza',
    price: 680,
    categoryId: 'pizza',
    descriptionAm: 'ቺዝ ፣ የወይራ ዘይት',
    descriptionEn: 'Classic mozzarella cheese, tomato base, and fragrant olive oil',
    dietary: ['vegetarian']
  },
  {
    id: 'pz5',
    nameAm: 'የአትክልት ፒዛ',
    nameEn: 'Vegeterian Pizza',
    price: 490,
    categoryId: 'pizza',
    descriptionAm: 'አትክልት ፣ መከላከያ ፣ አሊቭ ፣ የወይራ ዘይት',
    descriptionEn: 'Assorted seasonal vegetables, olives, olive oil',
    dietary: ['vegetarian', 'fasting']
  },
  {
    id: 'pz6',
    nameAm: 'ዊና ስፔሻል ፒዛ',
    nameEn: 'Wina Special Pizza',
    price: 1180,
    categoryId: 'pizza',
    descriptionAm: 'ቺዝ ፣ ስጋ ፣ መከላከያ ፣ አሊቭ ፣ ድንች ፣ እንቁላል ፣ ሳላሚ ፣ የወይራ ዘይት',
    descriptionEn: 'The ultimate loaded pizza: beef, salami, egg, cheese, potatoes, olives, olive oil',
    dietary: ['beef'],
    featured: true
  },
  {
    id: 'pz7',
    nameAm: 'ፔስቶ ቺክን ፒዛ',
    nameEn: 'Pesto Chicken pizza',
    price: 1030,
    categoryId: 'pizza',
    descriptionAm: 'ዶሮ ፣ ፔስቶ መረቅ ፣ ቺዝ ፣ የወይራ ዘይት',
    descriptionEn: 'Herb pesto, seasoned chicken chunks, mozzarella cheese',
    dietary: ['chicken']
  },

  // --- KIDS MENU (Side 1) ---
  {
    id: 'km1',
    nameAm: 'ጁንየር በርገር',
    nameEn: 'Junior Burger',
    price: 460,
    categoryId: 'kids-menu',
    descriptionAm: 'ለህፃናት የተመጣጠነ ሚኒ በርገር',
    descriptionEn: 'Kid-sized tasty junior beef burger',
    dietary: ['kids', 'beef']
  },
  {
    id: 'km2',
    nameAm: 'ሚኒ ቸክን ፒዛ',
    nameEn: 'Mini Chicken Pizza',
    price: 670,
    categoryId: 'kids-menu',
    descriptionAm: 'ለህፃናት የተዘጋጀ አነስተኛ የዶሮ ፒዛ',
    descriptionEn: 'Individual mini chicken and cheese pizza',
    dietary: ['kids', 'chicken']
  },
  {
    id: 'km3',
    nameAm: 'ሚኒ ቢፍ ፒዛ',
    nameEn: 'Mini Beef pizza',
    price: 710,
    categoryId: 'kids-menu',
    descriptionAm: 'ለህፃናት የተዘጋጀ አነስተኛ የስጋ ፒዛ',
    descriptionEn: 'Kid-friendly mini minced beef pizza',
    dietary: ['kids', 'beef']
  },
  {
    id: 'km4',
    nameAm: 'ሚኒ ማርጋሪታ ፒዛ',
    nameEn: 'Mini Margarita Pizza',
    price: 480,
    categoryId: 'kids-menu',
    descriptionAm: 'ለህፃናት የሚሆን ቀላል ማርጋሪታ ፒዛ',
    descriptionEn: 'Mild mini cheese margarita pizza for kids',
    dietary: ['kids', 'vegetarian']
  },

  // --- TRADITIONAL DISHES (Side 1) ---
  {
    id: 'td1',
    nameAm: 'የፆም ፍርፍር',
    nameEn: 'Fasting Firfir',
    price: 310,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በቅመም እና በዘይት የተዘጋጀ ባህላዊ የፆም ፍርፍር',
    descriptionEn: 'Traditional shredded injera tossed in rich berbere sauce (vegan/fasting)',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'td2',
    nameAm: 'ቱና ፍርፍር',
    nameEn: 'Tuna Firfir',
    price: 590,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በቱና አሳ የታሸ የጣፈጠ ፍርፍር',
    descriptionEn: 'Spiced injera firfir prepared with flaked tuna',
    dietary: ['fish']
  },
  {
    id: 'td3',
    nameAm: 'ፍርፍር በቅቤ',
    nameEn: 'Firfir with Butter',
    price: 350,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በንፁህ የሀበሻ ቅቤ የተዘጋጀ ለስላሳ ፍርፍር',
    descriptionEn: 'Traditional injera firfir enriched with authentic spiced Ethiopian butter (kibe)',
    dietary: ['vegetarian']
  },
  {
    id: 'td4',
    nameAm: 'ጥብስ ፍርፍር',
    nameEn: 'Tibes Firfir',
    price: 510,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በለስላሳ የበሬ ጥብስ ስጋ የታሸ ፍርፍር',
    descriptionEn: 'Flavorful firfir cooked with sautéed tender beef tibs',
    dietary: ['beef'],
    featured: true
  },
  {
    id: 'td5',
    nameAm: 'ቋንጣ ፍርፍር',
    nameEn: 'Quanta Firfir',
    price: 550,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በደረቅ የበሬ ቋንጣ ስጋ የተዘጋጀ ባህላዊ ፍርፍር',
    descriptionEn: 'Authentic firfir made with sun-dried seasoned beef (quanta)',
    dietary: ['beef']
  },
  {
    id: 'td6',
    nameAm: 'ጥብስ ፍርፍር በድርቆሽ',
    nameEn: 'Tibes Firfir Dirkosh',
    price: 570,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በድርቆሽ እንጀራ እና የበሬ ጥብስ የተሰራ',
    descriptionEn: 'Crispy sun-dried injera (dirkosh) tossed with beef tibs sauce',
    dietary: ['beef']
  },
  {
    id: 'td7',
    nameAm: 'ቋንጣ ፍርፍር በድርቆሽ',
    nameEn: 'Quanta Firfir with Dirkosh',
    price: 590,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በድርቆሽ እንጀራ እና በቋንጣ ስጋ የተዘጋጀ',
    descriptionEn: 'Crisp dirkosh firfir prepared with savory dried beef quanta',
    dietary: ['beef']
  },
  {
    id: 'td8',
    nameAm: 'ሽሮ በቅቤ',
    nameEn: 'Shiro with Butter',
    price: 350,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በቅቤ የተቁላላ የሽሮ ወጥ',
    descriptionEn: 'Aromatic chickpea stew simmered with rich Ethiopian spiced butter',
    dietary: ['vegetarian']
  },
  {
    id: 'td9',
    nameAm: 'ቦዘና ሽሮ',
    nameEn: 'Bozena Shiro',
    price: 490,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በስጋ ቁራጮች የታሸ ጣፋጭ ሽሮ',
    descriptionEn: 'Hearty chickpea stew cooked with tender pieces of beef',
    dietary: ['beef']
  },
  {
    id: 'td10',
    nameAm: 'ተጋቢኖ',
    nameEn: 'Tegabino',
    price: 320,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በትኩስ የሸክላ ድስት የሚቀርብ ወፍራም ሽሮ',
    descriptionEn: 'Thick, bubbling hot shiro served in a traditional clay pot',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'td11',
    nameAm: 'እስፔሻል አትክልት ፍርፍር',
    nameEn: 'Vegetable Firfir',
    price: 390,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በተለያዩ አትክልቶች የተዘጋጀ ፍርፍር',
    descriptionEn: 'Mixed vegetable and berbere-infused injera firfir',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'td12',
    nameAm: 'አሳ አብስላስ',
    nameEn: 'Fried Fish',
    price: 640,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በጥሩ ሁኔታ የተጠበሰ ሙሉ አሳ',
    descriptionEn: 'Crispy whole fried fish with lemon and spices',
    dietary: ['fish'],
    featured: true
  },
  {
    id: 'td13',
    nameAm: 'አሳ ጉላሽ/ቅቅልት',
    nameEn: 'Fish Goulash',
    price: 690,
    categoryId: 'traditional-dishes',
    descriptionAm: 'በቀይ ወጥ የተሰራ የአሳ ጉላሽ ከነቅቅልቱ',
    descriptionEn: 'Spicy seasoned fish stew / simmered fish goulash',
    dietary: ['fish']
  },

  // --- SMOOTHIES & SPECIAL JUICE (Side 2) ---
  {
    id: 'sm1',
    nameAm: 'ዊና ሀይል ሰጪ',
    nameEn: 'Wina Protein Juice',
    price: 320,
    categoryId: 'smoothies-special',
    descriptionAm: 'ጉርጓሬ ፣ ኦቾሎኒ ፣ ቴምር ፣ አጃ ፣ ወተት ፣ እንቁላል ፣ ቆንጥር ፣ አቮካዶ ፣ በረዶ',
    descriptionEn: 'Peanuts, dates, oats, milk, egg, honey/nuts, avocado, ice (High-protein boost)',
    dietary: ['juice'],
    featured: true
  },
  {
    id: 'sm2',
    nameAm: 'ዊና ስፔሻል ስፕሩስ',
    nameEn: 'Wina Special Spruce Juice',
    price: 300,
    categoryId: 'smoothies-special',
    descriptionAm: 'አቮካዶ ፣ ፓፓያ ፣ ማንጎ ፣ ሰላጣ ፣ እስፒናች ፣ አስትሮበሪ ፣ ማር ፣ ዝንጅብል ፣ ቆንጥር',
    descriptionEn: 'Avocado, papaya, mango, greens, spinach, strawberry, honey, ginger',
    dietary: ['juice']
  },
  {
    id: 'sm3',
    nameAm: 'ዊና ስፔሻል ጁስ',
    nameEn: 'Wina Special',
    price: 300,
    categoryId: 'smoothies-special',
    descriptionAm: 'አቮካዶ ፣ ፓፓያ ፣ ማንጎ ፣ አስትሮበሪ ፣ የዊና ጣዕም',
    descriptionEn: 'Layered house signature juice: fresh avocado, papaya, mango, strawberry',
    dietary: ['juice'],
    featured: true
  },
  {
    id: 'sm4',
    nameAm: 'ዊና ስሙዚ',
    nameEn: 'Wina Smoothies',
    price: 280,
    categoryId: 'smoothies-special',
    descriptionAm: 'አቮካዶ ፣ ፓፓያ ፣ ማንጎ ፣ ሙዝ ፣ የዊና ጣዕም',
    descriptionEn: 'Creamy tropical blend: avocado, papaya, mango, banana',
    dietary: ['juice']
  },
  {
    id: 'sm5',
    nameAm: 'የለውዝ ስሙዚ',
    nameEn: 'Peanut Butter Smoothies',
    price: 280,
    categoryId: 'smoothies-special',
    descriptionAm: 'ኦቾሎኒ ፣ ሙዝ ፣ ወተት ፣ የለውዝ ቅቤ',
    descriptionEn: 'Rich creamy peanut butter smoothie with banana and milk',
    dietary: ['juice']
  },
  {
    id: 'sm6',
    nameAm: 'የፋልስና ሙዝ ስሙዚ',
    nameEn: 'Flax Seed & Banana Smoothies',
    price: 280,
    categoryId: 'smoothies-special',
    descriptionAm: 'አቮካዶ ፣ ሙዝ ፣ ወተት ፣ ፍላክስ ሲድ',
    descriptionEn: 'Nutrient-dense smoothie with healthy ground flax seeds, banana, and avocado',
    dietary: ['juice']
  },
  {
    id: 'sm7',
    nameAm: 'የሁሉንም ስፔሻል ጁሶች በጃምቦ',
    nameEn: 'All Juice with jambo',
    price: 550,
    categoryId: 'smoothies-special',
    descriptionAm: 'ከትልቅ ጃምቦ ብርጭቆ ጋር የሚቀርብ የሁሉም ፍራፍሬዎች ቅልቅል',
    descriptionEn: 'Colossal jumbo glass loaded with all fresh layered juices',
    dietary: ['juice']
  },
  {
    id: 'sm8',
    nameAm: 'ክላሲክ ሞጂቶ',
    nameEn: 'Classic Mojeto',
    price: 220,
    categoryId: 'smoothies-special',
    descriptionAm: 'ትኩስ ናና ፣ ሎሚ እና የሚያድስ ሶዳ',
    descriptionEn: 'Fresh mint leaves, tangy lime juice, sugar, and sparkling soda',
    dietary: ['juice']
  },
  {
    id: 'sm9',
    nameAm: 'ሀበሀብ ሞጂቶ',
    nameEn: 'Watermelon Mojeto',
    price: 220,
    categoryId: 'smoothies-special',
    descriptionAm: 'ትኩስ ሀበሀብ ከናና እና ሎሚ ጋር',
    descriptionEn: 'Fresh crushed watermelon with mint, lime, and crushed ice',
    dietary: ['juice']
  },
  {
    id: 'sm10',
    nameAm: 'ስትሮበሪ ሞጂቶ',
    nameEn: 'Strawberry Mojeto',
    price: 220,
    categoryId: 'smoothies-special',
    descriptionAm: 'ቀይ አስትሮበሪ ከናና እና ከሎሚ ሶዳ ጋር',
    descriptionEn: 'Muddled fresh strawberries, mint sprigs, lime, and soda',
    dietary: ['juice']
  },
  {
    id: 'sm11',
    nameAm: 'አናናስ ሞጂቶ',
    nameEn: 'Pineapple Mojeto',
    price: 220,
    categoryId: 'smoothies-special',
    descriptionAm: 'ጣፋጭ አናናስ ከናና እና ከሎሚ ሶዳ ጋር',
    descriptionEn: 'Tropical sweet pineapple mojito with mint and sparkling fizz',
    dietary: ['juice']
  },

  // --- SEASONAL JUICE (Side 2) ---
  {
    id: 'sj1',
    nameAm: 'አቮካዶ ፣ ፓፓያ ፣ ማንጎ ፣ አናናስ ፣ ዘይቱን',
    nameEn: 'Seasonal Single / Mixed Glass',
    price: 220,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ትኩስ አቮካዶ ፣ ፓፓያ ፣ ማንጎ ፣ አናናስ ወይም ዘይቱን (ጓቫ)',
    descriptionEn: 'Single or custom blend of fresh avocado, papaya, mango, pineapple, or guava',
    dietary: ['juice', 'fasting', 'vegetarian']
  },
  {
    id: 'sj2',
    nameAm: 'ጃምቦ ጁስ',
    nameEn: 'Jambo Juice',
    price: 400,
    categoryId: 'seasonal-juice',
    descriptionAm: 'በትልቅ ጃምቦ ብርጭቆ የሚቀርብ ትኩስ ጁስ',
    descriptionEn: 'Oversized jumbo cup of your favorite seasonal fresh juice',
    dietary: ['juice']
  },
  {
    id: 'sj3',
    nameAm: 'ብርቱካን',
    nameEn: 'Orange',
    price: 300,
    categoryId: 'seasonal-juice',
    descriptionAm: '100% ንፁህ የተጨመቀ የብርቱካን ጁስ',
    descriptionEn: 'Pure 100% freshly pressed sweet orange juice',
    dietary: ['juice', 'fasting', 'vegetarian']
  },
  {
    id: 'sj4',
    nameAm: 'የሎሚ ጁስ',
    nameEn: 'Lemon Juice',
    price: 220,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ሚያድስ ትኩስ የሎሚ ጭማቂ',
    descriptionEn: 'Crisp, invigorating freshly squeezed lemonade',
    dietary: ['juice', 'fasting', 'vegetarian']
  },
  {
    id: 'sj5',
    nameAm: 'ብርቱካን ከሌሎች ጋር',
    nameEn: 'Mixed Orange',
    price: 250,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ብርቱካን ከሌሎች ወቅታዊ ፍራፍሬዎች ጋር ተቀላቅሎ',
    descriptionEn: 'Fresh pressed orange blended with other seasonal fruits',
    dietary: ['juice', 'fasting', 'vegetarian']
  },
  {
    id: 'sj6',
    nameAm: 'ሙዝ በወተት',
    nameEn: 'Banana Milk Shake',
    price: 240,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ሙዝ ፣ ወተት ፣ አስትሮበሪ',
    descriptionEn: 'Fresh ripe bananas whipped with cold whole milk and strawberry hint',
    dietary: ['juice', 'vegetarian']
  },
  {
    id: 'sj7',
    nameAm: 'አስትሮበሪ ጁስ',
    nameEn: 'Strawberry Juice',
    price: 260,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ንፁህ ቀይ ትኩስ የአስትሮበሪ ጁስ',
    descriptionEn: '100% natural ripe fresh strawberry blend',
    dietary: ['juice', 'fasting', 'vegetarian']
  },
  {
    id: 'sj8',
    nameAm: 'አስትሮበሪ በወተት',
    nameEn: 'Strawberry Milk Shake',
    price: 280,
    categoryId: 'seasonal-juice',
    descriptionAm: 'አስትሮበሪ ከወተት ጋር ተቀላቅሎ',
    descriptionEn: 'Luscious fresh strawberries blended with creamy cold milk',
    dietary: ['juice', 'vegetarian']
  },
  {
    id: 'sj9',
    nameAm: 'ሀብሀብ',
    nameEn: 'Watermellon',
    price: 250,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ትኩስ ቀይ የተጨመቀ የሀብሀብ ጭማቂ',
    descriptionEn: 'Hydrating, naturally sweet pure watermelon juice',
    dietary: ['juice', 'fasting', 'vegetarian']
  },
  {
    id: 'sj10',
    nameAm: 'ፓፓያ በተልባ ጁስ',
    nameEn: 'Papaya with Flax',
    price: 260,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ፓፓያ ከተፈጨ አልሚ ተልባ ጋር',
    descriptionEn: 'Creamy papaya juice infused with wholesome ground flax seed',
    dietary: ['juice', 'fasting', 'vegetarian']
  },
  {
    id: 'sj11',
    nameAm: 'የጉንፋን ጁስ',
    nameEn: 'Flu Juice',
    price: 300,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ብርቱካን ፣ ሎሚ ፣ ዝንጅብል ፣ ማር ፣ አልኮል እና አስትሮበሪ',
    descriptionEn: 'Natural immunity remedy: orange, lemon, ginger root, honey, herbal hint, and strawberry',
    dietary: ['juice'],
    featured: true
  },
  {
    id: 'sj12',
    nameAm: 'ፍሩት ፓንች',
    nameEn: 'Fruit Salad',
    price: 330,
    categoryId: 'seasonal-juice',
    descriptionAm: 'ፓፓያ ፣ አናናስ ፣ ማንጎ ፣ ሀብሀብ ፣ አስትሮበሪ ፣ ሙዝ ፣ ቪምቶ',
    descriptionEn: 'Diced medley of papaya, pineapple, mango, watermelon, strawberry, banana, topped with vimto juice',
    dietary: ['juice', 'fasting', 'vegetarian'],
    featured: true
  },

  // --- VEGITABLE (Side 2) ---
  {
    id: 'vg1',
    nameAm: 'ዊና ስፔሻል አትክልት የፆም',
    nameEn: 'Wina Special Vegetable Fasting',
    price: 580,
    categoryId: 'vegitable',
    descriptionAm: 'ካሮት ፣ ቲማቲም ፣ ሰላጣ ፣ ኪያር ፣ ቦሎቄ ፣ አተር ክክ ፣ ድንች ፣ የቤቱ ቅመም',
    descriptionEn: 'Carrot, tomato, lettuce, cucumber, beans, split peas, potatoes, house dressing (100% vegan/fasting)',
    dietary: ['fasting', 'vegetarian'],
    featured: true
  },
  {
    id: 'vg2',
    nameAm: 'ዊና ስፔሻል አትክልት በዶሮና እንቁላል',
    nameEn: 'Wina Special Vegetable with Chicken & Egg',
    price: 880,
    categoryId: 'vegitable',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ካሮት ፣ አቮካዶ ፣ ድንች ፣ እንቁላል ፣ ዶሮ ፣ የተጠበሰ ድንች ፣ ማዮኔዝ ፣ የቤቱ ቅመም',
    descriptionEn: 'Fresh salad base, chicken chunks, boiled egg, avocado, fries, mayonnaise, and house vinaigrette',
    dietary: ['chicken']
  },
  {
    id: 'vg3',
    nameAm: 'ዊና ስፔሻል አትክልት በቱና',
    nameEn: 'Wina Special Vegetable with Tuna',
    price: 860,
    categoryId: 'vegitable',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ካሮት ፣ አቮካዶ ፣ ድንች ፣ ቱና ፣ ማዮኔዝ ፣ የተጠበሰ ድንች ፣ ቃሪያ ፣ ሽንኩርት ፣ አሊቭ',
    descriptionEn: 'Tuna flakes, salad greens, avocado, olives, fries, mayonnaise, pepper, and onion',
    dietary: ['fish']
  },
  {
    id: 'vg4',
    nameAm: 'አርሰናል',
    nameEn: 'Arsenal',
    price: 400,
    categoryId: 'vegitable',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ካሮት ፣ አቮካዶ ፣ ድንች ፣ ኪያር ፣ የቤቱ ቅመም',
    descriptionEn: 'Signature fresh salad bowl with crisp lettuce, tomato, carrot, avocado, potato, cucumber, and dressing',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'vg5',
    nameAm: 'አትክልት በወይራ ዘይት',
    nameEn: 'Vegetable with Olive Oil',
    price: 450,
    categoryId: 'vegitable',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ድንች ፣ ካሮት ፣ አቮካዶ ፣ የወይራ ዘይት ፣ የቤቱ ቅመም',
    descriptionEn: 'Salad greens, potatoes, carrots, avocado tossed in virgin olive oil and spices',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'vg6',
    nameAm: 'አትክልት በትንዷ ቱና',
    nameEn: 'Vegetable with Small Tuna',
    price: 690,
    categoryId: 'vegitable',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ካሮት ፣ አቮካዶ ፣ ድንች ፣ ቱና ፣ የቤቱ ቅመም',
    descriptionEn: 'Fresh garden salad topped with tender flaked tuna',
    dietary: ['fish']
  },
  {
    id: 'vg7',
    nameAm: 'አትክልት በማዮኔዝ',
    nameEn: 'Vegetable with Mayonnaise',
    price: 470,
    categoryId: 'vegitable',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ካሮት ፣ አቮካዶ ፣ ድንች ፣ ማዮኔዝ ፣ የቤቱ ቅመም',
    descriptionEn: 'Garden salad vegetables dressed with creamy mayonnaise',
    dietary: ['vegetarian']
  },
  {
    id: 'vg8',
    nameAm: 'አትክልት በፆም በማዮኔዝ',
    nameEn: 'Vegetable with Fasting Mayonnaise',
    price: 470,
    categoryId: 'vegitable',
    descriptionAm: 'ሰላጣ ፣ ቲማቲም ፣ ካሮት ፣ ድንች ፣ ማዮኔዝ (የፆም) ፣ የቤቱ ቅመም',
    descriptionEn: 'Fresh mixed vegetables with 100% vegan / fasting mayonnaise',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'vg9',
    nameAm: 'እስፔሻል የበሰለ አትክልት',
    nameEn: 'Special Cooked Vegetable',
    price: 420,
    categoryId: 'vegitable',
    descriptionAm: 'ድንች ፣ አበባ ጎመን ፣ አቮካዶ ፣ ብሮኮሊ ፣ ካሮት ፣ ጥቅል ጎመን ፣ የቤቱ ቅመም',
    descriptionEn: 'Steamed cauliflower, broccoli, carrots, cabbage, potato, and avocado',
    dietary: ['fasting', 'vegetarian']
  },

  // --- WRAPS (Side 2) ---
  {
    id: 'wr1',
    nameAm: 'የበሬ ሻወርማ',
    nameEn: 'Beef Wrap',
    price: 660,
    categoryId: 'wraps',
    descriptionAm: 'ስጋ ፣ ቃሪያ ፣ ሽንኩርት ፣ ቺዝ',
    descriptionEn: 'Seasoned sauteed beef, peppers, onions, melted cheese in a toasted wrap',
    dietary: ['beef'],
    featured: true
  },
  {
    id: 'wr2',
    nameAm: 'የዶሮ ሻወርማ',
    nameEn: 'Pan Chicken Wrap',
    price: 600,
    categoryId: 'wraps',
    descriptionAm: 'ዶሮ ፣ ቃሪያ ፣ ሽንኩርት ፣ ቺዝ',
    descriptionEn: 'Pan-seared chicken strips with peppers, onions, and cheese',
    dietary: ['chicken']
  },
  {
    id: 'wr3',
    nameAm: 'የቱና ሻወርማ',
    nameEn: 'Tuna & Chees Wrap',
    price: 640,
    categoryId: 'wraps',
    descriptionAm: 'ቱና ፣ ቃሪያ ፣ ሽንኩርት ፣ ቲማቲም ፣ ቺዝ',
    descriptionEn: 'Tuna, sweet onions, green peppers, tomatoes, and gooey cheese',
    dietary: ['fish']
  },
  {
    id: 'wr4',
    nameAm: 'የአትክልት ሻወርማ',
    nameEn: 'Vegetable Wrap',
    price: 380,
    categoryId: 'wraps',
    descriptionAm: 'የተጠበሰ አትክልት',
    descriptionEn: 'Grilled zucchini, bell peppers, onions, and seasoned veggies in warm wrap',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'wr5',
    nameAm: 'አቮካዶ ራፕ',
    nameEn: 'Avocado Wrap',
    price: 400,
    categoryId: 'wraps',
    descriptionAm: 'ሻወርማ ቂጣ ፣ አቮካዶ ፣ ሽንኩርት ፣ ቃሪያ ፣ የወይራ ዘይት ፣ ሰላጣ',
    descriptionEn: 'Fresh avocado slices, onions, peppers, crisp lettuce, and olive oil in soft flatbread',
    dietary: ['fasting', 'vegetarian']
  },

  // --- SPAGHETTI & RICE (Side 2) ---
  {
    id: 'sp1',
    nameAm: 'ፓስታ በአትክልት',
    nameEn: 'Spaghetti with Vegetables',
    price: 380,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በጥሩ ሁኔታ በተቀቀሉ አትክልቶች የተሰራ ፓስታ',
    descriptionEn: 'Al dente pasta tossed with fresh seasonal garden vegetables',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'sp2',
    nameAm: 'ፓስታ በቲማቲም',
    nameEn: 'Spaghetti with Tomato',
    price: 350,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በጣፋጭ የቲማቲም ድልህ የተሰራ ፓስታ',
    descriptionEn: 'Classic spaghetti in a rich slow-simmered tomato marinara sauce',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'sp3',
    nameAm: 'ፓስታ በቱና',
    nameEn: 'Spaghetti with Tuna',
    price: 640,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በቱና አሳ ድልህ የተሰራ ፓስታ',
    descriptionEn: 'Spaghetti coated in savory garlic-infused tuna sauce',
    dietary: ['fish']
  },
  {
    id: 'sp4',
    nameAm: 'ፓስታ በስጋ',
    nameEn: 'Spaghetti with Meat',
    price: 495,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በደቀቀ የበሬ ስጋ የተሰራ የቦሎኔዝ ፓስታ',
    descriptionEn: 'Spaghetti topped with hearty seasoned minced beef bolognese',
    dietary: ['beef'],
    featured: true
  },
  {
    id: 'sp5',
    nameAm: 'ሩዝ በአትክልት',
    nameEn: 'Rice with Vegetables',
    price: 360,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'ከተለያዩ የተጠበሱ አትክልቶች ጋር የተቀቀለ ሩዝ',
    descriptionEn: 'Steamed rice stir-fried with diced fresh vegetables and mild herbs',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'sp6',
    nameAm: 'ሩዝ በቲማቲም',
    nameEn: 'Rice with Tomato',
    price: 380,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በቲማቲም መረቅ የታሸ ሩዝ',
    descriptionEn: 'Seasoned rice served with tangy tomato sauce',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'sp7',
    nameAm: 'ሩዝ በቱና',
    nameEn: 'Rice with Tuna',
    price: 670,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በቱና አሳ የተዘጋጀ ጣፋጭ ሩዝ',
    descriptionEn: 'Fragrant rice served alongside savory seasoned tuna flakes',
    dietary: ['fish']
  },
  {
    id: 'sp8',
    nameAm: 'ሩዝ በስጋ',
    nameEn: 'Rice with Meat',
    price: 530,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በበሬ ስጋ ቁራጮች የታጀበ ሩዝ',
    descriptionEn: 'Steamed rice paired with succulent beef chunks in rich sauce',
    dietary: ['beef']
  },
  {
    id: 'sp9',
    nameAm: 'ሩዝ በበሰለ አትክልት',
    nameEn: 'Rice with Cooked Vegetable',
    price: 390,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በእንፋሎት ከተቀቀለ አትክልት ጋር',
    descriptionEn: 'Healthy rice bowl accompanied by steamed mixed vegetables',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'sp10',
    nameAm: 'ሩዝ በዶሮ',
    nameEn: 'Rice with Chicken',
    price: 550,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'በጣፋጭ የዶሮ ስጋ የተሰራ ሩዝ',
    descriptionEn: 'Seasoned chicken pieces served over fluffy steamed rice',
    dietary: ['chicken']
  },
  {
    id: 'sp11',
    nameAm: 'ዊና ኮሌክሽን በቀይ አትክልት',
    nameEn: 'Wina Collection with Vegetable',
    price: 350,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'ሩዝ ፣ ፓስታ እና ቀይ አትክልት ቅልቅል',
    descriptionEn: 'House specialty combo: Rice, spaghetti, and seasoned red vegetable medley',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'sp12',
    nameAm: 'ዊና ኮሌክሽን በበሰለ አትክልት',
    nameEn: 'Wina Collection with Cooked Vegetable',
    price: 390,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'ሩዝ ፣ ፓስታ እና የበሰለ አትክልት ቅልቅል',
    descriptionEn: 'Combo platter: Rice, spaghetti, and steamed mixed vegetables',
    dietary: ['fasting', 'vegetarian']
  },
  {
    id: 'sp13',
    nameAm: 'ዊና እስፔሻል ኮሌክሽን',
    nameEn: 'Wina Special Collection',
    price: 740,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'ካሮት ፣ ድንች ፣ ጎመን ፣ ዶሮ ፣ እንቁላል ፣ የተጠበሰ ድንች ፣ ማዮኔዝ',
    descriptionEn: 'The grand feast: Rice & pasta platter with chicken, egg, fries, mayonnaise, and vegetables',
    dietary: ['chicken'],
    featured: true
  },
  {
    id: 'sp14',
    nameAm: 'ዊና ትሪዎ / 3 በ 1',
    nameEn: 'WINA TRIO (Firfir, Spaghetti & Salad)',
    price: 450,
    categoryId: 'spaghetti-rice',
    descriptionAm: 'ፍርፍር ፣ ስፓጌቲ ፣ አትክልት (3 በ 1 ድንቅ ጥምረት)',
    descriptionEn: 'Famous 3-in-1 combo: authentic Ethiopian firfir, Italian spaghetti, and fresh crisp salad',
    dietary: ['fasting', 'vegetarian'],
    featured: true
  }
];

export const extraItems: ExtraItem[] = [
  { id: 'ex1', nameAm: 'ፕርቮሎኔ ቺዝ', nameEn: 'Provolone Cheese', price: 60 },
  { id: 'ex2', nameAm: 'ቺዝ ሞዛሬላ 60 ግራም', nameEn: 'Cheese Mozzarella (60g)', price: 120 },
  { id: 'ex3', nameAm: 'ቱና', nameEn: 'Tuna', price: 240 },
  { id: 'ex4', nameAm: 'ቢፍ ሞርተዴላ', nameEn: 'Beef Mortadela', price: 50 },
  { id: 'ex5', nameAm: 'እንጀራ', nameEn: 'Enjera', price: 35 },
  { id: 'ex6', nameAm: 'ዳቦ', nameEn: 'Bread', price: 35 },
  { id: 'ex7', nameAm: 'ማዮኔዝ', nameEn: 'Mayonnaise', price: 60 },
  { id: 'ex8', nameAm: 'ፍራፍሬ እና አትክልት', nameEn: 'Any Fruit & Vegetable', price: 80 },
  { id: 'ex9', nameAm: 'ቺሊ ሶስ', nameEn: 'Chili Sauce', price: 50 },
  { id: 'ex10', nameAm: 'እንቁላል', nameEn: 'Egg', price: 40 },
  { id: 'ex11', nameAm: 'የወይራ ዘይት', nameEn: 'Olive Oil', price: 50 }
];

export const takeAwayItems: TakeAwayItem[] = [
  { id: 'ta1', nameAm: 'በርገር ማሸጊያ', nameEn: 'Burger Bag', price: 40 },
  { id: 'ta2', nameAm: 'ፒዛ ካርቶን', nameEn: 'Pizza Box', price: 45 },
  { id: 'ta3', nameAm: 'ጁስ ካፕ', nameEn: 'Juice Cup', price: 20 },
  { id: 'ta4', nameAm: 'ፎይል ከረጢት', nameEn: 'Foil Bag', price: 25 }
];

export const branchContacts: BranchContact[] = [
  {
    id: 'summit',
    nameAm: 'ስሚት',
    nameEn: 'Summit',
    phone: '0961-33 35 55',
    telUri: 'tel:+251961333555',
    location: 'Summit Branch, Addis Ababa'
  },
  {
    id: 'bole',
    nameAm: 'ቦሌ',
    nameEn: 'Bole',
    phone: '0975-33 25 33',
    telUri: 'tel:+251975332533',
    location: 'Bole Branch, Addis Ababa'
  },
  {
    id: 'piazza',
    nameAm: 'ፒያሳ',
    nameEn: 'Piazza',
    phone: '0905-50 50 42',
    telUri: 'tel:+251905505042',
    location: 'Piazza Branch, Addis Ababa'
  },
  {
    id: 'shola',
    nameAm: 'ሾላ',
    nameEn: 'Shola',
    phone: '0987-27 27 27',
    telUri: 'tel:+251987272727',
    location: 'Shola Branch, Addis Ababa'
  },
  {
    id: 'adisu-gebeya',
    nameAm: 'አዲሱ ገበያ',
    nameEn: 'Adisu Gebeya',
    phone: '0945-29 29 29',
    telUri: 'tel:+251945292929',
    location: 'Adisu Gebeya Branch, Addis Ababa'
  },
  {
    id: 'ras-desta',
    nameAm: 'ራስ ደስታ',
    nameEn: 'Ras Desta',
    phone: '0931-00 33 00',
    telUri: 'tel:+251931003300',
    location: 'Ras Desta Damtew Branch, Addis Ababa'
  }
];
