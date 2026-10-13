const menuItems = [
  // ---------- Hot Drinks ----------
  {
    id: 1,
    name: "Classic Espresso",
    category: "Hot Drinks",
    price: 3.25,
    image:
      "https://scontent.fcxl1-1.fna.fbcdn.net/v/t51.82787-15/808906270_18622483915039444_7668243408388840707_n.jpg?stp=dst-jpg_tt6&cstp=mx1350x1687&ctp=s1350x1687&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tuaAZAurbRkQ7kNvwHbNa-s&_nc_oc=AdpPNV_RSGJXqIhNRdp6mvL-guUFr9rJl9uZxUpfs_XvBBGH0jpjmwQjLUVuObQ0hOU&_nc_zt=23&_nc_ht=scontent.fcxl1-1.fna&_nc_gid=6vM2EhT_rMaqooOnJK-Bjg&_nc_ss=7b289&oh=00_AQPlKx5RKEsg4VmP8sPk2bDYNsJsGitNyr1D2XxyDQG2Fg&oe=6AD2EE90",
    description:
      "A full-bodied, concentrated shot of espresso with a rich crema and notes of dark chocolate.",
  },
  {
    id: 2,
    name: "Vanilla Latte",
    category: "Hot Drinks",
    price: 4.75,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    description:
      "Smooth espresso layered with steamed milk and a whisper of Madagascar vanilla.",
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    category: "Hot Drinks",
    price: 5.25,
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80",
    description:
      "Espresso poured over velvety milk and finished with a buttery caramel drizzle.",
  },
  {
    id: 4,
    name: "Chai Tea Latte",
    category: "Hot Drinks",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
    description:
      "Black tea infused with cinnamon, clove, and cardamom, blended with steamed milk.",
  },

  // ---------- Iced Drinks ----------
  {
    id: 5,
    name: "Cold Brew",
    category: "Iced Drinks",
    price: 4.25,
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80",
    description:
      "Slow-steeped for 20 hours for a smooth, low-acid cup with a natural sweetness.",
  },
  {
    id: 6,
    name: "Iced Matcha Latte",
    category: "Iced Drinks",
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80",
    description:
      "Ceremonial-grade matcha whisked with cold milk over ice. Earthy and refreshing.",
  },
  {
    id: 7,
    name: "Strawberry Lemonade",
    category: "Iced Drinks",
    price: 3.95,
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800&q=80",
    description:
      "Fresh-squeezed lemons muddled with ripe strawberries and a touch of cane sugar.",
  },
  {
    id: 8,
    name: "Iced Caramel Cold Foam",
    category: "Iced Drinks",
    price: 5.5,
    image:
      "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=800&q=80",
    description:
      "Cold brew topped with a silky cascade of sweetened caramel cold foam.",
  },

  // ---------- Tea & Wellness ----------
  {
    id: 9,
    name: "Earl Grey Supreme",
    category: "Tea & Wellness",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&q=80",
    description:
      "Bergamot-scented black tea with hints of citrus and a floral finish.",
  },
  {
    id: 10,
    name: "Golden Turmeric Latte",
    category: "Tea & Wellness",
    price: 4.95,
    image:
      "https://images.unsplash.com/photo-1615486364163-4d8b6c1b6c0e?w=800&q=80",
    description:
      "Turmeric, ginger, and cinnamon simmered in oat milk. Warming and anti-inflammatory.",
  },
  {
    id: 11,
    name: "Peppermint Herbal Tea",
    category: "Tea & Wellness",
    price: 3.25,
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80",
    description:
      "Caffeine-free peppermint leaves steeped to a bright, cooling finish.",
  },

  // ---------- Pastries ----------
  {
    id: 12,
    name: "Butter Croissant",
    category: "Pastries",
    price: 3.75,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    description:
      "Flaky, laminated croissant baked fresh each morning with European-style butter.",
  },
  {
    id: 13,
    name: "Almond Danish",
    category: "Pastries",
    price: 4.25,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    description:
      "Buttery pastry filled with almond cream and topped with toasted sliced almonds.",
  },
  {
    id: 14,
    name: "Cinnamon Roll",
    category: "Pastries",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80",
    description:
      "Soft-baked roll swirled with cinnamon sugar and finished with cream cheese glaze.",
  },
  {
    id: 15,
    name: "Blueberry Muffin",
    category: "Pastries",
    price: 3.95,
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80",
    description:
      "Moist muffin loaded with wild blueberries and a crunchy turbinado top.",
  },

  // ---------- Breakfast ----------
  {
    id: 16,
    name: "Avocado Toast",
    category: "Breakfast",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80",
    description:
      "Smashed avocado on sourdough with chili flakes, lemon, and microgreens.",
  },
  {
    id: 17,
    name: "Bacon Egg & Cheese Sandwich",
    category: "Breakfast",
    price: 7.95,
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80",
    description:
      "Cage-free egg, applewood bacon, and aged cheddar on a toasted brioche bun.",
  },
  {
    id: 18,
    name: "Greek Yogurt Parfait",
    category: "Breakfast",
    price: 6.25,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    description:
      "Layers of Greek yogurt, honey granola, and fresh seasonal berries.",
  },

  // ---------- Sandwiches & Wraps ----------
  {
    id: 19,
    name: "Turkey Pesto Panini",
    category: "Sandwiches & Wraps",
    price: 10.5,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
    description:
      "Roasted turkey, basil pesto, provolone, and tomato pressed on ciabatta.",
  },
  {
    id: 20,
    name: "Caprese Wrap",
    category: "Sandwiches & Wraps",
    price: 9.75,
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
    description:
      "Fresh mozzarella, heirloom tomato, basil, and balsamic glaze in a spinach wrap.",
  },
  {
    id: 21,
    name: "Chicken Caesar Wrap",
    category: "Sandwiches & Wraps",
    price: 10.95,
    image:
      "https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=800&q=80",
    description:
      "Grilled chicken, romaine, parmesan, and creamy Caesar in a flour tortilla.",
  },

  // ---------- Sweets ----------
  {
    id: 22,
    name: "Chocolate Chip Cookie",
    category: "Sweets",
    price: 2.95,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    description:
      "Chewy center, crisp edges, and pools of dark chocolate. Baked in-house.",
  },
  {
    id: 23,
    name: "Lemon Bar",
    category: "Sweets",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
    description:
      "Tart lemon curd on a buttery shortbread crust, dusted with powdered sugar.",
  },
  {
    id: 24,
    name: "Tiramisu Cup",
    category: "Sweets",
    price: 5.75,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    description:
      "Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.",
  },
];
export default menuItems;
