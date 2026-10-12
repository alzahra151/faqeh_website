import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNavbarComponent } from './hero-navbar.component';

describe('HeroNavbarComponent', () => {
  let component: HeroNavbarComponent;
  let fixture: ComponentFixture<HeroNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
