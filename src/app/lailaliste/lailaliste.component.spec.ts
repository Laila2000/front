import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LailalisteComponent } from './lailaliste.component';

describe('LailalisteComponent', () => {
  let component: LailalisteComponent;
  let fixture: ComponentFixture<LailalisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LailalisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LailalisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
