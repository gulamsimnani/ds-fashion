// app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JeansCategoriesListComponent } from './jeans-categories-list/jeans-categories-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TosComponent } from './tos/tos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'categories', component: JeansCategoriesListComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'cart', component: CartComponent },
  {path: 'products-details', component: ProductDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'tos', component: TosComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'myprofile', component: MyprofileComponent},
  {path: 'login', component: LoginComponent}
];
