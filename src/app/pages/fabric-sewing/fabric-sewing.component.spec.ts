import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricSewingComponent } from './fabric-sewing.component';

describe('FabricSewingComponent', () => {
  let component: FabricSewingComponent;
  let fixture: ComponentFixture<FabricSewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricSewingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricSewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
