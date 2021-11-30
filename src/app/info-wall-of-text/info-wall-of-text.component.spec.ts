import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWallOfTextComponent } from './info-wall-of-text.component';

describe('InfoWallOfTextComponent', () => {
  let component: InfoWallOfTextComponent;
  let fixture: ComponentFixture<InfoWallOfTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWallOfTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWallOfTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
