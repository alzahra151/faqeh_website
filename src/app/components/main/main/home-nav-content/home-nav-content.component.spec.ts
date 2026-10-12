import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavContentComponent } from './home-nav-content.component';

describe('HomeNavContentComponent', () => {
  let component: HomeNavContentComponent;
  let fixture: ComponentFixture<HomeNavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNavContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
