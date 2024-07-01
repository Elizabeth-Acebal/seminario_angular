import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemporaneaHomeComponent } from './contemporanea-home.component';

describe('ContemporaneaHomeComponent', () => {
  let component: ContemporaneaHomeComponent;
  let fixture: ComponentFixture<ContemporaneaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContemporaneaHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContemporaneaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
