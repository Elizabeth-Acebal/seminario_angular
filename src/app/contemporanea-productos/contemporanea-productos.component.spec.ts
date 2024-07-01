import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemporaneaProductosComponent } from './contemporanea-productos.component';

describe('ContemporaneaProductosComponent', () => {
  let component: ContemporaneaProductosComponent;
  let fixture: ComponentFixture<ContemporaneaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContemporaneaProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContemporaneaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
