const images = ["IMG_2845.JPG", 
    "Света IMG_2759.JPG", 
    "IMG_5967 Наташа.JPG", 
    "IMG_2734.JPG", 
    "IMG_2802.JPG",
    "IMG_5160.JPG",
    "IMG_6906 Светлана.JPG",
    "IMG_7872 Ольга.JPG",
    "IMG_7833 Екатерина.JPG",
    "IMG_5764.JPG",
    "IMG_2814.JPG",
    "IMG_5180.JPG",
    "IMG_2869.JPG",
     "IMG_6942.JPG",
     "IMG_7874.JPG",
     "IMG_2750.JPG",
     "Ольга Базылева.jpg",
     "IMG_2871.JPG"
];

let currentIndex = 0;

const imageElements = document.querySelectorAll('.gallery-image');

function updateImages() {
    for (let i = 0; i < imageElements.length; i++) {
        const imageIndex = (currentIndex + i) % images.length; // Получаем индекс изображения
        imageElements[i].style.opacity = 0; // Скрываем текущее изображение
        imageElements[i].src = images[imageIndex]; // Обновляем источник
        imageElements[i].onload = () => {
            imageElements[i].style.opacity = 1; // Показываем новое изображение
        };
    }
}

// Функция для перехода к следующей группе изображений
function nextImages() {
    currentIndex = (currentIndex + 1) % images.length; // Переход к следующей группе
    updateImages();
}

// Функция для перехода к предыдущей группе изображений
function prevImages() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Переход к предыдущей группе
    updateImages();
}

// Начальная загрузка изображений
updateImages();

// Обработчики событий для кнопок
document.getElementById('nextBtn').addEventListener('click', nextImages);
document.getElementById('prevBtn').addEventListener('click', prevImages);