import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main/main/main-layout/main-layout.component';
import { HomeComponent } from './components/main/main/home/home.component';
import { FaqehStoryComponent } from './pages/story/faqeh-story/faqeh-story.component';
import { HomeNavContentComponent } from './components/main/main/home-nav-content/home-nav-content.component';
import { StoryNavContentComponent } from './pages/story/story-nav-content/story-nav-content.component';
import { FabricSewingComponent } from './pages/fabric-sewing/fabric-sewing.component';
import { LoginComponent } from './dashboard/login/login.component';
import { FabricOrdersComponent } from './dashboard/fabric-orders/fabric-orders.component';
import { authGuard } from './guards/auth.guard';
import { OrderDetailsComponent } from './dashboard/order-details/order-details.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '', component: HomeComponent, children: [
                    { path: '', component: HomeNavContentComponent }
                ]
            },

            {
                path: 'story', component: FaqehStoryComponent, children: [
                    { path: '', component: StoryNavContentComponent }
                ]
            },
            {
                path: 'fabric-sewing', component: FabricSewingComponent
            },
            {
                path: 'admin-login', component: LoginComponent,

            },
            { path: 'admin-login/orders', component: FabricOrdersComponent, canActivate: [authGuard] },
              { path: 'admin-login/orders/:id', component: OrderDetailsComponent, canActivate: [authGuard] }
        ]
    }
];
