import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const products = [
    {
      id: 1,
      name: "Классическая бейсболка",
      price: 2490,
      image: "/img/45a5d1f9-b064-4daa-82c3-be01c3ef19be.jpg",
      colors: ["Черный", "Белый", "Серый"],
    },
    {
      id: 2,
      name: "Снэпбек Premium",
      price: 3290,
      image: "/img/9f24fd88-e99e-4a94-85a8-0ed941bd355b.jpg",
      colors: ["Белый", "Черный"],
    },
    {
      id: 3,
      name: "Коллекция головных уборов",
      price: 1990,
      image: "/img/f0938daa-d30b-452b-bbd3-0a5f9717e24f.jpg",
      colors: ["Разные цвета"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-black">CAPS</h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#catalog"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  О нас
                </a>
                <a
                  href="#delivery"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Доставка
                </a>
                <a
                  href="#contacts"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Контакты
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
                Стиль начинается
                <br />с головы
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Премиальные головные уборы для тех, кто ценит качество и
                минимализм
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg">
                  О бренде
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/45a5d1f9-b064-4daa-82c3-be01c3ef19be.jpg"
                alt="Hero Cap"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Популярные модели
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждая кепка создана с вниманием к деталям и использованием
              качественных материалов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-white rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Доступно: {product.colors.join(", ")}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">
                        {product.price}₽
                      </span>
                      <Button onClick={addToCart} size="sm">
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600 text-sm">По Москве в день заказа</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RotateCcw" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2">Легкий возврат</h4>
              <p className="text-gray-600 text-sm">30 дней на возврат</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2">Гарантия качества</h4>
              <p className="text-gray-600 text-sm">
                Только оригинальные товары
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold mb-2">Удобная оплата</h4>
              <p className="text-gray-600 text-sm">Картой или наличными</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Delivery Section */}
      <section id="delivery" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Доставка и оплата</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={20} className="text-gray-600 mt-1" />
                <div>
                  <h4 className="font-semibold">По Москве</h4>
                  <p className="text-gray-600">Курьером в день заказа - 300₽</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Package" size={20} className="text-gray-600 mt-1" />
                <div>
                  <h4 className="font-semibold">По России</h4>
                  <p className="text-gray-600">Почта России - от 400₽</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon
                  name="CreditCard"
                  size={20}
                  className="text-gray-600 mt-1"
                />
                <div>
                  <h4 className="font-semibold">Оплата</h4>
                  <p className="text-gray-600">
                    Картой онлайн или при получении
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="contacts">
            <h3 className="text-2xl font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Phone" size={20} className="text-gray-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Телефон</h4>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Mail" size={20} className="text-gray-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">info@caps.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={20} className="text-gray-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Часы работы</h4>
                  <p className="text-gray-600">
                    Пн-Пт: 10:00-20:00
                    <br />
                    Сб-Вс: 11:00-18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CAPS</h3>
              <p className="text-gray-400">
                Качественные головные уборы с доставкой по всей России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Бейсболки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Снэпбеки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Кепки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Шапки
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Размеры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="Facebook" size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CAPS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
