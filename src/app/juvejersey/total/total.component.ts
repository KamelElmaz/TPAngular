import {Component, Input, OnInit} from '@angular/core';

const UNIT_PRICE = 120;
const BADGE_PRICE = 10;
const FLOCK_PRICE = 10;

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  total: number = UNIT_PRICE;
  private _qty = 1;
  private _numBadges = 0;
  @Input() flock: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.computeTotal();
  }

  selectQuantity(event: any){
    const qty: number = parseInt(event.target.value);
    this._qty = qty;
    this.computeTotal();
  }

  selectBadge(event: any) {
    const checked: boolean = event.target.checked;
    if (checked){
      this._numBadges++;
    } else {
      this._numBadges--;
    }
    this.computeTotal();
  }

  private computeTotal() {
    let total = this._qty * UNIT_PRICE;
    if (this._numBadges > 0) { total += this._numBadges * BADGE_PRICE; }
    if (this.flock) { total += FLOCK_PRICE; }
    this.total = total;
  }
}
