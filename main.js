//elemanlar
class FasonTakip{
    constructor(name,kod,receiver,alinanadet,verilenadet,not){
        this.fasonId = Math.floor(Math.random()*10000);
        this.name = name;
        this.kod = kod;
        this.receiver = receiver;
        this.alinanadet =alinanadet;
        this.verilenadet = verilenadet;
    }
}

class TableUI{
    addProductToTable(product){
        const table = document.getElementById('product-table');

        var html = `
        
        
        `
        list.innerHTML += html;
    }

clearControls(){
    const name = document.getElementById('name').value="";
    const kod = document.getElementById('kod').value="";
    const receiver = document.getElementById('receiver').value="";
    const alinanadet = document.getElementById('alinanadet').value="";
    const verilenadet = document.getElementById('verilenadet').value="";
}
deleteProduct(element){
    if (element.classList.containts('delete')) {
        element.parentElement.parentElement.remove();
        return true;
    }
}
showAlert(message,className){
    var alert =`
    
    `;
    const row = document.querySelector('.row');
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}
}
class Storages {
    static getProduct(){
        let products ;
        if (localStorage.getItem('products')===null) {
            products=[];
        }else{
            courses = JSON.parse(localStorage.getItem('products'));
        }
        return products;
    }
    static displayProducts(){
        const products = Storage.getProduct();

        products.forEach(product =>{
            const ui = new TableUI();
            ui.addProductToTable(product);
        });
    }
    static addProduct(product){
        const products = Storage.getProduct();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }
    static deleteProduct(element){
        if (element.classList.contains('delete')) {
            const id = element.getAttribute('data-id');
            const products = Storage.getProduct();

            products.forEach((products,index) => {
                if (products.productId === id) {
                    products.splice(index,1);
                }
            });
            localStorage.setItem('products', JSON.stringify(products));
        }
    }
}
document.addEventListener('DOMContentLoaded',Storage.displayProducts);
document.getElementById('new-products').addEventListener('submit',function (e) {
    
    const name = document.getElementById('name').value
    const kod = document.getElementById('kod').value
    const receiver = document.getElementById('receiver').value
    const alinanadet = document.getElementById('alinanadet').value
    const verilenadet = document.getElementById('verilenadet').value

    const products = new Product(name, kod, receiver,alinanadet,verilenadet)

    const ui = new UI();
    if (name===''|| kod===''|| receiver===''||alinanadet===''|| verilenadet==='') {
        ui.showAlert('Lütfen Boş Alan Bırakmayın','warning');
    }else{
        ui.addProductToTable(product);
        Storage.addProduct(product);
        ui.clearControls();
        ui.showAlert('Ürün Eklendi','success');
    }
    e.preventDefault();
});
document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();

    if (ui.deleteProduct(e.target)===true) {
        Storage.deleteProduct(e.target);
        ui.showAlert('Ürün Silindi','danger');
    }
});