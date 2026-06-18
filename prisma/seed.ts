import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Delete old data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.menuItem.deleteMany();
  await prisma.restaurant.deleteMany();

  // Create restaurants
  const restaurant1 = await prisma.restaurant.create({
    data: {
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
          {
            name: 'Маргарита',
            description: 'Томат, моцарела, базилік',
            price: 180,
            imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
            category: 'pizza',
            isAvailable: true,
          },
          {
            name: 'Пепероні',
            description: 'Томат, моцарела, пепероні',
            price: 220,
            imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
            category: 'pizza',
            isAvailable: true,
          },
          {
            name: 'Кола 0.5л',
            description: 'Освіжаючий напій',
            price: 45,
            imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7',
            category: 'drinks',
            isAvailable: true,
          },
        ],
      },
    },
  });

  const restaurant2 = await prisma.restaurant.create({
    data: {
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
          {
            name: 'Класичний бургер',
            description: 'Яловичина, салат, томат, соус',
            price: 195,
            imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b',
            category: 'burgers',
            isAvailable: true,
          },
          {
            name: 'Подвійний чізбургер',
            description: 'Подвійна яловичина, подвійний сир',
            price: 265,
            imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b',
            category: 'burgers',
            isAvailable: true,
          },
          {
            name: 'Картопля фрі',
            description: 'Хрустка картопля з соусом',
            price: 75,
            imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877',
            category: 'sides',
            isAvailable: true,
          },
        ],
      },
    },
  });

  const restaurant3 = await prisma.restaurant.create({
    data: {
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
          {
            name: 'Філадельфія',
            description: 'Лосось, вершковий сир, огірок',
            price: 245,
            imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252',
            category: 'rolls',
            isAvailable: true,
          },
          {
            name: 'Каліфорнія',
            description: 'Краб, авокадо, огірок',
            price: 225,
            imageUrl: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20',
            category: 'rolls',
            isAvailable: true,
          },
        ],
      },
    },
  });

  console.log('✅ Created restaurants:', restaurant1.name, restaurant2.name, restaurant3.name);
  console.log('Seeding completed!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());