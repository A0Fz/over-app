import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs1detailsPage } from './tabs1details.page';

describe('Tabs1detailsPage', () => {
  let component: Tabs1detailsPage;
  let fixture: ComponentFixture<Tabs1detailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs1detailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs1detailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
