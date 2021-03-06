import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { initializeApp } from 'firebase/app';
import { RepositoryComponent } from './repository.component';
import { RepositoryService } from './repository.service';
import { StarRatingModule } from 'angular-star-rating';

initializeApp(environment.firebase);

@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule.forRoot(),
    RouterModule.forChild([{
      path: '',
      component: RepositoryComponent
    }]),
    StarRatingModule.forRoot()

  ],
  providers: [RepositoryService],
  declarations: [RepositoryComponent],
})
export class RepositoryModule { }
