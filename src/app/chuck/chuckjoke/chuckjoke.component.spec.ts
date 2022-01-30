import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckjokeComponent } from './chuckjoke.component';

describe('ChuckjokeComponent', () => {
  let component: ChuckjokeComponent;
  let fixture: ComponentFixture<ChuckjokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckjokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckjokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
