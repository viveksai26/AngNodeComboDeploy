import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureSidebarComponent } from './secure-sidebar.component';

describe('PublicLayoutComponent', () => {
  let component: SecureSidebarComponent;
  let fixture: ComponentFixture<SecureSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecureSidebarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
