/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { SerieService } from './serie.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from '../app.component';
import {SerieComponent} from './serie.component';

describe('Service: Serie', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent, SerieComponent],
      providers: [SerieService]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
