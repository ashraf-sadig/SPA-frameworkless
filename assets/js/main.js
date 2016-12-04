$(function(){
});


var root = new Vue({
  el: "#root",
  data: {
    products: [],
    man: [],
    size: [],
    test: "test works",
    val: false,
    selectedProduct: null,
  },
  methods: {
    getProductDetail: function (id) {
      console.log("clicked ", id);
      this.selectProduct(this.products[id-1]);
      window.location.hash = 'product/' + id;
    },
    clearFilters: function() {
      console.log("he")
      this.man = [];
      this.size = [];
    },
    selectProduct: function (product) {
      this.selectedProduct = product;
    }
  }
});

$.getJSON("/products.json", function(data){
  console.log("got the products ", data);
  root.products = data;
  root.$forceUpdate();
});