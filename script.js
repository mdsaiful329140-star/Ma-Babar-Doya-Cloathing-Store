let products = [
  {id:1, name:"সিল্ক সাড়ি", price:২৫০০, img:"https://picsum.photos/id/29/300/300", cat:"sari"},
  {id:2, name:"প্রিন্টেড কুর্তি", price:১৮০০, img:"https://picsum.photos/id/30/300/300", cat:"kurta"},
  {id:3, name:"সাটিন শার্ট", price:১৫০০, img:"https://picsum.photos/id/31/300/300", cat:"shirt"},
  {id:4, name:"ফ্রিল সাড়ি", price:৩০০০, img:"https://picsum.photos/id/32/300/300", cat:"sari"},
  {id:5, name:"ভার্সেস কুর্তি", price:২২০০, img:"https://picsum.photos/id/33/300/300", cat:"kurta"},
  {id:6, name:"কটন জ্যাকেট", price:১২০০, img:"https://picsum.photos/id/34/300/300", cat:"shirt"}
];

let cart = [];

function renderProducts(filteredProducts) {
  let html = '';
  filteredProducts.forEach(p => {
    html += `
      <div class="col-md-4 mb-4">
        <div class="card product-card h-100">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="text-success fw-bold">৳ ${p.price}</p>
            <button onclick="addToCart(${p.id})" class="btn btn-dark w-100">অ্যাড টু কার্ট</button>
          </div>
        </div>
      </div>`;
  });
  document.getElementById('product-grid').innerHTML = html;
}

function addToCart(id) {
  let product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById('cart-count').textContent = cart.length;
  alert(product.name + " কার্টে যোগ হয়েছে!");
}

function filterCategory(cat) {
  document.querySelectorAll('.btn-outline-dark').forEach(btn => btn.classList.remove('active'));
  if(cat === 'all') document.getElementById('all-btn').classList.add('active');
  else if(cat === 'sari') document.getElementById('sari-btn').classList.add('active');
  else if(cat === 'kurta') document.getElementById('kurta-btn').classList.add('active');
  else if(cat === 'shirt') document.getElementById('shirt-btn').classList.add('active');

  let filtered = cat === 'all' ? products : products.filter(p => p.cat === cat);
  renderProducts(filtered);
}

renderProducts(products);
