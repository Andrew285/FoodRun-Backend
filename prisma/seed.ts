import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.menuItem.deleteMany();
  await prisma.restaurant.deleteMany();

  const restaurants = [
    {
      name: 'Pizza Roma',
      description: 'Найкраща піца в місті',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      rating: 4.8,
      latitude: 50.4501,
      longitude: 30.5234,
      address: 'вул. Хрещатик, 1, Київ',
      category: 'pizza',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Маргарита', description: 'Томат, моцарела, базилік', price: 180, imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002', category: 'pizza', isAvailable: true },
          { name: 'Пепероні', description: 'Томат, моцарела, пепероні', price: 220, imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e', category: 'pizza', isAvailable: true },
          { name: 'Чотири сири', description: 'Моцарела, пармезан, горгонзола, чеддер', price: 260, imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591', category: 'pizza', isAvailable: true },
          { name: 'Кола 0.5л', description: 'Освіжаючий напій', price: 45, imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7', category: 'drinks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Burger House',
      description: 'Соковиті бургери з яловичини',
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      rating: 4.5,
      latitude: 50.4521,
      longitude: 30.5214,
      address: 'вул. Велика Васильківська, 5, Київ',
      category: 'burgers',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Класичний бургер', description: 'Яловичина, салат, томат, соус', price: 195, imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b', category: 'burgers', isAvailable: true },
          { name: 'Подвійний чізбургер', description: 'Подвійна яловичина, подвійний сир', price: 265, imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b', category: 'burgers', isAvailable: true },
          { name: 'Курячий бургер', description: 'Куряче філе, салат, майонез', price: 175, imageUrl: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086', category: 'burgers', isAvailable: true },
          { name: 'Картопля фрі', description: 'Хрустка картопля з соусом', price: 75, imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877', category: 'sides', isAvailable: true },
        ],
      },
    },
    {
      name: 'Суші Бар Токіо',
      description: 'Автентична японська кухня',
      imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
      rating: 4.9,
      latitude: 50.4481,
      longitude: 30.5254,
      address: 'вул. Прорізна, 10, Київ',
      category: 'sushi',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Філадельфія', description: 'Лосось, вершковий сир, огірок', price: 245, imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252', category: 'rolls', isAvailable: true },
          { name: 'Каліфорнія', description: 'Краб, авокадо, огірок', price: 225, imageUrl: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20', category: 'rolls', isAvailable: true },
          { name: 'Дракон', description: 'Вугор, авокадо, огірок', price: 285, imageUrl: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6', category: 'rolls', isAvailable: true },
          { name: 'Місо суп', description: 'Традиційний японський суп', price: 85, imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554', category: 'soups', isAvailable: true },
        ],
      },
    },
    {
      name: 'Шаурма King',
      description: 'Справжня шаурма з курки та яловичини',
      imageUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783',
      rating: 4.3,
      latitude: 50.4535,
      longitude: 30.5198,
      address: 'вул. Льва Толстого, 3, Київ',
      category: 'shawarma',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Шаурма куряча', description: 'Куряче філе, овочі, соус', price: 120, imageUrl: 'https://images.unsplash.com/photo-1561050501-a83a6f889bc4', category: 'shawarma', isAvailable: true },
          { name: 'Шаурма мікс', description: 'Курка і яловичина, овочі, соуси', price: 145, imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143', category: 'shawarma', isAvailable: true },
          { name: 'Фалафель', description: 'Нутові кульки з соусом тахіні', price: 95, imageUrl: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d', category: 'snacks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Паста Белла',
      description: 'Італійська паста ручної роботи',
      imageUrl: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb',
      rating: 4.6,
      latitude: 50.4462,
      longitude: 30.5271,
      address: 'вул. Саксаганського, 22, Київ',
      category: 'italian',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Карбонара', description: 'Спагеті, бекон, яйце, пармезан', price: 215, imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3', category: 'pasta', isAvailable: true },
          { name: 'Болоньєзе', description: 'Тальятеле, м\'ясний соус', price: 205, imageUrl: 'https://images.unsplash.com/photo-1598866594240-4b56c78b0e83', category: 'pasta', isAvailable: true },
          { name: 'Тірамісу', description: 'Класичний італійський десерт', price: 125, imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9', category: 'desserts', isAvailable: true },
        ],
      },
    },
    {
      name: 'Грузинська Кухня',
      description: 'Автентичні страви Грузії',
      imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
      rating: 4.7,
      latitude: 50.4498,
      longitude: 30.5187,
      address: 'вул. Антоновича, 15, Київ',
      category: 'georgian',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Хачапурі по-аджарськи', description: 'Човник з сиром і яйцем', price: 185, imageUrl: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212', category: 'bread', isAvailable: true },
          { name: 'Хінкалі', description: 'Грузинські пельмені з м\'ясом (5 шт)', price: 165, imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8', category: 'dumplings', isAvailable: true },
          { name: 'Чахохбілі', description: 'Куряче рагу з томатами і зеленню', price: 195, imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975', category: 'mains', isAvailable: true },
        ],
      },
    },
    {
      name: 'Рамен Хаус',
      description: 'Японські рамени та інші супи',
      imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
      rating: 4.6,
      latitude: 50.4512,
      longitude: 30.5241,
      address: 'вул. Гончара, 8, Київ',
      category: 'japanese',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Тонкоцу Рамен', description: 'Свинячий бульйон, яйце, норі', price: 235, imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624', category: 'ramen', isAvailable: true },
          { name: 'Шою Рамен', description: 'Соєвий бульйон, курка, бамбук', price: 215, imageUrl: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1', category: 'ramen', isAvailable: true },
          { name: 'Гяоза', description: 'Смажені японські пельмені (6 шт)', price: 145, imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d', category: 'snacks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Тайська Кухня Bangkok',
      description: 'Справжня тайська кухня з доставкою',
      imageUrl: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4',
      rating: 4.4,
      latitude: 50.4478,
      longitude: 30.5263,
      address: 'вул. Пушкінська, 18, Київ',
      category: 'thai',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Пад Тай', description: 'Рисова локшина з куркою і арахісом', price: 225, imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e', category: 'noodles', isAvailable: true },
          { name: 'Том Ям', description: 'Гострий суп з креветками', price: 245, imageUrl: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853', category: 'soups', isAvailable: true },
          { name: 'Зелене каррі', description: 'Кокосове молоко, курка, овочі', price: 235, imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd', category: 'curry', isAvailable: true },
        ],
      },
    },
    {
      name: 'Індійський Двір',
      description: 'Ароматні страви Індії',
      imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',
      rating: 4.5,
      latitude: 50.4523,
      longitude: 30.5176,
      address: 'вул. Дмитрівська, 30, Київ',
      category: 'indian',
      isOpen: false,
      menuItems: {
        create: [
          { name: 'Чікен Тікка Масала', description: 'Курка в томатно-вершковому соусі', price: 245, imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641', category: 'curry', isAvailable: true },
          { name: 'Палак Панір', description: 'Шпинат з домашнім сиром', price: 215, imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950', category: 'vegetarian', isAvailable: true },
          { name: 'Наан', description: 'Традиційний індійський хліб', price: 55, imageUrl: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15', category: 'bread', isAvailable: true },
        ],
      },
    },
    {
      name: 'Мексиканський Гриль',
      description: 'Бурріто, тако і начос',
      imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85',
      rating: 4.3,
      latitude: 50.4489,
      longitude: 30.5229,
      address: 'вул. Бассейна, 7, Київ',
      category: 'mexican',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Бурріто з куркою', description: 'Тортилья, рис, квасоля, курка, сальса', price: 195, imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f', category: 'burritos', isAvailable: true },
          { name: 'Тако (3 шт)', description: 'Кукурудзяні тортильї з начинкою', price: 175, imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47', category: 'tacos', isAvailable: true },
          { name: 'Начос з гуакамоле', description: 'Чіпси, гуакамоле, сальса, сметана', price: 155, imageUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d', category: 'snacks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Стейк Хаус Прем\'єр',
      description: 'Соковиті стейки на грилі',
      imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',
      rating: 4.8,
      latitude: 50.4456,
      longitude: 30.5248,
      address: 'вул. Червоноармійська, 45, Київ',
      category: 'steakhouse',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Рібай стейк', description: '300г мармурової яловичини', price: 680, imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462', category: 'steaks', isAvailable: true },
          { name: 'Філе міньйон', description: '200г найніжнішої вирізки', price: 750, imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e', category: 'steaks', isAvailable: true },
          { name: 'Картопля по-сільськи', description: 'Запечена картопля з розмарином', price: 95, imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877', category: 'sides', isAvailable: true },
        ],
      },
    },
    {
      name: 'Вегетаріанський Рай',
      description: 'Здорова рослинна їжа',
      imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      rating: 4.4,
      latitude: 50.4507,
      longitude: 30.5195,
      address: 'вул. Лютеранська, 12, Київ',
      category: 'vegetarian',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Боул з кіноа', description: 'Кіноа, нут, авокадо, овочі', price: 185, imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd', category: 'bowls', isAvailable: true },
          { name: 'Веган бургер', description: 'Котлета з нуту, салат, томат', price: 165, imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360', category: 'burgers', isAvailable: true },
          { name: 'Смузі детокс', description: 'Шпинат, яблуко, імбир, лимон', price: 95, imageUrl: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec', category: 'drinks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Морська Зірка',
      description: 'Свіжі морепродукти та риба',
      imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
      rating: 4.7,
      latitude: 50.4531,
      longitude: 30.5267,
      address: 'вул. Костьольна, 9, Київ',
      category: 'seafood',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Лосось на грилі', description: '200г філе лосося з овочами', price: 385, imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288', category: 'fish', isAvailable: true },
          { name: 'Креветки часникові', description: 'Тигрові креветки в часниковому маслі', price: 345, imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47', category: 'seafood', isAvailable: true },
          { name: 'Крем-суп з морепродуктами', description: 'Вершковий суп з мідіями і креветками', price: 195, imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554', category: 'soups', isAvailable: true },
        ],
      },
    },
    {
      name: 'Китайський Дракон',
      description: 'Традиційна китайська кухня',
      imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d',
      rating: 4.2,
      latitude: 50.4468,
      longitude: 30.5212,
      address: 'вул. Золотоворітська, 4, Київ',
      category: 'chinese',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Курка Кунг Пао', description: 'Курка з арахісом і гострим перцем', price: 195, imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e', category: 'mains', isAvailable: true },
          { name: 'Смажений рис з яйцем', description: 'Рис, яйце, овочі, соєвий соус', price: 155, imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b', category: 'rice', isAvailable: true },
          { name: 'Димсам (6 шт)', description: 'Парові пельмені з креветками', price: 175, imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d', category: 'dumplings', isAvailable: true },
        ],
      },
    },
    {
      name: 'Французька Булочна',
      description: 'Свіжа випічка та сніданки',
      imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
      rating: 4.6,
      latitude: 50.4515,
      longitude: 30.5183,
      address: 'вул. Лесі Українки, 20, Київ',
      category: 'bakery',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Круасан з маслом', description: 'Свіжий круасан з вершковим маслом', price: 65, imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a', category: 'pastry', isAvailable: true },
          { name: 'Яйця Бенедикт', description: 'Яйця пашот, голландський соус, бекон', price: 185, imageUrl: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7', category: 'breakfast', isAvailable: true },
          { name: 'Капучіно', description: 'Еспресо з молочною пінкою', price: 75, imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d', category: 'drinks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Лаваш і Долма',
      description: 'Вірменська і кавказька кухня',
      imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975',
      rating: 4.5,
      latitude: 50.4486,
      longitude: 30.5257,
      address: 'вул. Шота Руставелі, 11, Київ',
      category: 'caucasian',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Долма', description: 'Виноградне листя з рисом і м\'ясом (8 шт)', price: 175, imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975', category: 'appetizers', isAvailable: true },
          { name: 'Люля-кебаб', description: 'Яловичий фарш на грилі з лавашем', price: 215, imageUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783', category: 'grills', isAvailable: true },
          { name: 'Хумус з лавашем', description: 'Нутовий хумус з теплим лавашем', price: 115, imageUrl: 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d', category: 'appetizers', isAvailable: true },
        ],
      },
    },
    {
      name: 'Піцерія Наполі',
      description: 'Неаполітанська піца на дровах',
      imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      rating: 4.7,
      latitude: 50.4543,
      longitude: 30.5221,
      address: 'вул. Назарівська, 6, Київ',
      category: 'pizza',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Піца Маринара', description: 'Томат, часник, орегано, олія', price: 165, imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002', category: 'pizza', isAvailable: true },
          { name: 'Піца Діавола', description: 'Томат, моцарела, гострі ковбаски', price: 235, imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e', category: 'pizza', isAvailable: true },
          { name: 'Брускета', description: 'Підсмажений хліб з томатами і базиліком', price: 95, imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f', category: 'appetizers', isAvailable: true },
        ],
      },
    },
    {
      name: 'Смак України',
      description: 'Традиційна українська кухня',
      imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
      rating: 4.6,
      latitude: 50.4474,
      longitude: 30.5238,
      address: 'вул. Хмельницького, 33, Київ',
      category: 'ukrainian',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Борщ з пампушками', description: 'Червоний борщ зі сметаною і пампушками', price: 145, imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554', category: 'soups', isAvailable: true },
          { name: 'Вареники з картоплею', description: 'Вареники зі смаженою цибулею і сметаною', price: 135, imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8', category: 'dumplings', isAvailable: true },
          { name: 'Деруни зі сметаною', description: 'Картопляні деруни з домашньою сметаною', price: 125, imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975', category: 'mains', isAvailable: true },
        ],
      },
    },
    {
      name: 'Барбекю Техас',
      description: 'Американське барбекю і ребра',
      imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd',
      rating: 4.5,
      latitude: 50.4502,
      longitude: 30.5208,
      address: 'вул. Жилянська, 17, Київ',
      category: 'bbq',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Свинячі ребра', description: 'Копчені ребра в барбекю соусі (500г)', price: 395, imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd', category: 'bbq', isAvailable: true },
          { name: 'Pulled Pork сендвіч', description: 'Тушкована свинина в булці з колслоу', price: 185, imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b', category: 'sandwiches', isAvailable: true },
          { name: 'Кукурудза на грилі', description: 'Кукурудза з вершковим маслом і спеціями', price: 75, imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076', category: 'sides', isAvailable: true },
        ],
      },
    },
    {
      name: 'Кафе Відень',
      description: 'Австрійська кухня та кава',
      imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31',
      rating: 4.4,
      latitude: 50.4519,
      longitude: 30.5245,
      address: 'вул. Городецького, 5, Київ',
      category: 'european',
      isOpen: false,
      menuItems: {
        create: [
          { name: 'Шніцель по-віденськи', description: 'Тонкий телячий шніцель з лимоном', price: 345, imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462', category: 'mains', isAvailable: true },
          { name: 'Штрудель яблучний', description: 'Листковий штрудель з ванільним морозивом', price: 135, imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9', category: 'desserts', isAvailable: true },
          { name: 'Меланж', description: 'Австрійська кава з молоком', price: 85, imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d', category: 'drinks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Піта Бар',
      description: 'Ізраїльська вулична їжа',
      imageUrl: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d',
      rating: 4.3,
      latitude: 50.4493,
      longitude: 30.5172,
      address: 'вул. Межигірська, 25, Київ',
      category: 'middle_eastern',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Піта з фалафелем', description: 'Свіжа піта, фалафель, хумус, салат', price: 115, imageUrl: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d', category: 'pita', isAvailable: true },
          { name: 'Шакшука', description: 'Яйця в томатному соусі зі спеціями', price: 145, imageUrl: 'https://images.unsplash.com/photo-1590412200988-a436970781fa', category: 'breakfast', isAvailable: true },
          { name: 'Табуле', description: 'Салат з булгуру, петрушки і томатів', price: 95, imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd', category: 'salads', isAvailable: true },
        ],
      },
    },
    {
      name: 'Корейська BBQ',
      description: 'Корейське барбекю та стріт фуд',
      imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733',
      rating: 4.6,
      latitude: 50.4538,
      longitude: 30.5233,
      address: 'вул. Спаська, 14, Київ',
      category: 'korean',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Біббімбап', description: 'Рис з овочами, м\'ясом і яйцем', price: 215, imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733', category: 'rice', isAvailable: true },
          { name: 'Кімчі пегі', description: 'Смажені свинячі реберця з кімчі', price: 285, imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd', category: 'bbq', isAvailable: true },
          { name: 'Токпоккі', description: 'Рисові цукерки в гострому соусі', price: 155, imageUrl: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4', category: 'snacks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Піцерія Везувій',
      description: 'Піца на тонкому тісті',
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      rating: 4.3,
      latitude: 50.4461,
      longitude: 30.5219,
      address: 'вул. Паньківська, 8, Київ',
      category: 'pizza',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Піца Гавайська', description: 'Шинка, ананас, моцарела', price: 205, imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', category: 'pizza', isAvailable: true },
          { name: 'Піца Барбекю', description: 'Курка, бекон, барбекю соус', price: 225, imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002', category: 'pizza', isAvailable: true },
          { name: 'Часниковий хліб', description: 'Хрусткий хліб з часниковим маслом', price: 75, imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f', category: 'sides', isAvailable: true },
        ],
      },
    },
    {
      name: 'Швидкий Обід',
      description: 'Бізнес ланчі та домашня їжа',
      imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
      rating: 4.1,
      latitude: 50.4509,
      longitude: 30.5261,
      address: 'вул. Ділова, 1, Київ',
      category: 'homefood',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Курка з рисом', description: 'Запечена курка з відвареним рисом', price: 135, imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b', category: 'mains', isAvailable: true },
          { name: 'Суп курячий', description: 'Домашній курячий суп з локшиною', price: 95, imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554', category: 'soups', isAvailable: true },
          { name: 'Компот', description: 'Домашній компот з сухофруктів', price: 35, imageUrl: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec', category: 'drinks', isAvailable: true },
        ],
      },
    },
    {
      name: 'Десертна Майстерня',
      description: 'Торти, тістечка та морозиво',
      imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
      rating: 4.8,
      latitude: 50.4527,
      longitude: 30.5189,
      address: 'вул. Золота, 3, Київ',
      category: 'desserts',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Торт Наполеон', description: 'Класичний торт з заварним кремом', price: 185, imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b', category: 'cakes', isAvailable: true },
          { name: 'Еклер шоколадний', description: 'Заварне тісто з шоколадним кремом', price: 75, imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9', category: 'pastry', isAvailable: true },
          { name: 'Морозиво 3 кульки', description: 'Ванільне, шоколадне, полунничне', price: 95, imageUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a', category: 'icecream', isAvailable: true },
        ],
      },
    },
    {
      name: 'Варшавська Кухня',
      description: 'Польська домашня їжа',
      imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
      rating: 4.4,
      latitude: 50.4471,
      longitude: 30.5244,
      address: 'вул. Зоологічна, 4, Київ',
      category: 'polish',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Пероги з м\'ясом', description: 'Польські вареники з м\'ясною начинкою', price: 155, imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8', category: 'dumplings', isAvailable: true },
          { name: 'Жур', description: 'Польський кислий суп з ковбасою', price: 125, imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554', category: 'soups', isAvailable: true },
          { name: 'Бігос', description: 'Тушкована капуста з м\'ясом і ковбасою', price: 165, imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e', category: 'mains', isAvailable: true },
        ],
      },
    },
    {
      name: 'Noodle Bar',
      description: 'Азіатська локшина на будь-який смак',
      imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
      rating: 4.5,
      latitude: 50.4496,
      longitude: 30.5276,
      address: 'вул. Михайлівська, 16, Київ',
      category: 'asian',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Удон з яловичиною', description: 'Товста пшенична локшина з яловичиною', price: 225, imageUrl: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1', category: 'noodles', isAvailable: true },
          { name: 'Соба з качкою', description: 'Гречана локшина з качиною грудкою', price: 245, imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624', category: 'noodles', isAvailable: true },
          { name: 'Спрінг роли (4 шт)', description: 'Рисовий папір з овочами і креветками', price: 145, imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e', category: 'appetizers', isAvailable: true },
        ],
      },
    },
    {
      name: 'Кав\'ярня Арабіка',
      description: 'Спеціальна кава та легкі закуски',
      imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31',
      rating: 4.7,
      latitude: 50.4484,
      longitude: 30.5201,
      address: 'вул. Пейзажна, 2, Київ',
      category: 'cafe',
      isOpen: true,
      menuItems: {
        create: [
          { name: 'Флет Уайт', description: 'Подвійний еспресо з мікропінкою', price: 85, imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d', category: 'drinks', isAvailable: true },
          { name: 'Авокадо тост', description: 'Тост з авокадо, яйцем і мікрозеленню', price: 155, imageUrl: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7', category: 'breakfast', isAvailable: true },
          { name: 'Чізкейк Нью-Йорк', description: 'Класичний чізкейк з ягідним соусом', price: 125, imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b', category: 'desserts', isAvailable: true },
        ],
      },
    },
  ];

  for (const restaurant of restaurants) {
    await prisma.restaurant.create({ data: restaurant });
  }

  console.log(`✅ Created ${restaurants.length} restaurants`);
  console.log('Seeding completed!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());