const products = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 89.99,
    image: "https://images.pexels.com/photos/33444591/pexels-photo-33444591.jpeg",
    category: "audio",
    desc: "Noise-cancelling, 20hr battery, touch controls"
  },
  {
    id: 2,
    name: "Smart Watch X1",
    price: 149.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    category: "wearables",
    desc: "Fitness tracking, heart rate monitor, GPS"
  },
  {
    id: 3,
    name: "20000mAh Power Bank",
    price: 39.99,
    image: "https://images.pexels.com/photos/10104284/pexels-photo-10104284.jpeg",
    category: "power",
    desc: "Fast charging, dual USB, compact design"
  },
  {
    id: 4,
    name: "RGB Gaming Mouse",
    price: 49.99,
    image: "https://images.pexels.com/photos/28779690/pexels-photo-28779690.jpeg",
    category: "gaming",
    desc: "6 programmable buttons, 16K DPI, ergonomic"
  },
  {
    id: 5,
    name: "USB-C Fast Charger 30W",
    price: 24.99,
    image: "https://images.pexels.com/photos/29407254/pexels-photo-29407254.jpeg",
    category: "power",
    desc: "PD 3.0, includes 1m cable"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.pexels.com/photos/6039721/pexels-photo-6039721.jpeg",
    category: "audio",
    desc: "Waterproof, 15hr playtime, deep bass"
  },
  {
    id: 7,
    name: "Magnetic Phone Ring Holder",
    price: 12.99,
    image: "https://media.istockphoto.com/id/1097416982/photo/blank-cell-phone-ring-finger-holder-grip-3d-render-illustration.jpg?s=1024x1024&w=is&k=20&c=y4-HqndWbfeuuEBjn4UvVD-q3wPIMHNrr_DLafn-dyw=",
    category: "accessories",
    desc: "360° rotation, fits all phones"
  },
  {
    id: 8,
    name: "Laptop Cooling Pad",
    price: 34.99,
    image: "https://images.pexels.com/photos/33444589/pexels-photo-33444589.jpeg",
    category: "pc",
    desc: "3 fans, USB powered, blue LED"
  },
  {
    id: 9,
    name: "4K HDMI Cable 2m",
    price: 19.99,
    image: "https://images.pexels.com/photos/12997230/pexels-photo-12997230.jpeg",
    category: "cables",
    desc: "High-speed, Ethernet support"
  },
  {
    id: 10,
    name: "Wireless Charging Pad",
    price: 29.99,
    image: "https://images.pexels.com/photos/7742585/pexels-photo-7742585.jpeg",
    category: "power",
    desc: "Qi-certified, fast charge, LED indicator"
  },
  {
    id: 11,
    name: "Noise-Cancelling Headphones",
    price: 199.99,
    image: "https://images.pexels.com/photos/32200886/pexels-photo-32200886.jpeg",
    category: "audio",
    desc: "Over-ear, 30hr battery"
  },
  {
    id: 12,
    name: "Smart Doorbell Camera",
    price: 129.99,
    image: "https://images.pexels.com/photos/24503710/pexels-photo-24503710.jpeg",
    category: "smart-home",
    desc: "1080p, motion detection, 2-way audio"
  },
  {
    id: 13,
    name: "Mechanical Gaming Keyboard",
    price: 89.99,
    image: "https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg",
    category: "gaming",
    desc: "RGB backlight, tactile switches"
  },
  {
    id: 14,
    name: "Phone Tripod Stand",
    price: 22.99,
    image: "https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg",
    category: "accessories",
    desc: "Adjustable, fits phones & small cameras"
  },
  {
    id: 15,
    name: "Car Phone Mount",
    price: 18.99,
    image: "https://images.pexels.com/photos/30954662/pexels-photo-30954662.jpeg",
    category: "accessories",
    desc: "Air vent clip, 360° rotation"
  },
  {
    id: 16,
    name: "Smart LED Light Strip",
    price: 39.99,
    image: "https://images.pexels.com/photos/8108679/pexels-photo-8108679.jpeg",
    category: "smart-home",
    desc: "RGB, app control, 5m length"
  },
  {
    id: 17,
    name: "Portable SSD 512GB",
    price: 109.99,
    image: "https://images.pexels.com/photos/13595094/pexels-photo-13595094.jpeg",
    category: "storage",
    desc: "USB-C, 550MB/s transfer speed"
  },
  {
    id: 18,
    name: "Bluetooth Tracker Tag",
    price: 24.99,
    image: "https://images.pexels.com/photos/32977239/pexels-photo-32977239.jpeg",
    category: "accessories",
    desc: "Find keys, wallet, bag via app"
  },
  {
    id: 19,
    name: "Laptop Stand Aluminum",
    price: 45.99,
    image: "https://media.istockphoto.com/id/1125614886/photo/standing-laptop-holder-set-up-with-notebook-on-desk.jpg?s=1024x1024&w=is&k=20&c=NHIi4zJyGxD9y2ErbcHvMcLS0K9pItnZ88UgfZS2VmY=",
    category: "pc",
    desc: "Ergonomic, foldable, fits 17\" laptops"
  },
  {
    id: 20,
    name: "USB Hub 4-Port",
    price: 26.99,
    image: "https://images.pexels.com/photos/4195407/pexels-photo-4195407.jpeg",
    category: "cables",
    desc: "USB 3.0, compact, plug & play"
  },
  {
    id: 21,
    name: "Smart Plug Mini",
    price: 29.99,
    image: "https://images.pexels.com/photos/17000830/pexels-photo-17000830.jpeg",
    category: "smart-home",
    desc: "Voice control, schedule via app"
  },
  {
    id: 22,
    name: "Gaming Headset with Mic",
    price: 69.99,
    image: "https://images.pexels.com/photos/32297868/pexels-photo-32297868.jpeg",
    category: "gaming",
    desc: "Surround sound, noise-isolating mic"
  },
  {
    id: 23,
    name: "Screen Protector Pack",
    price: 14.99,
    image: "https://images.pexels.com/photos/7742507/pexels-photo-7742507.jpeg",
    category: "accessories",
    desc: "3-pack, tempered glass, anti-fingerprint"
  },
  {
    id: 24,
    name: "Wireless Mouse",
    price: 28.99,
    image: "https://images.pexels.com/photos/33384159/pexels-photo-33384159.jpeg",
    category: "pc",
    desc: "Ergonomic, 2.4GHz USB receiver"
  },
  {
    id: 25,
    name: "Phone Case Shockproof",
    price: 16.99,
    image: "https://media.istockphoto.com/id/2043164908/photo/heavy-duty-shockproof-cell-phone-case.jpg?s=1024x1024&w=is&k=20&c=Uv2O8xY84iJmpY3kDeZ0GipGIdMlZOBqNQp63iR9kBY=",
    category: "accessories",
    desc: "Military-grade drop protection"
  },
  {
    id: 26,
    name: "Smart Thermostat",
    price: 179.99,
    image: "https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg",
    category: "smart-home",
    desc: "Wi-Fi, energy saving, voice control"
  },
  {
    id: 27,
    name: "External Hard Drive 1TB",
    price: 79.99,
    image: "https://images.pexels.com/photos/3361486/pexels-photo-3361486.jpeg",
    category: "storage",
    desc: "USB 3.0, portable, backup ready"
  },
  {
    id: 28,
    name: "Desk Lamp with USB Port",
    price: 36.99,
    image: "https://media.istockphoto.com/id/881464340/photo/luminous-led-usb-lamp-connected-to-notebook-usb-port.jpg?s=1024x1024&w=is&k=20&c=PzvpXtZ_3q96kfI0hWV7BYIYXbi1aDNYN4UlKdlFtws=",
    category: "pc",
    desc: "Adjustable brightness, white LED"
  },
  {
    id: 29,
    name: "VR Headset for Phone",
    price: 44.99,
    image: "https://images.pexels.com/photos/5208825/pexels-photo-5208825.jpeg",
    category: "gaming",
    desc: "3D immersive, fits 5-6.5\" phones"
  },
  {
    id: 30,
    name: "Wireless Keyboard",
    price: 59.99,
    image: "https://images.pexels.com/photos/2880732/pexels-photo-2880732.jpeg",
    category: "pc",
    desc: "Slim, quiet keys, USB receiver"
  },
  {
    id: 31,
    name: "Dash Cam 1080p",
    price: 89.99,
    image: "https://media.istockphoto.com/id/1080335414/photo/dash-camera-or-car-video-recorder-in-vehicle-on-the-way.jpg?s=1024x1024&w=is&k=20&c=6FWypV9Vuwtz2zjdmuZUkmW42SDLOGUv8A3zut5ZYG0=",
    category: "automotive",
    desc: "Loop recording, night vision"
  },
  {
    id: 32,
    name: "Smart Scale",
    price: 54.99,
    image: "https://images.pexels.com/photos/7801352/pexels-photo-7801352.jpeg",
    category: "wearables",
    desc: "Body fat %, BMI, app sync"
  },
  {
    id: 33,
    name: "USB-C to HDMI Adapter",
    price: 32.99,
    image: "https://images.pexels.com/photos/4195406/pexels-photo-4195406.jpeg",
    category: "cables",
    desc: "4K@30Hz, plug & play"
  },
  {
    id: 34,
    name: "Wireless Presenter",
    price: 38.99,
    image: "https://images.pexels.com/photos/8000659/pexels-photo-8000659.jpeg",
    category: "office",
    desc: "Laser pointer, slide control"
  },
  {
    id: 35,
    name: "Phone Grip Stand",
    price: 13.99,
    image: "https://media.istockphoto.com/id/1085527564/photo/blank-smart-phone-pop-socket-stand-and-holder-for-branding-3d-rendering-illustration.jpg?s=1024x1024&w=is&k=20&c=yHx1iSO6FdeB2ERfBahE8ABzfshuInqfchxQxFTDVvc=",
    category: "accessories",
    desc: "Foldable stand, easy grip"
  },
  {
    id: 36,
    name: "Bluetooth Keyboard for iPad",
    price: 79.99,
    image: "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg",
    category: "tablet",
    desc: "Slim, backlit, 200hr battery"
  },
  {
    id: 37,
    name: "Mini Projector",
    price: 149.99,
    image: "https://media.istockphoto.com/id/1364484950/photo/living-room-with-projector-with-light-on-for-a-show.jpg?s=1024x1024&w=is&k=20&c=_X9JIjU45sv9K-jut8O3oDlctjTenyeeJW6glhcwOvU=",
    category: "entertainment",
    desc: "1080p, portable, HDMI & USB"
  },
  {
    id: 38,
    name: "Smart Door Lock",
    price: 199.99,
    image: "https://media.istockphoto.com/id/1446961668/photo/close-up-woman-hand-pressing-down-on-electronic-access-control-at-door-house.jpg?s=1024x1024&w=is&k=20&c=CpgwuHSBEd_BTPVheXDGnNKCKln0SQ1v17Bd6gXFv-M=",
    category: "smart-home",
    desc: "Fingerprint, app, keyless entry"
  },
  {
    id: 39,
    name: "Laptop Sleeve 15.6\"",
    price: 24.99,
    image: "https://images.pexels.com/photos/9407366/pexels-photo-9407366.jpeg",
    category: "accessories",
    desc: "Water-resistant, padded interior"
  },
  {
    id: 40,
    name: "USB Rechargeable Flashlight",
    price: 19.99,
    image: "https://media.istockphoto.com/id/1296158825/photo/rechargeable-flashlight-charging-with-home-electric-plug.jpg?s=1024x1024&w=is&k=20&c=jm9bK-kKqsmeHDGQWaaA4nykSJmuUoNNVRcTSLOCGhU=",
    category: "outdoor",
    desc: "500 lumens, USB-C charging"
  },
  {
    id: 41,
    name: "Smart Air Purifier",
    price: 129.99,
    image: "https://images.pexels.com/photos/16423103/pexels-photo-16423103.jpeg",
    category: "smart-home",
    desc: "HEPA filter, app monitoring"
  },
  {
    id: 42,
    name: "Wireless Charging Stand",
    price: 39.99,
    image: "https://images.pexels.com/photos/6373127/pexels-photo-6373127.jpeg",
    category: "power",
    desc: "For phone & watch, vertical design"
  },
  {
    id: 43,
    name: "E-Reader 7\"",
    price: 119.99,
    image: "https://media.istockphoto.com/id/1203153261/photo/smartphone-wireless-charging-on-charging-stand-with-21-percent-icon-on-screen-on-kitchen.jpg?s=1024x1024&w=is&k=20&c=z2SuO-xBpgBuQisxCT-Z7plZZhgZbPFErT8UvmAJpBg=",
    category: "tablet",
    desc: "10,000 books, glare-free screen"
  },
  {
    id: 44,
    name: "Bluetooth Neckband",
    price: 49.99,
    image: "https://images.pexels.com/photos/350794/pexels-photo-350794.jpeg",
    category: "audio",
    desc: "15hr battery, sweat-resistant"
  },
  {
    id: 45,
    name: "Car Charger Dual USB",
    price: 15.99,
    image: "https://images.pexels.com/photos/1694830/pexels-photo-1694830.jpeg",
    category: "automotive",
    desc: "3.4A total output, compact"
  },
];

let cart = JSON.parse(localStorage.getItem('techmar-cart')) || [];

function saveCart() {
  localStorage.setItem('techmar-cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) cartCountEl.textContent = count;
}

function addToCart(id, qty = 1) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart();
  updateCartUI();
  alert(`${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCartItems();
  updateCartTotal();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else {
      saveCart();
      renderCartItems();
      updateCartTotal();
    }
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  container.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('tr');
    el.innerHTML = `
      <td><img src="${item.image}" width="60"></td>
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <button onclick="changeQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </td>
      <td>$${(item.price * item.qty).toFixed(2)}</td>
      <td><button onclick="removeFromCart(${item.id})">🗑️</button></td>
    `;
    container.appendChild(el);
  });
}

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.textContent = total.toFixed(2);
  if (totalEl) totalEl.textContent = total.toFixed(2);
}

function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  let valid = true;

  if (!name.value) {
    name.classList.add('error');
    name.nextElementSibling.style.display = 'block';
    valid = false;
  } else {
    name.classList.remove('error');
    name.nextElementSibling.style.display = 'none';
  }

  if (!email.value || !email.value.includes('@')) {
    email.classList.add('error');
    email.nextElementSibling.style.display = 'block';
    valid = false;
  } else {
    email.classList.remove('error');
    email.nextElementSibling.style.display = 'none';
  }

  if (valid) {
    alert("Message sent! (Demo)");
    document.getElementById('contactForm').reset();
  }
  return false;
}

document.querySelector('.menu-btn')?.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const btn = document.querySelector('.back-to-top');
  if (btn && window.scrollY > 300) {
    btn.classList.add('show');
  } else if (btn) {
    btn.classList.remove('show');
  }
});

document.querySelector('.back-to-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function changeImage(img) {
  const mainImage = document.getElementById('mainImage');
  if (mainImage) {
    mainImage.src = img.src;
    document.querySelectorAll('.thumb-images img').forEach(i => i.classList.remove('active'));
    img.classList.add('active');
  }
}

function incQty() {
  const qty = document.getElementById('qty');
  if (qty) qty.value = parseInt(qty.value) + 1;
}

function decQty() {
  const qty = document.getElementById('qty');
  if (qty && parseInt(qty.value) > 1) {
    qty.value = parseInt(qty.value) - 1;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  renderCartItems();
  updateCartTotal();
});