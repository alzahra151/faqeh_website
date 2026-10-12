import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqehStoryComponent } from './faqeh-story.component';

describe('FaqehStoryComponent', () => {
  let component: FaqehStoryComponent;
  let fixture: ComponentFixture<FaqehStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqehStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqehStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
