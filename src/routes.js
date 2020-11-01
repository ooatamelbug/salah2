import Home from './components/Home/Home.vue';
import Services from './components/Services/Services.vue';
import Products from './components/Products/Products.vue';
import ContactUs from './components/Contact-us/contact-us.vue';
import AboutUs from './components/About-us/about-us.vue';
import Allproducts from './components/Products/Allproducts/Allproducts.vue';
import Huny from './components/Products/Huny/Huny.vue';
import Bees from './components/Products/Bees/Bees.vue';
import Tools from './components/Products/Tools/Tools.vue';

import SubHeader from './components/shared/SubHeader.vue';
import AdminDashboard from './components/Admin/AminDashboard.vue';
import AddNewProduct from './components/Admin/AddNewProduct.vue';
import LogIN from './components/Admin/LogIN.vue';
import OneProduct from './components/Products/Allproducts/OneProduct.vue';
import OneProduct2 from './components/Products/Allproducts/OneProduct2.vue';

import HomeDash from './components/Admin/HomeDash.vue';
import AddPart from './components/Admin/AddPart.vue';
import EditProduct from './components/Admin/EditProduct.vue';
import ShowProduct from './components/Admin/showProduct.vue';
import RelatedProducts from './components/Products/Allproducts/RelatedProducts.vue';






export const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/products', component: Products },
    { path: '/about-us', component: AboutUs },
    { path: '/contact-us', component: ContactUs },
    { path: '/Allproducts', component: Allproducts },
    { path: '/Huny', component: Huny },
    { path: '/Bees', component: Bees },
    { path: '/Tools', component: Tools },
    { path: '/Subheader', component: SubHeader },
    { path: '/AdminDashboard', name: 'dashboard', component: AdminDashboard  },
    { path: '/AddNewProduct', component: AddNewProduct },
    { path: '/LogIN', name: 'login', component: LogIN },
    { path: '/OneProduct/:id/:d', name: 'onepro',component: OneProduct },
    { path: '/OneProduct2/:id/:d', name: 'onepro2',component: OneProduct2 },
    { path: '/HomeDash', component: HomeDash },
    { path: '/AddPart', component: AddPart},
    { path: '/EditProduct/:id',name:'edit', component: EditProduct},
    { path: '/showProduct/:id',name: 'show', component: ShowProduct },
    { path: '/RelatedProducts', component: RelatedProducts},
]

// router.map({
//     '/': { name: 'home', component: HomePage },
//     '/foo/:id': {name: 'foo-show', component: FooShowPage},
//     '/404': {name: 'not-found', component: NotFound}
//   })
  
//   router.redirect({
//       '*': '/404'
//   })