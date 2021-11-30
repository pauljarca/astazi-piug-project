import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforcardComponent } from './inforcard.component';

describe('InforcardComponent', () => {
  let component: InforcardComponent;
  let fixture: ComponentFixture<InforcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
