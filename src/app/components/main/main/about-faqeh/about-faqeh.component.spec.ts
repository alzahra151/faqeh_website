import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFaqehComponent } from './about-faqeh.component';

describe('AboutFaqehComponent', () => {
  let component: AboutFaqehComponent;
  let fixture: ComponentFixture<AboutFaqehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutFaqehComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFaqehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
