import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from "./white-board/white-board.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {ResultSectionComponent} from "./result-section/result-section.component";
import {AdminComponent} from "./admin/admin.component";
import {PostAdComponent} from "./post-ad/post-ad.component";
import {FileUploadTestComponent} from "./file-upload-test/file-upload-test.component";
import {AdDetailsComponent} from "./ad-details/ad-details.component";
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {MyAdsComponent} from "./my-ads/my-ads.component";
import {AdminProfileComponent} from "./admin-profile/admin-profile.component";
import {ViewMyadComponent} from "./view-myad/view-myad.component";
import {MyAdsAdminComponent} from "./my-ads-admin/my-ads-admin.component";
import {AdminRegisterComponent} from "./admin-register/admin-register.component";
import {UpdateAdComponent} from "./update-ad/update-ad.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  {path: 'helloworld',component:HelloWorldComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user-admin', component: AdminComponent},
  { path: 'user/:userId/content', component: AdminComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/:userId', component: ProfileComponent},
  {path: 'result', component: ResultSectionComponent},
  { path: 'post-ad', component: PostAdComponent},
  { path: 'update-ad/:adId', component: UpdateAdComponent },
  { path: 'api/upload', component: FileUploadTestComponent},
  { path:'ad-details', component: AdDetailsComponent},
  { path:'my-ads',component: MyAdsComponent },
  { path:'my-ad/:adId',component: ViewMyadComponent },
  { path:'admin-my-ad/:adId',component: MyAdsAdminComponent },
  { path:'ad-details/:about', component: AdDetailsComponent},
  { path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
