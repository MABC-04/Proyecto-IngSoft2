import { ComponentFixture, TestBed } from '@angular/core/testing';


import { DrugsComponent } from './drugs.component';

describe('DrugsComponent', () => {
  let component: DrugsComponent;
  let fixture: ComponentFixture<DrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
