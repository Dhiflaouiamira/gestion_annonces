import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeAnnoncesPage } from './liste-annonces.page';

describe('ListeAnnoncesPage', () => {
  let component: ListeAnnoncesPage;
  let fixture: ComponentFixture<ListeAnnoncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeAnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
