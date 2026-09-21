import React, { useMemo, useState } from "react";
import MenuItemCard from "./MenuItemCard.jsx";

const menuItems = [
  // ================= STARTERS =================
  {
    id: 1,
    name: "Aloo Tikki",
    category: "Chaat",
    type: "Veg",
    price: 80,
    image: "/alooTikki.jpeg",
    description: "Crispy potato tikki served with chutneys.",
  },
  {
    id: 2,
    name: "Hara Bhara Kebab",
    category: "Starters",
    type: "Veg",
    price: 140,
    image: "/Hara-Bhara-Kabab.webp",
    description: "Healthy green vegetable kebabs with aromatic spices.",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Starters",
    type: "Veg",
    price: 220,
    image: "/PaneerTikka.jpeg",
    description: "Char-grilled paneer marinated with Indian spices.",
  },
  {
    id: 4,
    name: "Chicken Tikka",
    category: "Starters",
    type: "Non-Veg",
    price: 260,
    image: "/chicken tikka.webp",
    description: "Tender chicken pieces marinated and grilled.",
  },
  {
    id: 5,
    name: "Chicken Tikka Kebab",
    category: "Starters",
    type: "Non-Veg",
    price: 280,
    image: "/chickenTikka Kebab.jpg",
    description: "Juicy chicken kebabs with traditional spices.",
  },
  {
    id: 6,
    name: "Chicken Seekh Kebab",
    category: "Starters",
    type: "Non-Veg",
    price: 280,
    image: "/chicken seekh kebab.avif",
    description: "Spiced minced chicken grilled on skewers.",
  },
  {
    id: 7,
    name: "Tandoori Chicken",
    category: "Starters",
    type: "Non-Veg",
    price: 320,
    image: "/tandoori Chicken.jpeg",
    description: "Classic chicken marinated in tandoori spices.",
  },
  {
    id: 8,
    name: "Samosa",
    category: "Starters",
    type: "Veg",
    price: 50,
    image: "/samosha.jpeg",
    description: "Crispy pastry filled with spiced potatoes.",
  },
  {
    id: 9,
    name: "Onion Bhaji",
    category: "Starters",
    type: "Veg",
    price: 100,
    image: "/Onionbhaji.jpeg",
    description: "Crispy onion fritters with Indian spices.",
  },
  {
    id: 10,
    name: "Veg Spring Roll",
    category: "Chinese",
    type: "Veg",
    price: 140,
    image: "/vegSpringRoll.avif",
    description: "Crispy rolls filled with seasoned vegetables.",
  },
  {
    id: 11,
    name: "Cheese Corn Balls",
    category: "Starters",
    type: "Veg",
    price: 160,
    image: "/cheese corn balls.avif",
    description: "Crispy cheese and sweet corn bites.",
  },
  {
    id: 12,
    name: "Crispy Corn",
    category: "Chinese",
    type: "Veg",
    price: 150,
    image: "/crispy corn.avif",
    description: "Crunchy corn tossed with herbs and spices.",
  },
  {
    id: 13,
    name: "Honey Chilli Potato",
    category: "Chinese",
    type: "Veg",
    price: 170,
    image: "/honey chilli potato.avif",
    description: "Crispy potato tossed in sweet and spicy sauce.",
  },
  {
    id: 14,
    name: "Chilli Potato",
    category: "Chinese",
    type: "Veg",
    price: 160,
    image: "/chilli potato.webp",
    description: "Crispy potatoes tossed with chilli sauce.",
  },
  {
    id: 15,
    name: "Fish Fingers",
    category: "Starters",
    type: "Non-Veg",
    price: 280,
    image: "/fish fingers.webp",
    description: "Crispy golden fish fingers.",
  },

  // ================= NORTH INDIAN =================
  {
    id: 16,
    name: "Dal Makhani",
    category: "North Indian",
    type: "Veg",
    price: 180,
    image: "/dal-makhni.jpg",
    description: "Slow-cooked creamy black lentils.",
  },
  {
    id: 17,
    name: "Dal Tadka",
    category: "North Indian",
    type: "Veg",
    price: 150,
    image: "/dal-tadka.jpg",
    description: "Yellow dal tempered with aromatic spices.",
  },
  {
    id: 18,
    name: "Kadhai Paneer",
    category: "North Indian",
    type: "Veg",
    price: 220,
    image: "/kadhaiPaneer.jpg",
    description: "Paneer cooked with capsicum and kadai spices.",
  },
  {
    id: 19,
    name: "Paneer Butter Masala",
    category: "North Indian",
    type: "Veg",
    price: 230,
    image: "/paneerButterMasala.jpg",
    description: "Paneer in a rich buttery tomato gravy.",
  },
  {
    id: 20,
    name: "Palak Paneer",
    category: "North Indian",
    type: "Veg",
    price: 210,
    image: "/palakPaneer.jpg",
    description: "Paneer cooked in creamy spinach gravy.",
  },
  {
    id: 21,
    name: "Paneer Lababdar",
    category: "North Indian",
    type: "Veg",
    price: 240,
    image: "/paneer-lababdar.jpg",
    description: "Rich tomato-based paneer preparation.",
  },
  {
    id: 22,
    name: "Malai Kofta",
    category: "North Indian",
    type: "Veg",
    price: 230,
    image: "/malai-kofta.jpg",
    description: "Soft koftas served in creamy gravy.",
  },
  {
    id: 23,
    name: "Methi Malai Matar",
    category: "North Indian",
    type: "Veg",
    price: 220,
    image: "/meethiMalaiMatar.jpg",
    description: "Green peas cooked with fenugreek and cream.",
  },
  {
    id: 24,
    name: "Mix Veg",
    category: "North Indian",
    type: "Veg",
    price: 180,
    image: "/mix-veg.jpg",
    description: "Mixed seasonal vegetables with Indian spices.",
  },
  {
    id: 25,
    name: "Chole Bhature",
    category: "North Indian",
    type: "Veg",
    price: 160,
    image: "/chole-bhature.jpg",
    description: "Spicy chickpeas served with fluffy bhature.",
  },
  {
    id: 26,
    name: "Chole Kulche",
    category: "North Indian",
    type: "Veg",
    price: 150,
    image: "/chole-kulche.jpg",
    description: "Spiced chickpeas served with soft kulche.",
  },
  {
    id: 27,
    name: "Chole Chawal",
    category: "North Indian",
    type: "Veg",
    price: 150,
    image: "/chole-chawal.jpg",
    description: "Classic chole served with steamed rice.",
  },
  {
    id: 28,
    name: "Rajma Chawal",
    category: "North Indian",
    type: "Veg",
    price: 150,
    image: "/rajma-chawal.jpg",
    description: "Punjabi-style rajma with steamed rice.",
  },
  {
    id: 29,
    name: "Curry Chawal",
    category: "North Indian",
    type: "Veg",
    price: 140,
    image: "/curry-chawal.jpg",
    description: "Homestyle curry served with rice.",
  },
  {
    id: 30,
    name: "Poha",
    category: "Indian Snacks",
    type: "Veg",
    price: 90,
    image: "/poha.jpg",
    description: "Light flattened rice cooked with vegetables and spices.",
  },
  {
    id: 31,
    name: "Dhokla",
    category: "Indian Snacks",
    type: "Veg",
    price: 100,
    image: "/dhokla.webp",
    description: "Soft and fluffy Gujarati-style dhokla.",
  },
  {
    id: 32,
    name: "Vada Pav",
    category: "Indian Snacks",
    type: "Veg",
    price: 80,
    image: "/vada pav.jpg",
    description: "Mumbai-style spicy potato burger.",
  },
  {
    id: 33,
    name: "Urid Dal Kachori",
    category: "Indian Snacks",
    type: "Veg",
    price: 90,
    image: "/urad dal kachori.jpg",
    description: "Crispy kachori stuffed with spiced urad dal.",
  },
  {
    id: 34,
    name: "Makki Di Roti with Sarson Ka Saag",
    category: "North Indian",
    type: "Veg",
    price: 220,
    image: "/makki di roti with sarson ka saag.jpg",
    description: "Classic Punjabi winter combination.",
  },

  // ================= NON VEG =================
  {
    id: 35,
    name: "Butter Chicken",
    category: "Non-Veg",
    type: "Non-Veg",
    price: 320,
    image: "/chicken curry.webp",
    description: "Creamy tomato-based chicken curry.",
  },
  {
    id: 36,
    name: "Chicken Curry",
    category: "Non-Veg",
    type: "Non-Veg",
    price: 300,
    image: "/chicken curry.webp",
    description: "Traditional Indian chicken curry.",
  },
  {
    id: 37,
    name: "Mutton Curry",
    category: "Non-Veg",
    type: "Non-Veg",
    price: 380,
    image: "/mutton curry.webp",
    description: "Slow-cooked tender mutton in aromatic gravy.",
  },
  {
    id: 38,
    name: "Chicken Biryani",
    category: "Rice & Biryani",
    type: "Non-Veg",
    price: 280,
    image: "/chicken-biryani.jpg",
    description: "Fragrant basmati rice cooked with chicken.",
  },
  {
    id: 39,
    name: "Mutton Biryani",
    category: "Rice & Biryani",
    type: "Non-Veg",
    price: 360,
    image: "/mutton biryani.webp",
    description: "Aromatic biryani with tender mutton.",
  },

  // ================= RICE & BIRYANI =================
  {
    id: 40,
    name: "Veg Biryani",
    category: "Rice & Biryani",
    type: "Veg",
    price: 220,
    image: "/veg biryani.webp",
    description: "Aromatic basmati rice with fresh vegetables.",
  },
  {
    id: 41,
    name: "Jeera Rice",
    category: "Rice & Biryani",
    type: "Veg",
    price: 130,
    image: "/jeera-rice.jpg",
    description: "Basmati rice flavoured with cumin.",
  },
  {
    id: 42,
    name: "Garlic Rice",
    category: "Rice & Biryani",
    type: "Veg",
    price: 150,
    image: "/garlic rice.jpg",
    description: "Fragrant rice tossed with garlic and herbs.",
  },
  {
    id: 43,
    name: "Curd Rice",
    category: "South Indian",
    type: "Veg",
    price: 130,
    image: "/curd rice.jpg",
    description: "Cooling South Indian curd rice.",
  },

  // ================= BREADS =================
  {
    id: 44,
    name: "Butter Naan",
    category: "Breads",
    type: "Veg",
    price: 50,
    image: "/butter naan.jpg",
    description: "Soft tandoori naan finished with butter.",
  },
  {
    id: 45,
    name: "Garlic Naan",
    category: "Breads",
    type: "Veg",
    price: 70,
    image: "/garlic naan.webp",
    description: "Naan topped with garlic and herbs.",
  },
  {
    id: 46,
    name: "Tandoori Roti",
    category: "Breads",
    type: "Veg",
    price: 30,
    image: "/tandoori roti.webp",
    description: "Traditional whole wheat tandoori roti.",
  },
  {
    id: 47,
    name: "Laccha Paratha",
    category: "Breads",
    type: "Veg",
    price: 60,
    image: "/laccha paratha.webp",
    description: "Crispy layered Indian flatbread.",
  },
  {
    id: 48,
    name: "Paneer Kulcha",
    category: "Breads",
    type: "Veg",
    price: 110,
    image: "/paneer kulcha.jpg",
    description: "Stuffed kulcha filled with seasoned paneer.",
  },

  // ================= SOUTH INDIAN =================
  {
    id: 49,
    name: "Masala Dosa",
    category: "South Indian",
    type: "Veg",
    price: 120,
    image: "/dosa.jpeg",
    description: "Crispy dosa filled with potato masala.",
  },
  {
    id: 50,
    name: "Plain Dosa",
    category: "South Indian",
    type: "Veg",
    price: 100,
    image: "/plan dosa.avif",
    description: "Classic crispy South Indian dosa.",
  },
  {
    id: 51,
    name: "Idli Sambhar",
    category: "South Indian",
    type: "Veg",
    price: 100,
    image: "/idli sambhar.webp",
    description: "Soft idlis served with sambhar.",
  },
  {
    id: 52,
    name: "Medu Vada",
    category: "South Indian",
    type: "Veg",
    price: 100,
    image: "/medu vada.webp",
    description: "Crispy lentil vadas with sambhar.",
  },
  {
    id: 53,
    name: "Mysore Masala Dosa",
    category: "South Indian",
    type: "Veg",
    price: 150,
    image: "/mysore masala dosa.avif",
    description: "Spicy Mysore dosa with potato masala.",
  },
  {
    id: 54,
    name: "Rava Dosa",
    category: "South Indian",
    type: "Veg",
    price: 130,
    image: "/rava dosa.avif",
    description: "Thin and crispy semolina dosa.",
  },
  {
    id: 55,
    name: "Onion Uttapam",
    category: "South Indian",
    type: "Veg",
    price: 120,
    image: "/onion uttapam.webp",
    description: "Soft uttapam topped with onions.",
  },
  {
    id: 56,
    name: "Pongal",
    category: "South Indian",
    type: "Veg",
    price: 110,
    image: "/pongal.webp",
    description: "Traditional rice and lentil preparation.",
  },
  {
    id: 57,
    name: "Thatte Idli",
    category: "South Indian",
    type: "Veg",
    price: 100,
    image: "/thatte idli.jpg",
    description: "Soft Karnataka-style flat idli.",
  },

  // ================= CHINESE =================
  {
    id: 58,
    name: "Veg Noodles",
    category: "Chinese",
    type: "Veg",
    price: 150,
    image: "/veg noodle.avif",
    description: "Stir-fried noodles with fresh vegetables.",
  },
  {
    id: 59,
    name: "Chicken Noodles",
    category: "Chinese",
    type: "Non-Veg",
    price: 190,
    image: "/chicken noodles.jpg",
    description: "Stir-fried noodles with tender chicken.",
  },
  {
    id: 60,
    name: "Garlic Noodles",
    category: "Chinese",
    type: "Veg",
    price: 170,
    image: "/garlic noodle.avif",
    description: "Noodles tossed with aromatic garlic.",
  },
  {
    id: 61,
    name: "Chilli Garlic Hakka Noodles",
    category: "Chinese",
    type: "Veg",
    price: 190,
    image: "/chilli garlic hakka noodle.jpg",
    description: "Spicy hakka noodles with garlic and chilli.",
  },
  {
    id: 62,
    name: "Veg Manchurian",
    category: "Chinese",
    type: "Veg",
    price: 160,
    image: "/veg manchurian.webp",
    description: "Crispy vegetable balls in Manchurian sauce.",
  },
  {
    id: 63,
    name: "Chilli Paneer",
    category: "Chinese",
    type: "Veg",
    price: 190,
    image: "/chilli paneer.webp",
    description: "Paneer tossed with peppers and chilli sauce.",
  },
  {
    id: 64,
    name: "Fried Paneer Bell Pepper",
    category: "Chinese",
    type: "Veg",
    price: 190,
    image: "/fried-paneer-bell-pepper.jpg",
    description: "Crispy paneer with colourful bell peppers.",
  },
  {
    id: 65,
    name: "Chilli Chicken",
    category: "Chinese",
    type: "Non-Veg",
    price: 240,
    image: "/chilli chicken.webp",
    description: "Spicy chicken tossed in Chinese-style sauce.",
  },
  {
    id: 66,
    name: "Shrimp Noodles",
    category: "Chinese",
    type: "Non-Veg",
    price: 280,
    image: "/shrimp noodles.jpg",
    description: "Noodles tossed with seasoned shrimp.",
  },
  {
    id: 67,
    name: "Vietnamese Noodles",
    category: "Chinese",
    type: "Veg",
    price: 190,
    image: "/vietnamis noodle.avif",
    description: "Flavourful noodles inspired by Vietnamese cuisine.",
  },
  {
    id: 68,
    name: "Veg Ramen Noodles",
    category: "Chinese",
    type: "Veg",
    price: 220,
    image: "/veg ramen noodle.jpg",
    description: "Warm noodles served in a rich broth.",
  },

  // ================= MOMOS =================
  {
    id: 69,
    name: "Veg Momos",
    category: "Momos",
    type: "Veg",
    price: 120,
    image: "/veg momo.jpg",
    description: "Steamed dumplings filled with vegetables.",
  },
  {
    id: 70,
    name: "Chicken Momos",
    category: "Momos",
    type: "Non-Veg",
    price: 160,
    image: "/chicken momo.jpg",
    description: "Steamed momos filled with juicy chicken.",
  },
  {
    id: 71,
    name: "Tandoori Momos",
    category: "Momos",
    type: "Veg",
    price: 180,
    image: "/tandoori momo.jpg",
    description: "Momos grilled with tandoori spices.",
  },

  // ================= CHAAT =================
  {
    id: 72,
    name: "Dahi Bhalla",
    category: "Chaat",
    type: "Veg",
    price: 100,
    image: "/dahi-bhalla.jpg",
    description: "Soft bhallas topped with curd and chutneys.",
  },
  {
    id: 73,
    name: "Dahi Puri",
    category: "Chaat",
    type: "Veg",
    price: 100,
    image: "/dahi-puri.jpg",
    description: "Crispy puris filled with curd and chutneys.",
  },
  {
    id: 74,
    name: "Dahi Vada",
    category: "Chaat",
    type: "Veg",
    price: 100,
    image: "/dahi-vada.jpg",
    description: "Soft lentil vadas with creamy curd.",
  },
  {
    id: 75,
    name: "Dahi Jalebi",
    category: "Desserts",
    type: "Veg",
    price: 120,
    image: "/dahi-jalebi.jpeg",
    description: "Sweet jalebi served with chilled curd.",
  },
  {
    id: 76,
    name: "Jalebi Rabdi",
    category: "Desserts",
    type: "Veg",
    price: 150,
    image: "/jalebi-rabdi.jpg",
    description: "Crispy jalebi paired with rich rabdi.",
  },
  {
    id: 77,
    name: "Samosa Chaat",
    category: "Chaat",
    type: "Veg",
    price: 100,
    image: "/samosa chaat.jpg",
    description: "Samosa topped with curd, chutneys and spices.",
  },

  // ================= THALI =================
  {
    id: 78,
    name: "North Indian Thali",
    category: "Thali",
    type: "Veg",
    price: 220,
    image: "/north insian thali.jpg",
    description: "Complete North Indian meal.",
  },
  {
    id: 79,
    name: "Punjabi Thali",
    category: "Thali",
    type: "Veg",
    price: 250,
    image: "/punjabi thali.jpg",
    description: "Traditional Punjabi-style complete meal.",
  },
  {
    id: 80,
    name: "South Indian Thali",
    category: "Thali",
    type: "Veg",
    price: 220,
    image: "/south indian thali.jpg",
    description: "Traditional South Indian meal.",
  },
  {
    id: 81,
    name: "Royal Zaika Thali",
    category: "Thali",
    type: "Veg",
    price: 320,
    image: "/royal zaika thali.jpg",
    description: "Premium thali from the Zaika kitchen.",
  },

  // ================= SOUP =================
  {
    id: 82,
    name: "Tomato Soup",
    category: "Soup",
    type: "Veg",
    price: 90,
    image: "/tomato soup.jpg",
    description: "Warm and comforting tomato soup.",
  },
  {
    id: 83,
    name: "Hot & Sour Soup",
    category: "Soup",
    type: "Veg",
    price: 110,
    image: "/hot & sour soup.jpg",
    description: "Spicy and tangy soup.",
  },
  {
    id: 84,
    name: "Sweet Corn Soup",
    category: "Soup",
    type: "Veg",
    price: 110,
    image: "/sweet corn soup.jpg",
    description: "Comforting sweet corn soup.",
  },
  {
    id: 85,
    name: "Green Peas Cream Soup",
    category: "Soup",
    type: "Veg",
    price: 130,
    image: "/green peas cream soup.jpg",
    description: "Creamy soup prepared with green peas.",
  },
  {
    id: 86,
    name: "Pumpkin & Carrot Soup",
    category: "Soup",
    type: "Veg",
    price: 130,
    image: "/pumpkin and carrot soup.jpg",
    description: "Healthy creamy pumpkin and carrot soup.",
  },
  {
    id: 87,
    name: "Broccoli & Cheddar Soup",
    category: "Soup",
    type: "Veg",
    price: 160,
    image: "/broccoli and cheddar cheese soup.jpg",
    description: "Creamy broccoli soup with cheddar cheese.",
  },
  {
    id: 88,
    name: "Sour Soup with Fish & Moranga",
    category: "Soup",
    type: "Non-Veg",
    price: 190,
    image: "/sour soup with fish and moranga.jpg",
    description: "Tangy fish soup with vegetables.",
  },

  // ================= DESSERTS =================
  {
    id: 89,
    name: "Gulab Jamun",
    category: "Desserts",
    type: "Veg",
    price: 80,
    image: "/gulabjamun.jpeg",
    description: "Soft milk dumplings soaked in sugar syrup.",
  },
  {
    id: 90,
    name: "Rasgulla",
    category: "Desserts",
    type: "Veg",
    price: 80,
    image: "/Rasgulla.jpeg",
    description: "Soft spongy Bengali sweet.",
  },
  {
    id: 91,
    name: "Jalebi",
    category: "Desserts",
    type: "Veg",
    price: 90,
    image: "/Jalebi.jpeg",
    description: "Crispy spiral sweet soaked in syrup.",
  },
  {
    id: 92,
    name: "Gajar Halwa",
    category: "Desserts",
    type: "Veg",
    price: 120,
    image: "/Gajarhalwa.jpeg",
    description: "Traditional carrot dessert with nuts.",
  },
  {
    id: 93,
    name: "Kheer",
    category: "Desserts",
    type: "Veg",
    price: 100,
    image: "/kheer.jpeg",
    description: "Creamy rice pudding with cardamom.",
  },
  {
    id: 94,
    name: "Rasmalai",
    category: "Desserts",
    type: "Veg",
    price: 130,
    image: "/rasmalai.jpg",
    description: "Soft cheese dumplings in creamy milk.",
  },
  {
    id: 95,
    name: "Sweet Malpua",
    category: "Desserts",
    type: "Veg",
    price: 120,
    image: "/Sweet Malpua.jpg",
    description: "Soft traditional Indian sweet pancakes.",
  },
  {
    id: 96,
    name: "Sweet Modak",
    category: "Desserts",
    type: "Veg",
    price: 120,
    image: "/sweet modak.jpg",
    description: "Traditional sweet modak.",
  },
  {
    id: 97,
    name: "Habshi Halwa",
    category: "Desserts",
    type: "Veg",
    price: 140,
    image: "/habshi halwa.jpg",
    description: "Rich traditional halwa.",
  },
  {
    id: 98,
    name: "Cheesecake with Caramel Sauce",
    category: "Desserts",
    type: "Veg",
    price: 220,
    image: "/Cheesecake with caramel sauce.jpg",
    description: "Creamy cheesecake topped with caramel sauce.",
  },
  {
    id: 99,
    name: "Cream Caramel Pudding",
    category: "Desserts",
    type: "Veg",
    price: 180,
    image: "/Cream caramel pudding with caramel sauce.jpg",
    description: "Silky caramel pudding with rich caramel sauce.",
  },
  {
    id: 100,
    name: "Sachertorte",
    category: "Desserts",
    type: "Veg",
    price: 220,
    image: "/sachertorte sachr cake.jpg",
    description: "Classic rich chocolate cake.",
  },

  // ================= BEVERAGES =================
  {
    id: 101,
    name: "Cold Coffee",
    category: "Beverages",
    type: "Veg",
    price: 120,
    image: "/cold coffee.jpg",
    description: "Chilled creamy coffee.",
  },
  {
    id: 102,
    name: "Mango Lassi",
    category: "Beverages",
    type: "Veg",
    price: 100,
    image: "/mango lassi.jpg",
    description: "Refreshing mango flavoured lassi.",
  },
  {
    id: 103,
    name: "Sweet Lassi",
    category: "Beverages",
    type: "Veg",
    price: 90,
    image: "/sweet lassi.jpg",
    description: "Traditional sweet creamy lassi.",
  },
  {
    id: 104,
    name: "Masala Chaas",
    category: "Beverages",
    type: "Veg",
    price: 70,
    image: "/masala chaas.jpg",
    description: "Refreshing spiced buttermilk.",
  },
  {
    id: 105,
    name: "Lime Soda",
    category: "Beverages",
    type: "Veg",
    price: 70,
    image: "/lime soda.jpg",
    description: "Refreshing fizzy lime drink.",
  },
  {
    id: 106,
    name: "Sattu Drink",
    category: "Beverages",
    type: "Veg",
    price: 80,
    image: "/Sattu.jpg",
    description: "Refreshing traditional sattu drink.",
  },

  // ================= SOFT DRINKS =================
  {
    id: 107,
    name: "Coke",
    category: "Soft Drinks",
    type: "Veg",
    price: 60,
    image: "/coke.avif",
    description: "Chilled Coca-Cola.",
  },
  {
    id: 108,
    name: "Sprite",
    category: "Soft Drinks",
    type: "Veg",
    price: 60,
    image: "/sprite.avif",
    description: "Refreshing lemon-lime soft drink.",
  },
  {
    id: 109,
    name: "Fanta",
    category: "Soft Drinks",
    type: "Veg",
    price: 60,
    image: "/fanta.jpeg",
    description: "Refreshing orange soft drink.",
  },
  {
    id: 110,
    name: "Thums Up",
    category: "Soft Drinks",
    type: "Veg",
    price: 60,
    image: "/tums up.jpeg",
    description: "Chilled carbonated soft drink.",
  },

  // ================= ICE CREAM =================
  {
    id: 111,
    name: "Vanilla Ice Cream",
    category: "Ice Cream",
    type: "Veg",
    price: 80,
    image: "/vanilla icecream.jpg",
    description: "Classic creamy vanilla ice cream.",
  },
  {
    id: 112,
    name: "Chocolate Ice Cream",
    category: "Ice Cream",
    type: "Veg",
    price: 90,
    image: "/chocolate icecream.jpg",
    description: "Rich chocolate ice cream.",
  },
  {
    id: 113,
    name: "Strawberry Ice Cream",
    category: "Ice Cream",
    type: "Veg",
    price: 90,
    image: "/strewberry icecream.jpg",
    description: "Creamy strawberry ice cream.",
  },

  // ================= PIZZA & FAST FOOD =================
  {
    id: 114,
    name: "Veg Pizza",
    category: "Fast Food",
    type: "Veg",
    price: 220,
    image: "/Veg Pizza.jpg",
    description: "Cheesy pizza loaded with vegetables.",
  },
  {
    id: 115,
    name: "Margarita Pizza",
    category: "Fast Food",
    type: "Veg",
    price: 200,
    image: "/Margharita Pizza.jpg",
    description: "Classic tomato, cheese and herb pizza.",
  },
  {
    id: 116,
    name: "Paneer Makhani Pizza",
    category: "Fast Food",
    type: "Veg",
    price: 250,
    image: "/Pizza_Paneer Makhani.jpg",
    description: "Pizza topped with paneer and makhani flavours.",
  },
  {
    id: 117,
    name: "Three Layered Cheese Pizza",
    category: "Fast Food",
    type: "Veg",
    price: 280,
    image: "/3 layered cheese pizza.jpg",
    description: "Loaded three-layer cheese pizza.",
  },
  {
    id: 118,
    name: "Cheese Vegetable Pizza",
    category: "Fast Food",
    type: "Veg",
    price: 240,
    image: "/cheese vegetable pizza.jpg",
    description: "Cheesy pizza with fresh vegetables.",
  },
  {
    id: 119,
    name: "Classic Burger",
    category: "Fast Food",
    type: "Veg",
    price: 160,
    image: "/burger.jpg",
    description: "Crispy vegetable burger with fresh toppings.",
  },
  {
    id: 120,
    name: "Big Hamburger",
    category: "Fast Food",
    type: "Non-Veg",
    price: 240,
    image: "/Big hamburger burger.jpg",
    description: "Loaded hamburger with delicious toppings.",
  },
  {
    id: 121,
    name: "Cheeseburger",
    category: "Fast Food",
    type: "Veg",
    price: 190,
    image: "/Cheeseburger.jpg",
    description: "Classic burger with melted cheese.",
  },
  {
    id: 122,
    name: "French Fries",
    category: "Fast Food",
    type: "Veg",
    price: 100,
    image: "/franch fries.webp",
    description: "Crispy golden french fries.",
  },
  {
    id: 123,
    name: "Paneer Tikka Sandwich",
    category: "Fast Food",
    type: "Veg",
    price: 160,
    image: "/paneer tikka sandwich.avif",
    description: "Grilled sandwich filled with paneer tikka.",
  },
  {
    id: 124,
    name: "Masala Cheese Sandwich",
    category: "Fast Food",
    type: "Veg",
    price: 150,
    image: "/masala cheese sandwich.avif",
    description: "Cheesy sandwich with Indian masala flavours.",
  },
  {
    id: 125,
    name: "Chilli Cheese Toast",
    category: "Fast Food",
    type: "Veg",
    price: 140,
    image: "/chilli cheese toast.avif",
    description: "Crispy toast topped with cheese and chilli.",
  },
];

function Menu({ onAddToCart = () => {} }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [foodType, setFoodType] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    "Starters",
    "Indian Snacks",
    "North Indian",
    "Non-Veg",
    "Rice & Biryani",
    "Breads",
    "South Indian",
    "Chinese",
    "Momos",
    "Chaat",
    "Thali",
    "Soup",
    "Desserts",
    "Beverages",
    "Soft Drinks",
    "Ice Cream",
    "Fast Food",
  ];

  const filteredItems = useMemo(() => {
    let result = menuItems.filter((item) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || item.category === category;

      const matchesType =
        foodType === "All" || item.type === foodType;

      return matchesSearch && matchesCategory && matchesType;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [search, category, foodType, sort]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fbf7ee",
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #3B171C, #641F2D, #3B171C)",
          color: "#FFF9F0",
          textAlign: "center",
          padding: "75px 20px",
          borderBottom: "3px solid #C9A85D",
        }}
      >
        <div
          style={{
            color: "#C9A85D",
            letterSpacing: "4px",
            fontSize: "13px",
            fontWeight: "700",
            marginBottom: "14px",
          }}
        >
          ✦ FROM OUR KITCHEN ✦
        </div>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(38px, 6vw, 64px)",
            margin: "0 0 15px",
          }}
        >
          Our Royal Menu
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            color: "#F2DFC0",
            lineHeight: "1.8",
          }}
        >
          A delicious collection of Indian classics, royal specialities,
          street food, desserts and international favourites.
        </p>
      </section>

      {/* ================= MENU ================= */}
      <section
        style={{
          maxWidth: "1300px",
          margin: "auto",
          padding: "45px 20px 80px",
        }}
      >
        {/* SEARCH + SORT */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your favourite dish..."
            style={{
              flex: "1 1 320px",
              padding: "15px 18px",
              border: "1px solid #D7C79F",
              borderRadius: "6px",
              background: "#fffdf8",
              fontSize: "14px",
              outline: "none",
            }}
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              padding: "15px 18px",
              border: "1px solid #D7C79F",
              borderRadius: "6px",
              background: "#fffdf8",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {/* CATEGORY BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "9px",
            flexWrap: "wrap",
            marginBottom: "18px",
          }}
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              style={{
                border:
                  category === item
                    ? "1px solid #741F31"
                    : "1px solid #D7C79F",
                background:
                  category === item ? "#741F31" : "#FFFDF8",
                color:
                  category === item ? "#FFF9F0" : "#5B4733",
                padding: "9px 15px",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* VEG FILTER */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          {["All", "Veg", "Non-Veg"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFoodType(type)}
              style={{
                padding: "9px 18px",
                borderRadius: "5px",
                border: "1px solid #C9A85D",
                background:
                  foodType === type ? "#3E5A43" : "#FFFDF8",
                color:
                  foodType === type ? "#FFFFFF" : "#3E5A43",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* RESULT */}
        <div
          style={{
            color: "#725B48",
            fontSize: "14px",
            marginBottom: "25px",
          }}
        >
          Showing <strong>{filteredItems.length}</strong> dishes
        </div>

        {/* FOOD CARDS */}
        {filteredItems.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
            />
          ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "70px 20px",
              background: "#FFFDF8",
              border: "1px solid #E0D0AB",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                color: "#C9A85D",
                marginBottom: "15px",
              }}
            >
              ✦
            </div>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                color: "#4B3025",
                marginBottom: "10px",
              }}
            >
              No Dish Found
            </h2>

            <p style={{ color: "#806957" }}>
              Try another search or select a different category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Menu;