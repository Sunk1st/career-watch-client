import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailListFormComponent } from './email-list-form.component';

describe('EmailListFormComponent', () => {
  let component: EmailListFormComponent;
  let fixture: ComponentFixture<EmailListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
