import { ImageListItemComponent } from './../image-list-item/image-list-item.component';
import { ImageListComponent } from './../image-list/image-list.component';
import { SearchBarComponent } from './../search-bar/search-bar.component';
import { HomePageComponent } from './../../home-page/home-page/home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './../../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        HomePageComponent,
        SearchBarComponent,
        ImageListComponent,
        ImageListItemComponent
      ]
      , imports: [
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomePageComponent }
        ])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
