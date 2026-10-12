import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryNavContentComponent } from './story-nav-content.component';

describe('StoryNavContentComponent', () => {
  let component: StoryNavContentComponent;
  let fixture: ComponentFixture<StoryNavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryNavContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
