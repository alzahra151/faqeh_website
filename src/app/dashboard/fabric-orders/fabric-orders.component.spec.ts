import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricOrdersComponent } from './fabric-orders.component';

describe('FabricOrdersComponent', () => {
  let component: FabricOrdersComponent;
  let fixture: ComponentFixture<FabricOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
