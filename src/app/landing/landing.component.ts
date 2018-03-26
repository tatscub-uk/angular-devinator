import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  gotoRuneSpread(){
    let link = ['/runes'];
    this.router.navigate(link);
   }
  gotoOghamSpread(){
    let link = ['/ogham'];
    this.router.navigate(link);
  }
  gotoTarrotSpread(){
    let link = ['/tarrot'];
    this.router.navigate(link);
 }
 gotoIChingSpread(){
    let link = ['/iching'];
    this.router.navigate(link);
 }

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}
