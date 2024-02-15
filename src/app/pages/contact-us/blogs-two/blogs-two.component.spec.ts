import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsTwoComponent } from './blogs-two.component';

describe('BlogsTwoComponent', () => {
  let component: BlogsTwoComponent;
  let fixture: ComponentFixture<BlogsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
