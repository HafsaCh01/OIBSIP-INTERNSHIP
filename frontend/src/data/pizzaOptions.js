/* Each pizza has a `cat` used for the color-coded icon + tag styling:
   classic (red), veg (green), spicy (orange), meat (maroon), specialty (purple) */

export const CATEGORIES = [
  { id: 'all', name: 'All Pizzas' },
  { id: 'classic', name: 'Classic' },
  { id: 'meat', name: 'Meat Lovers' },
  { id: 'spicy', name: 'Spicy' },
  { id: 'veg', name: 'Veggie' },
  { id: 'specialty', name: 'Specialty' },
];

export const FEATURED_PIZZAS = [
  { id: 'margherita', name: 'Classic Margherita', cat: 'classic', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', desc: 'San Marzano tomato sauce, fresh mozzarella, basil.', price: 8.99, tags: ['Vegetarian', 'Classic'] , rating: 4.7 },
  { id: 'pepperoni', name: 'Pepperoni Feast', cat: 'classic', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80', desc: 'Double pepperoni, mozzarella, oregano, tomato sauce.', price: 10.49, tags: ['Bestseller'] , rating: 4.3 },
  { id: 'margherita-bianca', name: 'Margherita Bianca', cat: 'classic', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80', desc: 'Olive oil base, fresh mozzarella, cherry tomato, basil.', price: 9.49, tags: ['Vegetarian'] , rating: 4.5 },
  { id: 'four-cheese', name: 'Four Cheese', cat: 'classic', image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=800&q=80', desc: 'Mozzarella, cheddar, parmesan, gorgonzola blend.', price: 10.99, tags: ['Vegetarian', 'Rich'] , rating: 4.4 },
  { id: 'hawaiian', name: 'Hawaiian', cat: 'classic', image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?auto=format&fit=crop&w=800&q=80', desc: 'Ham, pineapple, mozzarella, tomato sauce.', price: 10.29, tags: ['Sweet & Savory'] , rating: 4.7 },

  { id: 'meat-lovers', name: 'Meat Lovers', cat: 'meat', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80', desc: 'Pepperoni, sausage, bacon, ham, mozzarella.', price: 12.99, tags: ['Bestseller'] , rating: 4.7 },
  { id: 'bbq-chicken', name: 'BBQ Chicken', cat: 'meat', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80', desc: 'Smoky BBQ sauce, grilled chicken, red onion, cheddar.', price: 11.99, tags: ['Popular'] , rating: 4.8 },
  { id: 'pepperoni-bacon', name: 'Pepperoni & Bacon', cat: 'meat', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80', desc: 'Double pepperoni, crispy bacon, mozzarella, oregano.', price: 12.49, tags: [] , rating: 4.4 },
  { id: 'sausage-supreme', name: 'Italian Sausage Supreme', cat: 'meat', image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80', desc: 'Fennel sausage, roasted peppers, onion, mozzarella.', price: 11.79, tags: [] , rating: 4.6 },
  { id: 'philly-steak', name: 'Philly Cheesesteak', cat: 'meat', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80', desc: 'Sliced steak, sautéed onion, bell pepper, provolone.', price: 13.49, tags: ['Hearty'] , rating: 4.3 },

  { id: 'diavola', name: 'Diavola', cat: 'spicy', image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80', desc: 'Spicy salami, chili flakes, mozzarella, arrabbiata sauce.', price: 11.49, tags: ['Hot'] , rating: 4.4 },
  { id: 'buffalo-chicken', name: 'Buffalo Chicken', cat: 'spicy', image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=800&q=80', desc: 'Buffalo sauce, grilled chicken, red onion, ranch drizzle.', price: 11.99, tags: ['Hot'] , rating: 4.6 },
  { id: 'nashville-hot', name: 'Nashville Hot Chicken', cat: 'spicy', image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&w=800&q=80', desc: 'Cayenne-glazed chicken, pickles, mozzarella, hot honey.', price: 12.49, tags: ['Hot', 'New'] , rating: 4.3 },
  { id: 'jalapeno-popper', name: 'Jalapeño Popper', cat: 'spicy', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', desc: 'Cream cheese base, jalapeño, bacon, cheddar.', price: 11.29, tags: ['Hot'] , rating: 4.4 },

  { id: 'veggie-supreme', name: 'Veggie Supreme', cat: 'veg', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', desc: 'Bell peppers, mushroom, olives, onion, sweet corn.', price: 9.99, tags: ['Vegetarian'] , rating: 4.7 },
  { id: 'mushroom-truffle', name: 'Mushroom Truffle', cat: 'veg', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80', desc: 'Wild mushroom blend, truffle oil, mozzarella, thyme.', price: 12.29, tags: ['Vegetarian', 'Premium'] , rating: 4.6 },
  { id: 'spinach-ricotta', name: 'Spinach & Ricotta', cat: 'veg', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80', desc: 'Baby spinach, ricotta, garlic, mozzarella, olive oil.', price: 10.49, tags: ['Vegetarian'] , rating: 4.4 },
  { id: 'mediterranean', name: 'Mediterranean Garden', cat: 'veg', image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=800&q=80', desc: 'Olives, feta, sun-dried tomato, red onion, oregano.', price: 10.99, tags: ['Vegetarian'] , rating: 4.7 },
  { id: 'vegan-harvest', name: 'Vegan Harvest', cat: 'veg', image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?auto=format&fit=crop&w=800&q=80', desc: 'Vegan cheese, roasted veg, basil, tomato sauce.', price: 11.49, tags: ['Vegan'] , rating: 4.8 },

  { id: 'fig-prosciutto', name: 'Fig & Prosciutto', cat: 'specialty', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80', desc: 'Fig jam, prosciutto, gorgonzola, arugula, balsamic glaze.', price: 13.99, tags: ['Premium'] , rating: 4.3 },
  { id: 'pesto-chicken', name: 'Pesto Chicken', cat: 'specialty', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80', desc: 'Basil pesto, grilled chicken, sun-dried tomato, mozzarella.', price: 12.49, tags: ['Popular'] , rating: 4.8 },
  { id: 'truffle-carbonara', name: 'Truffle Carbonara', cat: 'specialty', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80', desc: 'Alfredo base, pancetta, egg yolk drizzle, parmesan.', price: 13.49, tags: ['Premium', 'New'] , rating: 4.7 },
];

export const BASES = [
  { id: 'thin', name: 'Thin Crust', price: 0 },
  { id: 'classic', name: 'Classic Hand-Tossed', price: 0.5 },
  { id: 'deep-dish', name: 'Deep Dish', price: 1.5 },
  { id: 'stuffed-crust', name: 'Stuffed Crust', price: 2 },
  { id: 'gluten-free', name: 'Gluten-Free', price: 2.5 },
];

export const SAUCES = [
  { id: 'tomato', name: 'Classic Tomato', price: 0 },
  { id: 'bbq', name: 'BBQ', price: 0.5 },
  { id: 'pesto', name: 'Basil Pesto', price: 0.75 },
  { id: 'alfredo', name: 'White Alfredo', price: 0.75 },
  { id: 'spicy', name: 'Spicy Arrabbiata', price: 0.5 },
];

export const CHEESES = [
  { id: 'mozzarella', name: 'Mozzarella', price: 0 },
  { id: 'cheddar', name: 'Cheddar', price: 0.5 },
  { id: 'parmesan', name: 'Parmesan', price: 0.75 },
  { id: 'vegan-cheese', name: 'Vegan Cheese', price: 1 },
];

export const VEGGIES = [
  { id: 'mushroom', name: 'Mushroom', price: 0.5 },
  { id: 'onion', name: 'Onion', price: 0.3 },
  { id: 'bell-pepper', name: 'Bell Pepper', price: 0.4 },
  { id: 'olives', name: 'Olives', price: 0.5 },
  { id: 'corn', name: 'Sweet Corn', price: 0.4 },
  { id: 'jalapeno', name: 'Jalapeño', price: 0.4 },
  { id: 'tomato-slice', name: 'Tomato', price: 0.3 },
  { id: 'spinach', name: 'Spinach', price: 0.4 },
];

export const MEATS = [
  { id: 'pepperoni', name: 'Pepperoni', price: 1 },
  { id: 'sausage', name: 'Sausage', price: 1 },
  { id: 'bacon', name: 'Bacon', price: 1.25 },
  { id: 'chicken', name: 'Grilled Chicken', price: 1.25 },
  { id: 'ham', name: 'Ham', price: 1 },
];
