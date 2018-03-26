import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-rune-spread',
  templateUrl: './rune-spread.component.html',
  styleUrls: ['./rune-spread.component.scss']
})
export class RuneSpreadComponent implements OnInit , OnDestroy {



  constructor(private route: ActivatedRoute,
              private router: Router) { }

ngOnInit() {   }

ngOnDestroy() {   }

}
