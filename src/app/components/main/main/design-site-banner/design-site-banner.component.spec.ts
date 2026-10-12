import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSiteBannerComponent } from './design-site-banner.component';

describe('DesignSiteBannerComponent', () => {
  let component: DesignSiteBannerComponent;
  let fixture: ComponentFixture<DesignSiteBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSiteBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSiteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
