import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesGallaryBannerComponent } from './notes-gallary-banner.component';

describe('NotesGallaryBannerComponent', () => {
  let component: NotesGallaryBannerComponent;
  let fixture: ComponentFixture<NotesGallaryBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesGallaryBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesGallaryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
