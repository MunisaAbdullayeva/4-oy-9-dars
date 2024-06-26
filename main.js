const products = [ 
    { 
      id: 1, 
      name: "Футбольный мяч", 
      price: 1000, 
      category: "Спортивные товары", 
      description: "Прочный футбольный мяч для тренировок и игр", 
      image: "football.jpg", 
    }, 
    { 
      id: 2, 
      name: "Наушники Bluetooth", 
      price: 2500, 
      category: "Электроника", 
      description: "Беспроводные наушники с отличным качеством звука", 
      image: "headphones.jpg", 
    }, 
    { 
      id: 3, 
      name: "Фотокамера DSLR", 
      price: 35000, 
      category: "Фототехника", 
      description: "Профессиональная цифровая зеркальная фотокамера", 
      image: "camera.jpg", 
    }, 
    { 
      id: 4, 
      name: "Компьютерный стол", 
      price: 5000, 
      category: "Мебель", 
      description: "Удобный и стильный стол для компьютера", 
      image: "desk.jpg", 
    }, 
    { 
      id: 5, 
      name: "Кофемашина", 
      price: 15000, 
      category: "Кухонная техника", 
      description: 
        "Автоматическая кофемашина для приготовления эспрессо и капучино", 
      image: "coffee-machine.jpg", 
    }, 
    { 
      id: 6, 
      name: "Бритва электрическая", 
      price: 2000, 
      category: "Уход за собой", 
      description: "Мощная и удобная электрическая бритва", 
      image: "razor.jpg", 
    }, 
    { 
      id: 7, 
      name: "Книга 'Мастер и Маргарита'", 
      price: 800, 
      category: "Книги", 
      description: "Известный роман Михаила Булгакова", 
      image: "book.jpg", 
    }, 
    { 
      id: 8, 
      name: "Фитнес трекер", 
      price: 3000, 
      category: "Гаджеты", 
      description: "Устройство для отслеживания активности и здоровья", 
      image: "fitness-tracker.jpg", 
    }, 
    { 
      id: 9, 
      name: "Скейтборд", 
      price: 4000, 
      category: "Спортивные товары", 
      description: "Качественный скейтборд для уличных трюков", 
      image: "skateboard.jpg", 
    }, 
    { 
      id: 10, 
      name: "Планшет", 
      price: 12000, 
      category: "Электроника", 
      description: "Планшет с высоким разрешением экрана и мощным процессором", 
      image: "tablet.jpg", 
    }, 
  ];

let wrapper = document.querySelector('#wrapper')
wrapper.classList.add("flex", "gap-x-[3%]", "gap-y-10", 'flex-wrap')

let maps = products.map(products => {
let div = document.createElement("div")
let img = document.createElement("img")
let title = document.createElement("p")
let price = document.createElement("p")
let category = document.createElement("p")
let description = document.createElement("p")

title.innerHTML = products.name
category.innerHTML = products.category
price.innerHTML = products.price + "$"
description.innerHTML = products.description

div.classList.add("flex", "flex-col", "items-center", "gap-y-5", "bg-gray-100", "rounded-md", "shadow-md", "bg-gray-100", "rounded-md", "shadow-md", "flex-1", "min-w-[270px]")

img.setAttribute("src", products.image)
img.classList.add('w-full', "max-w-[230px]")

wrapper.appendChild(div)

div.append(img, title, price, category, description)
})