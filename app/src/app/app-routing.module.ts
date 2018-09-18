import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
{ path: '', redirectTo: 'categories', pathMatch: 'full' },
{ path: 'categories', component: CategoriesComponent },
{ path: 'post-list', component: PostListComponent },
{ path: 'post', component: PostComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}